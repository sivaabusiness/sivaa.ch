/* ════════════════════════════════════════════════════════════════
   SIVÀA Geneva — générateur des pages statiques
   ────────────────────────────────────────────────────────────────
   Génère, à partir des textes de i18n.js :
     • les fiches produits FR (racine) et DE (/de/)
     • la page « Livraison & retrait » FR et DE
     • la page d'accueil allemande /de/index.html (traduction de index.html)
     • le balisage FAQPage de index.html (à partir de la FAQ visible)
     • sitemap.xml (avec les correspondances FR/DE)

   Usage :  cd _build && npm install && node build-pages.mjs
   À relancer après toute modification de index.html ou de i18n.js.
   Les pages générées portent la mention « Généré par _build/build-pages.mjs » :
   ne pas les modifier à la main.
════════════════════════════════════════════════════════════════ */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { JSDOM } from 'jsdom';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE = 'https://sivaa.ch';
const I18N_SRC = '/i18n.js?v=20261125';
const TODAY = new Date().toISOString().slice(0, 10);
const WA = '41779496504';
const GENERATED = '<!-- Généré par _build/build-pages.mjs — ne pas modifier à la main -->';

/* ── Traductions ─────────────────────────────────────────────── */
const ctx = { window: {}, document: { addEventListener() {}, querySelectorAll() { return []; }, getElementById() { return null; }, documentElement: { getAttribute() { return null; } } }, localStorage: { getItem() {}, setItem() {} }, navigator: { language: 'fr' }, console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'i18n.js'), 'utf8') + ';globalThis.__T = translations;', ctx);
const T = ctx.__T;
const tr = (lang, key) => {
    const v = T[lang][key] ?? T.fr[key];
    if (v === undefined) throw new Error(`Clé de traduction manquante : ${key}`);
    return v;
};
const strip = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* ── Pages et correspondances FR / DE ───────────────────────── */
const URLS = {
    home: { fr: '/', de: '/de/' },
    ship: { fr: '/livraison-retrait.html', de: '/de/versand-abholung.html' },
    p1: { fr: '/siwak-premium.html', de: '/de/siwak-premium.html' },
    p2: { fr: '/allo-togo.html', de: '/de/allo-togo.html' },
    p3: { fr: '/etui-siwak.html', de: '/de/siwak-etui.html' },
    p4: { fr: '/dentifrice-siwak-clou-de-girofle.html', de: '/de/siwak-zahnpasta-gewuerznelke.html' },
    p5: { fr: '/dentifrice-siwak-charbon-actif.html', de: '/de/siwak-zahnpasta-aktivkohle.html' },
};

const steps = (id, n) => Array.from({ length: n }, (_, i) => `pp.${id}.use.${i + 1}`);
const faqs = (id, n) => Array.from({ length: n }, (_, i) => `pp.${id}.faq.${i + 1}`);
const keys = (id) => [1, 2, 3, 4, 5].map((i) => `pp.${id}.k${i}`);
const PRODUCTS = [
    {
        id: 'p1', img: '/baton-siwak-premium.jpg', alt: 'product1.image.alt', badge: 'product1.badge', name: 'product1.name',
        intro: 'pp.p1.intro', keypoints: keys('p1'), price: 'product1.price', buy: 'modal1.buy', bundle: true,
        thickness: 'sivaa_siwak_thickness', offerPrice: '6.00',
        tree: { img: '/arbre-salvadora-persica.webp', w: 507, h: 508, alt: 'pp.tree.p1.alt', caption: 'pp.tree.p1.caption' },
        sections: [
            { type: 'text', tree: true, title: 'pp.p1.origin.title', paras: ['pp.p1.origin.1', 'pp.p1.origin.2'] },
            { type: 'steps', title: 'pp.p1.use.title', steps: steps('p1', 5) },
            { type: 'text', title: 'pp.p1.life.title', paras: ['pp.p1.life.1', 'pp.p1.life.2'] },
            { type: 'compare', title: 'pp.p1.cmp.title', order: ['siwak', 'allo'] },
        ],
        faq: faqs('p1', 5),
        reads: ['article-siwak.html', 'siwak-epais-vs-fin.html', 'siwak-vs-brosse-a-dents.html'], related: ['p2', 'p3', 'p4'],
        desc: {
            fr: 'Bâton de siwak en racine de Salvadora persica, récolté à la main au Pakistan. CHF 6.00, prix dégressif dès 2 pièces. Retrait aux Acacias (Genève) ou livraison Swiss Post dans toute la Suisse.',
            de: 'Premium Siwak-Stab (Miswak) aus der Wurzel von Salvadora persica, von Hand geerntet. CHF 6.00, Staffelpreise ab 2 Stück. Versand mit Swiss Post nach Zürich, Basel und in die ganze Schweiz.',
        },
    },
    {
        id: 'p2', img: '/allo-togo-batonnets.png', alt: 'product2.image.alt', badge: 'product2.badge', name: 'product2.name',
        intro: 'pp.p2.intro', keypoints: keys('p2'), price: 'product2.price', buy: 'modal1.buy',
        thickness: 'sivaa_allotogo_thickness', offerPrice: '6.00',
        tree: { img: '/fagara-zanthoxylum.webp', w: 387, h: 516, alt: 'pp.tree.p2.alt', caption: 'pp.tree.p2.caption' },
        sections: [
            { type: 'text', tree: true, title: 'pp.p2.origin.title', paras: ['pp.p2.origin.1', 'pp.p2.origin.2'] },
            { type: 'steps', title: 'pp.p2.use.title', steps: steps('p2', 5) },
            { type: 'text', title: 'pp.p2.life.title', paras: ['pp.p2.life.1', 'pp.p2.life.2'] },
            { type: 'compare', title: 'pp.p2.cmp.title', intro: 'pp.p2.cmp.intro', order: ['allo', 'siwak'] },
        ],
        faq: faqs('p2', 5),
        reads: ['siwak-ou-allo-togo.html', 'siwak-epais-vs-fin.html'], related: ['p1', 'p3', 'p5'],
        desc: {
            fr: 'Allo Togo : bâton à mâcher issu de l\'arbre fagara, venu du Togo. 5 bâtonnets au goût vif, CHF 6.00 le lot. Retrait aux Acacias (Genève) ou livraison Swiss Post dans toute la Suisse.',
            de: 'Allo Togo: Kauholz vom Fagara-Baum, aus Togo. 5 Kaustäbe mit lebhaftem Geschmack, CHF 6.00 pro Packung. Versand mit Swiss Post nach Zürich, Basel und in die ganze Schweiz.',
        },
    },
    {
        id: 'p3', img: '/etui-siwak.png', alt: 'product3.image.alt', badge: 'product3.badge', name: 'product3.name',
        intro: 'pp.p3.intro', keypoints: keys('p3'), price: 'product3.price', buy: 'modal3.buy', offerPrice: '6.00',
        sections: [
            { type: 'text', title: 'pp.p3.why.title', paras: ['pp.p3.why.1', 'pp.p3.why.2'] },
            { type: 'steps', title: 'pp.p3.use.title', steps: steps('p3', 4) },
            { type: 'text', title: 'pp.p3.care.title', paras: ['pp.p3.care.1'] },
        ],
        faq: faqs('p3', 5),
        reads: ['article-siwak.html'], related: ['p1', 'p2'],
        desc: {
            fr: 'Étui de protection pour siwak : garde votre bâton à l\'abri de la poussière en déplacement. CHF 6.00. Retrait aux Acacias (Genève) ou livraison Swiss Post dans toute la Suisse.',
            de: 'Schutzetui für Siwak: schützt Ihren Stab unterwegs vor Staub. CHF 6.00. Versand mit Swiss Post nach Zürich, Basel und in die ganze Schweiz.',
        },
    },
    {
        id: 'p4', img: '/dentifrice-siwak-clou-de-girofle.jpg', alt: 'product4.image.alt', badge: 'product4.badge', name: 'product4.name',
        intro: 'pp.p4.intro', keypoints: keys('p4'), price: 'product4.price', buy: 'modal4.buy', offerPrice: '10.00',
        sections: [
            { type: 'text', title: 'pp.p4.inside.title', paras: ['pp.p4.inside.1'] },
            { type: 'steps', title: 'pp.p4.use.title', steps: steps('p4', 4) },
            { type: 'text', title: 'pp.p4.pair.title', paras: ['pp.p4.pair.1'] },
        ],
        faq: faqs('p4', 5),
        reads: ['siwak-vs-brosse-a-dents.html', 'article-siwak.html'], related: ['p5', 'p1'],
        desc: {
            fr: 'Dentifrice aux extraits de siwak et de clou de girofle, au goût chaud et épicé. CHF 10.00. Retrait aux Acacias (Genève) ou livraison Swiss Post dans toute la Suisse.',
            de: 'Zahnpasta mit Siwak- und Gewürznelkenextrakten, warm und würzig im Geschmack. CHF 10.00. Versand mit Swiss Post nach Zürich, Basel und in die ganze Schweiz.',
        },
    },
    {
        id: 'p5', img: '/dentifrice-siwak-charbon-actif.jpg', alt: 'product5.image.alt', badge: 'product5.badge', name: 'product5.name',
        intro: 'pp.p5.intro', keypoints: keys('p5'), price: 'product5.price', buy: 'modal5.buy', offerPrice: '10.00',
        sections: [
            { type: 'text', title: 'pp.p5.inside.title', paras: ['pp.p5.inside.1'] },
            { type: 'steps', title: 'pp.p5.use.title', steps: steps('p5', 4) },
            { type: 'text', title: 'pp.p5.pair.title', paras: ['pp.p5.pair.1'] },
        ],
        faq: faqs('p5', 5),
        reads: ['siwak-vs-brosse-a-dents.html', 'article-siwak.html'], related: ['p4', 'p1'],
        desc: {
            fr: 'Dentifrice noir au charbon actif et aux extraits de siwak. CHF 10.00. Retrait aux Acacias (Genève) ou livraison Swiss Post dans toute la Suisse.',
            de: 'Schwarze Zahnpasta mit Aktivkohle und Siwak-Extrakten. CHF 10.00. Versand mit Swiss Post nach Zürich, Basel und in die ganze Schweiz.',
        },
    },
];
const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

