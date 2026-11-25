/* ════════════════════════════════════════════════════════════════
   SIVÀA Geneva — Système multilingue (FR / EN / DE)
   ────────────────────────────────────────────────────────────────
   Usage :
     1. Inclure ce fichier sur chaque page : <script src="i18n.js"></script>
     2. Ajouter data-i18n="clé" sur toute balise textuelle à traduire.
     3. Pour les attributs : data-i18n-alt, data-i18n-placeholder, data-i18n-title.
     4. Le sélecteur de langue + burger mobile sont injectés automatiquement dans <nav>.
     5. La langue est sauvegardée dans localStorage (clé : sivaa_lang).
════════════════════════════════════════════════════════════════ */

const translations = {
    fr: {
        /* ── NAV ── */
        "nav.home": "Accueil",
        "nav.products": "Produits",
        "nav.journal": "Journal",
        "nav.contact": "Contact",
        "nav.order": "Commander",
        "nav.buy": "Acheter",
        /* ── BANDEAU OFFRE ── */
        "offer.label": "Offre :",
        "offer.p1": "1 pce = 6 CHF",
        "offer.p2": "2 pces = 11 CHF",
        "offer.p3": "3 pces = 15 CHF",
        "offer.hand": "🤝 Main propre dès 3 pces",

        /* ── INDEX : HERO ── */
        "hero.badge": "Racine de Salvadora Persica · Certifié Suisse",
        "hero.title.part1": "L'Art du",
        "hero.title.part2": "Siwak",
        "hero.title.part3": "à",
        "hero.title.part4": "Genève",
        "hero.subtitle": "La brosse à dents naturelle utilisée traditionnellement depuis des siècles. Ce bâton de bois se mâche pour former une brosse et laisse une sensation de propreté et d'haleine fraîche. Livraison dans toute la Suisse : expédition sous 48h + 2–3 jours.",
        "hero.cta.order": "Commander maintenant →",
        "hero.cta.discover": "Découvrir le Siwak",
        "hero.trust.shipping": "🚚 Expédition sous 48h + 2–3 jours",
        "hero.trust.natural": "🌿 100 % Naturel",
        "hero.trust.ssl": "🔒 Paiement Twint ou Revolut",
        "hero.badge.float": "🌿 Un usage encouragé par l'<a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">OMS</a>",
        "hero.image.alt": "Bâton de Siwak premium SIVÀA Geneva, brosse à dents naturelle suisse",

        /* ── INDEX : PRODUITS ── */
        "products.eyebrow": "La Sélection Botanique",
        "products.title.part1": "Ma",
        "products.title.part2": "Collection",
        "products.seeAll": "Voir tout →",

        "product1.badge": "Récolté à la main · Pakistan",
        "product1.name": "Bâton de Siwak Premium",
        "product1.desc": "Racine de Salvadora persica, récoltée à la main. S'utilise sans eau ni dentifrice.",
        "product1.price": "CHF 6.00 par pièce",
        "product1.discover": "Découvrir",
        "product1.image.alt": "Bâton de Siwak Premium SIVÀA, brosse à dents naturelle en Salvadora persica",

        "product2.badge": "Bâton à mâcher venant du Togo",
        "product2.name": "Allo Togo",
        "product2.desc": "Bâtonnets de fagara du Togo, au goût vif et légèrement piquant.",
        "product2.price": "CHF 6.00 pour 5 pièces",
        "product2.image.alt": "Bâton à mâcher Allo Togo, alternative naturelle au Siwak venant du Togo",

       "product3.badge": "Accessoire Indispensable",
        "product3.name": "Étui de Protection Siwak",
        "product3.desc": "Protège votre siwak de la poussière et de l'humidité, partout.",
        "product3.price": "CHF 6.00 l'unité",
        "product3.image.alt": "Étui de protection pour Siwak, étui hygiénique nomade",
        
        "modal3.desc": "Un étui pour transporter votre siwak à l'abri de la poussière et de l'humidité. Pratique dans un sac, une poche ou une trousse de voyage.",
        "modal3.shipping": "🚚 Frais de livraison Swiss Post · CHF 10.00 · expédition sous 48h + 2–3 jours",
        "modal3.priceLabel": "Prix",
        "modal3.buy": "🛍 Acheter maintenant",
        "modal3.image.alt": "Étui de transport pour Siwak naturel",

        "product4.badge": "Siwak · Clou de girofle",
        "product4.name": "Dentifrice Siwak — Clou de Girofle",
        "product4.desc": "Extraits de siwak et clou de girofle, au goût chaud et épicé.",
        "product4.price": "CHF 10.00 par pièce",
        "product4.image.alt": "Dentifrice Siwak au clou de girofle SIVÀA Geneva",

        "modal4.desc": "Dentifrice aux extraits de siwak et de clou de girofle, au goût chaud et épicé. Il s'utilise matin et soir avec votre brosse à dents habituelle.",
        "modal4.shipping": "🚚 Frais de livraison Swiss Post · CHF 10.00 · expédition sous 48h + 2–3 jours",
        "modal4.priceLabel": "Prix",
        "modal4.buy": "🛍 Acheter maintenant",

        "product5.badge": "Siwak · Charbon actif",
        "product5.name": "Dentifrice Siwak — Charbon Actif",
        "product5.desc": "Charbon actif et extraits de siwak, pour une sensation de bouche nette.",
        "product5.price": "CHF 10.00 par pièce",
        "product5.image.alt": "Dentifrice Siwak au charbon actif SIVÀA Geneva",

        "modal5.desc": "Dentifrice noir au charbon actif et aux extraits de siwak. Une alternative originale, pour un brossage qui laisse une sensation de bouche nette.",
        "modal5.shipping": "🚚 Frais de livraison Swiss Post · CHF 10.00 · expédition sous 48h + 2–3 jours",
        "modal5.priceLabel": "Prix",
        "modal5.buy": "🛍 Acheter maintenant",

        /* ── INDEX : POPUP PRODUIT 1 ── */
        "modal1.desc": "Bâton de siwak taillé dans la racine de Salvadora persica, récolté à la main au Pakistan. Il s'utilise sans eau ni dentifrice, où que vous soyez.",
        "modal1.shipping": "🚚 Frais de livraison Swiss Post · CHF 10.00 · expédition sous 48h + 2–3 jours",
        "modal1.priceLabel": "Prix",
        "modal1.buy": "🛍 Acheter maintenant",

        "modal1.thickness.label": "Épaisseur du bâton",
        "thickness.sizes": "Fin ≈ 1–1,5 cm · Épais ≈ 2–2,5 cm de diamètre",
        "modal1.thickness.thin": "Fin",
        "modal1.thickness.thick": "Épais",
        "modal1.thickness.any": "Peu importe",
        "modal1.thickness.intro": "Pas sûr de quoi choisir ? Voici comment décider selon votre usage :",
        "modal1.thickness.guide.thin": "≈ 1 à 1,5 cm de diamètre, plus flexible et souple, idéal pour les gencives sensibles et un nettoyage précis entre les dents.",
        "modal1.thickness.guide.thick": "≈ 2 à 2,5 cm de diamètre, plus robuste et durable, recommandé pour un usage quotidien intensif et une prise en main plus ferme.",
        "modal1.thickness.guide.any": "laissez-nous sélectionner l'épaisseur selon nos meilleures récoltes du moment.",

        /* ── INDEX : POPUP PRODUIT 2 ── */
        "modal2.desc": "Lot de 5 bâtonnets en bois de fagara, importés du Togo. Leur goût vif, avec un léger picotement, change agréablement du siwak.",

        /* ── INDEX : TÉMOIGNAGES ── */
        "reviews.eyebrow": "Témoignages",
        "reviews.title.part1": "Ce que disent mes",
        "reviews.title.part2": "clients",
        "reviews.subtitle": "Des avis depuis Genève et toute la Suisse",
        "review1.text": "\"Une découverte exceptionnelle ! Les notes mentholées de l'Allo procurent une fraîcheur intense et durable. Son léger effet anesthésiant naturel a soulagé mes gencives sensibles instantanément. Un vrai bonheur.\"",
        "review1.name": "Sophie",
        "review1.location": "Genève · Mars 2026",
        "review1.tag": "Allo Togo",
        "review2.text": "\"Qualité exceptionnelle. Le bâton est frais, flexible, avec cet arôme poivré caractéristique d'un Siwak de première qualité. J'en commande pour toute ma famille.\"",
        "review2.name": "Mark",
        "review2.location": "Lausanne · Février 2026",
        "review2.tag": "Siwak Premium",
        "review3.text": "\"Je n'utilise plus que ça ! J'ai combiné le Siwak et le bâton Allo Togo dans ma routine quotidienne et j'ai adoré le résultat. Leurs bienfaits purifiants sont incroyables, ma bouche n'a jamais été aussi saine et propre.\"",
        "review3.name": "Inès",
        "review3.location": "Zürich · Avril 2026",
        "review3.tag": "Kit Hygiène",
        "stats.reviews": "Année d'usage ancestral",
        "stats.delivery": "Expédition",

        /* ── INDEX : FAQ ── */
        "faq.eyebrow": "Questions fréquentes",
        "faq.title.part1": "Tout savoir sur le",
        "faq.title.part2": "Siwak",
        "faq.q1": "Comment utiliser le siwak pour la première fois ?",
        "faq.a1": "Retirez l'écorce sur environ 1 cm, mâchonnez la pointe jusqu'à ce que les fibres s'écartent, puis frottez doucement les dents. Le mode d'emploi détaillé figure sur la fiche de chaque bâton.",
        "faq.q2": "Combien de temps dure un bâton ?",
        "faq.a2": "Un bâton tient au moins un mois, souvent davantage selon l'usage : à chaque nouvelle pointe, il raccourcit d'environ 1 cm.",
        "faq.q3": "Le siwak blanchit-il les dents ?",
        "faq.a3": "Le siwak est utilisé traditionnellement pour nettoyer les dents et laisse une sensation de propreté. Ce n'est pas un traitement blanchissant : pour toute question sur la couleur de vos dents, demandez conseil à votre dentiste.",
        "faq.q4": "Le siwak est-il utile pour l'hygiène bucco-dentaire ?",
        "faq.a4": "Le siwak est utilisé depuis des siècles pour le soin des dents, et son usage a été encouragé par l'<a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">OMS</a>. Il s'utilise de préférence en complément d'une bonne routine : brossage avec un dentifrice et contrôles réguliers chez le dentiste.",
        "faq.q5": "Dois-je utiliser du dentifrice en plus du siwak ?",
        "faq.a5": "Oui, je vous conseille de garder votre brossage habituel avec un dentifrice, matin et soir, et d'utiliser le siwak en complément dans la journée.",
        "faq.q6": "Où trouver du siwak de qualité en Suisse (Migros, Coop, Manor) ?",
        "faq.a6": "Il est souvent difficile de trouver du siwak frais en grande distribution ou en pharmacie. Chez SIVÀA Geneva, vous le commandez en ligne : livraison Swiss Post dans toute la Suisse (expédition sous 48h + 2–3 jours) ou retrait gratuit aux Acacias, à Genève (paiement Twint ou Revolut).",
        "faq.q7": "Je souhaite choisir si mon bâton sera fin ou épais, comment faire ?",
        "faq.a7": "Choisissez l'épaisseur au moment de la commande, ou ajoutez un message : je sélectionnerai le bâton le plus adapté à vos envies.",
        "faq.payment.q": "Quels modes de paiement acceptez-vous ?",
        "faq.payment.a": "J'accepte Twint et Revolut. Minimum CHF 15.00 d'articles.",
        "faq.noQuestion": "Votre question n'est pas listée ?",
        "faq.contactBtn": "💬 Me contacter",

        /* ── ATELIER GENÈVE ── */
        "loc.eyebrow": "Localisation & Prestige",
        "loc.title.part1": "Votre siwak à",
        "loc.title.part2": "Genève",
        "loc.subtitle": "Retrait aux <strong style=\"color:#d7e7d4;\">Acacias, Genève</strong>, à deux pas de Plainpalais, sur rendez-vous pour une remise en main propre.",
        "loc.country": "Suisse",
        "loc.district": "Quartier des Acacias",
        "loc.appointment.title": "Retrait sur rendez-vous",
        "loc.appointment.desc": "Disponible 7j/7, Contactez-moi pour convenir d'un horaire adapté à vos disponibilités.",
        "loc.payment.title": "Paiement Twint Genève & Revolut",
        "loc.payment.desc": "Règlement sécurisé à réception.  Minimum CHF 15.00 pour échange en main propre.",
        "loc.cta": "📞 Prendre rendez-vous à Genève",

        /* ── INDEX : CTA FINAL ── */
        "cta.eyebrow": "Livraison Swiss Post · expédition sous 48h + 2–3 jours",
        "cta.title.part1": "Commencez votre rituel",
        "cta.title.part2": "aujourd'hui",
        "cta.subtitle": "Rejoignez les centaines de Genevois qui ont adopté le rituel du Siwak. Naturel, efficace, éternel.",
        "cta.button": "Commander mon Siwak →",

        /* ── FOOTER (commun à toutes les pages) ── */
        "footer.tagline": "L'excellence suisse au service d'un rituel millénaire.",
        "footer.col.products": "Produits",
        "footer.product.siwak": "Bâton de Siwak Premium",
        "footer.product.togo": "Allo Togo",
        "footer.product.etui": "Étui de Protection Siwak",
        "footer.col.info": "Informations",
        "footer.info.journal": "Journal",
        "footer.info.contact": "Contact",
        "prestige.eyebrow": "Excellence & Confiance",
        "prestige.title": "Garanties Prestige",
        "prestige.pay.title": "Paiement Twint ou Revolut",
        "prestige.pay.text": "Paiement simple par <strong>Twint ou Revolut</strong>. Je valide chaque commande personnellement.",
        "prestige.min.title": "Livraison possible dès 15 CHF",
        "prestige.min.text": "Commande possible dès <strong>CHF 15.00 d'articles</strong>, en livraison comme en retrait.",
        "prestige.pickup.title": "Remise en Main Propre — Acacias, Genève",
        "prestige.pickup.text": "Retrait gratuit aux Acacias (Quai des Vernets 11, Genève). <a href=\"/contact.html\" style=\"color:#9dd75a;\">Contactez-moi</a> pour coordonner votre retrait.",
        "prestige.post.title": "Livraison Swiss Post",
        "prestige.post.text": "Expédition sous 48h dès réception du paiement. Livraison dans <strong>toute la Suisse</strong> en 2–3 jours ouvrés. <a href=\"/livraison-retrait.html\" style=\"color:#9dd75a;\">Tous les détails</a>",
        "toothpaste.eyebrow": "Le Rituel Complet",
        "toothpaste.title.part1": "Nos",
        "toothpaste.title.part2": "Dentifrices",
        "toothpaste.title.part3": "Siwak",
        "footer.address": "📍 Quai des Vernets 11, 1227 Genève (Acacias)",
        "btn.more": "En savoir plus",
        "pp.tree.p1.alt": "Arbre à siwak (Salvadora persica) aux branches emmêlées et racines apparentes, dont est issu le bâton de siwak",
        "pp.tree.p1.caption": "<em>Salvadora persica</em>, l'arbre dont les racines donnent le bâton de siwak.",
        "pp.tree.p2.alt": "Tronc de fagara (Zanthoxylum zanthoxyloides) couvert d'épines, l'arbuste dont vient le bâton Allo Togo",
        "pp.tree.p2.caption": "Le fagara (<em>Zanthoxylum zanthoxyloides</em>), dont les racines et les branches donnent le bâton Allo.",
        "pp.map.title": "Retrait aux Acacias (Genève)",
        "pp.map.address": "Quai des Vernets 11, 1227 Genève",
        "pp.map.directions": "Itinéraire →",
        "cmp.row.taste": "Goût",
        "cmp.row.texture": "Texture",
        "cmp.row.use": "Usage",
        "cmp.row.format": "Format",
        "cmp.col.siwak": "Siwak",
        "cmp.col.allo": "Allo Togo",
        "cmp.siwak.taste": "Boisé, légèrement poivré",
        "cmp.allo.taste": "Vif, avec un léger picotement",
        "cmp.siwak.texture": "Fibres souples qui s'ouvrent en pinceau",
        "cmp.allo.texture": "Bois plus ferme, fibres plus dures",
        "cmp.siwak.use": "Routine de tous les jours, matin et soir",
        "cmp.allo.use": "En complément dans la journée, pour un goût plus vif",
        "cmp.siwak.format": "À l'unité, fin ou épais",
        "cmp.allo.format": "Lot de 5 bâtonnets",
        "cmp.link": "Comparatif complet : Siwak ou Allo Togo →",
        "pp.p1.intro": "Le siwak, aussi appelé miswak, est un bâton à mâcher taillé dans la racine d'un arbuste du désert. Il nettoie les dents sans eau, sans dentifrice et sans plastique : il suffit de préparer la pointe pour qu'elle forme une petite brosse naturelle.",
        "pp.p1.k1": "🌿 Racine de Salvadora persica, utilisée traditionnellement pour le soin des dents",
        "pp.p1.k2": "🌿 Sensation de propreté et d'haleine fraîche après usage",
        "pp.p1.k3": "🌿 S'utilise à sec, sans eau ni dentifrice",
        "pp.p1.k4": "🌿 Zéro plastique · 100 % biodégradable",
        "pp.p1.origin.title": "D'où vient votre bâton",
        "pp.p1.origin.1": "Salvadora persica est un arbuste des régions arides, d'Afrique de l'Est jusqu'au sous-continent indien, que l'on surnomme « l'arbre à brosse à dents ». Ce sont ses racines, souples et fibreuses, qui donnent le bâton.",
        "pp.p1.origin.2": "Nos bâtons sont récoltés à la main au Pakistan, puis coupés à la bonne longueur. Leur usage pour l'hygiène bucco-dentaire est très ancien, et l'<a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">OMS</a> l'a encouragé dans ses travaux sur les pratiques traditionnelles.",
        "pp.p1.use.title": "Comment l'utiliser",
        "pp.p1.use.1": "<strong>Préparer :</strong> retirez l'écorce sur environ 1 cm à une extrémité.",
        "pp.p1.use.2": "<strong>Mâcher :</strong> mâchonnez doucement cette extrémité avec les molaires, jusqu'à ce que les fibres s'écartent en petits poils.",
        "pp.p1.use.3": "<strong>Frotter :</strong> brossez les dents par petits mouvements, de la gencive vers le bord de la dent, côté extérieur puis côté intérieur.",
        "pp.p1.use.4": "<strong>Couper :</strong> quand les fibres sont usées ou ont perdu leur goût, coupez environ 1 cm et reprenez à l'étape 1.",
        "pp.p1.use.5": "<strong>Ranger :</strong> rincez la pointe, secouez-la et rangez le bâton au sec, idéalement dans un étui.",
        "pp.p1.life.title": "Durée de vie et conservation",
        "pp.p1.life.1": "Un bâton tient au moins un mois, souvent davantage selon l'usage : à chaque nouvelle pointe, il raccourcit d'environ 1 cm.",
        "pp.p1.life.2": "Gardez-le dans un endroit sec et aéré, à l'abri de la poussière. S'il a séché et que la pointe est devenue dure, laissez tremper l'extrémité quelques minutes dans de l'eau pour l'assouplir.",
        "pp.p1.cmp.title": "Siwak ou Allo ?",
        "pp.p1.faq.1.q": "Le siwak remplace-t-il ma brosse à dents ?",
        "pp.p1.faq.1.a": "Beaucoup l'utilisent en complément : brosse et dentifrice matin et soir, siwak dans la journée ou en déplacement. Pour toute question sur votre santé bucco-dentaire, demandez conseil à votre dentiste.",
        "pp.p1.faq.2.q": "Faut-il de l'eau ou du dentifrice ?",
        "pp.p1.faq.2.a": "Non. Le siwak s'utilise à sec, n'importe où. Vous pouvez simplement rincer la pointe avant et après usage.",
        "pp.p1.faq.3.q": "Quel goût a-t-il ?",
        "pp.p1.faq.3.a": "Un goût boisé et légèrement poivré, plus doux que celui de l'Allo Togo.",
        "pp.p1.faq.4.q": "Combien de bâtons commander ?",
        "pp.p1.faq.4.a": "Un bâton tient au moins un mois, souvent davantage selon l'usage : à chaque nouvelle pointe, il raccourcit d'environ 1 cm. Le prix baisse avec la quantité : 1 pièce CHF 6, 2 pièces CHF 11, 3 pièces CHF 15. Dès 3 pièces, la remise en main propre est possible à Genève.",
        "pp.p1.faq.5.q": "Peut-on l'emporter en voyage ?",
        "pp.p1.faq.5.a": "Oui. Il est léger et n'a besoin ni d'eau ni de dentifrice. Un étui le protège dans le sac ou la trousse de toilette.",
        "pp.p2.intro": "L'Allo Togo est un frotte-dents d'Afrique de l'Ouest, taillé dans le bois du fagara. Plus vif que le siwak en bouche, il s'utilise de la même façon : on mâche la pointe jusqu'à ce qu'elle forme une brosse.",
        "pp.p2.k1": "🌿 Bois de fagara, utilisé traditionnellement en Afrique de l'Ouest",
        "pp.p2.k2": "🌿 Goût vif et léger picotement en bouche",
        "pp.p2.k3": "🌿 Lot de 5 bâtonnets, fins ou épais au choix",
        "pp.p2.k4": "🌿 Sans plastique, entièrement biodégradable",
        "pp.p2.origin.title": "D'où vient l'Allo Togo",
        "pp.p2.origin.1": "Le fagara (Zanthoxylum zanthoxyloides) est un arbuste épineux d'Afrique de l'Ouest, reconnaissable aux aiguillons qui couvrent son tronc. Ses racines et ses branches servent depuis des générations de frotte-dents dans la région.",
        "pp.p2.origin.2": "Les bâtonnets Allo de SIVÀA sont importés directement du Togo et vendus par lots de 5. Leur bois contient des composés naturels qui donnent ce léger picotement pendant la mastication.",
        "pp.p2.use.title": "Comment l'utiliser",
        "pp.p2.use.1": "<strong>Choisir :</strong> prenez un bâtonnet du lot et gardez les autres au sec.",
        "pp.p2.use.2": "<strong>Assouplir :</strong> mâchonnez une extrémité avec les molaires. Le fagara est plus ferme : comptez un peu plus de temps pour que les fibres s'ouvrent.",
        "pp.p2.use.3": "<strong>Nettoyer :</strong> frottez doucement chaque dent, le long de la gencive, sans appuyer.",
        "pp.p2.use.4": "<strong>Renouveler :</strong> quand la pointe est usée, coupez environ 1 cm et mâchez la nouvelle extrémité.",
        "pp.p2.use.5": "<strong>Sécher :</strong> rincez le bâtonnet et laissez-le sécher à l'air avant de le ranger.",
        "pp.p2.life.title": "Durée de vie et conservation",
        "pp.p2.life.1": "Chaque bâtonnet tient au moins un mois, souvent davantage selon l'usage : à chaque nouvelle pointe, il raccourcit d'environ 1 cm. Avec un lot de 5, vous avez de quoi tenir plusieurs mois.",
        "pp.p2.life.2": "Rangez les bâtonnets non entamés dans un endroit sec. Celui que vous utilisez se garde rincé et séché à l'air ; s'il durcit trop, quelques minutes dans l'eau suffisent à ramollir la pointe.",
        "pp.p2.cmp.title": "Allo ou siwak ?",
        "pp.p2.cmp.intro": "Vous hésitez avec le siwak ? Voici ce qui les distingue.",
        "pp.p2.faq.1.q": "Pourquoi l'Allo Togo pique-t-il un peu ?",
        "pp.p2.faq.1.a": "Le bois de fagara contient des composés naturels qui provoquent un léger picotement pendant la mastication. C'est normal, et c'est ce qui donne à l'Allo son goût caractéristique.",
        "pp.p2.faq.2.q": "Peut-on alterner Allo Togo et siwak ?",
        "pp.p2.faq.2.a": "Oui. Beaucoup gardent le siwak pour la routine du matin et prennent un bâtonnet Allo dans la journée, quand ils ont envie d'un goût plus vif.",
        "pp.p2.faq.3.q": "Le lot peut-il se partager ?",
        "pp.p2.faq.3.a": "Oui : les 5 bâtonnets sont indépendants. Chaque personne garde le sien, rincé et séché après usage.",
        "pp.p2.faq.4.q": "Le goût est-il fort la première fois ?",
        "pp.p2.faq.4.a": "Le picotement peut surprendre au début. Commencez par de courtes séances de mastication, le temps de vous habituer au goût.",
        "pp.p2.faq.5.q": "Faut-il de l'eau ou du dentifrice avec l'Allo ?",
        "pp.p2.faq.5.a": "Non, l'Allo s'utilise à sec, comme le siwak. Un rinçage rapide de la pointe avant et après suffit.",
        "pp.p3.intro": "Un étui solide pour garder votre siwak propre quand il quitte la salle de bain : dans le sac, la poche ou la valise.",
        "pp.p3.k1": "🌿 Matériau épais et solide",
        "pp.p3.k2": "🌿 Protège de la poussière et de l'humidité",
        "pp.p3.k3": "🌿 S'ouvre et se ferme facilement",
        "pp.p3.k4": "🌿 Format compact pour le sac ou la poche",
        "pp.p3.why.title": "À quoi sert l'étui",
        "pp.p3.why.1": "Un siwak se garde au sec et à l'air, mais il a besoin d'une protection quand vous le transportez. L'étui évite qu'il se salisse au contact des clés, de la monnaie ou du fond du sac.",
        "pp.p3.why.2": "Il permet aussi de l'avoir toujours sur soi : après un café, au bureau ou en voyage, votre siwak est prêt à l'emploi.",
        "pp.p3.use.title": "Bien l'utiliser",
        "pp.p3.use.1": "<strong>Rincer :</strong> passez la pointe de votre siwak sous l'eau et secouez-la.",
        "pp.p3.use.2": "<strong>Sécher :</strong> laissez la pointe sécher quelques instants à l'air.",
        "pp.p3.use.3": "<strong>Ranger :</strong> glissez le bâton dans l'étui et refermez-le.",
        "pp.p3.use.4": "<strong>Aérer :</strong> à la maison, sortez le siwak de l'étui pour qu'il continue de sécher à l'air.",
        "pp.p3.care.title": "Entretien",
        "pp.p3.care.1": "Rincez l'étui à l'eau claire de temps en temps et laissez-le sécher ouvert avant d'y ranger à nouveau votre siwak.",
        "pp.p3.faq.1.q": "Le siwak est-il fourni avec l'étui ?",
        "pp.p3.faq.1.a": "Non, l'étui est vendu seul (CHF 6.00). Vous pouvez l'ajouter à votre commande de siwak, directement depuis la page de paiement.",
        "pp.p3.faq.2.q": "Quelle taille de bâton accepte-t-il ?",
        "pp.p3.faq.2.a": "Il est prévu pour le bâton de siwak SIVÀA. Si vous avez un doute sur la taille, écrivez-moi sur WhatsApp avant de commander.",
        "pp.p3.faq.3.q": "Peut-on y ranger un bâtonnet Allo Togo ?",
        "pp.p3.faq.3.a": "Écrivez-moi sur WhatsApp en précisant l'épaisseur choisie : je vous dirai si le bâtonnet y entre.",
        "pp.p3.faq.4.q": "L'étui garde-t-il le siwak humide ?",
        "pp.p3.faq.4.a": "Il le protège de la poussière. Pour éviter l'humidité, rangez le bâton une fois sa pointe séchée et sortez-le de l'étui à la maison.",
        "pp.p3.faq.5.q": "Combien d'étuis prévoir ?",
        "pp.p3.faq.5.a": "Un par siwak en cours d'utilisation suffit. Si vous gardez un bâton à la maison et un autre au bureau, prévoyez-en deux.",
        "pp.p4.intro": "Un dentifrice qui réunit le siwak et le clou de girofle, une épice au parfum chaud. Il s'utilise comme un dentifrice ordinaire, avec votre brosse à dents habituelle.",
        "pp.p4.k1": "🌿 Extraits de siwak (Salvadora persica)",
        "pp.p4.k2": "🌿 Clou de girofle, au goût chaud et épicé",
        "pp.p4.k3": "🌿 Pour le brossage du matin et du soir",
        "pp.p4.k4": "🌿 Se combine avec le bâton de siwak dans la journée",
        "pp.p4.inside.title": "Ce qu'il contient",
        "pp.p4.inside.1": "Sa formule associe des extraits de siwak et de clou de girofle. La liste complète des ingrédients figure sur l'emballage : consultez-la si vous êtes sensible à certains composants.",
        "pp.p4.use.title": "Comment l'utiliser",
        "pp.p4.use.1": "Déposez une petite quantité de dentifrice sur votre brosse à dents.",
        "pp.p4.use.2": "Brossez toutes les faces des dents pendant deux minutes.",
        "pp.p4.use.3": "Recrachez, puis rincez-vous la bouche.",
        "pp.p4.use.4": "Répétez matin et soir.",
        "pp.p4.pair.title": "Avec un siwak",
        "pp.p4.pair.1": "Le dentifrice et le bâton se complètent : brossage avec le dentifrice matin et soir, siwak dans la journée, par exemple après un repas ou un café.",
        "pp.p4.faq.1.q": "Le goût est-il fort ?",
        "pp.p4.faq.1.a": "Le clou de girofle donne un goût chaud et épicé, plus marqué qu'un dentifrice à la menthe.",
        "pp.p4.faq.2.q": "Pour qui est-il fait ?",
        "pp.p4.faq.2.a": "Pour celles et ceux qui aiment le goût du clou de girofle et veulent un dentifrice aux extraits de siwak. En cas de doute (enfants, grossesse, allergie), demandez conseil à votre dentiste ou à votre pharmacien.",
        "pp.p4.faq.3.q": "Peut-on l'utiliser avec une brosse à dents électrique ?",
        "pp.p4.faq.3.a": "Oui, il s'utilise avec une brosse manuelle comme avec une brosse électrique.",
        "pp.p4.faq.4.q": "Quelle différence avec le dentifrice au charbon actif ?",
        "pp.p4.faq.4.a": "Celui-ci mise sur le goût chaud et épicé du clou de girofle. Le dentifrice au charbon actif, de couleur noire, laisse une sensation de bouche nette. Les deux contiennent des extraits de siwak.",
        "pp.p4.faq.5.q": "Comment le conserver ?",
        "pp.p4.faq.5.a": "Refermez bien le tube après usage et gardez-le à température ambiante.",
        "pp.p5.intro": "Un dentifrice noir qui associe le charbon actif aux extraits de siwak. Une façon originale de prolonger votre routine naturelle, avec une sensation de bouche nette après le brossage.",
        "pp.p5.k1": "🌿 Charbon actif et extraits de siwak",
        "pp.p5.k2": "🌿 Couleur noire, se rince à l'eau claire",
        "pp.p5.k3": "🌿 À utiliser avec votre brosse à dents habituelle",
        "pp.p5.k4": "🌿 À compléter par un siwak entre deux brossages",
        "pp.p5.inside.title": "Ce qu'il contient",
        "pp.p5.inside.1": "Il réunit du charbon actif, qui lui donne sa couleur noire, et des extraits de siwak. Retrouvez la composition détaillée sur l'emballage avant la première utilisation.",
        "pp.p5.use.title": "Comment l'utiliser",
        "pp.p5.use.1": "Prenez l'équivalent d'un petit pois de dentifrice.",
        "pp.p5.use.2": "Brossez doucement, sans appuyer, pendant deux minutes.",
        "pp.p5.use.3": "Rincez soigneusement la bouche et la brosse à l'eau claire.",
        "pp.p5.use.4": "Utilisez-le chaque jour ou en alternance, selon vos habitudes.",
        "pp.p5.pair.title": "Avec un siwak",
        "pp.p5.pair.1": "Gardez ce dentifrice pour les brossages du matin et du soir, et le siwak pour la journée : ensemble, ils forment une routine simple.",
        "pp.p5.faq.1.q": "Pourquoi est-il noir ?",
        "pp.p5.faq.1.a": "Sa couleur vient du charbon actif qu'il contient.",
        "pp.p5.faq.2.q": "Pour qui est-il fait ?",
        "pp.p5.faq.2.a": "Pour celles et ceux qui veulent un dentifrice au charbon actif et aux extraits de siwak. Si vos dents ou vos gencives sont sensibles, demandez conseil à votre dentiste avant de l'utiliser au quotidien.",
        "pp.p5.faq.3.q": "Convient-il à une brosse à dents électrique ?",
        "pp.p5.faq.3.a": "Oui. Pensez simplement à bien rincer la tête de la brosse après usage.",
        "pp.p5.faq.4.q": "Quelle différence avec le dentifrice au clou de girofle ?",
        "pp.p5.faq.4.a": "Celui-ci, au charbon actif, laisse une sensation de bouche nette. Le dentifrice au clou de girofle se distingue par son goût chaud et épicé. Les deux contiennent des extraits de siwak.",
        "pp.p5.faq.5.q": "Comment conserver le tube ?",
        "pp.p5.faq.5.a": "Bouchez-le après chaque utilisation et rangez-le à l'abri de la chaleur.",
        "pp.faq.title": "Questions fréquentes",
        "footer.info.shipping": "Livraison & retrait",
        "pp.crumb.home": "Accueil",
        "pp.crumb.products": "Produits",
        "pp.bundle.title": "Prix dégressif",
        "pp.whatsapp": "Une question ? WhatsApp",
        "pp.delivery.title": "Livraison & retrait",
        "pp.delivery.text": "Retrait gratuit aux Acacias, à deux pas de Plainpalais, sur rendez-vous. Partout ailleurs en Suisse, Swiss Post livre à Lausanne, Berne, Bâle ou Zurich en 2 à 3 jours ouvrés, après une expédition sous 48 h (CHF 10.00 par commande).",
        "pp.delivery.link": "Voir le lieu de retrait →",
        "pp.related.title": "Vous aimerez aussi",
        "pp.related.see": "Voir le produit →",
        "pp.read.title": "À lire aussi",
        "ship.eyebrow": "Commander depuis toute la Suisse",
        "ship.title": "Livraison & retrait",
        "ship.intro": "Vos produits SIVÀA sont expédiés par Swiss Post partout en Suisse, ou vous les récupérez gratuitement en main propre à Genève. Voici tout ce qu'il faut savoir avant de commander.",
        "ship.post.title": "Livraison Swiss Post dans toute la Suisse",
        "ship.post.text": "Frais de port : <strong>CHF 10.00 par commande</strong>. Votre colis est expédié <strong>sous 48h</strong> après réception du paiement, puis livré en <strong>2 à 3 jours ouvrés</strong>. Le tarif et les délais sont les mêmes partout en Suisse : Genève, Carouge, Lancy, Nyon, Lausanne, Fribourg, Berne, Bâle, Zurich ou ailleurs.",
        "ship.pickup.title": "Retrait gratuit aux Acacias (Genève)",
        "ship.pickup.text": "Vous êtes à Genève ? Choisissez le <strong>retrait en main propre, gratuit</strong>, aux Acacias (Quai des Vernets 11, 1227 Genève), à deux pas de Plainpalais et de Carouge. Après votre commande, je vous contacte sur WhatsApp pour fixer l'heure et le lieu exact du retrait.",
        "ship.min.title": "Minimum de commande",
        "ship.min.text": "Les commandes sont possibles dès <strong>CHF 15.00 d'articles</strong> (hors frais de port), en livraison comme en retrait. Par exemple : 3 bâtons de Siwak, ou un dentifrice et un Allo Togo.",
        "ship.pay.title": "Paiement",
        "ship.pay.text": "Paiement par <strong>Twint</strong> ou <strong>Revolut</strong>. Pour une livraison, le paiement se fait avant l'expédition et la capture est à joindre à la commande. Pour un retrait, vous pouvez aussi payer sur place en Twint.",
        "ship.abroad.title": "Livraison hors de Suisse",
        "ship.abroad.text": "Pour le moment, les commandes sont livrées <strong>uniquement en Suisse</strong>.",
        "ship.returns.title": "Retours",
        "ship.returns.text": "Vous disposez de 14 jours après réception pour exercer votre droit de rétractation. Les conditions complètes figurent dans les <a href=\"/mentions-legales.html\" style=\"color:#9dd75a;\">mentions légales</a>.",
        "ship.cta": "Commander maintenant →",
        "ship.contact": "Une question sur votre livraison ? Écrivez-moi sur WhatsApp",
        "footer.col.legal": "Légal",
        "footer.legal.cgv": "CGV",
        "footer.legal.privacy": "Confidentialité",
        "footer.legal.returns": "Retours",
        "footer.copyright": "© 2026 SIVÀA Geneva · Genève, Suisse.",
        "footer.single": "© 2026 SIVÀA Geneva · L'excellence du rituel ancestral, sublimée par l'expertise botanique suisse.",

        /* ── BLOG ── */
        "blog.hero.eyebrow": "Journal & Savoir-faire",
        "blog.hero.title.part1": "Le",
        "blog.hero.title.part2": "Journal",
        "blog.hero.title.part3": "SIVÀA Geneva",
        "blog.hero.subtitle": "Tradition, science dentaire naturelle, rituels millénaires. Tout ce qu'il faut savoir sur le Siwak et l'hygiène naturelle.",
        "blog.featured.badge": "Article vedette",
        "blog.featured.cat": "Tradition & Sunna",
        "blog.featured.title": "Qu'est-ce que le Siwak ? Bienfaits, utilisation et Sunna",
        "blog.featured.excerpt": "Le Siwak n'est pas qu'une alternative naturelle à la brosse à dents. C'est un héritage botanique vieux de plusieurs millénaires, au cœur des civilisations islamique, africaine et asiatique. Découvrez pourquoi des millions de personnes l'utilisent encore aujourd'hui.",
        "blog.featured.date": "12 Mai 2026",
        "blog.featured.readTime": "8 min de lecture",
        "blog.featured.link": "Lire l'article complet",
        "blog.filter.all": "Tous les articles",
        "blog.filter.tradition": "Tradition",
        "blog.filter.science": "Science & Santé",
        "blog.filter.guide": "Guide Pratique",
        "blog.filter.local": "Guide Local",
        "blog.readArticle": "Lire l'article",
        "blog.cat.science": "Science & Santé",
        "blog.cat.guide": "Guide Pratique",
        "blog.cat.tradition": "Tradition",
        "blog.cat.local": "Guide Local",
        "blog.art1.title": "Siwak vs Brosse à dents : lequel est meilleur ?",
        "blog.art1.excerpt": "Face aux technologies soniques et aux poils en nylon, le bois de brossage naturel tient-il la route ?",
        "blog.art1.date": "08 Mai 2026",
        "blog.art2.title": "Acheter du vrai Siwak à Genève : notre guide complet",
        "blog.art2.excerpt": "De Genève aux meilleures adresses locales, comment reconnaître un siwak frais et de qualité.",
        "blog.art2.date": "02 Mai 2026",
        "blog.art3.title": "Xylitol + Siwak : la combinaison idéale pour vos dents",
        "blog.art3.excerpt": "La synergie méconnue entre le sucre de bouleau et la racine de Salvadora persica — inspiré des protocoles de la Dr. Ellie Phillips.",
        "blog.art3.date": "20 Mai 2026",
        "blog.art3.image.alt": "Xylitol et Siwak combinés pour une hygiène dentaire naturelle complète",
        "blog.thickness.title": "Siwak épais ou fin : lequel choisir ?",
        "blog.thickness.excerpt": "Tableau comparatif, profils recommandés et astuces pratiques pour choisir la bonne épaisseur selon vos gencives et votre usage.",
        "blog.togo.date": "21 Nov 2026",
        "blog.togo.title": "Siwak ou Allo Togo : différences et lequel utiliser selon le moment",
        "blog.togo.excerpt": "Tableau comparatif, puis nos conseils pour le matin, après les repas et en voyage.",
        "blog.thickness.date": "12 Sept 2026",
        "blog.thickness.image.alt": "Comparaison entre un bâton de Siwak fin et un bâton de Siwak épais",
        "blog.art4.title": "Les 70 composés actifs du Salvadora persica expliqués",
        "blog.art4.excerpt": "Silice, tanins, fluor naturel, alcaloïdes. Décryptage scientifique de ce que contient vraiment votre bâton.",
        "blog.art4.date": "20 Avr 2024",
        "blog.art5.title": "L'histoire du Siwak à travers les civilisations",
        "blog.art5.excerpt": "D'Arabie en Égypte ancienne, du Pakistan à l'Afrique de l'Est — le voyage millénaire d'une plante sacrée.",
        "blog.art5.date": "14 Avr 2024",
        "blog.art6.title": "Comment conserver son siwak frais plus longtemps ?",
        "blog.art6.excerpt": "Conseils d'expert pour préserver la fraîcheur, les arômes et l'efficacité de votre bâton de Siwak.",
        "blog.art6.date": "06 Avr 2024",
        "blog.art7.title": "Siwak pendant le Ramadan : ce que dit la tradition",
        "blog.art7.excerpt": "Le Siwak peut-il être utilisé pendant le jeûne ? Les avis des savants et la pratique des compagnons.",
        "blog.art7.date": "29 Mar 2024",
        "blog.art8.title": "Coulisses de ma sélection SIVÀA à Genève",
        "blog.art8.excerpt": "Comment je choisis, teste et conditionne chaque bâton avant de vous le livrer à Genève.",
        "blog.art8.date": "18 Mar 2024",
        "blog.art9.title": "Blancheur naturelle : la silice du Siwak vs les blanchissants chimiques",
        "blog.art9.excerpt": "Comparatif scientifique entre la silice naturelle du Salvadora persica et les agents blanchissants industriels.",
        "blog.art9.date": "10 Mar 2024",
        "blog.loadMore": "Voir plus d'articles",
        "blog.newsletter.eyebrow": "Journal & Rituels",
        "blog.newsletter.title": "Restez informé des nouveaux articles",
        "blog.newsletter.subtitle": "Recevez chaque mois les meilleurs articles du Journal SIVÀA — tradition, science, et savoir-faire botanique.",
        "blog.newsletter.placeholder": "votre@email.ch",
        "blog.newsletter.subscribe": "S'abonner",
        "blog.newsletter.nospam": "Pas de spam. Désinscription en un clic.",
        "blog.featured.image.alt": "Bienfaits et utilisation du Siwak, bâton à mâcher naturel traditionnel",
        "blog.art1.image.alt": "Comparatif Siwak contre brosse à dents électrique moderne",
        "blog.art2.image.alt": "Acheter du siwak authentique à Genève, SIVÀA Geneva",
        "blog.art3.image.alt": "Guide d'utilisation du Siwak pour débutants, étape par étape",
        "blog.art4.image.alt": "Composés actifs du Salvadora persica et silice naturelle",
        "blog.art5.image.alt": "Histoire millénaire du Siwak à travers les civilisations",
        "blog.art6.image.alt": "Conservation et fraîcheur d'un bâton de Siwak",
        "blog.art7.image.alt": "Utilisation du Siwak pendant le mois du Ramadan",
        "blog.art8.image.alt": "Sélection des bâtons de siwak SIVÀA Geneva",
        "blog.art9.image.alt": "Blancheur naturelle du Siwak et silice active",
        "article.breadcrumb": "Siwak : Bienfaits & Sunna",
        "article.hero.title": "Qu'est-ce que le Siwak ? <em class=\"accent\">Bienfaits</em>, utilisation et <em class=\"accent\">Sunna</em>",
        "article.hero.intro": "Depuis plus de quatorze siècles, une racine humble préserve l'architecture buccale des humains avec une efficacité que la science moderne ne cesse de confirmer. Le Siwak — ou Miswak — n'est pas simplement une brosse à dents naturelle. C'est un héritage botanique, un acte de dévotion, et une pharmacopée vivante.",
        "article.meta.readTime": "Lecture · 8 min",
        "article.meta.date": "6 Avril 2026",
        "article.toc.title": "Sommaire",
        "article.toc.1": "I. L'Héritage Botanique",
        "article.toc.2": "II. La Dimension Spirituelle",
        "article.toc.3": "III. Analyse Scientifique",
        "article.toc.4": "IV. Art d'Emploi",
        "article.sidebar.cta.title": "Siwak Premium SIVÀA",
        "article.sidebar.cta.desc": "Sélectionné à la main au Pakistan, certifié par mes soins à Genève. La quintessence du bâton de Siwak.",
        "article.sidebar.cta.btn": "Commander · CHF 6.00 →",
        "article.sidebar.delivery": "Livraison Swiss Post · expédition sous 48h + 2–3 jours",
        "article.sidebar.langs.title": "Cet article en d'autres langues",
        "article.cta.title": "Commencez votre rituel <em class=\"accent\">aujourd'hui</em>",
        "article.cta.subtitle": "Quatorze siècles de sagesse botanique, sélectionnés avec la précision genevoise. Votre Siwak Premium vous attend.",
        "article.cta.btn": "Commander mon Siwak →",

        /* ── CONTACT ── */
        "contact.header.eyebrow": "Siwak à Genève",
        "contact.header.title.part1": "Me",
        "contact.header.title.part2": "contacter",
        "contact.header.subtitle": "Je réponds en général dans les 2–4 heures en journée.",
        "contact.form.subjectLabel": "Sujet de votre message",
        "contact.pill.order": "📦 Commande / Livraison",
        "contact.pill.product": "🌿 Question produit",
        "contact.pill.return": "↩️ Retour / Échange",
        "contact.pill.partner": "🤝 Partenariat",
        "contact.pill.other": "💬 Autre",
        "contact.field.firstname": "Prénom *",
        "contact.field.lastname": "Nom *",
        "contact.field.email": "Email *",
        "contact.field.subject": "Sujet",
        "contact.field.order": "N° de commande (si applicable)",
        "contact.field.message": "Votre message *",
        "contact.placeholder.firstname": "Ahmad",
        "contact.placeholder.lastname": "Al-Rashid",
        "contact.placeholder.email": "votre@email.ch",
        "contact.placeholder.order": "SIVAA-2026-XXXXX",
        "contact.placeholder.message": "Décrivez votre question ou situation…",
        "contact.send": "Envoyer sur WhatsApp",
        "contact.required": "* champs obligatoires",
        "contact.success.title": "WhatsApp s'est ouvert !",
        "contact.success.subtitle": "Envoyez le message pré-rempli dans WhatsApp, je vous réponds dans les 2–4 heures en journée.",
        "contact.success.again": "Envoyer un autre message",
        "contact.wa.title": "WhatsApp",
        "contact.wa.desc": "La façon la plus rapide. Réponse en quelques minutes.",
        "contact.wa.cta": "Ouvrir la conversation →",
        "contact.email.title": "Email",
        "contact.email.cta": "Envoyer un email →",
        "contact.info.title": "Informations pratiques",
        "contact.info.hours.label": "Horaires",
        "contact.info.hours.value": "Lundi – Vendredi, 9h – 18h",
        "contact.info.atelier.label": "Lieu de retrait",
        "contact.info.atelier.value": "Quai des Vernets 11, 1227 Genève, Suisse",
        "contact.info.delivery.label": "Livraison",
        "contact.info.delivery.value": "Swiss Post · 2–3 jours ouvrés, CHF 10.00 · toute la Suisse",
        "contact.info.returns.label": "Retours",
        "contact.info.returns.value": "14 jours sans justification, échange ou remboursement",
        "contact.order.note": "Vous avez passé commande ?",
        "contact.order.desc": "Pour toute question sur votre commande, munissez-vous de votre numéro (SIVAA-XXXX-XXXXX) et contactez-moi par WhatsApp pour un traitement prioritaire.",

        /* ── MERCI ── */
        "merci.banner": "Votre colis est en cours de préparation à Genève 🌿",
        "merci.title": "Merci !",
        "merci.sub": "Ta commande a bien été enregistrée.",
        "merci.orderNum": "Numéro :",
        "merci.recap": "Récapitulatif",
        "merci.delivery": "Livraison Swiss Post",
        "merci.total": "Total payé",
        "merci.emailSent": "Confirmation envoyée à",
        "merci.payLabel": "Finalise ton paiement",
        "merci.twint.title": "Twint",
        "merci.twint.sub": "App bancaire suisse · Instantané",
        "merci.twint.badge": "🇨🇭 Recommandé",
        "merci.twint.hint": "Envoie",
        "merci.twint.hint2": "à ce numéro depuis ton app Twint",
        "merci.twint.ref": "Référence :",
        "merci.revolut.title": "Payer avec Revolut",
        "merci.revolut.sub": "Lien de paiement direct ·",
        "merci.reassurance.q": "Une question ?",
        "merci.reassurance.link": "Contactez-moi directement sur WhatsApp",
        "merci.reassurance.end": ", je prépare votre colis personnellement à Genève. 🌿",
        "merci.afterPay": "Après paiement :",
        "merci.afterPay.desc": "ta commande est expédiée sous 24–48h via Swiss Post. Tu recevras ton numéro de suivi par email.",
        "merci.confirmWa": "Confirmer par WhatsApp",
        "merci.confirmEmail": "Confirmer par email",
        "merci.bottomImg": "Chaque bâton, sélectionné à la main. Chaque colis, préparé avec soin.",
        "merci.back": "← Retour à l'accueil"
    },

    en: {
        /* ── NAV ── */
        "nav.home": "Home",
        "nav.products": "Products",
        "nav.journal": "Journal",
        "nav.contact": "Contact",
        "nav.order": "Order",
        "nav.buy": "Buy",
        /* ── BANDEAU OFFRE ── */
        "offer.label": "Offer:",
        "offer.p1": "1 pc = 6 CHF",
        "offer.p2": "2 pcs = 11 CHF",
        "offer.p3": "3 pcs = 15 CHF",
        "offer.hand": "🤝 Hand delivery from 3 pcs",

        /* ── INDEX : HERO ── */
        "hero.badge": "Hand-harvested · Pakistan · Swiss Certified",
        "hero.title.part1": "The Art of",
        "hero.title.part2": "Siwak",
        "hero.title.part3": "in",
        "hero.title.part4": "Geneva",
        "hero.subtitle": "The natural toothbrush used traditionally for centuries. You chew the wooden stick until it forms a brush, for a feeling of cleanliness and fresh breath. Delivery across Switzerland: dispatched within 48h + 2–3 days.",
        "hero.cta.order": "Order now →",
        "hero.cta.discover": "Discover Siwak",
        "hero.trust.shipping": "🚚 Shipped within 48h + 2–3 days",
        "hero.trust.natural": "🌿 100% Natural",
        "hero.trust.ssl": "🔒 Twint or Revolut payment",
        "hero.badge.float": "🌿 A practice encouraged by the <a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">WHO</a>",
        "hero.image.alt": "Premium SIVÀA Geneva Siwak stick, Swiss natural toothbrush",

        /* ── INDEX : PRODUCTS ── */
        "products.eyebrow": "The Botanical Selection",
        "products.title.part1": "My",
        "products.title.part2": "Collection",
        "products.seeAll": "See all →",

        "product1.badge": "Hand-harvested · Pakistan",
        "product1.name": "Premium Siwak Stick",
        "product1.desc": "Salvadora persica root, hand-harvested. Used without water or toothpaste.",
        "product1.price": "CHF 6.00 per piece",
        "product1.discover": "Discover",
        "product1.image.alt": "SIVÀA Premium Siwak stick, natural Salvadora persica toothbrush",

        "product2.badge": "Chewing stick from Togo",
        "product2.name": "Allo Togo",
        "product2.desc": "Fagara sticks from Togo, with a sharp, slightly spicy taste.",
        "product2.price": "CHF 6.00 per 5 piece",
        "product2.image.alt": "Allo Togo chewing stick, natural Siwak alternative from Togo",

       "product3.badge": "Essential Accessory",
        "product3.name": "Siwak Protective Case",
        "product3.desc": "Protects your siwak from dust and moisture, wherever you go.",
        "product3.price": "CHF 6.00 per unit",
        "product3.image.alt": "Protective case for Siwak, hygienic travel case",

        "product4.badge": "Siwak · Clove",
        "product4.name": "Siwak Toothpaste — Clove",
        "product4.desc": "Siwak and clove extracts, with a warm, spicy taste.",
        "product4.price": "CHF 10.00 per piece",
        "product4.image.alt": "SIVÀA Geneva siwak toothpaste with clove",

        "modal4.desc": "Toothpaste with siwak and clove extracts, with a warm, spicy taste. Use it morning and evening with your usual toothbrush.",
        "modal4.shipping": "🚚 Swiss Post shipping fee · CHF 10.00 · shipped within 48h + 2–3 days",
        "modal4.priceLabel": "Price",
        "modal4.buy": "🛍 Buy now",

        "product5.badge": "Siwak · Activated charcoal",
        "product5.name": "Siwak Toothpaste — Activated Charcoal",
        "product5.desc": "Activated charcoal and siwak extracts, for a clean-mouth feeling.",
        "product5.price": "CHF 10.00 per piece",
        "product5.image.alt": "SIVÀA Geneva siwak toothpaste with activated charcoal",

        "modal5.desc": "Black toothpaste with activated charcoal and siwak extracts. An original alternative, for brushing that leaves a clean-mouth feeling.",
        "modal5.shipping": "🚚 Swiss Post shipping fee · CHF 10.00 · shipped within 48h + 2–3 days",
        "modal5.priceLabel": "Price",
        "modal5.buy": "🛍 Buy now",

        "modal3.desc": "A case to carry your siwak protected from dust and moisture. Handy in a bag, a pocket or a travel kit.",
        "modal3.shipping": "🚚 Swiss Post shipping fee · CHF 10.00 · shipped within 48h + 2–3 days",
        "modal3.priceLabel": "Price",
        "modal3.buy": "🛍 Buy now",
        "modal3.image.alt": "Travel case for natural Siwak",

        /* ── INDEX : POPUP 1 ── */
        "modal1.desc": "A siwak stick cut from the root of Salvadora persica, hand-harvested in Pakistan. It is used without water or toothpaste, wherever you are.",
        "modal1.shipping": "🚚 Swiss Post shipping fee · CHF 10.00 · shipped within 48h + 2–3 days",
        "modal1.priceLabel": "Price",
        "modal1.buy": "🛍 Buy now",

        "modal1.thickness.label": "Stick thickness",
        "thickness.sizes": "Thin ≈ 1–1.5 cm · Thick ≈ 2–2.5 cm in diameter",
        "modal1.thickness.thin": "Thin",
        "modal1.thickness.thick": "Thick",
        "modal1.thickness.any": "No preference",
        "modal1.thickness.intro": "Not sure what to choose? Here's how to decide based on your use:",
        "modal1.thickness.guide.thin": "≈ 1 to 1.5 cm in diameter, more flexible and supple, ideal for sensitive gums and precise cleaning between teeth.",
        "modal1.thickness.guide.thick": "≈ 2 to 2.5 cm in diameter, more robust and durable, recommended for intensive daily use and a firmer grip.",
        "modal1.thickness.guide.any": "let us select the thickness from our best current harvest.",

        /* ── INDEX : POPUP 2 ── */
        "modal2.desc": "A pack of 5 fagara-wood sticks imported from Togo. Their sharp taste, with a light tingle, makes a pleasant change from siwak.",

        /* ── INDEX : REVIEWS ── */
        "reviews.eyebrow": "Testimonials",
        "reviews.title.part1": "What my",
        "reviews.title.part2": "customers",
        "reviews.title.suffix": "say",
        "reviews.subtitle": "Reviews from Geneva and across Switzerland",
        "review1.text": "\"An amazing discovery! The minty notes in Allo provide intense, long-lasting freshness. Its mild, natural numbing effect instantly soothed my sensitive gums. It’s pure bliss.\"",
        "review1.name": "Sophie",
        "review1.location": "Geneva · March 2026",
        "review1.tag": "Allo Togo",
        "review2.text": "\"Exceptional quality. The stick is fresh, flexible, with that characteristic peppery aroma of top-quality Siwak. I order for my whole family.\"",
        "review2.name": "Mark",
        "review2.location": "Lausanne · February 2026",
        "review2.tag": "Premium Siwak",
        "review3.text": "\"I only use this now! I combined the Siwak and the Allo Togo stick in my daily routine and I loved the result. Their purifying benefits are incredible, my mouth has never been so healthy and clean.\"",
        "review3.name": "Inès",
        "review3.location": "Zurich · April 2026",
        "review3.tag": "Hygiene Kit ",
        "stats.reviews": "Year of traditional use",
        "stats.delivery": "Shipping",

        /* ── INDEX : FAQ ── */
        "faq.eyebrow": "Frequently asked questions",
        "faq.title.part1": "Everything about",
        "faq.title.part2": "Siwak",
        "faq.q1": "How do I use siwak for the first time?",
        "faq.a1": "Peel the bark back about 1 cm, chew the tip until the fibres separate, then gently rub your teeth. Detailed instructions are on each stick's product page.",
        "faq.q2": "How long does a stick last?",
        "faq.a2": "A stick lasts at least a month, often longer depending on use: each new tip shortens it by about 1 cm.",
        "faq.q3": "Does siwak whiten teeth?",
        "faq.a3": "Siwak is used traditionally to clean teeth and leaves a feeling of cleanliness. It is not a whitening treatment: for any question about the colour of your teeth, ask your dentist.",
        "faq.q4": "Is siwak useful for oral hygiene?",
        "faq.a4": "Siwak has been used for centuries to care for teeth, and its use has been encouraged by the <a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">WHO</a>. It is best used alongside a good routine: brushing with toothpaste and regular dental check-ups.",
        "faq.q5": "Should I use toothpaste as well as siwak?",
        "faq.a5": "Yes, I recommend keeping your usual brushing with toothpaste, morning and evening, and using siwak during the day as well.",
        "faq.q6": "Where can I find quality siwak in Switzerland (Migros, Coop, Manor)?",
        "faq.a6": "Fresh siwak is often hard to find in supermarkets or pharmacies. At SIVÀA Geneva you order online: Swiss Post delivery across Switzerland (dispatched within 48h + 2–3 days) or free pickup at Acacias, Geneva (payment by Twint or Revolut).",
        "faq.q7": "I'd like to choose whether my stick is thin or thick, how?",
        "faq.a7": "Choose the thickness when ordering, or add a message: I will select the stick that best suits you.",
        "faq.payment.q": "What payment methods do you accept?",
        "faq.payment.a": "I accept Twint and Revolut. Minimum CHF 15.00 of items.",
        "faq.noQuestion": "Your question isn't listed?",
        "faq.contactBtn": "💬 Contact me",

        /* ── INDEX : LOCATION SECTION ── */
        "loc.eyebrow": "Location & Prestige",
        "loc.title.part1": "Your siwak in",
        "loc.title.part2": "Geneva",
        "loc.subtitle": "Pickup at <strong style=\"color:#d7e7d4;\">Acacias, Geneva</strong>, a short walk from Plainpalais, by appointment for an in-person handover.",
        "loc.country": "Switzerland",
        "loc.district": "Acacias district",
        "loc.appointment.title": "Pickup by appointment",
        "loc.appointment.desc": "Available 7 days a week, Contact me to arrange a time that suits your schedule.",
        "loc.payment.title": "Twint Geneva & Revolut Payment",
        "loc.payment.desc": "Secure payment on reception. Minimum of CHF 15.00 for in-person exchanges.",
        "loc.cta": "📞 Book an appointment in Geneva",

        /* ── INDEX : CTA FINAL ── */
        "cta.eyebrow": "Swiss Post delivery · shipped within 48h + 2–3 days",
        "cta.title.part1": "Start your ritual",
        "cta.title.part2": "today",
        "cta.subtitle": "Join the hundreds of Genevans who have adopted the Siwak ritual. Natural, effective, timeless.",
        "cta.button": "Order my Siwak →",

        /* ── FOOTER ── */
        "footer.tagline": "Swiss excellence serving a millennial ritual.",
        "footer.col.products": "Products",
        "footer.product.siwak": "Premium Siwak Stick",
        "footer.product.togo": "Allo Togo",
        "footer.product.etui": "Siwak Protective Case",
        "footer.col.info": "Information",
        "footer.info.journal": "Journal",
        "footer.info.contact": "Contact",
        "prestige.eyebrow": "Excellence & Trust",
        "prestige.title": "Our Guarantees",
        "prestige.pay.title": "Payment by Twint or Revolut",
        "prestige.pay.text": "Simple payment by <strong>Twint or Revolut</strong>. I personally confirm every order.",
        "prestige.min.title": "Delivery from CHF 15",
        "prestige.min.text": "Orders possible from <strong>CHF 15.00 of items</strong>, for both delivery and pickup.",
        "prestige.pickup.title": "In-person pickup — Acacias, Geneva",
        "prestige.pickup.text": "Free pickup at Acacias (Quai des Vernets 11, Geneva). <a href=\"/contact.html\" style=\"color:#9dd75a;\">Contact me</a> to arrange your pickup.",
        "prestige.post.title": "Swiss Post delivery",
        "prestige.post.text": "Dispatched within 48h of receiving payment. Delivered <strong>anywhere in Switzerland</strong> in 2–3 business days. <a href=\"/livraison-retrait.html\" style=\"color:#9dd75a;\">All the details</a>",
        "toothpaste.eyebrow": "The Complete Ritual",
        "toothpaste.title.part1": "Our",
        "toothpaste.title.part2": "Siwak",
        "toothpaste.title.part3": "Toothpastes",
        "footer.address": "📍 Quai des Vernets 11, 1227 Geneva (Acacias)",
        "btn.more": "Learn more",
        "pp.tree.p1.alt": "Siwak tree (Salvadora persica) with tangled branches and exposed roots, the source of the siwak stick",
        "pp.tree.p1.caption": "<em>Salvadora persica</em>, the tree whose roots give the siwak stick.",
        "pp.tree.p2.alt": "Thorny trunk of a fagara tree (Zanthoxylum zanthoxyloides), the shrub the Allo Togo stick comes from",
        "pp.tree.p2.caption": "The fagara (<em>Zanthoxylum zanthoxyloides</em>), whose roots and branches give the Allo stick.",
        "pp.map.title": "Pickup at Acacias (Geneva)",
        "pp.map.address": "Quai des Vernets 11, 1227 Geneva",
        "pp.map.directions": "Directions →",
        "cmp.row.taste": "Taste",
        "cmp.row.texture": "Texture",
        "cmp.row.use": "Use",
        "cmp.row.format": "Format",
        "cmp.col.siwak": "Siwak",
        "cmp.col.allo": "Allo Togo",
        "cmp.siwak.taste": "Woody, slightly peppery",
        "cmp.allo.taste": "Sharp, with a light tingle",
        "cmp.siwak.texture": "Soft fibres that open into a brush",
        "cmp.allo.texture": "Firmer wood, harder fibres",
        "cmp.siwak.use": "Everyday routine, morning and evening",
        "cmp.allo.use": "During the day as a complement, for a sharper taste",
        "cmp.siwak.format": "Single stick, thin or thick",
        "cmp.allo.format": "Pack of 5 sticks",
        "cmp.link": "Full comparison: Siwak or Allo Togo (in French) →",
        "pp.p1.intro": "Siwak, also known as miswak, is a chewing stick cut from the root of a desert shrub. It cleans teeth without water, toothpaste or plastic: you simply prepare the tip so that it forms a small natural brush.",
        "pp.p1.k1": "🌿 Salvadora persica root, used traditionally for dental care",
        "pp.p1.k2": "🌿 A feeling of cleanliness and fresh breath after use",
        "pp.p1.k3": "🌿 Used dry, without water or toothpaste",
        "pp.p1.k4": "🌿 Zero plastic · 100% biodegradable",
        "pp.p1.origin.title": "Where your stick comes from",
        "pp.p1.origin.1": "Salvadora persica is a shrub of arid regions, from East Africa to the Indian subcontinent, nicknamed \"the toothbrush tree\". Its supple, fibrous roots are what the stick is made from.",
        "pp.p1.origin.2": "Our sticks are hand-harvested in Pakistan, then cut to length. Their use for oral hygiene is very old, and the <a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">WHO</a> has encouraged it in its work on traditional practices.",
        "pp.p1.use.title": "How to use it",
        "pp.p1.use.1": "<strong>Prepare:</strong> peel the bark back about 1 cm at one end.",
        "pp.p1.use.2": "<strong>Chew:</strong> gently chew that end with your molars until the fibres spread into small bristles.",
        "pp.p1.use.3": "<strong>Rub:</strong> brush your teeth with small movements, from the gum towards the edge of the tooth, outside then inside.",
        "pp.p1.use.4": "<strong>Cut:</strong> when the fibres are worn or have lost their taste, cut off about 1 cm and start again from step 1.",
        "pp.p1.use.5": "<strong>Store:</strong> rinse the tip, shake it and store the stick somewhere dry, ideally in a case.",
        "pp.p1.life.title": "Lifespan and storage",
        "pp.p1.life.1": "A stick lasts at least a month, often longer depending on use: each new tip shortens it by about 1 cm.",
        "pp.p1.life.2": "Keep it in a dry, airy place, away from dust. If it has dried out and the tip has become hard, soak the end in water for a few minutes to soften it.",
        "pp.p1.cmp.title": "Siwak or Allo?",
        "pp.p1.faq.1.q": "Does siwak replace my toothbrush?",
        "pp.p1.faq.1.a": "Many people use it alongside: toothbrush and toothpaste morning and evening, siwak during the day or on the go. For any question about your oral health, ask your dentist.",
        "pp.p1.faq.2.q": "Do I need water or toothpaste?",
        "pp.p1.faq.2.a": "No. Siwak is used dry, anywhere. You can simply rinse the tip before and after use.",
        "pp.p1.faq.3.q": "What does it taste like?",
        "pp.p1.faq.3.a": "A woody, slightly peppery taste, milder than Allo Togo.",
        "pp.p1.faq.4.q": "How many sticks should I order?",
        "pp.p1.faq.4.a": "A stick lasts at least a month, often longer depending on use: each new tip shortens it by about 1 cm. The price drops with quantity: 1 stick CHF 6, 2 sticks CHF 11, 3 sticks CHF 15. From 3 sticks, in-person handover is possible in Geneva.",
        "pp.p1.faq.5.q": "Can I take it when travelling?",
        "pp.p1.faq.5.a": "Yes. It is light and needs neither water nor toothpaste. A case protects it in your bag or toiletry kit.",
        "pp.p2.intro": "Allo Togo is a West African chewing stick cut from fagara wood. Sharper than siwak in the mouth, it is used the same way: chew the tip until it forms a brush.",
        "pp.p2.k1": "🌿 Fagara wood, used traditionally in West Africa",
        "pp.p2.k2": "🌿 Sharp taste and a light tingle in the mouth",
        "pp.p2.k3": "🌿 Pack of 5 sticks, thin or thick",
        "pp.p2.k4": "🌿 Plastic-free, fully biodegradable",
        "pp.p2.origin.title": "Where Allo Togo comes from",
        "pp.p2.origin.1": "Fagara (Zanthoxylum zanthoxyloides) is a thorny West African shrub, recognisable by the prickles covering its trunk. Its roots and branches have served as chewing sticks in the region for generations.",
        "pp.p2.origin.2": "SIVÀA Allo sticks are imported directly from Togo and sold in packs of 5. Their wood contains natural compounds that create the light tingle while chewing.",
        "pp.p2.use.title": "How to use it",
        "pp.p2.use.1": "<strong>Pick:</strong> take one stick from the pack and keep the others dry.",
        "pp.p2.use.2": "<strong>Soften:</strong> chew one end with your molars. Fagara is firmer, so allow a little more time for the fibres to open.",
        "pp.p2.use.3": "<strong>Clean:</strong> gently rub each tooth along the gum line, without pressing.",
        "pp.p2.use.4": "<strong>Renew:</strong> when the tip is worn, cut off about 1 cm and chew the new end.",
        "pp.p2.use.5": "<strong>Dry:</strong> rinse the stick and let it air-dry before putting it away.",
        "pp.p2.life.title": "Lifespan and storage",
        "pp.p2.life.1": "Each stick lasts at least a month, often longer depending on use: each new tip shortens it by about 1 cm. A pack of 5 will last you several months.",
        "pp.p2.life.2": "Store unused sticks somewhere dry. Keep the one in use rinsed and air-dried; if it gets too hard, a few minutes in water will soften the tip.",
        "pp.p2.cmp.title": "Allo or siwak?",
        "pp.p2.cmp.intro": "Torn between Allo and siwak? Here is how they differ.",
        "pp.p2.faq.1.q": "Why does Allo Togo tingle a little?",
        "pp.p2.faq.1.a": "Fagara wood contains natural compounds that cause a light tingle while chewing. This is normal, and it is what gives Allo its characteristic taste.",
        "pp.p2.faq.2.q": "Can I alternate Allo Togo and siwak?",
        "pp.p2.faq.2.a": "Yes. Many keep siwak for the morning routine and take an Allo stick during the day when they want a sharper taste.",
        "pp.p2.faq.3.q": "Can the pack be shared?",
        "pp.p2.faq.3.a": "Yes: the 5 sticks are separate. Each person keeps their own, rinsed and dried after use.",
        "pp.p2.faq.4.q": "Is the taste strong the first time?",
        "pp.p2.faq.4.a": "The tingle can be surprising at first. Start with short chewing sessions while you get used to the taste.",
        "pp.p2.faq.5.q": "Do I need water or toothpaste with Allo?",
        "pp.p2.faq.5.a": "No, Allo is used dry, like siwak. A quick rinse of the tip before and after is enough.",
        "pp.p3.intro": "A sturdy case to keep your siwak clean once it leaves the bathroom: in your bag, pocket or suitcase.",
        "pp.p3.k1": "🌿 Thick, sturdy material",
        "pp.p3.k2": "🌿 Protects from dust and moisture",
        "pp.p3.k3": "🌿 Opens and closes easily",
        "pp.p3.k4": "🌿 Compact size for bag or pocket",
        "pp.p3.why.title": "What the case is for",
        "pp.p3.why.1": "A siwak is kept dry and aired, but it needs protection when you carry it. The case stops it getting dirty against keys, coins or the bottom of your bag.",
        "pp.p3.why.2": "It also lets you keep it with you at all times: after a coffee, at the office or on a trip, your siwak is ready to use.",
        "pp.p3.use.title": "Using it well",
        "pp.p3.use.1": "<strong>Rinse:</strong> run the tip of your siwak under water and shake it.",
        "pp.p3.use.2": "<strong>Dry:</strong> let the tip air-dry for a few moments.",
        "pp.p3.use.3": "<strong>Store:</strong> slide the stick into the case and close it.",
        "pp.p3.use.4": "<strong>Air:</strong> at home, take the siwak out of the case so it keeps drying in the air.",
        "pp.p3.care.title": "Care",
        "pp.p3.care.1": "Rinse the case with clean water from time to time and let it dry open before putting your siwak back in.",
        "pp.p3.faq.1.q": "Does the case come with a siwak?",
        "pp.p3.faq.1.a": "No, the case is sold on its own (CHF 6.00). You can add it to your siwak order directly from the checkout page.",
        "pp.p3.faq.2.q": "What size of stick does it fit?",
        "pp.p3.faq.2.a": "It is designed for the SIVÀA siwak stick. If you are unsure about the size, message me on WhatsApp before ordering.",
        "pp.p3.faq.3.q": "Can an Allo Togo stick go in it?",
        "pp.p3.faq.3.a": "Message me on WhatsApp with the thickness you chose: I will tell you whether the stick fits.",
        "pp.p3.faq.4.q": "Does the case keep the siwak damp?",
        "pp.p3.faq.4.a": "It protects it from dust. To avoid moisture, put the stick away once its tip is dry and take it out of the case at home.",
        "pp.p3.faq.5.q": "How many cases do I need?",
        "pp.p3.faq.5.a": "One per siwak in use is enough. If you keep one stick at home and another at the office, get two.",
        "pp.p4.intro": "A toothpaste that brings together siwak and clove, a warmly fragrant spice. Use it like ordinary toothpaste, with your usual toothbrush.",
        "pp.p4.k1": "🌿 Siwak extracts (Salvadora persica)",
        "pp.p4.k2": "🌿 Clove, with a warm, spicy taste",
        "pp.p4.k3": "🌿 For morning and evening brushing",
        "pp.p4.k4": "🌿 Pairs with the siwak stick during the day",
        "pp.p4.inside.title": "What's inside",
        "pp.p4.inside.1": "Its formula combines siwak and clove extracts. The full ingredient list is on the packaging: check it if you are sensitive to certain ingredients.",
        "pp.p4.use.title": "How to use it",
        "pp.p4.use.1": "Put a small amount of toothpaste on your toothbrush.",
        "pp.p4.use.2": "Brush all surfaces of your teeth for two minutes.",
        "pp.p4.use.3": "Spit, then rinse your mouth.",
        "pp.p4.use.4": "Repeat morning and evening.",
        "pp.p4.pair.title": "With a siwak",
        "pp.p4.pair.1": "The toothpaste and the stick complement each other: brushing with the toothpaste morning and evening, siwak during the day, for example after a meal or a coffee.",
        "pp.p4.faq.1.q": "Is the taste strong?",
        "pp.p4.faq.1.a": "Clove gives a warm, spicy taste, stronger than a mint toothpaste.",
        "pp.p4.faq.2.q": "Who is it for?",
        "pp.p4.faq.2.a": "For anyone who likes the taste of clove and wants a toothpaste with siwak extracts. If in doubt (children, pregnancy, allergy), ask your dentist or pharmacist.",
        "pp.p4.faq.3.q": "Can I use it with an electric toothbrush?",
        "pp.p4.faq.3.a": "Yes, it works with a manual or an electric toothbrush.",
        "pp.p4.faq.4.q": "How is it different from the charcoal toothpaste?",
        "pp.p4.faq.4.a": "This one focuses on the warm, spicy taste of clove. The activated charcoal toothpaste, which is black, leaves a clean-mouth feeling. Both contain siwak extracts.",
        "pp.p4.faq.5.q": "How should I store it?",
        "pp.p4.faq.5.a": "Close the tube properly after use and keep it at room temperature.",
        "pp.p5.intro": "A black toothpaste combining activated charcoal with siwak extracts. An original way to extend your natural routine, with a clean-mouth feeling after brushing.",
        "pp.p5.k1": "🌿 Activated charcoal and siwak extracts",
        "pp.p5.k2": "🌿 Black colour, rinses off with clean water",
        "pp.p5.k3": "🌿 Use with your usual toothbrush",
        "pp.p5.k4": "🌿 Complete with a siwak between brushings",
        "pp.p5.inside.title": "What's inside",
        "pp.p5.inside.1": "It combines activated charcoal, which gives it its black colour, and siwak extracts. See the detailed composition on the packaging before first use.",
        "pp.p5.use.title": "How to use it",
        "pp.p5.use.1": "Take a pea-sized amount of toothpaste.",
        "pp.p5.use.2": "Brush gently, without pressing, for two minutes.",
        "pp.p5.use.3": "Rinse your mouth and the brush thoroughly with clean water.",
        "pp.p5.use.4": "Use it every day or in rotation, as you prefer.",
        "pp.p5.pair.title": "With a siwak",
        "pp.p5.pair.1": "Keep this toothpaste for morning and evening brushing, and siwak for the day: together they make a simple routine.",
        "pp.p5.faq.1.q": "Why is it black?",
        "pp.p5.faq.1.a": "Its colour comes from the activated charcoal it contains.",
        "pp.p5.faq.2.q": "Who is it for?",
        "pp.p5.faq.2.a": "For anyone who wants a toothpaste with activated charcoal and siwak extracts. If your teeth or gums are sensitive, ask your dentist before using it every day.",
        "pp.p5.faq.3.q": "Is it suitable for an electric toothbrush?",
        "pp.p5.faq.3.a": "Yes. Just remember to rinse the brush head well after use.",
        "pp.p5.faq.4.q": "How is it different from the clove toothpaste?",
        "pp.p5.faq.4.a": "This one, with activated charcoal, leaves a clean-mouth feeling. The clove toothpaste stands out for its warm, spicy taste. Both contain siwak extracts.",
        "pp.p5.faq.5.q": "How should I store the tube?",
        "pp.p5.faq.5.a": "Cap it after each use and keep it away from heat.",
        "pp.faq.title": "Frequently asked questions",
        "footer.info.shipping": "Delivery & pickup",
        "pp.crumb.home": "Home",
        "pp.crumb.products": "Products",
        "pp.bundle.title": "Volume pricing",
        "pp.whatsapp": "Questions? WhatsApp",
        "pp.delivery.title": "Delivery & pickup",
        "pp.delivery.text": "Free pickup at Acacias, a short walk from Plainpalais, by appointment. Everywhere else in Switzerland, Swiss Post delivers to Lausanne, Bern, Basel or Zurich in 2 to 3 business days, after dispatch within 48h (CHF 10.00 per order).",
        "pp.delivery.link": "See the pickup point →",
        "pp.related.title": "You may also like",
        "pp.related.see": "View product →",
        "pp.read.title": "Further reading",
        "ship.eyebrow": "Order from anywhere in Switzerland",
        "ship.title": "Delivery & pickup",
        "ship.intro": "Your SIVÀA products are shipped by Swiss Post anywhere in Switzerland, or you can collect them for free in person in Geneva. Here is everything you need to know before ordering.",
        "ship.post.title": "Swiss Post delivery across Switzerland",
        "ship.post.text": "Shipping fee: <strong>CHF 10.00 per order</strong>. Your parcel is dispatched <strong>within 48h</strong> of receiving payment, then delivered in <strong>2 to 3 business days</strong>. The price and delivery times are the same everywhere in Switzerland: Geneva, Carouge, Lancy, Nyon, Lausanne, Fribourg, Bern, Basel, Zurich and beyond.",
        "ship.pickup.title": "Free pickup at Acacias (Geneva)",
        "ship.pickup.text": "In Geneva? Choose <strong>free in-person pickup</strong> at Acacias (Quai des Vernets 11, 1227 Geneva), a short walk from Plainpalais and Carouge. After you order, I'll contact you on WhatsApp to set the time and exact place of pickup.",
        "ship.min.title": "Minimum order",
        "ship.min.text": "Orders are possible from <strong>CHF 15.00 of items</strong> (excluding shipping), for both delivery and pickup. For example: 3 Siwak sticks, or a toothpaste and an Allo Togo.",
        "ship.pay.title": "Payment",
        "ship.pay.text": "Payment by <strong>Twint</strong> or <strong>Revolut</strong>. For delivery, payment is made before dispatch and the screenshot must be attached to your order. For pickup, you can also pay on the spot with Twint.",
        "ship.abroad.title": "Delivery outside Switzerland",
        "ship.abroad.text": "For now, orders are delivered <strong>within Switzerland only</strong>.",
        "ship.returns.title": "Returns",
        "ship.returns.text": "You have 14 days after receipt to exercise your right of withdrawal. Full terms are in the <a href=\"/mentions-legales.html\" style=\"color:#9dd75a;\">legal notice</a>.",
        "ship.cta": "Order now →",
        "ship.contact": "A question about your delivery? Message me on WhatsApp",
        "footer.col.legal": "Legal",
        "footer.legal.cgv": "T&C",
        "footer.legal.privacy": "Privacy",
        "footer.legal.returns": "Returns",
        "footer.copyright": "© 2026 SIVÀA Geneva · Geneva, Switzerland.",
        "footer.single": "© 2026 SIVÀA Geneva · Swiss excellence serving a millennial ritual.",

        /* ── BLOG ── */
        "blog.hero.eyebrow": "Journal & Craftsmanship",
        "blog.hero.title.part1": "The",
        "blog.hero.title.part2": "Journal",
        "blog.hero.title.part3": "SIVÀA Geneva",
        "blog.hero.subtitle": "Tradition, natural dental science, millennial rituals. Everything you need to know about Siwak and natural hygiene.",
        "blog.featured.badge": "Featured article",
        "blog.featured.cat": "Tradition & Sunnah",
        "blog.featured.title": "What is Siwak? Benefits, use and Sunnah",
        "blog.featured.excerpt": "Siwak is not just a natural alternative to the toothbrush. It is a botanical heritage several millennia old, at the heart of Islamic, African and Asian civilizations. Discover why millions of people still use it today.",
        "blog.featured.date": "May 12, 2026",
        "blog.featured.readTime": "8 min read",
        "blog.featured.link": "Read the full article",
        "blog.filter.all": "All articles",
        "blog.filter.tradition": "Tradition",
        "blog.filter.science": "Science & Health",
        "blog.filter.guide": "Practical Guide",
        "blog.filter.local": "Local Guide",
        "blog.readArticle": "Read article",
        "blog.cat.science": "Science & Health",
        "blog.cat.guide": "Practical Guide",
        "blog.cat.tradition": "Tradition",
        "blog.cat.local": "Local Guide",
        "blog.art1.title": "Siwak vs Toothbrush: which is better?",
        "blog.art1.excerpt": "Against sonic technologies and nylon bristles, does the natural brushing wood hold up?",
        "blog.art1.date": "May 08, 2026",
        "blog.art2.title": "Buying real Siwak in Geneva: our complete guide",
        "blog.art2.excerpt": "From Geneva to the best local addresses, how to recognise a fresh, quality siwak.",
        "blog.art2.date": "May 02, 2026",
        "blog.art3.title": "Xylitol + Siwak: the ideal combination for your teeth",
        "blog.art3.excerpt": "The little-known synergy between birch sugar and Salvadora persica root — inspired by Dr. Ellie Phillips' protocols.",
        "blog.art3.date": "May 20, 2026",
        "blog.art3.image.alt": "Xylitol and Siwak combined for complete natural dental hygiene",
        "blog.thickness.title": "Thick or thin Siwak: which one should you choose?",
        "blog.thickness.excerpt": "Comparison table, recommended profiles and practical tips to choose the right thickness for your gums and routine.",
        "blog.togo.date": "21 Nov 2026",
        "blog.togo.title": "Siwak or Allo Togo: differences and which to use when",
        "blog.togo.excerpt": "Comparison table, then our tips for the morning, after meals and when travelling.",
        "blog.thickness.date": "Sep 12, 2026",
        "blog.thickness.image.alt": "Comparison between a thin Siwak stick and a thick Siwak stick",
        "blog.art4.title": "The 70 active compounds of Salvadora persica explained",
        "blog.art4.excerpt": "Silica, tannins, natural fluoride, alkaloids, scientific breakdown of what your stick really contains.",
        "blog.art4.date": "Apr 20, 2024",
        "blog.art5.title": "The history of Siwak across civilizations",
        "blog.art5.excerpt": "From Arabia to ancient Egypt, Pakistan to East Africa, the millennial journey of a sacred plant.",
        "blog.art5.date": "Apr 14, 2024",
        "blog.art6.title": "How to keep your siwak fresh for longer?",
        "blog.art6.excerpt": "Expert tips to preserve the freshness, aromas and effectiveness of your Siwak stick.",
        "blog.art6.date": "Apr 06, 2026",
        "blog.art7.title": "Siwak during Ramadan: what tradition says",
        "blog.art7.excerpt": "Can Siwak be used during fasting? The opinions of scholars and the practice of the companions.",
        "blog.art7.date": "Mar 29, 2026",
        "blog.art8.title": "Behind the scenes of my SIVÀA selection in Geneva",
        "blog.art8.excerpt": "How I choose, test and package each stick before delivering it to you in Geneva.",
        "blog.art8.date": "Mar 18, 2026",
        "blog.art9.title": "Natural whiteness: Siwak silica vs chemical whiteners",
        "blog.art9.excerpt": "Scientific comparison between the natural silica of Salvadora persica and industrial whitening agents.",
        "blog.art9.date": "Mar 10, 2026",
        "blog.loadMore": "See more articles",
        "blog.newsletter.eyebrow": "Journal & Rituals",
        "blog.newsletter.title": "Stay informed about new articles",
        "blog.newsletter.subtitle": "Receive the best SIVÀA Journal articles each month, tradition, science, and botanical craftsmanship.",
        "blog.newsletter.placeholder": "your@email.com",
        "blog.newsletter.subscribe": "Subscribe",
        "blog.newsletter.nospam": "No spam. Unsubscribe in one click.",
        "blog.featured.image.alt": "Benefits and use of Siwak, traditional natural chewing stick",
        "blog.art1.image.alt": "Siwak versus modern electric toothbrush comparison",
        "blog.art2.image.alt": "Buying authentic siwak in Geneva, SIVÀA Geneva",
        "blog.art3.image.alt": "Step-by-step Siwak usage guide for beginners",
        "blog.art4.image.alt": "Active compounds of Salvadora persica and natural silica",
        "blog.art5.image.alt": "Thousand-year history of Siwak across civilizations",
        "blog.art6.image.alt": "Freshness preservation of a Siwak stick",
        "blog.art7.image.alt": "Siwak use during the month of Ramadan",
        "blog.art8.image.alt": "Selection of SIVÀA Geneva siwak sticks",
        "blog.art9.image.alt": "Natural whitening of Siwak and active silica",

        /* ── CONTACT ── */
        "contact.header.eyebrow": "Siwak in Geneva",
        "contact.header.title.part1": "Contact",
        "contact.header.title.part2": "me",
        "contact.header.subtitle": "I usually reply within 2–4 hours during the day.",
        "contact.form.subjectLabel": "Subject of your message",
        "contact.pill.order": "📦 Order / Delivery",
        "contact.pill.product": "🌿 Product question",
        "contact.pill.return": "↩️ Return / Exchange",
        "contact.pill.partner": "🤝 Partnership",
        "contact.pill.other": "💬 Other",
        "contact.field.firstname": "First name *",
        "contact.field.lastname": "Last name *",
        "contact.field.email": "Email *",
        "contact.field.subject": "Subject",
        "contact.field.order": "Order number (if applicable)",
        "contact.field.message": "Your message *",
        "contact.placeholder.firstname": "Ahmad",
        "contact.placeholder.lastname": "Al-Rashid",
        "contact.placeholder.email": "your@email.com",
        "contact.placeholder.order": "SIVAA-2026-XXXXX",
        "contact.placeholder.message": "Describe your question or situation…",
        "contact.send": "Send via WhatsApp",
        "contact.required": "* required fields",
        "contact.success.title": "WhatsApp has opened!",
        "contact.success.subtitle": "Send the pre-filled message in WhatsApp, I reply within 2–4 hours during the day.",
        "contact.success.again": "Send another message",
        "contact.wa.title": "WhatsApp",
        "contact.wa.desc": "The fastest way. Reply in a few minutes.",
        "contact.wa.cta": "Open conversation →",
        "contact.email.title": "Email",
        "contact.email.cta": "Send an email →",
        "contact.info.title": "Practical information",
        "contact.info.hours.label": "Hours",
        "contact.info.hours.value": "Monday – Friday, 9am – 6pm",
        "contact.info.atelier.label": "Pickup point",
        "contact.info.atelier.value": "Quai des Vernets 11, 1227 Geneva, Switzerland",
        "contact.info.delivery.label": "Delivery",
        "contact.info.delivery.value": "Swiss Post · 2–3 business days, CHF 10.00 · all of Switzerland",
        "contact.info.returns.label": "Returns",
        "contact.info.returns.value": "14 days no-questions-asked, exchange or refund",
        "contact.order.note": "Already placed an order?",
        "contact.order.desc": "For any question about your order, have your number ready (SIVAA-XXXX-XXXXX) and contact me via WhatsApp for priority handling.",

        /* ── MERCI ── */
        "merci.banner": "Your parcel is being prepared in Geneva 🌿",
        "merci.title": "Thank you!",
        "merci.sub": "Your order has been registered.",
        "merci.orderNum": "Number:",
        "merci.recap": "Summary",
        "merci.delivery": "Swiss Post delivery",
        "merci.total": "Total paid",
        "merci.emailSent": "Confirmation sent to",
        "merci.payLabel": "Complete your payment",
        "merci.twint.title": "Twint",
        "merci.twint.sub": "Swiss banking app · Instant",
        "merci.twint.badge": "🇨🇭 Recommended",
        "merci.twint.hint": "Send",
        "merci.twint.hint2": "to this number from your Twint app",
        "merci.twint.ref": "Reference:",
        "merci.revolut.title": "Pay with Revolut",
        "merci.revolut.sub": "Direct payment link ·",
        "merci.reassurance.q": "A question?",
        "merci.reassurance.link": "Contact me directly on WhatsApp",
        "merci.reassurance.end": ", I prepare your parcel personally in Geneva. 🌿",
        "merci.afterPay": "After payment:",
        "merci.afterPay.desc": "your order is shipped within 24–48h via Swiss Post. You will receive your tracking number by email.",
        "merci.confirmWa": "Confirm via WhatsApp",
        "merci.confirmEmail": "Confirm via email",
        "merci.bottomImg": "Each stick, hand-selected. Each parcel, prepared with care.",
        "merci.back": "← Back to home"
    },

    de: {
        /* ── NAV ── */
        "nav.home": "Startseite",
        "nav.products": "Produkte",
        "nav.journal": "Journal",
        "nav.contact": "Kontakt",
        "nav.order": "Bestellen",
        "nav.buy": "Kaufen",
        /* ── BANDEAU OFFRE ── */
        "offer.label": "Angebot:",
        "offer.p1": "1 Stk. = 6 CHF",
        "offer.p2": "2 Stk. = 11 CHF",
        "offer.p3": "3 Stk. = 15 CHF",
        "offer.hand": "🤝 Persönliche Übergabe ab 3 Stk.",

        /* ── INDEX : HERO ── */
        "hero.badge": "Handgeerntet · Pakistan · Schweizer Zertifiziert",
        "hero.title.part1": "Die Kunst des",
        "hero.title.part2": "Siwak",
        "hero.title.part3": "in",
        "hero.title.part4": "Genf",
        "hero.subtitle": "Die natürliche Zahnbürste, die seit Jahrhunderten traditionell verwendet wird. Der Holzstab wird gekaut, bis eine Bürste entsteht, und hinterlässt ein sauberes Gefühl und frischen Atem. Lieferung in die ganze Schweiz: Versand innerhalb von 48 Std. + 2–3 Tage.",
        "hero.cta.order": "Jetzt bestellen →",
        "hero.cta.discover": "Siwak entdecken",
        "hero.trust.shipping": "🚚 Versand innerhalb von 48 Std. + 2–3 Tage",
        "hero.trust.natural": "🌿 100 % Natürlich",
        "hero.trust.ssl": "🔒 Zahlung per Twint oder Revolut",
        "hero.badge.float": "🌿 Eine von der <a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">WHO</a> geförderte Praxis",
        "hero.image.alt": "Premium SIVÀA Geneva Siwak-Stab, Schweizer natürliche Zahnbürste",

        /* ── INDEX : PRODUKTE ── */
        "products.eyebrow": "Die botanische Auswahl",
        "products.title.part1": "Meine",
        "products.title.part2": "Kollektion",
        "products.seeAll": "Alle ansehen →",

        "product1.badge": "Handgeerntet · Pakistan",
        "product1.name": "Premium Siwak-Stab",
        "product1.desc": "Salvadora-persica-Wurzel, von Hand geerntet. Ohne Wasser und Zahnpasta verwendbar.",
        "product1.price": "CHF 6.00 pro Stück",
        "product1.discover": "Entdecken",
        "product1.image.alt": "SIVÀA Premium Siwak-Stab, natürliche Salvadora persica Zahnbürste",

        "product2.badge": "Kaustab aus Togo",
        "product2.name": "Allo Togo",
        "product2.desc": "Fagara-Stäbe aus Togo, lebhaft und leicht scharf im Geschmack.",
        "product2.price": "CHF 6.00 pro 5 Stück",
        "product2.image.alt": "Allo Togo Kaustab, natürliche Siwak-Alternative aus Togo",

       "product3.badge": "Unverzichtbares Zubehör",
        "product3.name": "Siwak Schutzetui",
        "product3.desc": "Schützt Ihren Siwak überall vor Staub und Feuchtigkeit.",
        "product3.price": "CHF 6.00 pro Stück",
        "product3.image.alt": "Schutzetui für Siwak, hygienisches Reiseetui",

        "product4.badge": "Siwak · Gewürznelke",
        "product4.name": "Siwak-Zahnpasta — Gewürznelke",
        "product4.desc": "Siwak- und Gewürznelkenextrakte, warm und würzig im Geschmack.",
        "product4.price": "CHF 10.00 pro Stück",
        "product4.image.alt": "SIVÀA Geneva Siwak-Zahnpasta mit Gewürznelke",

        "modal4.desc": "Zahnpasta mit Siwak- und Gewürznelkenextrakten, warm und würzig im Geschmack. Morgens und abends mit Ihrer gewohnten Zahnbürste verwenden.",
        "modal4.shipping": "🚚 Versandkosten Swiss Post · CHF 10.00 · Versand innerhalb von 48 Std. + 2–3 Tage",
        "modal4.priceLabel": "Preis",
        "modal4.buy": "🛍 Jetzt kaufen",

        "product5.badge": "Siwak · Aktivkohle",
        "product5.name": "Siwak-Zahnpasta — Aktivkohle",
        "product5.desc": "Aktivkohle und Siwak-Extrakte für ein sauberes Mundgefühl.",
        "product5.price": "CHF 10.00 pro Stück",
        "product5.image.alt": "SIVÀA Geneva Siwak-Zahnpasta mit Aktivkohle",

        "modal5.desc": "Schwarze Zahnpasta mit Aktivkohle und Siwak-Extrakten. Eine originelle Alternative für ein sauberes Mundgefühl nach dem Putzen.",
        "modal5.shipping": "🚚 Versandkosten Swiss Post · CHF 10.00 · Versand innerhalb von 48 Std. + 2–3 Tage",
        "modal5.priceLabel": "Preis",
        "modal5.buy": "🛍 Jetzt kaufen",

        "modal3.desc": "Ein Etui, um Ihren Siwak geschützt vor Staub und Feuchtigkeit mitzunehmen. Praktisch in Tasche, Hosentasche oder Kulturbeutel.",
        "modal3.shipping": "🚚 Versandkosten Swiss Post · CHF 10.00 · Versand innerhalb von 48 Std. + 2–3 Tage",
        "modal3.priceLabel": "Preis",
        "modal3.buy": "🛍 Jetzt kaufen",
        "modal3.image.alt": "Reiseetui für natürlichen Siwak",

        /* ── POPUP 1 ── */
        "modal1.desc": "Ein Siwak-Stab aus der Wurzel von Salvadora persica, von Hand in Pakistan geerntet. Er wird ohne Wasser und Zahnpasta verwendet, wo immer Sie sind.",
        "modal1.shipping": "🚚 Versandkosten Swiss Post · CHF 10.00 · Versand innerhalb von 48 Std. + 2–3 Tage",
        "modal1.priceLabel": "Preis",
        "modal1.buy": "🛍 Jetzt kaufen",

        "modal1.thickness.label": "Stärke des Stäbchens",
        "thickness.sizes": "Dünn ≈ 1–1,5 cm · Dick ≈ 2–2,5 cm Durchmesser",
        "modal1.thickness.thin": "Dünn",
        "modal1.thickness.thick": "Dick",
        "modal1.thickness.any": "Egal",
        "modal1.thickness.intro": "Nicht sicher, was Sie wählen sollen? So entscheiden Sie je nach Verwendung:",
        "modal1.thickness.guide.thin": "≈ 1 bis 1,5 cm Durchmesser, flexibler und geschmeidiger, ideal für empfindliches Zahnfleisch und eine präzise Reinigung zwischen den Zähnen.",
        "modal1.thickness.guide.thick": "≈ 2 bis 2,5 cm Durchmesser, robuster und langlebiger, empfohlen für den intensiven täglichen Gebrauch und einen festeren Griff.",
        "modal1.thickness.guide.any": "lassen Sie uns die Stärke aus unserer besten aktuellen Ernte auswählen.",

        /* ── POPUP 2 ── */
        "modal2.desc": "5er-Pack Kaustäbe aus Fagara-Holz, direkt aus Togo. Ihr lebhafter Geschmack mit leichtem Kribbeln ist eine angenehme Abwechslung zum Siwak.",

        /* ── REVIEWS ── */
        "reviews.eyebrow": "Kundenstimmen",
        "reviews.title.part1": "Was meine",
        "reviews.title.part2": "Kunden",
        "reviews.title.suffix": "sagen",
        "reviews.subtitle": "Bewertungen aus Genf und der ganzen Schweiz",
        "review1.text": "\"Eine außergewöhnliche Entdeckung! Die minzigen Noten von Allo sorgen für eine intensive und lang anhaltende Frische. Seine leichte, natürliche betäubende Wirkung hat mein empfindliches Zahnfleisch sofort beruhigt. Ein wahres Vergnügen.\"",
        "review1.name": "Sophie",
        "review1.location": "Genf · März 2026",
        "review1.tag": "Allo Togo",
        "review2.text": "\"Aussergewöhnliche Qualität. Der Stab ist frisch, flexibel, mit diesem charakteristischen pfeffrigen Aroma eines erstklassigen Siwak. Ich bestelle für die ganze Familie.\"",
        "review2.name": "Karim",
        "review2.location": "Lausanne · Februar 2026",
        "review2.tag": "Premium Siwak",
        "review3.text": "\"Ich benutze nichts anderes mehr! Ich habe den Siwak und das Allo Togo-Stäbchen in meiner täglichen Routine kombiniert und das Ergebnis geliebt. Ihre reinigenden Eigenschaften sind unglaublich, mein Mund war noch nie so gesund und sauber.\"",
        "review3.name": "Inès",
        "review3.location": "Zürich · April 2026",
        "review3.tag": "Hygiene-Set ",
        "stats.reviews": "Seit jeher",
        "stats.delivery": "Versand",

        /* ── FAQ ── */
        "faq.eyebrow": "Häufig gestellte Fragen",
        "faq.title.part1": "Alles über den",
        "faq.title.part2": "Siwak",
        "faq.q1": "Wie verwende ich Siwak zum ersten Mal?",
        "faq.a1": "Rinde etwa 1 cm abschälen, die Spitze kauen, bis sich die Fasern lösen, und dann sanft über die Zähne reiben. Die ausführliche Anleitung finden Sie auf der Produktseite jedes Stabs.",
        "faq.q2": "Wie lange hält ein Stab?",
        "faq.a2": "Ein Stab hält mindestens einen Monat, je nach Gebrauch oft länger: Mit jeder neuen Spitze wird er etwa 1 cm kürzer.",
        "faq.q3": "Hellt Siwak die Zähne auf?",
        "faq.a3": "Siwak wird traditionell zur Zahnreinigung verwendet und hinterlässt ein sauberes Gefühl. Es ist keine Aufhellungsbehandlung: Bei Fragen zur Zahnfarbe wenden Sie sich an Ihre Zahnärztin oder Ihren Zahnarzt.",
        "faq.q4": "Ist Siwak für die Mundhygiene sinnvoll?",
        "faq.a4": "Siwak wird seit Jahrhunderten zur Zahnpflege verwendet, und seine Nutzung wurde von der <a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">WHO</a> gefördert. Am besten ergänzt er eine gute Routine: Zähneputzen mit Zahnpasta und regelmässige Kontrollen beim Zahnarzt.",
        "faq.q5": "Soll ich zusätzlich zum Siwak Zahnpasta verwenden?",
        "faq.a5": "Ja, ich empfehle, Ihr gewohntes Zähneputzen mit Zahnpasta morgens und abends beizubehalten und Siwak tagsüber ergänzend zu verwenden.",
        "faq.q6": "Wo finde ich hochwertigen Siwak in der Schweiz (Migros, Coop, Manor)?",
        "faq.a6": "Frischer Siwak ist im Detailhandel oder in Apotheken oft schwer zu finden. Bei SIVÀA Geneva bestellen Sie online: Versand mit Swiss Post in die ganze Schweiz (Versand innerhalb von 48 Std. + 2–3 Tage) oder kostenlose Abholung in Acacias, Genf (Zahlung mit Twint oder Revolut).",
        "faq.q7": "Ich möchte wählen, ob mein Stab dünn oder dick ist. Wie?",
        "faq.a7": "Wählen Sie die Stärke bei der Bestellung oder fügen Sie eine Nachricht hinzu: Ich wähle den Stab aus, der am besten zu Ihnen passt.",
        "faq.payment.q": "Welche Zahlungsmethoden akzeptieren Sie?",
        "faq.payment.a": "Ich akzeptiere Twint und Revolut. Mindestbestellwert CHF 15.00 (Artikel).",
        "faq.noQuestion": "Ihre Frage ist nicht aufgeführt?",
        "faq.contactBtn": "💬 Kontakt aufnehmen",

        /* ── INDEX : STANDORT SECTION ── */
        "loc.eyebrow": "Standort & Prestige",
        "loc.title.part1": "Ihr Siwak in",
        "loc.title.part2": "Genf",
        "loc.subtitle": "Abholung in <strong style=\"color:#d7e7d4;\">Acacias, Genf</strong>, nur wenige Schritte von Plainpalais, nach Vereinbarung für eine persönliche Übergabe.",
        "loc.country": "Schweiz",
        "loc.district": "Quartier Acacias",
        "loc.appointment.title": "Abholung nach Vereinbarung",
        "loc.appointment.desc": "7 Tage die Woche verfügbar, Kontaktieren Sie mich, um einen passenden Termin zu vereinbaren.",
        "loc.payment.title": "Zahlung mit Twint Genf & Revolut",
        "loc.payment.desc": "Sichere Zahlung bei Erhalt. Mindestens 15,00 CHF bei Umtausch vor Ort.",
        "loc.cta": "📞 Termin in Genf vereinbaren",

        /* ── CTA FINAL ── */
        "cta.eyebrow": "Swiss Post Lieferung · Versand innerhalb von 48 Std. + 2–3 Tage",
        "cta.title.part1": "Beginnen Sie Ihr Ritual",
        "cta.title.part2": "heute",
        "cta.subtitle": "Schliessen Sie sich den Hunderten von Genfern an, die das Siwak-Ritual angenommen haben. Natürlich, wirksam, ewig.",
        "cta.button": "Meinen Siwak bestellen →",

        /* ── FOOTER ── */
        "footer.tagline": "Schweizer Exzellenz im Dienst eines uralten Rituals.",
        "footer.col.products": "Produkte",
        "footer.product.siwak": "Premium Siwak-Stab",
        "footer.product.togo": "Allo Togo",
        "footer.product.etui": "Siwak Schutzetui",
        "footer.col.info": "Informationen",
        "footer.info.journal": "Journal",
        "footer.info.contact": "Kontakt",
        "prestige.eyebrow": "Exzellenz & Vertrauen",
        "prestige.title": "Unsere Garantien",
        "prestige.pay.title": "Zahlung mit Twint oder Revolut",
        "prestige.pay.text": "Einfache Zahlung mit <strong>Twint oder Revolut</strong>. Ich bestätige jede Bestellung persönlich.",
        "prestige.min.title": "Versand ab CHF 15",
        "prestige.min.text": "Bestellungen ab <strong>CHF 15.00 Warenwert</strong> möglich, für Versand und Abholung.",
        "prestige.pickup.title": "Persönliche Übergabe — Acacias, Genf",
        "prestige.pickup.text": "Kostenlose Abholung in Acacias (Quai des Vernets 11, Genf). <a href=\"/contact.html\" style=\"color:#9dd75a;\">Kontaktieren Sie mich</a>, um die Abholung zu vereinbaren.",
        "prestige.post.title": "Versand mit Swiss Post",
        "prestige.post.text": "Versand innerhalb von 48 Std. nach Zahlungseingang. Lieferung in <strong>die ganze Schweiz</strong> in 2–3 Werktagen. <a href=\"/de/versand-abholung.html\" style=\"color:#9dd75a;\">Alle Details</a>",
        "toothpaste.eyebrow": "Das komplette Ritual",
        "toothpaste.title.part1": "Unsere",
        "toothpaste.title.part2": "Siwak-",
        "toothpaste.title.part3": "Zahnpasten",
        "footer.address": "📍 Quai des Vernets 11, 1227 Genf (Acacias)",
        "btn.more": "Mehr erfahren",
        "pp.tree.p1.alt": "Siwak-Baum (Salvadora persica) mit verschlungenen Ästen und freiliegenden Wurzeln, aus denen der Siwak-Stab stammt",
        "pp.tree.p1.caption": "<em>Salvadora persica</em>, der Baum, aus dessen Wurzeln der Siwak-Stab stammt.",
        "pp.tree.p2.alt": "Mit Dornen besetzter Stamm eines Fagara-Baums (Zanthoxylum zanthoxyloides), des Strauchs, aus dem der Allo-Togo-Stab stammt",
        "pp.tree.p2.caption": "Der Fagara (<em>Zanthoxylum zanthoxyloides</em>), aus dessen Wurzeln und Ästen der Allo-Stab stammt.",
        "pp.map.title": "Abholung in Acacias (Genf)",
        "pp.map.address": "Quai des Vernets 11, 1227 Genf",
        "pp.map.directions": "Route planen →",
        "cmp.row.taste": "Geschmack",
        "cmp.row.texture": "Textur",
        "cmp.row.use": "Verwendung",
        "cmp.row.format": "Format",
        "cmp.col.siwak": "Siwak",
        "cmp.col.allo": "Allo Togo",
        "cmp.siwak.taste": "Holzig, leicht pfeffrig",
        "cmp.allo.taste": "Lebhaft, mit leichtem Kribbeln",
        "cmp.siwak.texture": "Weiche Fasern, die sich zu einem Pinsel öffnen",
        "cmp.allo.texture": "Festeres Holz, härtere Fasern",
        "cmp.siwak.use": "Tägliche Routine, morgens und abends",
        "cmp.allo.use": "Tagsüber als Ergänzung, für einen lebhafteren Geschmack",
        "cmp.siwak.format": "Einzeln, dünn oder dick",
        "cmp.allo.format": "5er-Pack",
        "cmp.link": "Ausführlicher Vergleich: Siwak oder Allo Togo (auf Französisch) →",
        "pp.p1.intro": "Siwak, auch Miswak genannt, ist ein Kaustab aus der Wurzel eines Wüstenstrauchs. Er reinigt die Zähne ohne Wasser, ohne Zahnpasta und ohne Plastik: Sie bereiten einfach die Spitze vor, bis sie eine kleine natürliche Bürste bildet.",
        "pp.p1.k1": "🌿 Salvadora-persica-Wurzel, traditionell zur Zahnpflege verwendet",
        "pp.p1.k2": "🌿 Sauberes Gefühl und frischer Atem nach der Anwendung",
        "pp.p1.k3": "🌿 Trocken verwendbar, ohne Wasser und Zahnpasta",
        "pp.p1.k4": "🌿 Null Plastik · 100 % biologisch abbaubar",
        "pp.p1.origin.title": "Woher Ihr Stab kommt",
        "pp.p1.origin.1": "Salvadora persica ist ein Strauch trockener Regionen, von Ostafrika bis zum indischen Subkontinent, auch „Zahnbürstenbaum“ genannt. Aus seinen biegsamen, faserigen Wurzeln entsteht der Stab.",
        "pp.p1.origin.2": "Unsere Stäbe werden in Pakistan von Hand geerntet und auf die richtige Länge zugeschnitten. Ihre Verwendung zur Mundhygiene ist sehr alt, und die <a href=\"https://iris.who.int/bitstreams/1f64ff17-718e-44d0-9935-26501fa61991/download\" target=\"_blank\" rel=\"noopener\" style=\"color:#9dd75a;\">WHO</a> hat sie in ihren Arbeiten zu traditionellen Praktiken gefördert.",
        "pp.p1.use.title": "So wird er verwendet",
        "pp.p1.use.1": "<strong>Vorbereiten:</strong> Schälen Sie an einem Ende etwa 1 cm Rinde ab.",
        "pp.p1.use.2": "<strong>Kauen:</strong> Kauen Sie dieses Ende sanft mit den Backenzähnen, bis sich die Fasern zu kleinen Borsten auffächern.",
        "pp.p1.use.3": "<strong>Reiben:</strong> Putzen Sie die Zähne mit kleinen Bewegungen vom Zahnfleisch zur Zahnkante, aussen und dann innen.",
        "pp.p1.use.4": "<strong>Schneiden:</strong> Sind die Fasern abgenutzt oder haben ihren Geschmack verloren, schneiden Sie etwa 1 cm ab und beginnen wieder bei Schritt 1.",
        "pp.p1.use.5": "<strong>Aufbewahren:</strong> Spülen Sie die Spitze ab, schütteln Sie sie aus und bewahren Sie den Stab trocken auf, am besten in einem Etui.",
        "pp.p1.life.title": "Haltbarkeit und Aufbewahrung",
        "pp.p1.life.1": "Ein Stab hält mindestens einen Monat, je nach Gebrauch oft länger: Mit jeder neuen Spitze wird er etwa 1 cm kürzer.",
        "pp.p1.life.2": "Bewahren Sie ihn an einem trockenen, luftigen Ort staubgeschützt auf. Ist er ausgetrocknet und die Spitze hart geworden, legen Sie das Ende einige Minuten in Wasser, um es weicher zu machen.",
        "pp.p1.cmp.title": "Siwak oder Allo?",
        "pp.p1.faq.1.q": "Ersetzt Siwak meine Zahnbürste?",
        "pp.p1.faq.1.a": "Viele verwenden ihn ergänzend: Zahnbürste und Zahnpasta morgens und abends, Siwak tagsüber oder unterwegs. Bei Fragen zu Ihrer Mundgesundheit wenden Sie sich an Ihre Zahnärztin oder Ihren Zahnarzt.",
        "pp.p1.faq.2.q": "Braucht man Wasser oder Zahnpasta?",
        "pp.p1.faq.2.a": "Nein. Siwak wird trocken verwendet, überall. Sie können die Spitze vor und nach dem Gebrauch einfach abspülen.",
        "pp.p1.faq.3.q": "Wie schmeckt er?",
        "pp.p1.faq.3.a": "Holzig und leicht pfeffrig, milder als Allo Togo.",
        "pp.p1.faq.4.q": "Wie viele Stäbe soll ich bestellen?",
        "pp.p1.faq.4.a": "Ein Stab hält mindestens einen Monat, je nach Gebrauch oft länger: Mit jeder neuen Spitze wird er etwa 1 cm kürzer. Der Preis sinkt mit der Menge: 1 Stück CHF 6, 2 Stück CHF 11, 3 Stück CHF 15. Ab 3 Stück ist eine persönliche Übergabe in Genf möglich.",
        "pp.p1.faq.5.q": "Kann ich ihn auf Reisen mitnehmen?",
        "pp.p1.faq.5.a": "Ja. Er ist leicht und braucht weder Wasser noch Zahnpasta. Ein Etui schützt ihn in der Tasche oder im Kulturbeutel.",
        "pp.p2.intro": "Allo Togo ist ein westafrikanischer Kaustab aus Fagara-Holz. Im Mund lebhafter als Siwak, wird er gleich verwendet: Die Spitze kauen, bis sie eine Bürste bildet.",
        "pp.p2.k1": "🌿 Fagara-Holz, in Westafrika traditionell verwendet",
        "pp.p2.k2": "🌿 Lebhafter Geschmack und leichtes Kribbeln im Mund",
        "pp.p2.k3": "🌿 5er-Pack, dünn oder dick nach Wahl",
        "pp.p2.k4": "🌿 Ohne Plastik, vollständig biologisch abbaubar",
        "pp.p2.origin.title": "Woher Allo Togo kommt",
        "pp.p2.origin.1": "Der Fagara (Zanthoxylum zanthoxyloides) ist ein dorniger Strauch Westafrikas, erkennbar an den Stacheln an seinem Stamm. Seine Wurzeln und Äste dienen in der Region seit Generationen als Kaustäbe.",
        "pp.p2.origin.2": "Die SIVÀA-Allo-Stäbe werden direkt aus Togo importiert und im 5er-Pack verkauft. Ihr Holz enthält natürliche Stoffe, die beim Kauen das leichte Kribbeln erzeugen.",
        "pp.p2.use.title": "So wird er verwendet",
        "pp.p2.use.1": "<strong>Auswählen:</strong> Nehmen Sie einen Stab aus der Packung und bewahren Sie die anderen trocken auf.",
        "pp.p2.use.2": "<strong>Weich kauen:</strong> Kauen Sie ein Ende mit den Backenzähnen. Fagara ist fester: Rechnen Sie etwas mehr Zeit ein, bis sich die Fasern öffnen.",
        "pp.p2.use.3": "<strong>Reinigen:</strong> Reiben Sie jeden Zahn sanft entlang des Zahnfleischrands, ohne zu drücken.",
        "pp.p2.use.4": "<strong>Erneuern:</strong> Ist die Spitze abgenutzt, schneiden Sie etwa 1 cm ab und kauen das neue Ende.",
        "pp.p2.use.5": "<strong>Trocknen:</strong> Spülen Sie den Stab ab und lassen Sie ihn an der Luft trocknen, bevor Sie ihn wegräumen.",
        "pp.p2.life.title": "Haltbarkeit und Aufbewahrung",
        "pp.p2.life.1": "Jeder Stab hält mindestens einen Monat, je nach Gebrauch oft länger: Mit jeder neuen Spitze wird er etwa 1 cm kürzer. Ein 5er-Pack reicht für mehrere Monate.",
        "pp.p2.life.2": "Bewahren Sie unbenutzte Stäbe trocken auf. Den Stab in Gebrauch abgespült und luftgetrocknet aufbewahren; wird er zu hart, macht ein paar Minuten in Wasser die Spitze wieder weich.",
        "pp.p2.cmp.title": "Allo oder Siwak?",
        "pp.p2.cmp.intro": "Sie zögern zwischen Allo und Siwak? Das unterscheidet die beiden.",
        "pp.p2.faq.1.q": "Warum kribbelt Allo Togo ein wenig?",
        "pp.p2.faq.1.a": "Fagara-Holz enthält natürliche Stoffe, die beim Kauen ein leichtes Kribbeln auslösen. Das ist normal und macht den typischen Geschmack von Allo aus.",
        "pp.p2.faq.2.q": "Kann ich Allo Togo und Siwak abwechseln?",
        "pp.p2.faq.2.a": "Ja. Viele behalten den Siwak für die Morgenroutine und greifen tagsüber zu einem Allo-Stab, wenn sie einen lebhafteren Geschmack möchten.",
        "pp.p2.faq.3.q": "Kann man die Packung teilen?",
        "pp.p2.faq.3.a": "Ja: Die 5 Stäbe sind einzeln. Jede Person behält ihren eigenen, nach Gebrauch abgespült und getrocknet.",
        "pp.p2.faq.4.q": "Ist der Geschmack beim ersten Mal stark?",
        "pp.p2.faq.4.a": "Das Kribbeln kann anfangs überraschen. Beginnen Sie mit kurzen Kauphasen, bis Sie sich an den Geschmack gewöhnt haben.",
        "pp.p2.faq.5.q": "Braucht man bei Allo Wasser oder Zahnpasta?",
        "pp.p2.faq.5.a": "Nein, Allo wird wie Siwak trocken verwendet. Ein kurzes Abspülen der Spitze vorher und nachher genügt.",
        "pp.p3.intro": "Ein robustes Etui, damit Ihr Siwak sauber bleibt, wenn er das Badezimmer verlässt: in der Tasche, Hosentasche oder im Koffer.",
        "pp.p3.k1": "🌿 Dickes, robustes Material",
        "pp.p3.k2": "🌿 Schützt vor Staub und Feuchtigkeit",
        "pp.p3.k3": "🌿 Lässt sich leicht öffnen und schliessen",
        "pp.p3.k4": "🌿 Kompakt für Tasche oder Hosentasche",
        "pp.p3.why.title": "Wozu das Etui dient",
        "pp.p3.why.1": "Ein Siwak wird trocken und luftig aufbewahrt, braucht aber Schutz, wenn Sie ihn mitnehmen. Das Etui verhindert, dass er durch Schlüssel, Münzen oder den Taschenboden verschmutzt.",
        "pp.p3.why.2": "So haben Sie ihn immer dabei: nach einem Kaffee, im Büro oder auf Reisen ist Ihr Siwak einsatzbereit.",
        "pp.p3.use.title": "Richtig verwenden",
        "pp.p3.use.1": "<strong>Abspülen:</strong> Halten Sie die Spitze Ihres Siwak unter Wasser und schütteln Sie sie aus.",
        "pp.p3.use.2": "<strong>Trocknen:</strong> Lassen Sie die Spitze kurz an der Luft trocknen.",
        "pp.p3.use.3": "<strong>Verstauen:</strong> Schieben Sie den Stab ins Etui und schliessen Sie es.",
        "pp.p3.use.4": "<strong>Lüften:</strong> Nehmen Sie den Siwak zu Hause aus dem Etui, damit er weiter an der Luft trocknet.",
        "pp.p3.care.title": "Pflege",
        "pp.p3.care.1": "Spülen Sie das Etui ab und zu mit klarem Wasser aus und lassen Sie es offen trocknen, bevor Sie Ihren Siwak wieder hineinlegen.",
        "pp.p3.faq.1.q": "Ist ein Siwak im Etui enthalten?",
        "pp.p3.faq.1.a": "Nein, das Etui wird einzeln verkauft (CHF 6.00). Sie können es direkt auf der Bestellseite zu Ihrer Siwak-Bestellung hinzufügen.",
        "pp.p3.faq.2.q": "Welche Stabgrösse passt hinein?",
        "pp.p3.faq.2.a": "Es ist für den SIVÀA Siwak-Stab gedacht. Wenn Sie bei der Grösse unsicher sind, schreiben Sie mir vor der Bestellung auf WhatsApp.",
        "pp.p3.faq.3.q": "Passt ein Allo-Togo-Stab hinein?",
        "pp.p3.faq.3.a": "Schreiben Sie mir auf WhatsApp mit der gewählten Stärke: Ich sage Ihnen, ob der Stab hineinpasst.",
        "pp.p3.faq.4.q": "Hält das Etui den Siwak feucht?",
        "pp.p3.faq.4.a": "Es schützt ihn vor Staub. Gegen Feuchtigkeit verstauen Sie den Stab erst, wenn die Spitze trocken ist, und nehmen ihn zu Hause aus dem Etui.",
        "pp.p3.faq.5.q": "Wie viele Etuis brauche ich?",
        "pp.p3.faq.5.a": "Eines pro Siwak in Gebrauch genügt. Wenn Sie einen Stab zu Hause und einen im Büro haben, nehmen Sie zwei.",
        "pp.p4.intro": "Eine Zahnpasta, die Siwak und Gewürznelke vereint, ein Gewürz mit warmem Duft. Sie wird wie eine gewöhnliche Zahnpasta mit Ihrer gewohnten Zahnbürste verwendet.",
        "pp.p4.k1": "🌿 Siwak-Extrakte (Salvadora persica)",
        "pp.p4.k2": "🌿 Gewürznelke, warm und würzig im Geschmack",
        "pp.p4.k3": "🌿 Für das Zähneputzen morgens und abends",
        "pp.p4.k4": "🌿 Lässt sich tagsüber mit dem Siwak-Stab kombinieren",
        "pp.p4.inside.title": "Was drin ist",
        "pp.p4.inside.1": "Ihre Rezeptur verbindet Siwak- und Gewürznelkenextrakte. Die vollständige Zutatenliste steht auf der Verpackung: Prüfen Sie sie, wenn Sie auf bestimmte Inhaltsstoffe empfindlich reagieren.",
        "pp.p4.use.title": "So wird sie verwendet",
        "pp.p4.use.1": "Geben Sie eine kleine Menge Zahnpasta auf Ihre Zahnbürste.",
        "pp.p4.use.2": "Putzen Sie zwei Minuten lang alle Zahnflächen.",
        "pp.p4.use.3": "Ausspucken und den Mund ausspülen.",
        "pp.p4.use.4": "Morgens und abends wiederholen.",
        "pp.p4.pair.title": "Mit einem Siwak",
        "pp.p4.pair.1": "Zahnpasta und Stab ergänzen sich: morgens und abends mit der Zahnpasta putzen, tagsüber den Siwak verwenden, zum Beispiel nach einer Mahlzeit oder einem Kaffee.",
        "pp.p4.faq.1.q": "Ist der Geschmack stark?",
        "pp.p4.faq.1.a": "Die Gewürznelke sorgt für einen warmen, würzigen Geschmack, ausgeprägter als bei einer Minzzahnpasta.",
        "pp.p4.faq.2.q": "Für wen ist sie gedacht?",
        "pp.p4.faq.2.a": "Für alle, die den Geschmack von Gewürznelke mögen und eine Zahnpasta mit Siwak-Extrakten suchen. Im Zweifelsfall (Kinder, Schwangerschaft, Allergie) fragen Sie Ihre Zahnärztin, Ihren Zahnarzt oder Ihre Apotheke.",
        "pp.p4.faq.3.q": "Kann ich sie mit einer elektrischen Zahnbürste verwenden?",
        "pp.p4.faq.3.a": "Ja, sie eignet sich für Hand- wie für elektrische Zahnbürsten.",
        "pp.p4.faq.4.q": "Was ist der Unterschied zur Aktivkohle-Zahnpasta?",
        "pp.p4.faq.4.a": "Diese setzt auf den warmen, würzigen Geschmack der Gewürznelke. Die schwarze Aktivkohle-Zahnpasta hinterlässt ein sauberes Mundgefühl. Beide enthalten Siwak-Extrakte.",
        "pp.p4.faq.5.q": "Wie bewahre ich sie auf?",
        "pp.p4.faq.5.a": "Tube nach Gebrauch gut verschliessen und bei Raumtemperatur aufbewahren.",
        "pp.p5.intro": "Eine schwarze Zahnpasta, die Aktivkohle mit Siwak-Extrakten verbindet. Eine originelle Ergänzung Ihrer natürlichen Routine, mit sauberem Mundgefühl nach dem Putzen.",
        "pp.p5.k1": "🌿 Aktivkohle und Siwak-Extrakte",
        "pp.p5.k2": "🌿 Schwarze Farbe, mit klarem Wasser ausspülbar",
        "pp.p5.k3": "🌿 Mit Ihrer gewohnten Zahnbürste verwenden",
        "pp.p5.k4": "🌿 Zwischen zwei Putzvorgängen mit einem Siwak ergänzen",
        "pp.p5.inside.title": "Was drin ist",
        "pp.p5.inside.1": "Sie vereint Aktivkohle, die ihr die schwarze Farbe gibt, und Siwak-Extrakte. Die genaue Zusammensetzung finden Sie vor der ersten Anwendung auf der Verpackung.",
        "pp.p5.use.title": "So wird sie verwendet",
        "pp.p5.use.1": "Nehmen Sie eine erbsengrosse Menge Zahnpasta.",
        "pp.p5.use.2": "Putzen Sie zwei Minuten lang sanft, ohne zu drücken.",
        "pp.p5.use.3": "Spülen Sie Mund und Bürste gründlich mit klarem Wasser aus.",
        "pp.p5.use.4": "Täglich oder im Wechsel verwenden, ganz nach Ihren Gewohnheiten.",
        "pp.p5.pair.title": "Mit einem Siwak",
        "pp.p5.pair.1": "Verwenden Sie diese Zahnpasta morgens und abends und den Siwak tagsüber: Zusammen ergeben sie eine einfache Routine.",
        "pp.p5.faq.1.q": "Warum ist sie schwarz?",
        "pp.p5.faq.1.a": "Die Farbe kommt von der enthaltenen Aktivkohle.",
        "pp.p5.faq.2.q": "Für wen ist sie gedacht?",
        "pp.p5.faq.2.a": "Für alle, die eine Zahnpasta mit Aktivkohle und Siwak-Extrakten suchen. Bei empfindlichen Zähnen oder empfindlichem Zahnfleisch fragen Sie vor der täglichen Anwendung Ihre Zahnärztin oder Ihren Zahnarzt.",
        "pp.p5.faq.3.q": "Eignet sie sich für eine elektrische Zahnbürste?",
        "pp.p5.faq.3.a": "Ja. Denken Sie nur daran, den Bürstenkopf nach Gebrauch gut auszuspülen.",
        "pp.p5.faq.4.q": "Was ist der Unterschied zur Gewürznelken-Zahnpasta?",
        "pp.p5.faq.4.a": "Diese mit Aktivkohle hinterlässt ein sauberes Mundgefühl. Die Gewürznelken-Zahnpasta zeichnet sich durch ihren warmen, würzigen Geschmack aus. Beide enthalten Siwak-Extrakte.",
        "pp.p5.faq.5.q": "Wie bewahre ich die Tube auf?",
        "pp.p5.faq.5.a": "Nach jedem Gebrauch verschliessen und vor Wärme geschützt aufbewahren.",
        "pp.faq.title": "Häufige Fragen",
        "footer.info.shipping": "Versand & Abholung",
        "pp.crumb.home": "Startseite",
        "pp.crumb.products": "Produkte",
        "pp.bundle.title": "Staffelpreise",
        "pp.whatsapp": "Fragen? WhatsApp",
        "pp.delivery.title": "Versand & Abholung",
        "pp.delivery.text": "Sie wohnen in Zürich oder Basel? Swiss Post liefert in 2 bis 3 Werktagen, nach Versand innerhalb von 48 Std. (CHF 10.00 pro Bestellung), auch nach Bern, Luzern oder Lausanne. In Genf holen Sie Ihre Bestellung kostenlos in Acacias ab, nahe Plainpalais, nach Vereinbarung.",
        "pp.delivery.link": "Abholort ansehen →",
        "pp.related.title": "Das könnte Ihnen auch gefallen",
        "pp.related.see": "Zum Produkt →",
        "pp.read.title": "Weiterlesen",
        "ship.eyebrow": "Bestellen aus der ganzen Schweiz",
        "ship.title": "Versand & Abholung",
        "ship.intro": "Ihre SIVÀA-Produkte werden mit Swiss Post in die ganze Schweiz verschickt, oder Sie holen sie kostenlos persönlich in Genf ab. Hier finden Sie alles, was Sie vor der Bestellung wissen müssen.",
        "ship.post.title": "Versand mit Swiss Post in die ganze Schweiz",
        "ship.post.text": "Versandkosten: <strong>CHF 10.00 pro Bestellung</strong>. Ihr Paket wird <strong>innerhalb von 48 Std.</strong> nach Zahlungseingang verschickt und in <strong>2 bis 3 Werktagen</strong> zugestellt. Preis und Lieferzeit sind in der ganzen Schweiz gleich: Zürich, Basel, Bern, Luzern, St. Gallen, Winterthur, Freiburg, Lausanne, Genf und überall sonst.",
        "ship.pickup.title": "Kostenlose Abholung in Acacias (Genf)",
        "ship.pickup.text": "Sie sind in Genf? Wählen Sie die <strong>kostenlose persönliche Abholung</strong> in Acacias (Quai des Vernets 11, 1227 Genf), nur wenige Schritte von Plainpalais und Carouge entfernt. Nach Ihrer Bestellung kontaktiere ich Sie per WhatsApp, um Zeit und genauen Ort der Abholung festzulegen.",
        "ship.min.title": "Mindestbestellwert",
        "ship.min.text": "Bestellungen sind ab <strong>CHF 15.00 Warenwert</strong> (ohne Versandkosten) möglich, für Versand und Abholung gleichermassen. Zum Beispiel: 3 Siwak-Stäbe, oder eine Zahnpasta und ein Allo Togo.",
        "ship.pay.title": "Zahlung",
        "ship.pay.text": "Zahlung mit <strong>Twint</strong> oder <strong>Revolut</strong>. Beim Versand erfolgt die Zahlung vor dem Versand, und der Screenshot ist der Bestellung beizufügen. Bei Abholung können Sie auch vor Ort mit Twint bezahlen.",
        "ship.abroad.title": "Versand ins Ausland",
        "ship.abroad.text": "Derzeit werden Bestellungen <strong>nur innerhalb der Schweiz</strong> geliefert.",
        "ship.returns.title": "Rücksendungen",
        "ship.returns.text": "Sie haben ab Erhalt 14 Tage Zeit, um Ihr Widerrufsrecht auszuüben. Die vollständigen Bedingungen finden Sie im <a href=\"/mentions-legales.html\" style=\"color:#9dd75a;\">Impressum</a>.",
        "ship.cta": "Jetzt bestellen →",
        "ship.contact": "Eine Frage zur Lieferung? Schreiben Sie mir auf WhatsApp",
        "footer.col.legal": "Rechtliches",
        "footer.legal.cgv": "AGB",
        "footer.legal.privacy": "Datenschutz",
        "footer.legal.returns": "Rückgabe",
        "footer.copyright": "© 2026 SIVÀA Geneva · Genf, Schweiz.",
        "footer.single": "© 2026 SIVÀA Geneva · Schweizer Exzellenz im Dienst eines uralten Rituals.",

        /* ── BLOG ── */
        "blog.hero.eyebrow": "Journal & Handwerk",
        "blog.hero.title.part1": "Das",
        "blog.hero.title.part2": "Journal",
        "blog.hero.title.part3": "SIVÀA Geneva",
        "blog.hero.subtitle": "Tradition, natürliche Zahnwissenschaft, uralte Rituale. Alles Wissenswerte über Siwak und natürliche Hygiene.",
        "blog.featured.badge": "Hauptartikel",
        "blog.featured.cat": "Tradition & Sunna",
        "blog.featured.title": "Was ist Siwak? Vorteile, Anwendung und Sunna",
        "blog.featured.excerpt": "Siwak ist nicht nur eine natürliche Alternative zur Zahnbürste. Es ist ein botanisches Erbe, mehrere Jahrtausende alt, im Herzen islamischer, afrikanischer und asiatischer Zivilisationen. Entdecken Sie, warum Millionen von Menschen ihn noch heute verwenden.",
        "blog.featured.date": "12. Mai 2026",
        "blog.featured.readTime": "8 Min. Lesezeit",
        "blog.featured.link": "Ganzen Artikel lesen",
        "blog.filter.all": "Alle Artikel",
        "blog.filter.tradition": "Tradition",
        "blog.filter.science": "Wissenschaft & Gesundheit",
        "blog.filter.guide": "Praktischer Leitfaden",
        "blog.filter.local": "Lokaler Leitfaden",
        "blog.readArticle": "Artikel lesen",
        "blog.cat.science": "Wissenschaft & Gesundheit",
        "blog.cat.guide": "Praktischer Leitfaden",
        "blog.cat.tradition": "Tradition",
        "blog.cat.local": "Lokaler Leitfaden",
        "blog.art1.title": "Siwak vs Zahnbürste: Was ist besser?",
        "blog.art1.excerpt": "Hält sich das natürliche Putzholz gegen Schalltechnologien und Nylonborsten?",
        "blog.art1.date": "08. Mai 2026",
        "blog.art2.title": "Echten Siwak in Genf kaufen: unser kompletter Leitfaden",
        "blog.art2.excerpt": "Von Genf bis zu den besten lokalen Adressen: So erkennt man einen frischen, hochwertigen Siwak.",
        "blog.art2.date": "02. Mai 2026",
        "blog.art3.title": "Xylitol + Siwak: die ideale Kombination für Ihre Zähne",
         "blog.art3.excerpt": "Die wenig bekannte Synergie zwischen Birkenzucker und Salvadora-persica-Wurzel — inspiriert von den Protokollen der Dr. Ellie Phillips.",
         "blog.art3.date": "20. Mai 2026",
         "blog.art3.image.alt": "Xylitol und Siwak kombiniert für vollständige natürliche Zahnhygiene",
        "blog.thickness.title": "Dicker oder dünner Siwak: was ist die richtige Wahl?",
        "blog.thickness.excerpt": "Vergleichstabelle, empfohlene Profile und praktische Tipps, um die richtige Stärke für Ihr Zahnfleisch und Ihre Routine zu wählen.",
        "blog.togo.date": "21. Nov. 2026",
        "blog.togo.title": "Siwak oder Allo Togo: Unterschiede und was wann verwenden",
        "blog.togo.excerpt": "Vergleichstabelle und unsere Tipps für morgens, nach dem Essen und auf Reisen.",
        "blog.thickness.date": "12. Sept 2026",
        "blog.thickness.image.alt": "Vergleich zwischen einem dünnen und einem dicken Siwak-Stab",
        "blog.art4.title": "Die 70 Wirkstoffe der Salvadora persica erklärt",
        "blog.art4.excerpt": "Kieselsäure, Tannine, natürliches Fluorid, Alkaloide, wissenschaftliche Aufschlüsselung dessen, was Ihr Stab wirklich enthält.",
        "blog.art4.date": "20. Apr 2024",
        "blog.art5.title": "Die Geschichte des Siwak durch die Zivilisationen",
        "blog.art5.excerpt": "Von Arabien bis zum alten Ägypten, von Pakistan bis Ostafrika, die jahrtausendealte Reise einer heiligen Pflanze.",
        "blog.art5.date": "14. Apr 2024",
        "blog.art6.title": "Wie hält man seinen Siwak länger frisch?",
        "blog.art6.excerpt": "Expertentipps zur Erhaltung von Frische, Aromen und Wirksamkeit Ihres Siwak-Stabs.",
        "blog.art6.date": "06. Apr 2024",
        "blog.art7.title": "Siwak während des Ramadan: was die Tradition sagt",
        "blog.art7.excerpt": "Darf Siwak während des Fastens verwendet werden? Die Meinungen der Gelehrten und die Praxis der Gefährten.",
        "blog.art7.date": "29. März 2024",
        "blog.art8.title": "Hinter den Kulissen meiner SIVÀA-Auswahl in Genf",
        "blog.art8.excerpt": "Wie ich jeden Stab auswähle, teste und verpacke, bevor ich ihn nach Genf liefere.",
        "blog.art8.date": "18. März 2024",
        "blog.art9.title": "Natürliche Weisse: Siwak-Kieselsäure vs chemische Bleichmittel",
        "blog.art9.excerpt": "Wissenschaftlicher Vergleich zwischen der natürlichen Kieselsäure von Salvadora persica und industriellen Bleichmitteln.",
        "blog.art9.date": "10. März 2024",
        "blog.loadMore": "Weitere Artikel ansehen",
        "blog.newsletter.eyebrow": "Journal & Rituale",
        "blog.newsletter.title": "Bleiben Sie über neue Artikel informiert",
        "blog.newsletter.subtitle": "Erhalten Sie jeden Monat die besten Artikel des SIVÀA Journals, Tradition, Wissenschaft und botanisches Handwerk.",
        "blog.newsletter.placeholder": "ihre@email.ch",
        "blog.newsletter.subscribe": "Abonnieren",
        "blog.newsletter.nospam": "Kein Spam. Abmeldung mit einem Klick.",
        "blog.featured.image.alt": "Vorteile und Anwendung des Siwak, traditioneller natürlicher Kaustab",
        "blog.art1.image.alt": "Siwak gegen moderne elektrische Zahnbürste im Vergleich",
        "blog.art2.image.alt": "Echten Siwak in Genf kaufen, SIVÀA Geneva",
        "blog.art3.image.alt": "Schritt-für-Schritt Siwak-Anleitung für Anfänger",
        "blog.art4.image.alt": "Wirkstoffe der Salvadora persica und natürliche Kieselsäure",
        "blog.art5.image.alt": "Jahrtausendealte Geschichte des Siwak durch Zivilisationen",
        "blog.art6.image.alt": "Frischeerhaltung eines Siwak-Stabs",
        "blog.art7.image.alt": "Verwendung des Siwak während des Ramadan-Monats",
        "blog.art8.image.alt": "Auswahl der SIVÀA Geneva Siwak-Stäbe",
        "blog.art9.image.alt": "Natürliche Aufhellung durch Siwak und aktive Kieselsäure",

        /* ── CONTACT ── */
        "contact.header.eyebrow": "Siwak in Genf",
        "contact.header.title.part1": "Kontaktieren Sie",
        "contact.header.title.part2": "mich",
        "contact.header.subtitle": "Ich antworte normalerweise innerhalb von 2–4 Stunden während des Tages.",
        "contact.form.subjectLabel": "Betreff Ihrer Nachricht",
        "contact.pill.order": "📦 Bestellung / Lieferung",
        "contact.pill.product": "🌿 Produktfrage",
        "contact.pill.return": "↩️ Rücksendung / Umtausch",
        "contact.pill.partner": "🤝 Partnerschaft",
        "contact.pill.other": "💬 Andere",
        "contact.field.firstname": "Vorname *",
        "contact.field.lastname": "Name *",
        "contact.field.email": "E-Mail *",
        "contact.field.subject": "Betreff",
        "contact.field.order": "Bestellnummer (falls zutreffend)",
        "contact.field.message": "Ihre Nachricht *",
        "contact.placeholder.firstname": "Ahmad",
        "contact.placeholder.lastname": "Al-Rashid",
        "contact.placeholder.email": "ihre@email.ch",
        "contact.placeholder.order": "SIVAA-2026-XXXXX",
        "contact.placeholder.message": "Beschreiben Sie Ihre Frage oder Situation…",
        "contact.send": "Per WhatsApp senden",
        "contact.required": "* Pflichtfelder",
        "contact.success.title": "WhatsApp wurde geöffnet!",
        "contact.success.subtitle": "Senden Sie die vorausgefüllte Nachricht in WhatsApp, ich antworte innerhalb von 2–4 Stunden während des Tages.",
        "contact.success.again": "Weitere Nachricht senden",
        "contact.wa.title": "WhatsApp",
        "contact.wa.desc": "Der schnellste Weg. Antwort in wenigen Minuten.",
        "contact.wa.cta": "Unterhaltung öffnen →",
        "contact.email.title": "E-Mail",
        "contact.email.cta": "E-Mail senden →",
        "contact.info.title": "Praktische Informationen",
        "contact.info.hours.label": "Öffnungszeiten",
        "contact.info.hours.value": "Montag – Freitag, 9–18 Uhr",
        "contact.info.atelier.label": "Abholort",
        "contact.info.atelier.value": "Quai des Vernets 11, 1227 Genf, Schweiz",
        "contact.info.delivery.label": "Lieferung",
        "contact.info.delivery.value": "Swiss Post · 2–3 Werktage, CHF 10.00 · ganze Schweiz",
        "contact.info.returns.label": "Rückgabe",
        "contact.info.returns.value": "14 Tage ohne Begründung, Umtausch oder Rückerstattung",
        "contact.order.note": "Haben Sie bestellt?",
        "contact.order.desc": "Für Fragen zu Ihrer Bestellung halten Sie Ihre Nummer bereit (SIVAA-XXXX-XXXXX) und kontaktieren Sie mich via WhatsApp für eine prioritäre Bearbeitung.",

        /* ── MERCI ── */
        "merci.banner": "Ihr Paket wird in Genf vorbereitet 🌿",
        "merci.title": "Danke!",
        "merci.sub": "Ihre Bestellung wurde registriert.",
        "merci.orderNum": "Nummer:",
        "merci.recap": "Übersicht",
        "merci.delivery": "Swiss Post Lieferung",
        "merci.total": "Total bezahlt",
        "merci.emailSent": "Bestätigung gesendet an",
        "merci.payLabel": "Zahlung abschliessen",
        "merci.twint.title": "Twint",
        "merci.twint.sub": "Schweizer Banking-App · Sofort",
        "merci.twint.badge": "🇨🇭 Empfohlen",
        "merci.twint.hint": "Senden Sie",
        "merci.twint.hint2": "an diese Nummer aus Ihrer Twint-App",
        "merci.twint.ref": "Referenz:",
        "merci.revolut.title": "Mit Revolut bezahlen",
        "merci.revolut.sub": "Direkter Zahlungslink ·",
        "merci.reassurance.q": "Eine Frage?",
        "merci.reassurance.link": "Kontaktieren Sie mich direkt auf WhatsApp",
        "merci.reassurance.end": ", ich bereite Ihr Paket persönlich in Genf vor. 🌿",
        "merci.afterPay": "Nach der Zahlung:",
        "merci.afterPay.desc": "Ihre Bestellung wird innerhalb von 24–48 Stunden via Swiss Post versendet. Sie erhalten Ihre Sendungsnummer per E-Mail.",
        "merci.confirmWa": "Per WhatsApp bestätigen",
        "merci.confirmEmail": "Per E-Mail bestätigen",
        "merci.bottomImg": "Jeder Stab, von Hand ausgewählt. Jedes Paket, mit Sorgfalt vorbereitet.",
        "merci.back": "← Zurück zur Startseite"
    }
};

