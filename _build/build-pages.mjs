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

const PRODUCTS = [
    {
        id: 'p1', img: '/siwako.jpg', alt: 'product1.image.alt', badge: 'product1.badge', name: 'product1.name',
        paras: ['modal1.desc.intro', 'pp1.desc'], feats: ['modal1.feat1', 'modal1.feat2', 'modal1.feat3', 'modal1.feat4'],
        price: 'product1.price', buy: 'modal1.buy', bundle: true, thickness: 'sivaa_siwak_thickness', offerPrice: '6.00',
        reads: ['article-siwak.html', 'siwak-epais-vs-fin.html', 'siwak-vs-brosse-a-dents.html'], related: ['p2', 'p3', 'p4'],
        meta: {
            fr: { title: 'Bâton de Siwak Premium — Acheter du siwak naturel en Suisse | SIVÀA Geneva', desc: 'Bâton de siwak (miswak) premium en Salvadora persica, récolté à la main. CHF 6.00 la pièce, prix dégressif dès 2 pièces. Livraison Swiss Post dans toute la Suisse ou retrait à Genève.' },
            de: { title: 'Premium Siwak-Stab kaufen — Natürlicher Miswak in der Schweiz | SIVÀA Geneva', desc: 'Premium Siwak-Stab (Miswak) aus Salvadora persica, von Hand geerntet. CHF 6.00 pro Stück, Staffelpreise ab 2 Stück. Versand mit Swiss Post in die ganze Schweiz.' },
        },
    },
    {
        id: 'p2', img: '/allo-togo.png', alt: 'product2.image.alt', badge: 'product2.badge', name: 'product2.name',
        paras: ['modal2.desc.intro', 'modal2.desc'], feats: ['modal2.feat1', 'modal2.feat2', 'modal2.feat3', 'modal2.feat4'],
        price: 'product2.price', buy: 'modal1.buy', thickness: 'sivaa_allotogo_thickness', offerPrice: '6.00',
        reads: ['siwak-ou-allo-togo.html', 'siwak-epais-vs-fin.html'], related: ['p1', 'p3', 'p5'],
        meta: {
            fr: { title: 'Allo Togo — Bâton à mâcher en Fagara, lot de 5 | SIVÀA Geneva', desc: "Allo Togo : bâtonnets à mâcher en Fagara importés du Togo, alternative au siwak au goût vif. CHF 6.00 le lot de 5. Livraison Swiss Post dans toute la Suisse ou retrait à Genève." },
            de: { title: 'Allo Togo kaufen — Kaustab aus Fagara, 5er-Pack | SIVÀA Geneva', desc: 'Allo Togo: Kaustäbe aus Fagara, direkt aus Togo, eine Siwak-Alternative mit lebhaftem Geschmack. CHF 6.00 für 5 Stück. Versand mit Swiss Post in die ganze Schweiz.' },
        },
    },
    {
        id: 'p3', img: '/imgetui.png', alt: 'modal3.image.alt', badge: 'product3.badge', name: 'product3.name',
        paras: ['modal3.desc'], feats: ['modal3.feat1', 'modal3.feat2', 'modal3.feat3', 'modal3.feat4'],
        price: 'product3.price', buy: 'modal3.buy', offerPrice: '6.00',
        reads: ['article-siwak.html'], related: ['p1', 'p2'],
        meta: {
            fr: { title: 'Étui de protection pour Siwak — Hygiène nomade | SIVÀA Geneva', desc: "Étui de protection pour siwak : garde votre bâton à l'abri de l'humidité et de la poussière, partout avec vous. Livraison Swiss Post dans toute la Suisse ou retrait à Genève." },
            de: { title: 'Siwak-Etui kaufen — Schutzetui für unterwegs | SIVÀA Geneva', desc: 'Schutzetui für Siwak: schützt Ihren Kaustab vor Feuchtigkeit und Staub, überall dabei. Versand mit Swiss Post in die ganze Schweiz.' },
        },
    },
    {
        id: 'p4', img: '/dentifrice-girofle.jpg', alt: 'product4.image.alt', badge: 'product4.badge', name: 'product4.name',
        paras: ['modal4.desc.intro', 'modal4.desc'], feats: ['modal4.feat1', 'modal4.feat2', 'modal4.feat3'],
        price: 'product4.price', buy: 'modal4.buy', offerPrice: '10.00',
        reads: ['siwak-vs-brosse-a-dents.html', 'article-siwak.html'], related: ['p5', 'p1'],
        meta: {
            fr: { title: 'Dentifrice Siwak au Clou de Girofle — Protection anticavité | SIVÀA Geneva', desc: "Dentifrice au siwak (Salvadora persica) et clou de girofle : protection anticavité, gencives apaisées, haleine fraîche. CHF 10.00. Livraison Swiss Post dans toute la Suisse." },
            de: { title: 'Siwak-Zahnpasta mit Gewürznelke — Kariesschutz | SIVÀA Geneva', desc: 'Zahnpasta mit Siwak (Salvadora persica) und Gewürznelke: Kariesschutz, beruhigtes Zahnfleisch, frischer Atem. CHF 10.00. Versand mit Swiss Post in die ganze Schweiz.' },
        },
    },
    {
        id: 'p5', img: '/dentifrice-au-siwak-et-charbon-actif.jpg', alt: 'product5.image.alt', badge: 'product5.badge', name: 'product5.name',
        paras: ['modal5.desc.intro', 'modal5.desc'], feats: ['modal5.feat1', 'modal5.feat2', 'modal5.feat3'],
        price: 'product5.price', buy: 'modal5.buy', offerPrice: '10.00',
        reads: ['siwak-vs-brosse-a-dents.html', 'article-siwak.html'], related: ['p4', 'p1'],
        meta: {
            fr: { title: 'Dentifrice Siwak au Charbon Actif — Blancheur naturelle | SIVÀA Geneva', desc: 'Dentifrice au siwak et charbon actif : blancheur naturelle, sans peroxyde. CHF 10.00. Livraison Swiss Post dans toute la Suisse ou retrait à Genève.' },
            de: { title: 'Siwak-Zahnpasta mit Aktivkohle — Natürliche Weisse | SIVÀA Geneva', desc: 'Zahnpasta mit Siwak und Aktivkohle: natürliche Zahnaufhellung, ohne Peroxid. CHF 10.00. Versand mit Swiss Post in die ganze Schweiz.' },
        },
    },
];
const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

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
.pp-grid{display:grid;gap:2.5rem;align-items:start}
@media(min-width:900px){.pp-grid{grid-template-columns:1fr 1fr;gap:4rem}}
.pp-media{background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:1rem;overflow:hidden}
.pp-media img{width:100%;aspect-ratio:1/1;object-fit:cover}
.pp-badge{display:inline-block;font-size:.7rem;color:#fff;background:rgba(127,153,90,.85);padding:.25rem .75rem;border-radius:9999px;margin-bottom:1rem}
.pp-info h1{font-size:clamp(2rem,4vw,3rem);font-weight:300;line-height:1.15;margin-bottom:.75rem}
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
.thickness-pill span{display:inline-block;padding:.45rem 1rem;border:1px solid var(--outline);border-radius:9999px;font-size:.8rem;color:#c2c9b4;transition:all .15s}
.thickness-pill input:checked+span{border-color:var(--primary);color:var(--primary);background:rgba(157,215,90,.08)}
.thickness-pill input:focus-visible+span{outline:2px solid var(--primary);outline-offset:2px}
.thickness-guide{list-style:none;display:flex;flex-direction:column;gap:.35rem;font-size:.78rem;color:var(--text-variant);line-height:1.6}
.thickness-guide strong{color:var(--text);font-weight:500}
.pp-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:1.5rem}
.pp-delivery{background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:.75rem;padding:1.25rem}
.pp-delivery h2{font-family:'Inter',sans-serif;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--primary);margin-bottom:.5rem;font-weight:600}
.pp-delivery p{color:var(--text-variant);font-size:.85rem;line-height:1.7;margin-bottom:.6rem}
.pp-delivery a{color:var(--primary);font-size:.82rem}
.pp-section{margin-top:4rem}
.pp-section h2{font-size:clamp(1.4rem,3vw,2rem);font-weight:300;margin-bottom:1.25rem}
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
.ship h1{font-size:clamp(2.2rem,5vw,3.5rem);font-weight:300;line-height:1.15;margin-bottom:1.25rem}
.ship .intro{font-size:1.05rem;color:var(--text-variant);line-height:1.8;max-width:42rem;margin-bottom:2.5rem}
.ship-grid{display:grid;gap:1rem}
@media(min-width:800px){.ship-grid{grid-template-columns:1fr 1fr}}
.ship-card{background:var(--surface-low);border:1px solid var(--outline-variant);border-radius:.75rem;padding:1.5rem}
.ship-card h2{font-size:1.3rem;font-weight:400;margin-bottom:.75rem}
.ship-card p{color:var(--text-variant);font-size:.92rem;line-height:1.8}
.ship-card p strong{color:var(--text);font-weight:500}
.ship-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2.5rem}
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

