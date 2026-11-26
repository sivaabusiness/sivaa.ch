/* Découpe d'une page en segments de texte traduisibles (partagé par extract et build) */
import crypto from 'node:crypto';
export const INLINE = new Set(['A','STRONG','EM','B','I','SPAN','SMALL','SUP','SUB','CODE','MARK','ABBR','CITE','Q','U','BR','TIME','S','DEL','INS']);
const SKIP = new Set(['SCRIPT','STYLE','NOSCRIPT','SVG','TEMPLATE']);
const I18N_ATTRS = ['data-i18n','data-ml','data-pc'];
export const hash = (s) => crypto.createHash('sha1').update(s.replace(/\s+/g, ' ').trim()).digest('hex').slice(0, 8);
const managed = (el) => { for (let e = el; e && e.nodeType === 1; e = e.parentElement) { if (I18N_ATTRS.some((a) => e.hasAttribute(a))) return true; if (SKIP.has(e.tagName.toUpperCase())) return true; } return false; };
export function blocks(doc) {
    const out = [];
    const seen = new Set();
    const walker = doc.createTreeWalker(doc.body, 4);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (!n.textContent.trim()) continue;
        const p = n.parentElement;
        if (!p || managed(p)) continue;
        let b = p;
        while (INLINE.has(b.tagName.toUpperCase()) && b.parentElement && b.parentElement !== doc.body && !managed(b.parentElement)) b = b.parentElement;
        if (!seen.has(b)) { seen.add(b); out.push(b); }
    }
    // un bloc qui en contient un autre : on ne garde que les plus internes (le texte direct de l'externe est signalé)
    return out.filter((b) => !out.some((o) => o !== b && b.contains(o)) || (b.__outer = true));
}
export function protect(html) { const svgs = []; const h = html.replace(/<svg[\s\S]*?<\/svg>/g, (m) => { svgs.push(m); return `⟦S${svgs.length - 1}⟧`; }); return { h, svgs }; }
export function restore(html, svgs) { return html.replace(/⟦S(\d+)⟧/g, (_, i) => svgs[+i]); }
export function attrs(doc) {
    const out = [];
    doc.querySelectorAll('[alt],[title],[aria-label],[placeholder]').forEach((el) => {
        for (const a of ['alt', 'title', 'aria-label', 'placeholder']) {
            if (!el.hasAttribute(a) || !el.getAttribute(a).trim()) continue;
            if (el.hasAttribute('data-i18n-' + (a === 'aria-label' ? 'aria' : a))) continue;
            if (el.tagName === 'LINK' || el.tagName === 'HTML') continue;
            out.push({ el, a, v: el.getAttribute(a) });
        }
    });
    return out;
}