/* ════════════════════════════════════════════════════════════════
   CORE LOGIC
════════════════════════════════════════════════════════════════ */

const LANG_META = {
    fr: { flag: "🇫🇷", label: "Français" },
    en: { flag: "🇬🇧", label: "English"  },
    de: { flag: "🇩🇪", label: "Deutsch"  }
};

// Langue imposée par la page (pages /de/ générées : <html data-page-lang="de">)
const PAGE_LANG = document.documentElement.getAttribute('data-page-lang');
const HOME_URL = PAGE_LANG === 'de' ? '/de/' : '/';

function getStoredLang() {
    if (PAGE_LANG && translations[PAGE_LANG]) return PAGE_LANG;
    try {
        const saved = localStorage.getItem('sivaa_lang');
        if (saved && translations[saved]) return saved;
    } catch (e) {}
    const nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    if (translations[nav]) return nav;
    return 'fr';
}

// Choix de langue par l'utilisateur : si la page existe dans cette langue
// (balise hreflang), on y va ; sinon on traduit la page sur place.
function switchLanguage(lang) {
    if (!translations[lang]) return;
    const alt = document.querySelector('link[rel="alternate"][hreflang="' + lang + '"]');
    // On garde seulement le chemin : la navigation reste sur le domaine courant
    const pathOf = (link) => new URL(link.getAttribute('href'), location.href).pathname;
    let target = alt ? pathOf(alt) : null;
    if (!target && PAGE_LANG && lang !== PAGE_LANG) {
        const def = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
        target = def ? pathOf(def) : '/';
    }
    if (target && target !== location.pathname) {
        try { localStorage.setItem('sivaa_lang', lang); } catch (e) {}
        location.href = target + location.hash;
        return;
    }
    applyLanguage(lang);
}

