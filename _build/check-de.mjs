/* Contrôle : texte français restant dans les pages /de/ (texte visible, attributs, titres) */
import fs from 'node:fs'; import path from 'node:path'; import { JSDOM } from 'jsdom';
const ROOT = path.resolve(import.meta.dirname, '..');
const FR = /\b(le|la|les|du|une|votre|vos|nous|pour|avec|sans|dans|sur|est|sont|et|ou|à|au|aux|mon|ma|mes|ce|cette|qui|que|leur|plus|très|Commander|Accueil|Prix|Livraison|retrait|épais|Épais|Peu importe|Lire|Sommaire|À lire|bâton|dentifrice|Genève|Suisse|j'ai|je|Bonjour|Fermer)\b/;
const OK = /SIVÀA|Allo Togo|Salvadora|Quai des Vernets|Journal of|Sahih|al-Bukhari|Kiss Your Dentist|Streptococcus|Porphyromonas|Zanthoxylum|Ellie Phillips|DDS|Twint|Revolut|Swiss Post|ﷺ/;
const files = [];
const walk = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) files.push(p); } };
walk(path.join(ROOT, 'de'));
let total = 0;
for (const f of files) {
    const doc = new JSDOM(fs.readFileSync(f, 'utf8')).window.document;
    const hits = [];
    const w = doc.createTreeWalker(doc.documentElement, 4);
    for (let n = w.nextNode(); n; n = w.nextNode()) {
        const p = n.parentElement; if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.tagName)) continue;
        if (p.closest('[data-lang-block="en"], #toc-en')) continue;
        const t = n.textContent.replace(/\s+/g, ' ').trim();
        if (t && FR.test(t) && !(OK.test(t) && !FR.test(t.replace(new RegExp(OK.source, 'g'), '')))) hits.push('[' + t.match(FR)[0] + '] ' + t.slice(0, 100));
    }
    for (const el of doc.querySelectorAll('[alt],[aria-label],[title],[placeholder],meta[content]')) for (const a of ['alt', 'aria-label', 'title', 'placeholder', 'content']) { const v = el.getAttribute(a); if (v && el.tagName !== 'LINK' && FR.test(v) && !/^https?:/.test(v)) hits.push(`@${a}: ${v.slice(0, 100)}`); }
    doc.querySelectorAll('a[href*="wa.me"]').forEach((a) => { const m = decodeURIComponent(a.href.split('text=')[1] || ''); if (/Bonjour|question/.test(m)) hits.push('WhatsApp: ' + m); });
    doc.querySelectorAll('a[href]').forEach((a) => { const h = a.getAttribute('href'); if (/^\/(checkout|contact|blog|mentions-legales|politique-confidentialite|article-siwak|siwak-|xylitol|livraison|dentifrice|etui|allo-togo|index)/.test(h)) hits.push('lien FR: ' + h); });
    if (hits.length) { console.log('\n== ' + path.relative(ROOT, f) + ' (' + hits.length + ')'); [...new Set(hits)].forEach((h) => console.log('   ' + h)); total += hits.length; }
}
console.log('\nTotal : ' + total);
