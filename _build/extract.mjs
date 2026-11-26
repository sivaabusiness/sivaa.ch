import fs from 'node:fs'; import path from 'node:path'; import { JSDOM } from 'jsdom';
import { blocks, protect, attrs, hash } from './segments.mjs';
const ROOT = path.resolve(import.meta.dirname, '..');
for (const f of process.argv.slice(2)) {
    const doc = new JSDOM(fs.readFileSync(path.join(ROOT, f), 'utf8')).window.document;
    const bs = blocks(doc); const as = attrs(doc);
    let s = `# ${f} — ${bs.length} blocs, ${as.length} attributs\n#title ${doc.title}\n`;
    for (const m of doc.querySelectorAll('meta[name="description"],meta[name="keywords"],meta[property^="og:"]')) if (!/og:(type|locale|image|url)/.test(m.getAttribute('property') || '')) s += `#meta ${m.getAttribute('name') || m.getAttribute('property')} ${m.getAttribute('content')}\n`;
    as.forEach((x, i) => (s += `#attr ${i} ${x.a} ${x.v}\n`));
    bs.forEach((b, i) => (s += `@@ ${i} ${hash(b.innerHTML)}${b.__outer ? ' OUTER' : ''} <${b.tagName.toLowerCase()}>\n${protect(b.innerHTML).h.trim()}\n`));
    fs.writeFileSync(path.join(ROOT, '_build/de', path.basename(f, '.html') + '.fr.txt'), s);
    console.log(f, bs.length, 'blocs', as.length, 'attrs', bs.filter((b) => b.__outer).length, 'outer');
}