function applyLanguage(lang) {
    if (!translations[lang]) return;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });

    document.documentElement.setAttribute('lang', lang);

    try { localStorage.setItem('sivaa_lang', lang); } catch (e) {}

    // Update desktop switcher display
    const current = document.querySelector('.sivaa-lang-current');
    if (current) {
        current.innerHTML =
            '<span class="sivaa-lang-flag">' + LANG_META[lang].flag + '</span>' +
            '<span class="sivaa-lang-code">' + lang.toUpperCase() + '</span>' +
            '<span class="sivaa-lang-caret">▾</span>';
    }

    // Update all lang buttons (desktop dropdown + burger)
    document.querySelectorAll('.sivaa-lang-item, .sivaa-blang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Close desktop dropdown
    const menu = document.getElementById('sivaa-lang-menu');
    if (menu) menu.classList.remove('open');
    const switcher = document.getElementById('sivaa-lang-switcher');
    if (switcher) switcher.classList.remove('open');

    // Close burger menu after language switch
    closeBurger();

    // Hook pour les pages qui ont leurs propres textes (ex. checkout.html)
    if (typeof window.onSivaaLanguageChange === 'function') window.onSivaaLanguageChange(lang);
}

/* ────────────────────────────────────────────────────────────────
   BURGER MENU — Mobile/Tablet
   Injecte sur TOUTES les pages :
   - Mobile navbar : Logo | CTA Commander | Burger
   - Desktop navbar : liens normaux + switcher de langue
   - Overlay plein écran avec liens + CTA + switcher de langue
──────────────────────────────────────────────────────────────── */
function closeBurger() {
    const overlay = document.getElementById('burger-overlay');
    const btn = document.getElementById('burger-btn');
    if (overlay) overlay.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

function toggleBurger() {
    const overlay = document.getElementById('burger-overlay');
    const btn = document.getElementById('burger-btn');
    if (!overlay) return;
    const isOpen = overlay.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

function injectBurgerMenu() {
    if (document.getElementById('sivaa-nav-styles')) return; // déjà injecté

    /* ── STYLES ── */
    const style = document.createElement('style');
    style.id = 'sivaa-nav-styles';
    style.textContent = `
    /* ══ DESKTOP : lang switcher ══ */
    .sivaa-lang-switcher{position:relative;display:inline-flex;align-items:center;font-family:'Inter',sans-serif;}
    .sivaa-lang-current{display:inline-flex;align-items:center;gap:.45rem;background:rgba(32,45,33,.6);border:1px solid rgba(66,73,57,.4);color:#d7e7d4;padding:.42rem .8rem;border-radius:.5rem;font-size:.78rem;cursor:pointer;transition:all .2s;user-select:none;white-space:nowrap;}
    .sivaa-lang-current:hover{background:rgba(42,56,43,.9);border-color:rgba(157,215,90,.3);}
    .sivaa-lang-flag{font-size:.95rem;line-height:1;}
    .sivaa-lang-code{font-weight:600;letter-spacing:.05em;}
    .sivaa-lang-caret{font-size:.6rem;color:#8c9380;transition:transform .2s;}
    .sivaa-lang-switcher.open .sivaa-lang-caret{transform:rotate(180deg);}
    .sivaa-lang-menu{position:absolute;top:calc(100% + .5rem);right:0;min-width:11rem;background:#152317;border:1px solid rgba(66,73,57,.4);border-radius:.6rem;padding:.4rem;box-shadow:0 16px 48px rgba(0,0,0,.6);opacity:0;visibility:hidden;transform:translateY(-8px);transition:all .2s ease;z-index:9999;}
    .sivaa-lang-menu.open{opacity:1;visibility:visible;transform:translateY(0);}
    .sivaa-lang-item{display:flex;align-items:center;gap:.7rem;padding:.65rem .8rem;border-radius:.4rem;color:#c2c9b4;font-size:.85rem;cursor:pointer;transition:all .15s;background:transparent;border:none;width:100%;text-align:left;font-family:inherit;}
    .sivaa-lang-item:hover{background:rgba(42,56,43,.8);color:#d7e7d4;}
    .sivaa-lang-item.active{color:#9dd75a;font-weight:600;}
    .sivaa-lang-item .sivaa-lang-flag{font-size:1.1rem;}

    /* ══ MOBILE : nav right group ══ */
    .sivaa-mobile-right{display:none;align-items:center;gap:.625rem;}
    .sivaa-mobile-cta{
      display:inline-flex;align-items:center;
      background:#9dd75a;color:#1e3700;
      font-weight:700;font-size:.78rem;font-family:'Inter',sans-serif;
      padding:.4rem .875rem;border-radius:.4rem;text-decoration:none;
      white-space:nowrap;transition:background .15s;
      -webkit-tap-highlight-color:transparent;
    }
    .sivaa-mobile-cta:hover{background:#b7f473;}

    /* ══ BURGER BUTTON ══ */
    #burger-btn{
      display:none;background:transparent;border:none;
      cursor:pointer;padding:.45rem;border-radius:.4rem;
      color:#d7e7d4;transition:background .2s;
      -webkit-tap-highlight-color:transparent;flex-shrink:0;
    }
    #burger-btn:hover{background:rgba(42,56,43,.6);}
    #burger-btn svg{display:block;width:1.375rem;height:1.375rem;}

    /* ══ BREAKPOINT LOGIC ══ */
    @media(max-width:767px){
      /* Mobile : cache les liens desktop, montre le groupe mobile */
      .sivaa-mobile-right{display:flex !important;}
      #burger-btn{display:flex !important;align-items:center;justify-content:center;}
      /* Cache tous les liens nav sauf le logo sur mobile */
      nav .nav-links,
      nav .nav-links-desktop{display:none !important;}
      /* Cache aussi le switcher desktop */
      .sivaa-lang-switcher{display:none !important;}
    }
    @media(min-width:768px){
      .sivaa-mobile-right{display:none !important;}
      #burger-btn{display:none !important;}
      #burger-overlay{display:none !important;}
    }

    /* ══ BURGER OVERLAY ══ */
    #burger-overlay{
      position:fixed;inset:0;z-index:9000;
      background:rgba(5,17,7,.97);
      display:flex;flex-direction:column;
      opacity:0;visibility:hidden;
      transition:opacity .28s ease,visibility .28s ease;
    }
    #burger-overlay.open{opacity:1;visibility:visible;}

    .sivaa-bh{
      display:flex;align-items:center;justify-content:space-between;
      padding:0 1.25rem;height:64px;flex-shrink:0;
      border-bottom:1px solid rgba(66,73,57,.25);
    }
    .sivaa-bh-logo{font-family:'Newsreader',Georgia,serif;font-size:1.25rem;font-weight:300;letter-spacing:.1em;color:#d7e7d4;text-decoration:none;}
    .sivaa-bh-logo span{color:#9dd75a;font-size:.85rem;letter-spacing:.06em;}
    #sivaa-burger-close{background:transparent;border:none;cursor:pointer;padding:.5rem;color:#8c9380;transition:color .2s;-webkit-tap-highlight-color:transparent;}
    #sivaa-burger-close:hover{color:#d7e7d4;}
    #sivaa-burger-close svg{display:block;width:1.25rem;height:1.25rem;}

    .sivaa-bnav{
      display:flex;flex-wrap:wrap;justify-content:center;align-items:center;
      column-gap:1.75rem;row-gap:.25rem;
      padding:2.5rem 1.25rem 0;flex-shrink:0;
    }
    .sivaa-bnav-link{
      display:inline-flex;align-items:center;justify-content:center;
      min-height:44px;padding:0 .25rem;
      font-size:1.375rem;font-weight:300;font-family:'Newsreader',Georgia,serif;
      color:#c2c9b4;text-decoration:none;white-space:nowrap;
      transition:color .2s;
    }
    .sivaa-bnav-link:hover,.sivaa-bnav-link:active{color:#d7e7d4;}

    .sivaa-bcta{
      display:flex;align-items:center;justify-content:center;gap:.5rem;
      align-self:center;margin:1.75rem auto 0;flex-shrink:0;min-height:44px;
      background:#9dd75a;color:#1e3700;
      font-weight:700;font-size:1rem;font-family:'Inter',sans-serif;
      padding:.9rem 1.5rem;border-radius:.625rem;text-decoration:none;
      transition:background .2s;-webkit-tap-highlight-color:transparent;
    }
    .sivaa-bcta:active{background:#b7f473;}

    .sivaa-blang{
      margin-top:auto;
      border-top:1px solid rgba(66,73,57,.25);
      padding:1.1rem 1.75rem 2rem;flex-shrink:0;
    }
    .sivaa-blang-label{font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:#8c9380;margin-bottom:.75rem;}
    .sivaa-blang-row{display:flex;gap:.5rem;}
    .sivaa-blang-btn{
      display:flex;align-items:center;gap:.4rem;
      padding:.45rem .875rem;border-radius:.5rem;
      font-size:.82rem;font-weight:500;font-family:'Inter',sans-serif;
      background:rgba(22,37,24,.8);border:1px solid rgba(66,73,57,.35);
      color:#c2c9b4;cursor:pointer;transition:all .2s;
      -webkit-tap-highlight-color:transparent;
    }
    .sivaa-blang-btn:hover,.sivaa-blang-btn:active{background:rgba(42,56,43,.8);border-color:rgba(157,215,90,.3);color:#d7e7d4;}
    .sivaa-blang-btn.active{background:rgba(39,80,10,.5);border-color:#9dd75a;color:#9dd75a;font-weight:600;}
  `;
    document.head.appendChild(style);

    const initial = getStoredLang();

    /* ── OVERLAY HTML ── */
    const overlay = document.createElement('div');
    overlay.id = 'burger-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Menu de navigation');
    overlay.innerHTML = `
    <div class="sivaa-bh">
      <a href="${HOME_URL}" class="sivaa-bh-logo" onclick="closeBurger()">SIVÀA <span>Geneva</span></a>
      <button id="sivaa-burger-close" onclick="closeBurger()" aria-label="Fermer le menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="sivaa-bnav" role="navigation">
      <a href="${HOME_URL}" class="sivaa-bnav-link" onclick="closeBurger()"><span data-i18n="nav.home">Accueil</span></a>
      <a href="/blog.html"    class="sivaa-bnav-link" onclick="closeBurger()"><span data-i18n="nav.journal">Journal</span></a>
      <a href="/contact.html" class="sivaa-bnav-link" onclick="closeBurger()"><span data-i18n="nav.contact">Contact</span></a>
    </div>
    <a href="/checkout.html" class="sivaa-bcta" onclick="closeBurger()" data-i18n="nav.order">Commander</a>
    <div class="sivaa-blang">
      <p class="sivaa-blang-label">Langue / Language / Sprache</p>
      <div class="sivaa-blang-row">
        ${Object.keys(LANG_META).map(code => `
          <button class="sivaa-blang-btn${code === initial ? ' active' : ''}" data-lang="${code}" onclick="switchLanguage('${code}')">
            <span>${LANG_META[code].flag}</span><span>${code.toUpperCase()}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
    document.body.insertBefore(overlay, document.body.firstChild);

    /* ── INJECT INTO EACH NAV ──
       Structure attendue dans toutes les pages :
         <nav>
           <div class="nav-inner">
             <a class="nav-logo">…</a>
             <div class="nav-links">…</div>   ← liens desktop
           </div>
         </nav>
       On va :
       1. Ajouter 'nav-links-desktop' sur .nav-links pour le masquer en mobile
       2. Insérer le group mobile [CTA + burger] juste avant .nav-links
    */
    document.querySelectorAll('nav').forEach(nav => {
        if (nav.closest('#burger-overlay')) return; // pas dans le menu ouvert lui-même
        // Chercher le container interne (nav-inner ou premier div)
        const inner = nav.querySelector('.nav-inner') || nav.querySelector(':scope > div') || nav;

        // Marquer .nav-links comme desktop-only
        const navLinks = inner.querySelector('.nav-links');
        if (navLinks) navLinks.classList.add('nav-links-desktop');

        // Groupe mobile : CTA + burger button
        const mobileGroup = document.createElement('div');
        mobileGroup.className = 'sivaa-mobile-right';
        mobileGroup.innerHTML = `
      <a href="/checkout.html" class="sivaa-mobile-cta" data-i18n="nav.order">Commander</a>
      <button id="burger-btn" onclick="toggleBurger()" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="burger-overlay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    `;
        inner.appendChild(mobileGroup);
    });

    // Fermeture sur Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeBurger();
    });
}