/* Images responsives : variantes WebP 480/800/1200 px générées à côté de l'original */
const IMAGES = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, 'images.json'), 'utf8'));
function picture(src, alt, altKey, sizes, { eager = false, cls = '' } = {}) {
    const v = IMAGES[src];
    if (!v) throw new Error('Variantes manquantes pour ' + src + ' (voir _build/images.json)');
    const def = v.find((x) => x[1] >= 800) || v[v.length - 1];
    return `<img${cls ? ` class="${cls}"` : ''} src="/${def[0]}" srcset="${v.map(([f, w]) => `/${f} ${w}w`).join(', ')}" sizes="${sizes}" width="${def[1]}" height="${def[2]}" alt="${escAttr(alt)}" data-i18n-alt="${altKey}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"/>`;
}

/* Titres des articles du journal (lus dans les pages) */
const articleTitle = (file) => {
    const html = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    return strip(h1 ? h1[1] : file);
};

/* ── Gabarit commun ─────────────────────────────────────────── */
const CSS = `
:root{--bg:#09160b;--surface-lowest:#0d1c0f;--surface-low:#111f13;--surface-mid:#162518;--primary:#9dd75a;--primary-fixed:#b5e87a;--primary-dim:#2a3d1a;--text:#d7e7d4;--text-variant:#8c9e89;--outline:#424939;--outline-variant:#2e3a2c;--dark-green:#0a1f0c;color-scheme:dark}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;font-size:.875rem;min-height:100vh}
h1,h2,h3,h4{font-family:'Newsreader',serif;color:var(--text)}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
.container{max-width:1280px;margin:0 auto;padding:0 1.5rem}
.label-sm{font-size:.7rem;letter-spacing:.15em;text-transform:uppercase}
nav{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(9,22,11,.7);backdrop-filter:blur(20px);border-bottom:1px solid rgba(66,73,57,.3)}
.nav-inner{max-width:1280px;margin:0 auto;padding:0 1.5rem;height:64px;display:flex;align-items:center;justify-content:space-between}
.logo{font-family:'Newsreader',serif;font-size:1.4rem;font-weight:300;letter-spacing:.12em;color:#d7e7d4}
.logo span{color:#9dd75a;font-size:.9rem;letter-spacing:.06em}
.nav-links{display:flex;align-items:center;gap:2rem}
.nav-links a{font-size:.8rem;color:var(--text-variant);transition:color .2s}
.nav-links a:hover{color:var(--text)}
.nav-links .nav-cta{background:var(--primary);color:var(--dark-green);font-weight:600;padding:.45rem 1.1rem;border-radius:.4rem}
.nav-links .nav-cta:hover{background:var(--primary-fixed);color:var(--dark-green)}
@media(max-width:640px){.nav-links a:not(.nav-cta){display:none}}
.btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;background:var(--primary);color:var(--dark-green);font-weight:600;padding:.85rem 1.5rem;border-radius:.5rem;font-size:.9rem;transition:background .2s}
.btn-primary:hover{background:var(--primary-fixed)}
.btn-ghost{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border:1px solid var(--outline);color:var(--text);padding:.85rem 1.25rem;border-radius:.5rem;font-size:.85rem;transition:border-color .2s}
.btn-ghost:hover{border-color:var(--primary)}
.page{padding:6.5rem 0 4rem}
.breadcrumb{display:flex;flex-wrap:wrap;gap:.5rem;font-size:.72rem;color:var(--outline);margin-bottom:2rem}
.breadcrumb a{color:var(--primary)}
.pp-badge{display:inline-block;font-size:.7rem;color:#fff;background:rgba(127,153,90,.85);padding:.25rem .75rem;border-radius:9999px;margin-bottom:1rem}
.pp-price{font-family:'Newsreader',serif;font-size:1.6rem;color:var(--primary);margin-bottom:1.25rem}
.pp-bundle{background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:.75rem;padding:1rem 1.25rem;margin-bottom:1.5rem}
.pp-bundle p{color:var(--primary);margin-bottom:.5rem}
.pp-bundle ul{list-style:none;display:flex;flex-wrap:wrap;gap:.4rem 1.25rem;color:var(--text);font-size:.85rem}
.pp-text{color:#c2c9b4;font-size:.95rem;line-height:1.8;margin-bottom:1rem}
.pp-text strong{color:var(--text);font-weight:500}
.pp-feats{list-style:none;display:flex;flex-direction:column;gap:.5rem;margin:1.25rem 0 1.5rem;color:#c2c9b4;font-size:.9rem}
.thickness{margin:0 0 1.5rem}
.thickness-label{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-variant);margin-bottom:.6rem}
.thickness-options{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.75rem}
.thickness-pill{position:relative;cursor:pointer}
.thickness-pill input{position:absolute;opacity:0}
.thickness-pill input:checked+span{border-color:var(--primary);color:var(--primary);background:rgba(157,215,90,.08)}
.thickness-pill input:focus-visible+span{outline:2px solid var(--primary);outline-offset:2px}
.thickness-guide{list-style:none;display:flex;flex-direction:column;gap:.35rem;font-size:.78rem;color:var(--text-variant);line-height:1.6}
.thickness-guide strong{color:var(--text);font-weight:500}
.pp-delivery{background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:.75rem;padding:1.25rem}
.pp-delivery h2{font-family:'Inter',sans-serif;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--primary);margin-bottom:.5rem;font-weight:600}
.pp-delivery p{color:var(--text-variant);font-size:.85rem;line-height:1.7;margin-bottom:.6rem}
.pp-delivery a{color:var(--primary);font-size:.82rem}
.reads{list-style:none;display:flex;flex-direction:column;gap:.6rem}
.reads a{color:var(--primary);font-size:.9rem}
.tiles{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}
.tile{display:flex;flex-direction:column;background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:.75rem;overflow:hidden;transition:border-color .2s}
.tile:hover{border-color:rgba(157,215,90,.35)}
.tile img{width:100%;aspect-ratio:4/3;object-fit:cover}
.tile-body{padding:1rem 1.25rem;display:flex;flex-direction:column;gap:.35rem;flex:1}
.tile-name{font-family:'Newsreader',serif;font-size:1.1rem;color:var(--text)}
.tile-price{font-size:.85rem;color:var(--primary)}
.tile-see{font-size:.8rem;color:var(--text-variant);margin-top:auto}
.pp-prose a{color:var(--primary)}
.steps li{counter-increment:st;position:relative;background:var(--surface-low);border-radius:.75rem;padding:1rem 1.25rem 1rem 3.5rem;color:#c2c9b4;font-size:.92rem;line-height:1.7}
.steps li::before{content:counter(st);position:absolute;left:1rem;top:1rem;width:1.75rem;height:1.75rem;border-radius:50%;background:var(--primary);color:var(--dark-green);font-weight:700;font-size:.8rem;display:flex;align-items:center;justify-content:center}
.steps li strong{color:var(--text);font-weight:600}
.cmp-intro{color:var(--text-variant);margin-bottom:1rem}
.cmp{width:100%;border-collapse:collapse;font-size:.88rem;background:var(--surface-low)}
.cmp th,.cmp td{padding:.85rem 1rem;text-align:left;border-bottom:1px solid var(--outline-variant);line-height:1.5;vertical-align:top}
.cmp thead th{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);background:var(--surface-mid)}
.cmp tbody th{color:var(--text);font-weight:500;white-space:nowrap}
.cmp td{color:var(--text-variant)}
.cmp tr:last-child th,.cmp tr:last-child td{border-bottom:none}
.cmp-link{margin-top:.9rem}
.cmp-link a{color:var(--primary);font-size:.88rem}
.ship-card[id]{scroll-margin-top:5.5rem}
.faq details{background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:.6rem}
.faq details[open]{border-color:rgba(157,215,90,.3)}
.faq summary{list-style:none;cursor:pointer;padding:1rem 1.25rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:.92rem;font-weight:500;color:var(--text)}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:'+';color:var(--primary);font-size:1.2rem;flex-shrink:0;transition:transform .2s}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq summary:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:.6rem}
.faq .faq-a{padding:0 1.25rem 1.1rem;color:var(--text-variant);font-size:.88rem;line-height:1.75}
.map{display:grid;gap:1.25rem;align-items:start;max-width:56rem}
@media(min-width:768px){.map{grid-template-columns:1fr 1fr}}
.map-embed{border-radius:.75rem;overflow:hidden;border:1px solid rgba(66,73,57,.3);background:var(--surface-low)}
.map-embed iframe{display:block;width:100%;height:220px;border:0}
@media(min-width:768px){.map-embed iframe{height:240px}}
.map-side{display:flex;flex-direction:column;gap:.75rem}
.map-card{display:flex;gap:.875rem;align-items:flex-start;background:var(--surface-low);border-radius:.75rem;padding:1rem 1.1rem}
.map-ico{width:2.25rem;height:2.25rem;background:rgba(39,80,10,.6);border-radius:.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem}
.map-card h3{font-family:'Inter',sans-serif;font-size:.85rem;font-weight:600;color:var(--text);margin-bottom:.2rem}
.map-card p{font-size:.8rem;color:var(--text-variant);line-height:1.6}
.map-side .btn-ghost{align-self:flex-start;padding:.6rem 1.1rem;font-size:.82rem}
.ship h1{font-size:clamp(2.2rem,5vw,3.5rem);font-weight:300;line-height:1.15;margin-bottom:1.25rem}
.ship .intro{font-size:1.05rem;color:var(--text-variant);line-height:1.8;max-width:42rem;margin-bottom:2.5rem}
.ship-grid{display:grid;gap:1rem}
@media(min-width:800px){.ship-grid{grid-template-columns:1fr 1fr}}
.ship-card{background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:.75rem;padding:1.5rem}
.ship-card h2{font-size:1.3rem;font-weight:400;margin-bottom:.75rem}
.ship-card p{color:var(--text-variant);font-size:.92rem;line-height:1.8}
.ship-card p strong{color:var(--text);font-weight:500}
.ship-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2.5rem}
/* WhatsApp */
.whatsapp-fab { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 50; }.whatsapp-btn {width: 3.5rem; height: 3.5rem; border-radius: 50%;background: #25D366; border: none; cursor: pointer;display: flex; align-items: center; justify-content: center;box-shadow: 0 4px 14px rgba(0,0,0,0.4); transition: transform 0.2s;}.whatsapp-btn:hover { transform: scale(1.1); }.whatsapp-btn svg { width: 1.75rem; height: 1.75rem; fill: white; }
/* Sur mobile, laisser de la place sous le dernier contenu pour le bouton flottant */
@media(max-width:767px){body footer{padding-bottom:5.5rem}}
footer{background:var(--surface-lowest);border-top:1px solid rgba(46,58,44,.3);padding:3rem 0 2rem;margin-top:4rem}
.footer-grid{display:grid;gap:2rem;margin-bottom:2.5rem}
@media(min-width:768px){.footer-grid{grid-template-columns:2fr 1fr 1fr 1fr}}
.footer-col h4{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--text);margin-bottom:1rem;font-family:'Inter',sans-serif}
.footer-col ul{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.footer-col li a{font-size:.78rem;color:var(--text-variant);transition:color .2s}
.footer-col li a:hover{color:var(--primary)}
.footer-tagline{font-size:.78rem;color:#8c9e89;line-height:1.7;margin-top:.75rem;max-width:20rem}
.footer-bottom{border-top:1px solid rgba(46,58,44,.2);padding-top:1.5rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem}
.footer-bottom p,.footer-bottom a{font-size:.72rem;color:var(--outline)}
.footer-bottom a:hover{color:var(--primary)}
/* ── Fiche produit : mise en page ── */
.page{padding:6rem 0 4rem}
.pp-head{max-width:62rem;margin:0 auto 1.5rem}
.pp-head h1{font-size:clamp(2rem,4.2vw,3rem);font-weight:300;line-height:1.15;margin:.5rem 0 .5rem}
.pp-sub{font-size:1.05rem;line-height:1.6;color:#c2c9b4;max-width:40rem}
.pp-top{display:grid;gap:1.5rem;max-width:62rem;margin:0 auto}
@media(min-width:900px){.pp-top{grid-template-columns:minmax(0,460px) minmax(0,1fr);gap:3rem;align-items:start}}
.pp-media{width:100%;max-width:460px;aspect-ratio:1/1;margin:0 auto;background:#fff;border-radius:1rem;overflow:hidden;display:flex;align-items:center;justify-content:center}
.pp-media img{width:100%;height:100%;object-fit:contain;padding:1rem}
@media(max-width:899px){.pp-media{max-width:none;aspect-ratio:auto;height:min(calc(100vw - 3rem),40vh)}}
.pp-buy{background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:1rem;padding:1.5rem}
.pp-buy .pp-price{font-size:1.8rem;margin-bottom:1rem}
.pp-buy .pp-bundle{background:var(--surface-mid);border:none;margin-bottom:1.25rem}
.pp-buy .thickness{margin-bottom:1.25rem}
.thickness-pill span{display:inline-flex;align-items:center;min-height:44px;padding:0 1.1rem;border:1px solid var(--outline);border-radius:9999px;font-size:.85rem;color:#c2c9b4;transition:all .15s}
.thickness-sizes{font-size:.78rem;color:var(--text-variant)}
.pp-actions{display:flex;flex-wrap:wrap;gap:.75rem}
.pp-actions a{min-height:48px}
@media(max-width:767px){.pp-actions a{flex:1 1 100%}}
.pp-col{max-width:44rem;margin:0 auto}
@media(min-width:1024px){.pp-col{max-width:62rem}.pp-col>.pp-section{max-width:46rem;margin-left:0;margin-right:auto;text-align:left}}
.pp-section{margin-top:3.5rem}
.pp-section h2{font-size:clamp(1.45rem,3vw,2rem);font-weight:300;line-height:1.25;margin-bottom:1.1rem}
.pp-keys .pp-text{max-width:68ch}
.pp-feats{margin:1rem 0 0}
.pp-prose p{color:#c2c9b4;font-size:.95rem;line-height:1.85;max-width:68ch;margin-bottom:1rem}
.pp-tree{max-width:460px;margin:0 0 1.25rem;background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:1rem;overflow:hidden}
.pp-tree img{display:block;width:100%;aspect-ratio:4/3;height:auto;object-fit:cover}
.pp-tree figcaption{padding:.8rem 1rem;font-size:.82rem;line-height:1.6;color:var(--text-variant)}
.pp-tree figcaption em{color:var(--text)}
.steps{list-style:none;counter-reset:st;display:flex;flex-direction:column;gap:.75rem}
.cmp-wrap{overflow-x:auto;border:1px solid var(--outline-variant);border-radius:.75rem}
.faq{display:flex;flex-direction:column;gap:.6rem}
.faq summary{min-height:48px}
.tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
.pp-delivery h2{font-family:'Newsreader',serif;font-size:clamp(1.45rem,3vw,2rem);font-weight:300;letter-spacing:normal;text-transform:none;color:var(--text);margin-bottom:.75rem}
.pp-delivery p{font-size:.95rem;max-width:68ch}
.tile img{width:100%;height:auto;aspect-ratio:1/1;object-fit:contain;background:#fff;padding:.6rem}
.tile-sub{font-size:.78rem;line-height:1.5;color:var(--text-variant)}
/* Mobile : prix et Commander visibles sans défiler (prix dégressifs et épaisseur juste en dessous) */
.pp-buy{display:flex;flex-direction:column}
@media(max-width:767px){
.page{padding-top:5rem}
.breadcrumb{margin-bottom:1rem}
.pp-head{margin-bottom:1rem}
.pp-head h1{font-size:1.85rem;margin:.35rem 0 .35rem}
.pp-head .pp-badge{margin-bottom:0}
.pp-sub{font-size:.95rem}
.pp-media{height:min(calc(100vw - 3rem),30vh)}
.pp-buy{padding:1.1rem}
.pp-buy .pp-price{order:1;font-size:1.6rem;margin-bottom:.75rem}
.pp-buy .pp-actions{order:2;margin-bottom:1.1rem}
.pp-buy .pp-bundle{order:3;margin-bottom:1rem}
.pp-buy .thickness{order:4;margin-bottom:0}
}
/* Mobile (≤ 480 px) : interface légèrement réduite (texte -1 px, titres -2 à -4 px, espacements -12 %), boutons ≥ 44 px, champs à 16 px */
@media(max-width:480px){
html{font-size:15px}
.pp-head h1{font-size:1.75rem}
.pp-section{margin-top:3.25rem}
.pp-section h2,.pp-delivery h2{font-size:1.35rem}
.ship h1{font-size:1.9rem}
.ship-card h2{font-size:1.15rem}
.btn-primary,.btn-ghost{min-height:44px}
}
.whatsapp-fab{transition:opacity .2s,transform .2s}
.whatsapp-fab.fab-hidden{opacity:0;transform:translateY(12px);pointer-events:none}

`;