/* ── Fiche produit ──────────────────────────────────────────── */
function renderProduct(p, lang) {
    const t = (k) => tr(lang, k);
    const i = (k, tag = 'p', cls = '') => `<${tag}${cls ? ` class="${cls}"` : ''} data-i18n="${k}">${t(k)}</${tag}>`;
    const name = strip(t(p.name));
    const home = URLS.home[lang];
    const waText = lang === 'de' ? `Hallo SIVÀA Geneva, ich interessiere mich für ${name}.` : `Bonjour SIVÀA Geneva, je suis intéressé(e) par ${name}.`;

    const graph = [crumbsLd(lang, [[strip(t('pp.crumb.home')), home], [strip(t('pp.crumb.products')), home + '#produits'], [name, URLS[p.id][lang]]])];
    if (p.offerPrice) {
        graph.unshift({
            '@type': 'Product',
            name,
            image: [SITE + p.img],
            description: strip(p.paras.map(t).join(' ')),
            brand: { '@type': 'Brand', name: 'SIVÀA Geneva' },
            url: SITE + URLS[p.id][lang],
            offers: {
                '@type': 'Offer',
                url: SITE + URLS[p.id][lang],
                priceCurrency: 'CHF',
                price: p.offerPrice,
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
    }

    const bundle = p.bundle ? `
            <div class="pp-bundle">
                <p class="label-sm" data-i18n="pp.bundle.title">${t('pp.bundle.title')}</p>
                <ul>${['offer.p1', 'offer.p2', 'offer.p3', 'offer.hand'].map((k) => i(k, 'li')).join('')}</ul>
            </div>` : '';

    const thickness = p.thickness ? `
            <div class="thickness" data-storage-key="${p.thickness}">
                <p class="thickness-label" data-i18n="modal1.thickness.label">${t('modal1.thickness.label')}</p>
                <div class="thickness-options">
                    ${[['fin', 'thin'], ['epais', 'thick'], ['peu-importe', 'any']].map(([v, k]) => `<label class="thickness-pill"><input type="radio" name="thickness-page" value="${v}"${v === 'peu-importe' ? ' checked' : ''}/><span data-i18n="modal1.thickness.${k}">${t('modal1.thickness.' + k)}</span></label>`).join('\n                    ')}
                </div>
                <ul class="thickness-guide">
                    ${['thin', 'thick', 'any'].map((k) => `<li><strong data-i18n="modal1.thickness.${k}">${t('modal1.thickness.' + k)}</strong> — <span data-i18n="modal1.thickness.guide.${k}">${t('modal1.thickness.guide.' + k)}</span></li>`).join('\n                    ')}
                </ul>
            </div>` : '';

    const reads = lang === 'fr' && p.reads.length ? `
    <section class="pp-section">
        <h2 data-i18n="pp.read.title">${t('pp.read.title')}</h2>
        <ul class="reads">${p.reads.map((f) => `<li><a href="/${f}">${articleTitle(f)} →</a></li>`).join('')}</ul>
    </section>` : '';

    const related = p.related.map((id) => {
        const r = byId[id];
        return `<a class="tile" href="${URLS[id][lang]}">
                <img src="${r.img}" alt="${escAttr(strip(t(r.alt)))}" data-i18n-alt="${r.alt}" loading="lazy"/>
                <div class="tile-body">
                    <p class="tile-name" data-i18n="${r.name}">${t(r.name)}</p>
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

    return `${head(lang, p.id, p.meta[lang], { '@context': 'https://schema.org', '@graph': graph }, p.img)}
<body>
${navHtml(lang)}
<main class="page">
<div class="container">
    <div class="breadcrumb" role="navigation" aria-label="${lang === 'de' ? 'Brotkrumen' : "Fil d'Ariane"}">
        <a href="${home}" data-i18n="pp.crumb.home">${t('pp.crumb.home')}</a><span>›</span>
        <a href="${home}#produits" data-i18n="pp.crumb.products">${t('pp.crumb.products')}</a><span>›</span>
        <span data-i18n="${p.name}">${t(p.name)}</span>
    </div>
    <div class="pp-grid">
        <div class="pp-media">
            <img src="${p.img}" alt="${escAttr(strip(t(p.alt)))}" data-i18n-alt="${p.alt}"/>
        </div>
        <div class="pp-info">
            ${i(p.badge, 'p', 'pp-badge')}
            ${i(p.name, 'h1')}
            ${i(p.price, 'p', 'pp-price')}${bundle}
            ${p.paras.map((k) => i(k, 'p', 'pp-text')).join('\n            ')}
            <ul class="pp-feats">${p.feats.map((k) => i(k, 'li')).join('')}</ul>${thickness}
            <div class="pp-actions">
                <a href="/checkout.html" class="btn-primary" data-i18n="${p.buy}">${t(p.buy)}</a>
                <a href="https://wa.me/${WA}?text=${encodeURIComponent(waText)}" class="btn-ghost" target="_blank" rel="noopener noreferrer" data-i18n="pp.whatsapp">${t('pp.whatsapp')}</a>
            </div>
            <div class="pp-delivery">
                <h2 data-i18n="pp.delivery.title">${t('pp.delivery.title')}</h2>
                <p data-i18n="pp.delivery.text">${t('pp.delivery.text')}</p>
                <a href="${URLS.ship[lang]}" data-i18n="pp.delivery.link">${t('pp.delivery.link')}</a>
            </div>
        </div>
    </div>${reads}
    <section class="pp-section">
        <h2 data-i18n="pp.related.title">${t('pp.related.title')}</h2>
        <div class="tiles">
            ${related}
        </div>
    </section>
</div>
</main>
${footerHtml(lang)}${thicknessScript}
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
    const card = (k) => `<div class="ship-card"><h2 data-i18n="ship.${k}.title">${t(`ship.${k}.title`)}</h2><p data-i18n="ship.${k}.text">${t(`ship.${k}.text`)}</p></div>`;
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
    </div>
    <div class="ship-actions">
        <a href="/checkout.html" class="btn-primary" data-i18n="ship.cta">${t('ship.cta')}</a>
        <a href="https://wa.me/${WA}?text=${encodeURIComponent(waText)}" class="btn-ghost" target="_blank" rel="noopener noreferrer" data-i18n="ship.contact">${t('ship.contact')}</a>
    </div>
</div>
</main>
${footerHtml(lang)}
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