/* ────────────────────────────────────────────────────────────────
   DESKTOP LANGUAGE SELECTOR
   Injecté dans .nav-links-desktop (tous les navs)
──────────────────────────────────────────────────────────────── */
function injectLanguageSelector() {
    if (document.getElementById('sivaa-lang-switcher')) return; // déjà injecté

    const initial = getStoredLang();
    const selectorHTML = `
    <div class="sivaa-lang-switcher" id="sivaa-lang-switcher">
      <div class="sivaa-lang-current" onclick="toggleLangMenu(event)">
        <span class="sivaa-lang-flag">${LANG_META[initial].flag}</span>
        <span class="sivaa-lang-code">${initial.toUpperCase()}</span>
        <span class="sivaa-lang-caret">▾</span>
      </div>
      <div class="sivaa-lang-menu" id="sivaa-lang-menu">
        ${Object.keys(LANG_META).map(code => `
          <button class="sivaa-lang-item${code === initial ? ' active' : ''}" data-lang="${code}" onclick="switchLanguage('${code}')">
            <span class="sivaa-lang-flag">${LANG_META[code].flag}</span>
            <span>${LANG_META[code].label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

    // Injecter dans le premier .nav-links-desktop trouvé (ou .nav-links en fallback)
    document.querySelectorAll('nav').forEach(nav => {
        const container = nav.querySelector('.nav-links-desktop') || nav.querySelector('.nav-links');
        if (container) {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = selectorHTML;
            container.appendChild(wrapper.firstElementChild);
        }
    });
}

function toggleLangMenu(e) {
    e.stopPropagation();
    const switcher = document.getElementById('sivaa-lang-switcher');
    const menu = document.getElementById('sivaa-lang-menu');
    if (!menu) return;
    const isOpen = menu.classList.toggle('open');
    if (switcher) switcher.classList.toggle('open', isOpen);
}

document.addEventListener('click', () => {
    const menu = document.getElementById('sivaa-lang-menu');
    const switcher = document.getElementById('sivaa-lang-switcher');
    if (menu) menu.classList.remove('open');
    if (switcher) switcher.classList.remove('open');
});

/* ────────────────────────────────────────────────────────────────
   Init on DOM ready
──────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    injectBurgerMenu();
    injectLanguageSelector();        // desktop
    injectLanguageSelectorMobile();  // mobile
    applyLanguage(getStoredLang());
});

/* ────────────────────────────────────────────────────────────────
   MOBILE LANGUAGE SELECTOR
   Injecté dans .nav-links-mobile (menu burger)
──────────────────────────────────────────────────────────────── */
function injectLanguageSelectorMobile() {
    if (document.getElementById('sivaa-lang-switcher-mobile')) return; // déjà injecté

    const initial = getStoredLang();
    const selectorHTML = `
    <div class="sivaa-lang-switcher sivaa-lang-switcher-mobile" id="sivaa-lang-switcher-mobile">
      <div class="sivaa-lang-current" onclick="toggleLangMenuMobile(event)">
        <span class="sivaa-lang-flag">${LANG_META[initial].flag}</span>
        <span class="sivaa-lang-code">${initial.toUpperCase()}</span>
        <span class="sivaa-lang-caret">▾</span>
      </div>
      <div class="sivaa-lang-menu" id="sivaa-lang-menu-mobile">
        ${Object.keys(LANG_META).map(code => `
          <button class="sivaa-lang-item${code === initial ? ' active' : ''}" data-lang="${code}" onclick="switchLanguage('${code}'); closeBurgerMenu();">
            <span class="sivaa-lang-flag">${LANG_META[code].flag}</span>
            <span>${LANG_META[code].label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

    // Injecter dans .nav-links-mobile (menu burger)
    document.querySelectorAll('nav').forEach(nav => {
        const container = nav.querySelector('.nav-links-mobile');
        if (container) {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = selectorHTML;
            container.appendChild(wrapper.firstElementChild);
        }
    });
}

function toggleLangMenuMobile(e) {
    e.stopPropagation();
    const switcher = document.getElementById('sivaa-lang-switcher-mobile');
    const menu = document.getElementById('sivaa-lang-menu-mobile');
    if (!menu) return;
    const isOpen = menu.classList.toggle('open');
    if (switcher) switcher.classList.toggle('open', isOpen);
}

// Fermeture au clic extérieur (mobile)
document.addEventListener('click', () => {
    const menu = document.getElementById('sivaa-lang-menu-mobile');
    const switcher = document.getElementById('sivaa-lang-switcher-mobile');
    if (menu) menu.classList.remove('open');
    if (switcher) switcher.classList.remove('open');
});