const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>`;

function head(lang, key, meta, jsonld, ogImage) {
    const url = SITE + URLS[key][lang];
    return `<!DOCTYPE html>
<html lang="${lang}" class="dark"${lang === 'de' ? ' data-page-lang="de"' : ''}>
<head>
    ${GENERATED}
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${escAttr(meta.title)}</title>
    <meta name="description" content="${escAttr(meta.desc)}"/>
    <link rel="canonical" href="${url}"/>
    <link rel="alternate" hreflang="fr" href="${SITE + URLS[key].fr}"/>
    <link rel="alternate" hreflang="de" href="${SITE + URLS[key].de}"/>
    <link rel="alternate" hreflang="x-default" href="${SITE + URLS[key].fr}"/>
    <link rel="icon" href="/sivaa.png" type="image/png">
    <meta property="og:type" content="${key.startsWith('p') ? 'product' : 'website'}"/>
    <meta property="og:title" content="${escAttr(meta.title)}"/>
    <meta property="og:description" content="${escAttr(meta.desc)}"/>
    <meta property="og:image" content="${SITE + ogImage}"/>
    <meta property="og:url" content="${url}"/>
    <meta property="og:locale" content="${lang === 'de' ? 'de_CH' : 'fr_CH'}"/>
    <script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
    </script>
    ${fonts}
    <style>${CSS}</style>
</head>`;
}

function navHtml(lang) {
    const home = URLS.home[lang];
    return `<nav>
    <div class="nav-inner">
        <a href="${home}" class="logo">SIVÀA <span>Geneva</span></a>
        <div class="nav-links">
            <a href="${home}#produits" data-i18n="nav.products">${tr(lang, 'nav.products')}</a>
            <a href="/blog.html" data-i18n="nav.journal">${tr(lang, 'nav.journal')}</a>
            <a href="/contact.html" data-i18n="nav.contact">${tr(lang, 'nav.contact')}</a>
            <a href="/checkout.html" class="nav-cta" data-i18n="nav.order">${tr(lang, 'nav.order')}</a>
        </div>
    </div>
</nav>`;
}

function footerHtml(lang) {
    const L = (k) => `data-i18n="${k}">${tr(lang, k)}`;
    return `<footer>
    <div class="container">
        <div class="footer-grid">
            <div>
                <a href="${URLS.home[lang]}" class="logo">SIVÀA <span>Geneva</span></a>
                <p class="footer-tagline" ${L('footer.tagline')}</p>
            </div>
            <div class="footer-col">
                <h4 ${L('footer.col.products')}</h4>
                <ul>
                    <li><a href="${URLS.p1[lang]}" ${L('footer.product.siwak')}</a></li>
                    <li><a href="${URLS.p2[lang]}" ${L('footer.product.togo')}</a></li>
                    <li><a href="${URLS.p3[lang]}" ${L('footer.product.etui')}</a></li>
                    <li><a href="${URLS.p4[lang]}" ${L('product4.name')}</a></li>
                    <li><a href="${URLS.p5[lang]}" ${L('product5.name')}</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 ${L('footer.col.info')}</h4>
                <ul>
                    <li><a href="${URLS.ship[lang]}" ${L('footer.info.shipping')}</a></li>
                    <li><a href="/blog.html" ${L('footer.info.journal')}</a></li>
                    <li><a href="/contact.html" ${L('footer.info.contact')}</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 ${L('footer.col.legal')}</h4>
                <ul>
                    <li><a href="/mentions-legales.html" ${L('footer.legal.cgv')}</a></li>
                    <li><a href="/politique-confidentialite.html" ${L('footer.legal.privacy')}</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p ${L('footer.copyright')}</p>
            <p>Quai des Vernets 11, 1227 ${lang === 'de' ? 'Genf' : 'Genève'} · <a href="tel:+41779496504">+41 77 949 65 04</a></p>
        </div>
    </div>
</footer>`;
}

/* Bouton WhatsApp flottant : identique à celui de l'accueil */
const FAB_FR = `<div class="whatsapp-fab">
    <a
            href="https://wa.me/41779496504?text=Bonjour%20SIVÀA%20Geneva%2C%20j%27ai%20une%20question%20sur%20le%20Siwak%20%F0%9F%8C%BF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter SIVÀA Geneva sur WhatsApp"
    >
        <button class="whatsapp-btn" type="button" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </button>
    </a>
</div>`;
const fabHtml = (lang) => (lang === 'de' ? FAB_FR.replace('text=Bonjour%20', 'text=Hallo%20') : FAB_FR);

const tail = `<script src="${I18N_SRC}"></script>
</body>
</html>
`;

function crumbsLd(lang, items) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + url })),
    };
}

/* ── Carte Google Maps (retrait aux Acacias) ────────────────── */
const MAP_EMBED = 'https://www.google.com/maps?q=Quai+des+Vernets+11,+1227+Gen%C3%A8ve&output=embed';
const MAP_DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Quai%20des%20Vernets%2011%2C%201227%20Gen%C3%A8ve';
function mapHtml(lang) {
    const t = (k) => tr(lang, k);
    return `
    <section class="pp-section">
        <h2 data-i18n="pp.map.title">${t('pp.map.title')}</h2>
        <div class="map">
            <div class="map-embed">
                <iframe src="${MAP_EMBED}&amp;hl=${lang}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="${escAttr(strip(t('pp.map.title')))}" data-i18n-title="pp.map.title"></iframe>
            </div>
            <div class="map-side">
                <div class="map-card">
                    <div class="map-ico" aria-hidden="true">📍</div>
                    <div>
                        <h3>SIVÀA Geneva</h3>
                        <p><span data-i18n="pp.map.address">${t('pp.map.address')}</span><br/><span data-i18n="loc.district">${t('loc.district')}</span></p>
                    </div>
                </div>
                <div class="map-card">
                    <div class="map-ico" aria-hidden="true">🕐</div>
                    <div>
                        <h3 data-i18n="loc.appointment.title">${t('loc.appointment.title')}</h3>
                        <p data-i18n="loc.appointment.desc">${t('loc.appointment.desc')}</p>
                    </div>
                </div>
                <a href="${MAP_DIRECTIONS}" class="btn-ghost" target="_blank" rel="noopener noreferrer" data-i18n="pp.map.directions">${t('pp.map.directions')}</a>
            </div>
        </div>
    </section>`;
}

/* ── FAQ : accordéon visible + FAQPage (mêmes textes) ───────── */
function faqHtml(lang, keys) {
    const t = (k) => tr(lang, k);
    return `
    <section class="pp-section">
        <h2 data-i18n="pp.faq.title">${t('pp.faq.title')}</h2>
        <div class="faq">
            ${keys.map((k) => `<details><summary data-i18n="${k}.q">${t(k + '.q')}</summary><div class="faq-a" data-i18n="${k}.a">${t(k + '.a')}</div></details>`).join('\n            ')}
        </div>
    </section>`;
}
function faqLdFor(lang, keys) {
    return {
        '@type': 'FAQPage',
        mainEntity: keys.map((k) => ({ '@type': 'Question', name: strip(tr(lang, k + '.q')), acceptedAnswer: { '@type': 'Answer', text: strip(tr(lang, k + '.a')) } })),
    };
}

/* ── Sections propres à chaque fiche ────────────────────────── */
function sectionHtml(lang, sec, p) {
    const t = (k) => tr(lang, k);
    const h2 = `<h2 data-i18n="${sec.title}">${t(sec.title)}</h2>`;
    if (sec.type === 'text') {
        const tree = sec.tree && p.tree ? `
        <figure class="pp-tree">
            ${picture(p.tree.img, strip(t(p.tree.alt)), p.tree.alt, '(max-width: 767px) 100vw, 460px')}
            <figcaption data-i18n="${p.tree.caption}">${t(p.tree.caption)}</figcaption>
        </figure>` : '';
        return `
    <section class="pp-section pp-prose">
        ${h2}${tree}
        ${sec.paras.map((k) => `<p data-i18n="${k}">${t(k)}</p>`).join('\n        ')}
    </section>`;
    }
    if (sec.type === 'steps') {
        return `
    <section class="pp-section">
        ${h2}
        <ol class="steps">
            ${sec.steps.map((k) => `<li data-i18n="${k}">${t(k)}</li>`).join('\n            ')}
        </ol>
    </section>`;
    }
    if (sec.type === 'compare') {
        const rows = ['taste', 'texture', 'use', 'format'];
        const link = lang === 'fr' ? `\n        <p class="cmp-link"><a href="/siwak-ou-allo-togo.html" data-i18n="cmp.link">${t('cmp.link')}</a></p>` : '';
        return `
    <section class="pp-section">
        ${h2}${sec.intro ? `\n        <p class="cmp-intro" data-i18n="${sec.intro}">${t(sec.intro)}</p>` : ''}
        <div class="cmp-wrap">
            <table class="cmp">
                <thead><tr><th></th>${sec.order.map((c) => `<th scope="col" data-i18n="cmp.col.${c}">${t('cmp.col.' + c)}</th>`).join('')}</tr></thead>
                <tbody>
                    ${rows.map((r) => `<tr><th scope="row" data-i18n="cmp.row.${r}">${t('cmp.row.' + r)}</th>${sec.order.map((c) => `<td data-i18n="cmp.${c}.${r}">${t(`cmp.${c}.${r}`)}</td>`).join('')}</tr>`).join('\n                    ')}
                </tbody>
            </table>
        </div>${link}
    </section>`;
    }
    throw new Error('Type de section inconnu : ' + sec.type);
}

/* ── Fiche produit ──────────────────────────────────────────── */
function productMeta(p, lang) {
    const name = strip(tr(lang, p.name));
    return {
        title: lang === 'de' ? `${name} kaufen – Versand in die ganze Schweiz ab Genf` : `${name} – acheter à Genève, livré partout en Suisse | SIVÀA Geneva`,
        desc: p.desc[lang],
    };
}
function renderProduct(p, lang) {
    const t = (k) => tr(lang, k);
    const i = (k, tag = 'p', cls = '') => `<${tag}${cls ? ` class="${cls}"` : ''} data-i18n="${k}">${t(k)}</${tag}>`;
    const name = strip(t(p.name));
    const home = URLS.home[lang];
    const waText = lang === 'de' ? `Hallo SIVÀA Geneva, ich interessiere mich für ${name}.` : `Bonjour SIVÀA Geneva, je suis intéressé(e) par ${name}.`;

    const graph = [crumbsLd(lang, [[strip(t('pp.crumb.home')), home], [strip(t('pp.crumb.products')), home + '#produits'], [name, URLS[p.id][lang]]])];
    graph.unshift({
        '@type': 'Product',
        name,
        image: [SITE + p.img],
        description: strip(t(`pp.${p.id}.subtitle`)) + ' ' + strip(t(p.intro)),
        brand: { '@type': 'Brand', name: 'SIVÀA Geneva' },
        url: SITE + URLS[p.id][lang],
        offers: {
            '@type': 'Offer',
            url: SITE + URLS[p.id][lang],
            priceCurrency: 'CHF',
            price: p.offerPrice,
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'SIVÀA Geneva' },
            shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: { '@type': 'MonetaryAmount', value: '10.00', currency: 'CHF' },
                shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'CH' },
                deliveryTime: {
                    '@type': 'ShippingDeliveryTime',
                    handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 2, unitCode: 'DAY' },
                    transitTime: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 3, unitCode: 'DAY' },
                },
            },
        },
    });
    graph.push(faqLdFor(lang, p.faq));

    const bundle = p.bundle ? `
            <div class="pp-bundle">
                <p class="label-sm" data-i18n="pp.bundle.title">${t('pp.bundle.title')}</p>
                <ul>${['offer.p1', 'offer.p2', 'offer.p3', 'offer.hand'].map((k) => i(k, 'li')).join('')}</ul>
            </div>` : '';

    // Épaisseur : choix + diamètres (le guide détaillé reste dans la fenêtre de l'accueil)
    const thickness = p.thickness ? `
            <div class="thickness" data-storage-key="${p.thickness}">
                <p class="thickness-label" data-i18n="modal1.thickness.label">${t('modal1.thickness.label')}</p>
                <div class="thickness-options">
                    ${[['fin', 'thin'], ['epais', 'thick'], ['peu-importe', 'any']].map(([v, k]) => `<label class="thickness-pill"><input type="radio" name="thickness-page" value="${v}"${v === 'peu-importe' ? ' checked' : ''}/><span data-i18n="modal1.thickness.${k}">${t('modal1.thickness.' + k)}</span></label>`).join('\n                    ')}
                </div>
                <p class="thickness-sizes" data-i18n="thickness.sizes">${t('thickness.sizes')}</p>
            </div>` : '';

    const reads = lang === 'fr' && p.reads.length ? `
    <section class="pp-section">
        <h2 data-i18n="pp.read.title">${t('pp.read.title')}</h2>
        <ul class="reads">${p.reads.map((f) => `<li><a href="/${f}">${articleTitle(f)} →</a></li>`).join('')}</ul>
    </section>` : '';

    // « Vous aimerez aussi » : toujours les 4 autres produits
    const related = PRODUCTS.filter((r) => r.id !== p.id).map((r) => r.id).map((id) => {
        const r = byId[id];
        return `<a class="tile" href="${URLS[id][lang]}">
                ${picture(r.img, strip(t(r.alt)), r.alt, '(max-width: 767px) 50vw, 220px')}
                <div class="tile-body">
                    <p class="tile-name" data-i18n="${r.name}">${t(r.name)}</p>
                    <p class="tile-sub" data-i18n="pp.${r.id}.subtitle">${t(`pp.${r.id}.subtitle`)}</p>
                    <p class="tile-price" data-i18n="${r.price}">${t(r.price)}</p>
                    <p class="tile-see" data-i18n="pp.related.see">${t('pp.related.see')}</p>
                </div>
            </a>`;
    }).join('\n            ');

    const thicknessScript = p.thickness ? `
<script>
    /* Épaisseur choisie : mémorisée pour le checkout (même clé que la page d'accueil) */
    (function () {
        var box = document.querySelector('.thickness');
        var key = box.getAttribute('data-storage-key');
        var inputs = box.querySelectorAll('input[name="thickness-page"]');
        var saved = null;
        try { saved = localStorage.getItem(key); } catch (e) {}
        if (saved) inputs.forEach(function (el) { el.checked = (el.value === saved); });
        inputs.forEach(function (el) {
            el.addEventListener('change', function () { try { localStorage.setItem(key, el.value); } catch (e) {} });
        });
    })();
</script>` : '';

    return `${head(lang, p.id, productMeta(p, lang), { '@context': 'https://schema.org', '@graph': graph }, p.img)}
<body>
${navHtml(lang)}
<main class="page">
<div class="container">
    <div class="breadcrumb" role="navigation" aria-label="${lang === 'de' ? 'Brotkrumen' : "Fil d'Ariane"}">
        <a href="${home}" data-i18n="pp.crumb.home">${t('pp.crumb.home')}</a><span>›</span>
        <a href="${home}#produits" data-i18n="pp.crumb.products">${t('pp.crumb.products')}</a><span>›</span>
        <span data-i18n="${p.name}">${t(p.name)}</span>
    </div>
    <header class="pp-head">
        ${i(p.badge, 'p', 'pp-badge')}
        ${i(p.name, 'h1')}
        ${i(`pp.${p.id}.subtitle`, 'p', 'pp-sub')}
    </header>
    <div class="pp-top">
        <div class="pp-media">
            ${picture(p.img, strip(t(p.alt)), p.alt, '(max-width: 767px) 100vw, 460px', { eager: true })}
        </div>
        <div class="pp-buy">
            ${i(p.price, 'p', 'pp-price')}${bundle}${thickness}
            <div class="pp-actions">
                <a href="/checkout.html" class="btn-primary" data-i18n="${p.buy}">${t(p.buy)}</a>
                <a href="https://wa.me/${WA}?text=${encodeURIComponent(waText)}" class="btn-ghost" target="_blank" rel="noopener noreferrer" data-i18n="pp.whatsapp">${t('pp.whatsapp')}</a>
            </div>
        </div>
    </div>
    <div class="pp-col">
    <section class="pp-section pp-keys">
        ${i(p.intro, 'p', 'pp-text')}
        <ul class="pp-feats">${p.keypoints.map((k) => i(k, 'li')).join('')}</ul>
    </section>${p.sections.map((sec) => sectionHtml(lang, sec, p)).join('')}${faqHtml(lang, p.faq)}
    <section class="pp-section">
        <div class="pp-delivery">
            <h2 data-i18n="pp.delivery.title">${t('pp.delivery.title')}</h2>
            <p data-i18n="pp.delivery.text">${t('pp.delivery.text')}</p>
            <a href="${URLS.ship[lang]}#retrait" data-i18n="pp.delivery.link">${t('pp.delivery.link')}</a>
        </div>
    </section>
    <section class="pp-section">
        <h2 data-i18n="pp.related.title">${t('pp.related.title')}</h2>
        <div class="tiles">
            ${related}
        </div>
    </section>${reads}
    </div>
</div>
</main>
${footerHtml(lang)}
${fabHtml(lang)}${thicknessScript}
<script>
    /* Mobile : le bouton WhatsApp flottant ne recouvre jamais Commander */
    (function () {
        var fab = document.querySelector('.whatsapp-fab'), buy = document.querySelector('.pp-actions');
        if (!fab || !buy || !('IntersectionObserver' in window)) return;
        var mq = window.matchMedia('(max-width: 767px)');
        new IntersectionObserver(function (e) { fab.classList.toggle('fab-hidden', mq.matches && e[0].isIntersecting); }, { rootMargin: '0px 0px -60px 0px' }).observe(buy);
    })();
</script>
${tail}`;
}

/* ── Livraison & retrait ────────────────────────────────────── */
const SHIP_META = {
    fr: { title: 'Livraison & retrait — Siwak livré dans toute la Suisse | SIVÀA Geneva', desc: 'Livraison Swiss Post dans toute la Suisse (CHF 10, expédition sous 48h + 2–3 jours) ou retrait gratuit aux Acacias à Genève. Minimum CHF 15, paiement Twint ou Revolut.' },
    de: { title: 'Versand & Abholung — Siwak-Lieferung in die ganze Schweiz | SIVÀA Geneva', desc: 'Versand mit Swiss Post in die ganze Schweiz (CHF 10, Versand innerhalb von 48 Std. + 2–3 Tage) oder kostenlose Abholung in Genf. Mindestbestellwert CHF 15, Zahlung mit Twint oder Revolut.' },
};
function renderShip(lang) {
    const t = (k) => tr(lang, k);
    const home = URLS.home[lang];
    const card = (k) => `<div class="ship-card"${k === 'pickup' ? ' id="retrait"' : ''}><h2 data-i18n="ship.${k}.title">${t(`ship.${k}.title`)}</h2><p data-i18n="ship.${k}.text">${t(`ship.${k}.text`)}</p></div>`;
    const ld = { '@context': 'https://schema.org', '@graph': [crumbsLd(lang, [[strip(t('pp.crumb.home')), home], [strip(t('ship.title')), URLS.ship[lang]]])] };
    const waText = lang === 'de' ? 'Hallo SIVÀA Geneva, ich habe eine Frage zur Lieferung.' : "Bonjour SIVÀA Geneva, j'ai une question sur la livraison.";
    return `${head(lang, 'ship', SHIP_META[lang], ld, '/natural-siwak.jpg')}
<body>
${navHtml(lang)}
<main class="page ship">
<div class="container">
    <div class="breadcrumb" role="navigation" aria-label="${lang === 'de' ? 'Brotkrumen' : "Fil d'Ariane"}">
        <a href="${home}" data-i18n="pp.crumb.home">${t('pp.crumb.home')}</a><span>›</span>
        <span data-i18n="ship.title">${t('ship.title')}</span>
    </div>
    <p class="label-sm" style="color:var(--primary);margin-bottom:1rem;" data-i18n="ship.eyebrow">${t('ship.eyebrow')}</p>
    <h1 data-i18n="ship.title">${t('ship.title')}</h1>
    <p class="intro" data-i18n="ship.intro">${t('ship.intro')}</p>
    <div class="ship-grid">
        ${['post', 'pickup', 'min', 'pay', 'abroad', 'returns'].map(card).join('\n        ')}
    </div>${mapHtml(lang)}
    <div class="ship-actions">
        <a href="/checkout.html" class="btn-primary" data-i18n="ship.cta">${t('ship.cta')}</a>
        <a href="https://wa.me/${WA}?text=${encodeURIComponent(waText)}" class="btn-ghost" target="_blank" rel="noopener noreferrer" data-i18n="ship.contact">${t('ship.contact')}</a>
    </div>
</div>
</main>
${footerHtml(lang)}
${fabHtml(lang)}
${tail}`;
}

/* ── FAQ visible → FAQPage ──────────────────────────────────── */
function applyDict(doc, lang) {
    const d = T[lang];
    doc.querySelectorAll('[data-i18n]').forEach((el) => { const v = d[el.getAttribute('data-i18n')]; if (v !== undefined) el.innerHTML = v; });
    doc.querySelectorAll('[data-i18n-alt]').forEach((el) => { const v = d[el.getAttribute('data-i18n-alt')]; if (v !== undefined) el.setAttribute('alt', v); });
    doc.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { const v = d[el.getAttribute('data-i18n-placeholder')]; if (v !== undefined) el.setAttribute('placeholder', v); });
    doc.querySelectorAll('[data-i18n-title]').forEach((el) => { const v = d[el.getAttribute('data-i18n-title')]; if (v !== undefined) el.setAttribute('title', v); });
}
function faqLd(doc) {
    const items = [...doc.querySelectorAll('details')].map((d) => {
        const q = d.querySelector('summary [data-i18n]');
        const a = d.querySelector(':scope > div[data-i18n]');
        return q && a ? { '@type': 'Question', name: strip(q.innerHTML), acceptedAnswer: { '@type': 'Answer', text: strip(a.innerHTML) } } : null;
    }).filter(Boolean);
    return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items };
}
const FAQ_RE = /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "FAQPage"[\s\S]*?<\/script>/;

/* ── Accueil FR : FAQPage à jour ────────────────────────────── */
let indexFr = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
{
    const dom = new JSDOM(indexFr);
    applyDict(dom.window.document, 'fr');
    const block = `<script type="application/ld+json">\n${JSON.stringify(faqLd(dom.window.document), null, 2)}\n</script>`;
    if (!FAQ_RE.test(indexFr)) throw new Error('Bloc FAQPage introuvable dans index.html');
    indexFr = indexFr.replace(FAQ_RE, block);
    fs.writeFileSync(path.join(ROOT, 'index.html'), indexFr);
}

/* ── Accueil DE : /de/index.html ────────────────────────────── */
const HOME_DE = {
    title: 'SIVÀA Geneva — Siwak kaufen in der Schweiz | Natürliche Zahnpflege aus Genf',
    desc: 'Premium-Siwak (Miswak) aus Genf: natürliche Zahnbürste aus Salvadora persica, Allo Togo und Siwak-Zahnpasta. Versand mit Swiss Post in die ganze Schweiz in 2–3 Tagen.',
    keywords: 'Siwak kaufen, Miswak kaufen Schweiz, Siwak Schweiz, natürliche Zahnbürste, Salvadora persica, Allo Togo, Siwak Zahnpasta',
};
{
    const dom = new JSDOM(indexFr);
    const doc = dom.window.document;
    const html = doc.documentElement;
    html.setAttribute('lang', 'de');
    html.setAttribute('data-page-lang', 'de');
    applyDict(doc, 'de');

    doc.title = HOME_DE.title;
    doc.querySelector('meta[name="description"]').setAttribute('content', HOME_DE.desc);
    doc.querySelectorAll('meta[name="keywords"]').forEach((m, n) => (n === 0 ? m.setAttribute('content', HOME_DE.keywords) : m.remove()));
    const og = (prop, val) => { const m = doc.querySelector(`meta[property="${prop}"]`); if (m) m.setAttribute('content', val); };
    og('og:title', HOME_DE.title);
    og('og:description', HOME_DE.desc);
    og('og:url', SITE + '/de/');
    doc.querySelector('link[rel="canonical"]').setAttribute('href', SITE + '/de/');
    doc.querySelector('meta[name="geo.placename"]')?.setAttribute('content', 'Genf');
    doc.head.insertAdjacentHTML('afterbegin', `\n    ${GENERATED}\n`);

    // Balisage : description du commerce en allemand, FAQ à partir du texte visible
    doc.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
        const data = JSON.parse(s.textContent);
        if (data['@type'] === 'FAQPage') s.textContent = '\n' + JSON.stringify(faqLd(doc), null, 2) + '\n';
        else if (data['@type'] === 'Store') {
            data.description = 'Premium-Siwak und natürliche Zahnpflege in Genf, Versand in die ganze Schweiz';
            data.url = SITE + '/de/';
            s.textContent = '\n' + JSON.stringify(data, null, 2) + '\n';
        }
    });

    // Liens : chemins absolus, pages allemandes quand elles existent
    const toDe = { 'index.html': URLS.home.de, '/': URLS.home.de };
    for (const k of Object.keys(URLS)) toDe[URLS[k].fr] = URLS[k].de, toDe[URLS[k].fr.slice(1)] = URLS[k].de;
    const fix = (v) => {
        if (!v || /^(https?:|\/\/|#|mailto:|tel:|data:|javascript:)/.test(v)) return v;
        const [p, h] = v.split('#');
        const abs = p.startsWith('/') ? p : '/' + p;
        const mapped = toDe[p] ?? toDe[abs] ?? abs;
        return mapped + (h !== undefined ? '#' + h : '');
    };
    doc.querySelectorAll('[href]').forEach((el) => { if (el.tagName !== 'LINK' || el.getAttribute('rel') === 'icon') el.setAttribute('href', fix(el.getAttribute('href'))); });
    doc.querySelectorAll('[src]').forEach((el) => el.setAttribute('src', fix(el.getAttribute('src'))));
    doc.querySelectorAll('[style*="url("]').forEach((el) => el.setAttribute('style', el.getAttribute('style').replace(/url\((['"]?)(?!https?:|data:|\/)/g, 'url($1/')));
    doc.querySelectorAll('style').forEach((el) => { el.textContent = el.textContent.replace(/url\((['"]?)(?!https?:|data:|\/)/g, 'url($1/'); });
    doc.querySelectorAll('a[href^="https://wa.me/"]').forEach((a) => a.setAttribute('href', a.getAttribute('href').replace(/Bonjour(%20|\s)/, 'Hallo$1')));

    fs.mkdirSync(path.join(ROOT, 'de'), { recursive: true });
    fs.writeFileSync(path.join(ROOT, 'de', 'index.html'), '<!DOCTYPE html>\n' + html.outerHTML + '\n');
}

/* ── Écriture des pages ─────────────────────────────────────── */
const written = [];
for (const p of PRODUCTS) {
    for (const lang of ['fr', 'de']) {
        const file = path.join(ROOT, URLS[p.id][lang]);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, renderProduct(p, lang));
        written.push(URLS[p.id][lang]);
    }
}
for (const lang of ['fr', 'de']) {
    fs.writeFileSync(path.join(ROOT, URLS.ship[lang]), renderShip(lang));
    written.push(URLS.ship[lang]);
}

/* ── Sitemap ────────────────────────────────────────────────── */
const old = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const oldEntries = [...old.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>(?:\s*<changefreq>([^<]+)<\/changefreq>)?(?:\s*<priority>([^<]+)<\/priority>)?/g)]
    .map((m) => ({ loc: m[1], lastmod: m[2], changefreq: m[3] || 'monthly', priority: m[4] || '0.5' }))
    .filter((e) => !e.loc.startsWith(SITE + '/de/') && !Object.values(URLS).some((u) => SITE + u.fr === e.loc && u.fr !== '/'));
const altOf = {};
for (const u of Object.values(URLS)) { altOf[SITE + u.fr] = u; altOf[SITE + u.de] = u; }
const entries = [...oldEntries];
const touched = new Set([SITE + '/', SITE + '/checkout.html', SITE + '/mentions-legales.html']);
for (const e of entries) if (touched.has(e.loc)) e.lastmod = TODAY;
entries.push({ loc: SITE + '/de/', lastmod: TODAY, changefreq: 'weekly', priority: '0.9' });
for (const k of ['p1', 'p2', 'p3', 'p4', 'p5', 'ship']) {
    for (const lang of ['fr', 'de']) entries.push({ loc: SITE + URLS[k][lang], lastmod: TODAY, changefreq: 'monthly', priority: k === 'ship' ? '0.7' : '0.9' });
}
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map((e) => {
    const a = altOf[e.loc];
    const alts = a ? `\n    <xhtml:link rel="alternate" hreflang="fr" href="${SITE + a.fr}"/>\n    <xhtml:link rel="alternate" hreflang="de" href="${SITE + a.de}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE + a.fr}"/>` : '';
    return `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>${alts}\n  </url>`;
}).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);

console.log('Pages générées :\n  ' + ['/de/', ...written].join('\n  '));
console.log('index.html : FAQPage mis à jour · sitemap.xml : ' + entries.length + ' URL');
