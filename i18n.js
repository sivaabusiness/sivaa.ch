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

        /* ── INDEX : HERO ── */
       "hero.badge": "Racine de Salvadora Persica · Certifié Suisse",
        "hero.title.part1": "L'Art du",
        "hero.title.part2": "Siwak",
        "hero.title.part3": "à",
        "hero.title.part4": "Genève",
        "hero.subtitle": "La brosse à dents naturelle validée par la science. Ce bois pour soins dentaires réduit la plaque, purifie l'haleine et blanchit les dents de manière naturelle. Recommandé par l'OMS. Livraison en 72h à travers toute la Suisse.",
        "hero.cta.order": "Commander maintenant →",
        "hero.cta.discover": "Découvrir le Siwak",
        "hero.trust.shipping": "🚚 Swiss Post 72h",
        "hero.trust.natural": "🌿 100% Naturel",
        "hero.trust.ssl": "🔒 SSL Sécurisé",
        "hero.badge.float": "⭐ 4.9/5 — Reconnu par l'OMS",
        "hero.image.alt": "Bâton de Siwak premium SIVÀA Geneva, brosse à dents naturelle suisse",

        /* ── INDEX : PRODUITS ── */
        "products.eyebrow": "L'Atelier Botanique",
        "products.title.part1": "Notre",
        "products.title.part2": "Collection",
        "products.seeAll": "Voir tout →",

        "product1.badge": "Récolté à la main · Pakistan",
        "product1.name": "Bâton de Siwak Premium",
        "product1.desc": "Antibactérien naturel. Riche en silice, tanins et minéraux. Prêt à l'emploi.",
        "product1.price": "CHF 7.00 par pièce",
        "product1.discover": "Découvrir",
        "product1.image.alt": "Bâton de Siwak Premium SIVÀA, brosse à dents naturelle en Salvadora persica",

        "product2.badge": "Bâton à mâcher venant du Togo",
        "product2.name": "Allo Togo",
        "product2.desc": "Formulation sans fluorure artificiel. Interchangeable avec le Siwak.",
        "product2.price": "CHF 6.00 pour 5 pièce",
        "product2.image.alt": "Bâton à mâcher Allo Togo, alternative naturelle au Siwak venant du Togo",

        /* ── INDEX : POPUP PRODUIT 1 ── */
        "modal1.rating": "4.9 / 5 · 3500 années d'utilisation",
        "modal1.desc": "Antibactérien naturel. Riche en silice, tanins et minéraux. Prêt à l'emploi, sans accessoire.",
        "modal1.feat1": "🌿 70+ minéraux actifs dont fluor naturel",
        "modal1.feat2": "🌿 Antibactérien prouvé contre la plaque",
        "modal1.feat3": "🌿 Blanchiment naturel sans abrasion",
        "modal1.feat4": "🌿 Zéro plastique · 100% biodégradable",
        "modal1.shipping": "🚚 Livraison Swiss Post · CHF 9.00 · 72h",
        "modal1.priceLabel": "Prix",
        "modal1.buy": "🛍 Acheter maintenant",

        /* ── INDEX : POPUP PRODUIT 2 ── */
        "modal2.desc": "Formulation sans fluorure artificiel. Interchangeable avec le Siwak.",
        "modal2.feat1": "🌿 Sans fluorure artificiel ni SLS",
        "modal2.feat2": "🌿 Menthe & myrrhe, fraîcheur longue durée",
        "modal2.feat3": "🌿 Renforce l'émail et apaise les gencives",
        "modal2.feat4": "🌿 Testé dermatologiquement · vegan",

        /* ── INDEX : TÉMOIGNAGES ── */
        "reviews.eyebrow": "Témoignages",
        "reviews.title.part1": "Ce que disent nos",
        "reviews.title.part2": "clients",
        "reviews.subtitle": "4.9/5 · Des avis depuis Genève et toute la Suisse",
        "review1.text": "\"Je cherchais une alternative naturelle depuis longtemps. Le Siwak SIVÀA a complètement remplacé ma brosse à dents électrique. Dents plus blanches en 2 semaines, gencives apaisées.\"",
        "review1.name": "Sophie M.",
        "review1.location": "Genève · Mars 2024",
        "review1.tag": "Siwak Premium",
        "review2.text": "\"Qualité exceptionnelle. Le bâton est frais, flexible, avec cet arôme poivré caractéristique d'un Siwak de première qualité. J'en commande pour toute ma famille.\"",
        "review2.name": "Karim B.",
        "review2.location": "Lausanne · Février 2024",
        "review2.tag": "Coffret Essentiel",
        "review3.text": "\"Complètement conquise par le dentifrice botanique. Sans fluor artificiel, goût menthe très naturel. Je l'utilise avec le Siwak chaque matin, ma bouche n'a jamais été aussi propre.\"",
        "review3.name": "Amina T.",
        "review3.location": "Zürich · Avril 2024",
        "review3.tag": "Dentifrice Botanique",
        "stats.reviews": "Année d'usage ancestral",
        "stats.rating": "Note moyenne",
        "stats.recommend": "Recommandent",
        "stats.delivery": "Livraison Suisse",

        /* ── INDEX : FAQ ── */
        "faq.eyebrow": "Questions fréquentes",
        "faq.title.part1": "Tout savoir sur le",
        "faq.title.part2": "Siwak",
        "faq.q1": "Est-ce que le siwak blanchit vraiment les dents ?",
        "faq.a1": "Oui, la racine de Salvadora Persica contient de la silice, un agent naturel qui polit et blanchit les dents de manière naturelle en éliminant les taches superficielles (café, thé), sans rayer l'émail.",
        "faq.q2": "Est-ce que le siwak abîme les dents ou est-il dangereux ?",
        "faq.a2": "Non, bien au contraire ! Le siwak est 100% sûr. Contrairement aux brosses à dents à poils durs ou aux dentifrices industriels très abrasifs, les fibres naturelles de ce bois nettoient en douceur. Il renforce les gencives et ne détériore pas l'émail.",
        "faq.q3": "Le miswak est-il réellement bénéfique pour l'hygiène bucco-dentaire ?",
        "faq.a3": "Absolument. Son efficacité est validée scientifiquement et son usage est recommandé par l'Organisation Mondiale de la Santé (OMS). Il élimine radicalement la plaque dentaire, purifie l'haleine et possède des propriétés antibactériennes prouvées.",
        "faq.q4": "Où trouver du vrai siwak de haute qualité en Suisse (Migros, Coop, Manor) ?",
        "faq.a4": "Il est souvent difficile de trouver du siwak frais en grande distribution (Coop, Migros, Manor) ou en pharmacie. Chez Sivàa Geneva, nous sommes l'alternative locale spécialisée : un siwak premium, certifié, disponible en livraison rapide Swiss Post (72h) ou en retrait dans notre atelier à Genève (paiement Twint accepté).",
        "faq.q5": "Comment utiliser le Siwak pour la première fois ?",
        "faq.a5": "Trempez l'extrémité du bâton dans de l'eau pendant 5 minutes. Mâchez doucement pour effilocher les fibres et former une brosse naturelle. Frottez vos dents et vos gencives en mouvement circulaire. Rincez. Coupez l'extrémité usée et recommencez.",
        "faq.q6": "Dois-je utiliser du dentifrice en plus du Siwak ?",
        "faq.a6": "Le Siwak contient naturellement ses propres agents nettoyants, du fluor naturel et des antibactériens. Il se suffit donc à lui tout seul pour l'hygiène bucco-dentaire ! Vous pouvez alterner avec un dentifrice si vous le souhaitez.",
        "faq.a6": "Oui, plusieurs études publiées dans le Journal of Periodontology confirment que le Siwak est aussi efficace qu'une brosse à dents conventionnelle pour réduire la plaque et l'inflammation gingivale, grâce à ses 70+ composés actifs naturels (silice, tanins, alcaloïdes, fluor naturel). Néanmoins, le facteur le plus déterminant sera la technique avec laquelle vous l'utilisez.",
        "faq.q7": "Je souhaite choisir si mon bâton à mâcher sera fin ou épais, comment faire ?",
        "faq.a7": "Ne vous inquiétez pas, en ajoutant votre message à votre commande je vous sélectionnerai le bâton à mâcher le plus adapté à vos envies.",
        "faq.noQuestion": "Votre question n'est pas listée ?",
        "faq.contactBtn": "💬 Contacter notre atelier",

        /* ── ATELIER GENÈVE ── */
        "loc.eyebrow": "Localisation & Prestige",
        "loc.title.part1": "Votre atelier à",
        "loc.title.part2": "Genève",
        "loc.subtitle": "Situé au cœur de <strong style=\"color:#d7e7d4;\">Plainpalais, Genève</strong>, notre atelier vous accueille sur rendez-vous pour une remise en main propre personnalisée.",
        "loc.country": "Suisse",
        "loc.district": "Quartier Plainpalais",
        "loc.appointment.title": "Retrait sur rendez-vous",
        "loc.appointment.desc": "Disponible 7j/7, Contactez-nous pour convenir d'un horaire adapté à vos disponibilités.",
        "loc.payment.title": "Paiement Twint Genève & Revolut",
        "loc.payment.desc": "Règlement sécurisé à réception. Minimum CHF 30.00 pour toute commande.",
        "loc.cta": "📞 Prendre rendez-vous à Genève",

        /* ── INDEX : CTA FINAL ── */
        "cta.eyebrow": "Livraison Swiss Post · 72h",
        "cta.title.part1": "Commencez votre rituel",
        "cta.title.part2": "aujourd'hui",
        "cta.subtitle": "Rejoignez les centaines de Genevois qui ont adopté le rituel du Siwak. Naturel, efficace, éternel.",
        "cta.button": "Commander mon Siwak →",

        /* ── FOOTER (commun à toutes les pages) ── */
        "footer.tagline": "L'excellence suisse au service d'un rituel millénaire.",
        "footer.col.products": "Produits",
        "footer.product.siwak": "Bâton de Siwak Premium",
        "footer.product.togo": "Allo Togo",
        "footer.col.info": "Informations",
        "footer.info.journal": "Journal",
        "footer.info.contact": "Contact",
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
        "blog.featured.date": "12 Mai 2024",
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
        "blog.art1.date": "08 Mai 2024",
        "blog.art2.title": "Acheter du vrai Siwak à Genève : notre guide complet",
        "blog.art2.excerpt": "De nos ateliers genevois aux meilleures adresses locales, comment identifier un Siwak frais et éthique.",
        "blog.art2.date": "02 Mai 2024",
        "blog.art3.title": "Comment utiliser le Siwak pour la première fois ?",
        "blog.art3.excerpt": "Guide pas-à-pas pour débutants : préparation, geste, fréquence et entretien de votre bâton de Siwak.",
        "blog.art3.date": "28 Avr 2024",
        "blog.art4.title": "Les 70 composés actifs du Salvadora persica expliqués",
        "blog.art4.excerpt": "Silice, tanins, fluor naturel, alcaloïdes. Décryptage scientifique de ce que contient vraiment votre bâton.",
        "blog.art4.date": "20 Avr 2024",
        "blog.art5.title": "L'histoire du Siwak à travers les civilisations",
        "blog.art5.excerpt": "D'Arabie en Égypte ancienne, du Pakistan à l'Afrique de l'Est — le voyage millénaire d'une plante sacrée.",
        "blog.art5.date": "14 Avr 2024",
        "blog.art6.title": "Comment conserver son Siwak frais pendant 4 semaines ?",
        "blog.art6.excerpt": "Conseils d'expert pour préserver la fraîcheur, les arômes et l'efficacité de votre bâton de Siwak.",
        "blog.art6.date": "06 Avr 2024",
        "blog.art7.title": "Siwak pendant le Ramadan : ce que dit la tradition",
        "blog.art7.excerpt": "Le Siwak peut-il être utilisé pendant le jeûne ? Les avis des savants et la pratique des compagnons.",
        "blog.art7.date": "29 Mar 2024",
        "blog.art8.title": "Notre atelier genevois : coulisses de la sélection SIVÀA",
        "blog.art8.excerpt": "Comment nous choisissons, testons et conditionnons chaque bâton avant de vous le livrer à Genève.",
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
        "blog.art2.image.alt": "Acheter du Siwak authentique à Genève, atelier SIVÀA",
        "blog.art3.image.alt": "Guide d'utilisation du Siwak pour débutants, étape par étape",
        "blog.art4.image.alt": "Composés actifs du Salvadora persica et silice naturelle",
        "blog.art5.image.alt": "Histoire millénaire du Siwak à travers les civilisations",
        "blog.art6.image.alt": "Conservation et fraîcheur d'un bâton de Siwak",
        "blog.art7.image.alt": "Utilisation du Siwak pendant le mois du Ramadan",
        "blog.art8.image.alt": "Atelier SIVÀA Geneva, sélection artisanale des bâtons",
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
        "article.sidebar.cta.desc": "Sélectionné à la main au Pakistan, certifié par nos soins à Genève. La quintessence du bâton de Siwak.",
        "article.sidebar.cta.btn": "Commander · CHF 7 →",
        "article.sidebar.delivery": "Livraison Swiss Post · 72h en Suisse",
        "article.sidebar.langs.title": "Cet article en d'autres langues",
        "article.cta.title": "Commencez votre rituel <em class=\"accent\">aujourd'hui</em>",
        "article.cta.subtitle": "Quatorze siècles de sagesse botanique, sélectionnés avec la précision genevoise. Votre Siwak Premium vous attend.",
        "article.cta.btn": "Commander mon Siwak →",

        /* ── CONTACT ── */
        "contact.header.eyebrow": "Atelier Genevois",
        "contact.header.title.part1": "Nous",
        "contact.header.title.part2": "contacter",
        "contact.header.subtitle": "Nous répondons en général dans les 2–4 heures en journée.",
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
        "contact.placeholder.order": "SIVAA-2024-XXXXX",
        "contact.placeholder.message": "Décrivez votre question ou situation…",
        "contact.send": "Envoyer le message",
        "contact.required": "* champs obligatoires",
        "contact.success.title": "Message envoyé !",
        "contact.success.subtitle": "Nous vous répondons dans les 2–4 heures en journée.",
        "contact.success.again": "Envoyer un autre message",
        "contact.wa.title": "WhatsApp",
        "contact.wa.desc": "La façon la plus rapide. Réponse en quelques minutes.",
        "contact.wa.cta": "Ouvrir la conversation →",
        "contact.email.title": "Email",
        "contact.email.cta": "Envoyer un email →",
        "contact.info.title": "Informations pratiques",
        "contact.info.hours.label": "Horaires",
        "contact.info.hours.value": "Lundi – Vendredi, 9h – 18h",
        "contact.info.atelier.label": "Atelier",
        "contact.info.atelier.value": "Rue de la Corraterie 14, 1204 Genève, Suisse",
        "contact.info.delivery.label": "Livraison",
        "contact.info.delivery.value": "Swiss Post · 2–3 jours ouvrés, CHF 9.00 · toute la Suisse",
        "contact.info.returns.label": "Retours",
        "contact.info.returns.value": "14 jours sans justification, échange ou remboursement",
        "contact.order.note": "Vous avez passé commande ?",
        "contact.order.desc": "Pour toute question sur votre commande, munissez-vous de votre numéro (SIVAA-XXXX-XXXXX) et contactez-nous par WhatsApp pour un traitement prioritaire.",

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
        "merci.back": "← Retour à l'accueil",
    },

    en: {
        /* ── NAV ── */
        "nav.home": "Home",
        "nav.products": "Products",
        "nav.journal": "Journal",
        "nav.contact": "Contact",
        "nav.order": "Order",
        "nav.buy": "Buy",

        /* ── INDEX : HERO ── */
        "hero.badge": "Hand-harvested · Pakistan · Swiss Certified",
        "hero.title.part1": "The Art of",
        "hero.title.part2": "Siwak",
        "hero.title.part3": "in",
        "hero.title.part4": "Geneva",
        "hero.subtitle": "The natural toothbrush the world has used for 3,500 years, selected with Swiss precision. Antibacterial, whitening, biodegradable. 72h delivery throughout Switzerland.",
        "hero.cta.order": "Order now →",
        "hero.cta.discover": "Discover Siwak",
        "hero.trust.shipping": "🚚 Swiss Post 72h",
        "hero.trust.natural": "🌿 100% Natural",
        "hero.trust.ssl": "🔒 SSL Secured",
        "hero.badge.float": "⭐ 4.9/5 — Recognized by WHO",
        "hero.image.alt": "Premium SIVÀA Geneva Siwak stick, Swiss natural toothbrush",

        /* ── INDEX : PRODUCTS ── */
        "products.eyebrow": "The Botanical Workshop",
        "products.title.part1": "Our",
        "products.title.part2": "Collection",
        "products.seeAll": "See all →",

        "product1.badge": "Hand-harvested · Pakistan",
        "product1.name": "Premium Siwak Stick",
        "product1.desc": "Natural antibacterial. Rich in silica, tannins and minerals. Ready to use.",
        "product1.price": "CHF 7.00 per piece",
        "product1.discover": "Discover",
        "product1.image.alt": "SIVÀA Premium Siwak stick, natural Salvadora persica toothbrush",

        "product2.badge": "Chewing stick from Togo",
        "product2.name": "Allo Togo",
        "product2.desc": "Formula without artificial fluoride. Interchangeable with Siwak.",
        "product2.price": "CHF 6.00 per 5 piece",
        "product2.image.alt": "Allo Togo chewing stick, natural Siwak alternative from Togo",

        /* ── INDEX : POPUP 1 ── */
        "modal1.rating": "4.9 / 5 · 3500 Years of use",
        "modal1.desc": "Natural antibacterial. Rich in silica, tannins and minerals. Ready to use, no accessory needed.",
        "modal1.feat1": "🌿 70+ active minerals including natural fluoride",
        "modal1.feat2": "🌿 Proven antibacterial against plaque",
        "modal1.feat3": "🌿 Natural whitening without abrasion",
        "modal1.feat4": "🌿 Zero plastic · 100% biodegradable",
        "modal1.shipping": "🚚 Swiss Post delivery · CHF 9.00 · 72h",
        "modal1.priceLabel": "Price",
        "modal1.buy": "🛍 Buy now",

        /* ── INDEX : POPUP 2 ── */
        "modal2.desc": "Formula without artificial fluoride. Interchangeable with Siwak.",
        "modal2.feat1": "🌿 No artificial fluoride or SLS",
        "modal2.feat2": "🌿 Mint & myrrh, long-lasting freshness",
        "modal2.feat3": "🌿 Strengthens enamel and soothes gums",
        "modal2.feat4": "🌿 Dermatologically tested · vegan",

        /* ── INDEX : REVIEWS ── */
        "reviews.eyebrow": "Testimonials",
        "reviews.title.part1": "What our",
        "reviews.title.part2": "customers",
        "reviews.title.suffix": "say",
        "reviews.subtitle": "4.9/5 · Reviews from Geneva and across Switzerland",
        "review1.text": "\"I had been looking for a natural alternative for a long time. The SIVÀA Siwak completely replaced my electric toothbrush. Whiter teeth in 2 weeks, soothed gums.\"",
        "review1.name": "Sophie M.",
        "review1.location": "Geneva · March 2024",
        "review1.tag": "Premium Siwak",
        "review2.text": "\"Exceptional quality. The stick is fresh, flexible, with that characteristic peppery aroma of top-quality Siwak. I order for my whole family.\"",
        "review2.name": "Karim B.",
        "review2.location": "Lausanne · February 2024",
        "review2.tag": "Essential Set",
        "review3.text": "\"Completely won over by the botanical toothpaste. No artificial fluoride, very natural mint taste. I use it with Siwak every morning, my mouth has never been so clean.\"",
        "review3.name": "Amina T.",
        "review3.location": "Zurich · April 2024",
        "review3.tag": "Botanical Toothpaste",
        "stats.reviews": "Year of traditional use",
        "stats.rating": "Average rating",
        "stats.recommend": "Recommend",
        "stats.delivery": "Swiss delivery",

        /* ── INDEX : FAQ ── */
        "faq.eyebrow": "Frequently asked questions",
        "faq.title.part1": "Everything about",
        "faq.title.part2": "Siwak",
        "faq.q1": "How to use Siwak for the first time?",
        "faq.a1": "Soak the tip of the stick in water for 5 minutes to soften it. Chew gently to fray the fibers and form a natural brush. Rub your teeth and gums in circular motions for 2-3 minutes. Rinse. Cut off the used tip and start again.",
        "faq.q2": "How long does a Siwak stick last?",
        "faq.a2": "A SIVÀA stick lasts on average 2 to 4 weeks depending on use. Cut off the used tip (about 1cm) after each session to always have a fresh and hygienic surface.",
        "faq.q3": "What are the delivery times and costs?",
        "faq.a3": "Delivery in 2-3 business days via Swiss Post for CHF 9.00. All orders placed before 2 p.m. are shipped the same day (business days). You will receive a confirmation email with tracking number.",
        "faq.q4": "Should I use toothpaste in addition to Siwak?",
        "faq.a4": "Personally, on days I want a fresher mouth I sometimes use toothpaste with Siwak. But Siwak naturally contains its own cleansing agents, mild abrasives and antibacterials. It works perfectly on its own. Do what feels right!",
        "faq.q5": "Is Siwak suitable for children and pregnant women?",
        "faq.a5": "Siwak is a 100% natural product, without chemical additives. It is generally considered safe for children aged 6 and up (under supervision) and pregnant women. If in doubt, consult your doctor or dentist.",
        "faq.q6": "Is Siwak as effective as a regular toothbrush?",
        "faq.a6": "Yes, several studies published in the Journal of Periodontology confirm that Siwak is as effective as a conventional toothbrush at reducing plaque and gum inflammation, thanks to its 70+ natural active compounds (silica, tannins, alkaloids, natural fluoride). However, the most determining factor will be the technique you use.",
        "faq.q7": "I'd like to choose whether my chewing stick is thin or thick, how?",
        "faq.a7": "Don't worry, by adding your message to your order I will select the chewing stick most suited to your preferences.",
        "faq.noQuestion": "Your question isn't listed?",
        "faq.contactBtn": "💬 Contact our workshop",

        /* ── INDEX : LOCATION SECTION ── */
        "loc.eyebrow": "Location & Prestige",
        "loc.title.part1": "Your workshop in",
        "loc.title.part2": "Geneva",
        "loc.subtitle": "Located in the heart of <strong style=\"color:#d7e7d4;\">Plainpalais, Geneva</strong>, our workshop welcomes you by appointment for a personalized hand delivery.",
        "loc.country": "Switzerland",
        "loc.district": "Plainpalais district",
        "loc.appointment.title": "Pickup by appointment",
        "loc.appointment.desc": "Available 7 days a week, Contact us to arrange a time that suits your schedule.",
        "loc.payment.title": "Twint Geneva & Revolut Payment",
        "loc.payment.desc": "Secure payment on reception. Minimum CHF 30.00 for any order.",
        "loc.cta": "📞 Book an appointment in Geneva",

        /* ── INDEX : CTA FINAL ── */
        "cta.eyebrow": "Swiss Post delivery · 72h",
        "cta.title.part1": "Start your ritual",
        "cta.title.part2": "today",
        "cta.subtitle": "Join the hundreds of Genevans who have adopted the Siwak ritual. Natural, effective, timeless.",
        "cta.button": "Order my Siwak →",

        /* ── FOOTER ── */
        "footer.tagline": "Swiss excellence serving a millennial ritual.",
        "footer.col.products": "Products",
        "footer.product.siwak": "Premium Siwak Stick",
        "footer.product.togo": "Allo Togo",
        "footer.col.info": "Information",
        "footer.info.journal": "Journal",
        "footer.info.contact": "Contact",
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
        "blog.featured.date": "May 12, 2024",
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
        "blog.art1.date": "May 08, 2024",
        "blog.art2.title": "Buying real Siwak in Geneva: our complete guide",
        "blog.art2.excerpt": "From our Geneva workshops to the best local addresses, how to identify a fresh and ethical Siwak.",
        "blog.art2.date": "May 02, 2024",
        "blog.art3.title": "How to use Siwak for the first time?",
        "blog.art3.excerpt": "Step-by-step guide for beginners: preparation, technique, frequency and care of your Siwak stick.",
        "blog.art3.date": "Apr 28, 2024",
        "blog.art4.title": "The 70 active compounds of Salvadora persica explained",
        "blog.art4.excerpt": "Silica, tannins, natural fluoride, alkaloids, scientific breakdown of what your stick really contains.",
        "blog.art4.date": "Apr 20, 2024",
        "blog.art5.title": "The history of Siwak across civilizations",
        "blog.art5.excerpt": "From Arabia to ancient Egypt, Pakistan to East Africa, the millennial journey of a sacred plant.",
        "blog.art5.date": "Apr 14, 2024",
        "blog.art6.title": "How to keep your Siwak fresh for 4 weeks?",
        "blog.art6.excerpt": "Expert tips to preserve the freshness, aromas and effectiveness of your Siwak stick.",
        "blog.art6.date": "Apr 06, 2024",
        "blog.art7.title": "Siwak during Ramadan: what tradition says",
        "blog.art7.excerpt": "Can Siwak be used during fasting? The opinions of scholars and the practice of the companions.",
        "blog.art7.date": "Mar 29, 2024",
        "blog.art8.title": "Our Geneva workshop: behind the scenes of SIVÀA selection",
        "blog.art8.excerpt": "How we choose, test and package each stick before delivering it to you in Geneva.",
        "blog.art8.date": "Mar 18, 2024",
        "blog.art9.title": "Natural whiteness: Siwak silica vs chemical whiteners",
        "blog.art9.excerpt": "Scientific comparison between the natural silica of Salvadora persica and industrial whitening agents.",
        "blog.art9.date": "Mar 10, 2024",
        "blog.loadMore": "See more articles",
        "blog.newsletter.eyebrow": "Journal & Rituals",
        "blog.newsletter.title": "Stay informed about new articles",
        "blog.newsletter.subtitle": "Receive the best SIVÀA Journal articles each month, tradition, science, and botanical craftsmanship.",
        "blog.newsletter.placeholder": "your@email.com",
        "blog.newsletter.subscribe": "Subscribe",
        "blog.newsletter.nospam": "No spam. Unsubscribe in one click.",
        "blog.featured.image.alt": "Benefits and use of Siwak, traditional natural chewing stick",
        "blog.art1.image.alt": "Siwak versus modern electric toothbrush comparison",
        "blog.art2.image.alt": "Buying authentic Siwak in Geneva, SIVÀA workshop",
        "blog.art3.image.alt": "Step-by-step Siwak usage guide for beginners",
        "blog.art4.image.alt": "Active compounds of Salvadora persica and natural silica",
        "blog.art5.image.alt": "Thousand-year history of Siwak across civilizations",
        "blog.art6.image.alt": "Freshness preservation of a Siwak stick",
        "blog.art7.image.alt": "Siwak use during the month of Ramadan",
        "blog.art8.image.alt": "SIVÀA Geneva workshop, artisan selection of sticks",
        "blog.art9.image.alt": "Natural whitening of Siwak and active silica",

        /* ── CONTACT ── */
        "contact.header.eyebrow": "Geneva Workshop",
        "contact.header.title.part1": "Contact",
        "contact.header.title.part2": "us",
        "contact.header.subtitle": "We usually reply within 2–4 hours during the day.",
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
        "contact.placeholder.order": "SIVAA-2024-XXXXX",
        "contact.placeholder.message": "Describe your question or situation…",
        "contact.send": "Send message",
        "contact.required": "* required fields",
        "contact.success.title": "Message sent!",
        "contact.success.subtitle": "We reply within 2–4 hours during the day.",
        "contact.success.again": "Send another message",
        "contact.wa.title": "WhatsApp",
        "contact.wa.desc": "The fastest way. Reply in a few minutes.",
        "contact.wa.cta": "Open conversation →",
        "contact.email.title": "Email",
        "contact.email.cta": "Send an email →",
        "contact.info.title": "Practical information",
        "contact.info.hours.label": "Hours",
        "contact.info.hours.value": "Monday – Friday, 9am – 6pm",
        "contact.info.atelier.label": "Workshop",
        "contact.info.atelier.value": "Rue de la Corraterie 14, 1204 Geneva, Switzerland",
        "contact.info.delivery.label": "Delivery",
        "contact.info.delivery.value": "Swiss Post · 2–3 business days, CHF 9.00 · all of Switzerland",
        "contact.info.returns.label": "Returns",
        "contact.info.returns.value": "14 days no-questions-asked, exchange or refund",
        "contact.order.note": "Already placed an order?",
        "contact.order.desc": "For any question about your order, have your number ready (SIVAA-XXXX-XXXXX) and contact us via WhatsApp for priority handling.",

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
        "merci.back": "← Back to home",
    },

    de: {
        /* ── NAV ── */
        "nav.home": "Startseite",
        "nav.products": "Produkte",
        "nav.journal": "Journal",
        "nav.contact": "Kontakt",
        "nav.order": "Bestellen",
        "nav.buy": "Kaufen",

        /* ── INDEX : HERO ── */
        "hero.badge": "Handgeerntet · Pakistan · Schweizer Zertifiziert",
        "hero.title.part1": "Die Kunst des",
        "hero.title.part2": "Siwak",
        "hero.title.part3": "in",
        "hero.title.part4": "Genf",
        "hero.subtitle": "Die natürliche Zahnbürste, die die Welt seit 3500 Jahren verwendet, ausgewählt mit Schweizer Präzision. Antibakteriell, aufhellend, biologisch abbaubar. Lieferung innert 72h in der ganzen Schweiz.",
        "hero.cta.order": "Jetzt bestellen →",
        "hero.cta.discover": "Siwak entdecken",
        "hero.trust.shipping": "🚚 Swiss Post 72h",
        "hero.trust.natural": "🌿 100% Natürlich",
        "hero.trust.ssl": "🔒 SSL-Gesichert",
        "hero.badge.float": "⭐ 4.9/5 — Von der WHO anerkannt",
        "hero.image.alt": "Premium SIVÀA Geneva Siwak-Stab, Schweizer natürliche Zahnbürste",

        /* ── INDEX : PRODUKTE ── */
        "products.eyebrow": "Die Botanische Werkstatt",
        "products.title.part1": "Unsere",
        "products.title.part2": "Kollektion",
        "products.seeAll": "Alle ansehen →",

        "product1.badge": "Handgeerntet · Pakistan",
        "product1.name": "Premium Siwak-Stab",
        "product1.desc": "Natürlich antibakteriell. Reich an Kieselsäure, Tanninen und Mineralien. Gebrauchsfertig.",
        "product1.price": "CHF 7.00 pro Stück",
        "product1.discover": "Entdecken",
        "product1.image.alt": "SIVÀA Premium Siwak-Stab, natürliche Salvadora persica Zahnbürste",

        "product2.badge": "Kaustab aus Togo",
        "product2.name": "Allo Togo",
        "product2.desc": "Formel ohne künstliches Fluorid. Mit Siwak austauschbar.",
        "product2.price": "CHF 6.00 pro 5 Stück",
        "product2.image.alt": "Allo Togo Kaustab, natürliche Siwak-Alternative aus Togo",

        /* ── POPUP 1 ── */
        "modal1.rating": "4.9 / 5 · 3500 Jahre Nutzung",
        "modal1.desc": "Natürlich antibakteriell. Reich an Kieselsäure, Tanninen und Mineralien. Gebrauchsfertig, ohne Zubehör.",
        "modal1.feat1": "🌿 70+ aktive Mineralien einschliesslich natürliches Fluorid",
        "modal1.feat2": "🌿 Nachweislich antibakteriell gegen Plaque",
        "modal1.feat3": "🌿 Natürliche Aufhellung ohne Abrieb",
        "modal1.feat4": "🌿 Null Plastik · 100% biologisch abbaubar",
        "modal1.shipping": "🚚 Swiss Post Lieferung · CHF 9.00 · 72h",
        "modal1.priceLabel": "Preis",
        "modal1.buy": "🛍 Jetzt kaufen",

        /* ── POPUP 2 ── */
        "modal2.desc": "Formel ohne künstliches Fluorid. Mit Siwak austauschbar.",
        "modal2.feat1": "🌿 Ohne künstliches Fluorid oder SLS",
        "modal2.feat2": "🌿 Minze & Myrrhe, lang anhaltende Frische",
        "modal2.feat3": "🌿 Stärkt den Zahnschmelz und beruhigt das Zahnfleisch",
        "modal2.feat4": "🌿 Dermatologisch getestet · vegan",

        /* ── REVIEWS ── */
        "reviews.eyebrow": "Kundenstimmen",
        "reviews.title.part1": "Was unsere",
        "reviews.title.part2": "Kunden",
        "reviews.title.suffix": "sagen",
        "reviews.subtitle": "4.9/5 · Bewertungen aus Genf und der ganzen Schweiz",
        "review1.text": "\"Ich suchte schon lange nach einer natürlichen Alternative. Der SIVÀA Siwak hat meine elektrische Zahnbürste komplett ersetzt. Weissere Zähne nach 2 Wochen, beruhigtes Zahnfleisch.\"",
        "review1.name": "Sophie M.",
        "review1.location": "Genf · März 2024",
        "review1.tag": "Premium Siwak",
        "review2.text": "\"Aussergewöhnliche Qualität. Der Stab ist frisch, flexibel, mit diesem charakteristischen pfeffrigen Aroma eines erstklassigen Siwak. Ich bestelle für die ganze Familie.\"",
        "review2.name": "Karim B.",
        "review2.location": "Lausanne · Februar 2024",
        "review2.tag": "Essential Set",
        "review3.text": "\"Die botanische Zahnpasta hat mich völlig überzeugt. Ohne künstliches Fluorid, sehr natürlicher Minzgeschmack. Ich benutze sie jeden Morgen mit dem Siwak, mein Mund war noch nie so sauber.\"",
        "review3.name": "Amina T.",
        "review3.location": "Zürich · April 2024",
        "review3.tag": "Botanische Zahnpasta",
        "stats.reviews": "Seit jeher",
        "stats.rating": "Durchschnittsnote",
        "stats.recommend": "Empfehlen",
        "stats.delivery": "Lieferung Schweiz",

        /* ── FAQ ── */
        "faq.eyebrow": "Häufig gestellte Fragen",
        "faq.title.part1": "Alles über den",
        "faq.title.part2": "Siwak",
        "faq.q1": "Wie verwendet man Siwak zum ersten Mal?",
        "faq.a1": "Tauchen Sie die Spitze des Stabs 5 Minuten in Wasser, um ihn weicher zu machen. Kauen Sie sanft, um die Fasern auszufransen und eine natürliche Bürste zu formen. Reiben Sie Ihre Zähne und Ihr Zahnfleisch 2-3 Minuten in kreisenden Bewegungen. Ausspülen. Schneiden Sie die benutzte Spitze ab und beginnen Sie erneut.",
        "faq.q2": "Wie lange hält ein Siwak-Stab?",
        "faq.a2": "Ein SIVÀA-Stab hält je nach Gebrauch durchschnittlich 2 bis 4 Wochen. Schneiden Sie nach jeder Anwendung die benutzte Spitze (ca. 1cm) ab, um immer eine frische und hygienische Oberfläche zu haben.",
        "faq.q3": "Wie sind die Lieferzeiten und -kosten?",
        "faq.a3": "Lieferung in 2-3 Werktagen via Swiss Post für CHF 9.00. Alle Bestellungen vor 14 Uhr werden am selben Tag versendet (Werktage). Sie erhalten eine Bestätigungsmail mit Sendungsnummer.",
        "faq.q4": "Soll ich zusätzlich zum Siwak Zahnpasta verwenden?",
        "faq.a4": "Persönlich verwende ich an Tagen, an denen ich einen frischeren Mund möchte, manchmal Zahnpasta mit Siwak. Aber Siwak enthält von Natur aus eigene Reinigungsmittel, milde Schleifmittel und antibakterielle Wirkstoffe. Er genügt also allein. Machen Sie es nach Gefühl!",
        "faq.q5": "Ist Siwak für Kinder und Schwangere geeignet?",
        "faq.a5": "Siwak ist ein 100% natürliches Produkt ohne chemische Zusätze. Es gilt allgemein als sicher für Kinder ab 6 Jahren (unter Aufsicht) und für Schwangere. Im Zweifelsfall konsultieren Sie Ihren Arzt oder Zahnarzt.",
        "faq.q6": "Ist Siwak so wirksam wie eine normale Zahnbürste?",
        "faq.a6": "Ja, mehrere im Journal of Periodontology veröffentlichte Studien bestätigen, dass Siwak dank seiner über 70 natürlichen Wirkstoffe (Kieselsäure, Tannine, Alkaloide, natürliches Fluorid) genauso wirksam gegen Plaque und Zahnfleischentzündungen ist wie eine herkömmliche Zahnbürste. Der entscheidende Faktor ist jedoch die Technik, mit der Sie ihn verwenden.",
        "faq.q7": "Ich möchte wählen, ob mein Kaustab dünn oder dick ist. Wie?",
        "faq.a7": "Keine Sorge, indem Sie Ihrer Bestellung eine Nachricht hinzufügen, wähle ich den Kaustab aus, der am besten zu Ihren Wünschen passt.",
        "faq.noQuestion": "Ihre Frage ist nicht aufgeführt?",
        "faq.contactBtn": "💬 Werkstatt kontaktieren",

        /* ── INDEX : STANDORT SECTION ── */
        "loc.eyebrow": "Standort & Prestige",
        "loc.title.part1": "Ihre Werkstatt in",
        "loc.title.part2": "Genf",
        "loc.subtitle": "Im Herzen von <strong style=\"color:#d7e7d4;\">Plainpalais, Genf</strong> gelegen, empfängt Sie unsere Werkstatt nach Vereinbarung für eine persönliche Übergabe.",
        "loc.country": "Schweiz",
        "loc.district": "Quartier Plainpalais",
        "loc.appointment.title": "Abholung nach Vereinbarung",
        "loc.appointment.desc": "7 Tage die Woche verfügbar, Kontaktieren Sie uns, um einen passenden Termin zu vereinbaren.",
        "loc.payment.title": "Zahlung mit Twint Genf & Revolut",
        "loc.payment.desc": "Sichere Zahlung bei Erhalt. Mindestbestellwert CHF 30.00.",
        "loc.cta": "📞 Termin in Genf vereinbaren",

        /* ── CTA FINAL ── */
        "cta.eyebrow": "Swiss Post Lieferung · 72h",
        "cta.title.part1": "Beginnen Sie Ihr Ritual",
        "cta.title.part2": "heute",
        "cta.subtitle": "Schliessen Sie sich den Hunderten von Genfern an, die das Siwak-Ritual angenommen haben. Natürlich, wirksam, ewig.",
        "cta.button": "Meinen Siwak bestellen →",

        /* ── FOOTER ── */
        "footer.tagline": "Schweizer Exzellenz im Dienst eines uralten Rituals.",
        "footer.col.products": "Produkte",
        "footer.product.siwak": "Premium Siwak-Stab",
        "footer.product.togo": "Allo Togo",
        "footer.col.info": "Informationen",
        "footer.info.journal": "Journal",
        "footer.info.contact": "Kontakt",
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
        "blog.featured.date": "12. Mai 2024",
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
        "blog.art1.date": "08. Mai 2024",
        "blog.art2.title": "Echten Siwak in Genf kaufen: unser kompletter Leitfaden",
        "blog.art2.excerpt": "Von unseren Genfer Werkstätten bis zu den besten lokalen Adressen, wie man einen frischen und ethischen Siwak erkennt.",
        "blog.art2.date": "02. Mai 2024",
        "blog.art3.title": "Wie benutzt man Siwak zum ersten Mal?",
        "blog.art3.excerpt": "Schritt-für-Schritt-Anleitung für Anfänger: Vorbereitung, Technik, Häufigkeit und Pflege Ihres Siwak-Stabs.",
        "blog.art3.date": "28. Apr 2024",
        "blog.art4.title": "Die 70 Wirkstoffe der Salvadora persica erklärt",
        "blog.art4.excerpt": "Kieselsäure, Tannine, natürliches Fluorid, Alkaloide, wissenschaftliche Aufschlüsselung dessen, was Ihr Stab wirklich enthält.",
        "blog.art4.date": "20. Apr 2024",
        "blog.art5.title": "Die Geschichte des Siwak durch die Zivilisationen",
        "blog.art5.excerpt": "Von Arabien bis zum alten Ägypten, von Pakistan bis Ostafrika, die jahrtausendealte Reise einer heiligen Pflanze.",
        "blog.art5.date": "14. Apr 2024",
        "blog.art6.title": "Wie hält man seinen Siwak 4 Wochen frisch?",
        "blog.art6.excerpt": "Expertentipps zur Erhaltung von Frische, Aromen und Wirksamkeit Ihres Siwak-Stabs.",
        "blog.art6.date": "06. Apr 2024",
        "blog.art7.title": "Siwak während des Ramadan: was die Tradition sagt",
        "blog.art7.excerpt": "Darf Siwak während des Fastens verwendet werden? Die Meinungen der Gelehrten und die Praxis der Gefährten.",
        "blog.art7.date": "29. März 2024",
        "blog.art8.title": "Unsere Genfer Werkstatt: Hinter den Kulissen der SIVÀA-Auswahl",
        "blog.art8.excerpt": "Wie wir jeden Stab auswählen, testen und verpacken, bevor wir ihn nach Genf liefern.",
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
        "blog.art2.image.alt": "Echten Siwak in Genf kaufen, SIVÀA-Werkstatt",
        "blog.art3.image.alt": "Schritt-für-Schritt Siwak-Anleitung für Anfänger",
        "blog.art4.image.alt": "Wirkstoffe der Salvadora persica und natürliche Kieselsäure",
        "blog.art5.image.alt": "Jahrtausendealte Geschichte des Siwak durch Zivilisationen",
        "blog.art6.image.alt": "Frischeerhaltung eines Siwak-Stabs",
        "blog.art7.image.alt": "Verwendung des Siwak während des Ramadan-Monats",
        "blog.art8.image.alt": "SIVÀA Geneva Werkstatt, handwerkliche Auswahl der Stäbe",
        "blog.art9.image.alt": "Natürliche Aufhellung durch Siwak und aktive Kieselsäure",

        /* ── CONTACT ── */
        "contact.header.eyebrow": "Genfer Werkstatt",
        "contact.header.title.part1": "Kontaktieren Sie",
        "contact.header.title.part2": "uns",
        "contact.header.subtitle": "Wir antworten normalerweise innerhalb von 2–4 Stunden während des Tages.",
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
        "contact.placeholder.order": "SIVAA-2024-XXXXX",
        "contact.placeholder.message": "Beschreiben Sie Ihre Frage oder Situation…",
        "contact.send": "Nachricht senden",
        "contact.required": "* Pflichtfelder",
        "contact.success.title": "Nachricht gesendet!",
        "contact.success.subtitle": "Wir antworten innerhalb von 2–4 Stunden während des Tages.",
        "contact.success.again": "Weitere Nachricht senden",
        "contact.wa.title": "WhatsApp",
        "contact.wa.desc": "Der schnellste Weg. Antwort in wenigen Minuten.",
        "contact.wa.cta": "Unterhaltung öffnen →",
        "contact.email.title": "E-Mail",
        "contact.email.cta": "E-Mail senden →",
        "contact.info.title": "Praktische Informationen",
        "contact.info.hours.label": "Öffnungszeiten",
        "contact.info.hours.value": "Montag – Freitag, 9–18 Uhr",
        "contact.info.atelier.label": "Werkstatt",
        "contact.info.atelier.value": "Rue de la Corraterie 14, 1204 Genf, Schweiz",
        "contact.info.delivery.label": "Lieferung",
        "contact.info.delivery.value": "Swiss Post · 2–3 Werktage, CHF 9.00 · ganze Schweiz",
        "contact.info.returns.label": "Rückgabe",
        "contact.info.returns.value": "14 Tage ohne Begründung, Umtausch oder Rückerstattung",
        "contact.order.note": "Haben Sie bestellt?",
        "contact.order.desc": "Für Fragen zu Ihrer Bestellung halten Sie Ihre Nummer bereit (SIVAA-XXXX-XXXXX) und kontaktieren Sie uns via WhatsApp für eine prioritäre Bearbeitung.",

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
        "merci.back": "← Zurück zur Startseite",
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

function getStoredLang() {
    try {
        const saved = localStorage.getItem('sivaa_lang');
        if (saved && translations[saved]) return saved;
    } catch (e) {}
    const nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    if (translations[nav]) return nav;
    return 'fr';
}

function switchLanguage(lang) {
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

    .sivaa-bnav{display:flex;flex-direction:column;padding:1.75rem 1.75rem;gap:0;flex:1;overflow-y:auto;}
    .sivaa-bnav-link{
      display:flex;align-items:center;gap:.875rem;
      padding:.9rem 0;
      font-size:1.3rem;font-weight:300;font-family:'Newsreader',Georgia,serif;
      color:#c2c9b4;text-decoration:none;
      border-bottom:1px solid rgba(66,73,57,.15);
      transition:color .2s,padding-left .2s;
    }
    .sivaa-bnav-link:last-of-type{border-bottom:none;}
    .sivaa-bnav-link:active{color:#d7e7d4;}
    .sivaa-bnav-dot{width:5px;height:5px;border-radius:50%;background:#9dd75a;opacity:0;transition:opacity .2s;flex-shrink:0;}

    .sivaa-bcta{
      display:flex;align-items:center;justify-content:center;gap:.5rem;
      margin:1.25rem 1.75rem;flex-shrink:0;
      background:#9dd75a;color:#1e3700;
      font-weight:700;font-size:1rem;font-family:'Inter',sans-serif;
      padding:.9rem 1.5rem;border-radius:.625rem;text-decoration:none;
      transition:background .2s;-webkit-tap-highlight-color:transparent;
    }
    .sivaa-bcta:active{background:#b7f473;}

    .sivaa-blang{
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
      <a href="index.html" class="sivaa-bh-logo" onclick="closeBurger()">SIVÀA <span>Geneva</span></a>
      <button id="sivaa-burger-close" onclick="closeBurger()" aria-label="Fermer le menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <nav class="sivaa-bnav" role="navigation">
      <a href="index.html" class="sivaa-bnav-link" onclick="closeBurger()"><span class="sivaa-bnav-dot"></span><span data-i18n="nav.home">Accueil</span></a>
      <a href="blog.html"    class="sivaa-bnav-link" onclick="closeBurger()"><span class="sivaa-bnav-dot"></span><span data-i18n="nav.journal">Journal</span></a>
      <a href="contact.html" class="sivaa-bnav-link" onclick="closeBurger()"><span class="sivaa-bnav-dot"></span><span data-i18n="nav.contact">Contact</span></a>
    </nav>
    <a href="checkout.html" class="sivaa-bcta" onclick="closeBurger()">
      <span data-i18n="nav.order">Commander</span> →
    </a>
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
        // Chercher le container interne (nav-inner ou premier div)
        const inner = nav.querySelector('.nav-inner') || nav.querySelector(':scope > div') || nav;

        // Marquer .nav-links comme desktop-only
        const navLinks = inner.querySelector('.nav-links');
        if (navLinks) navLinks.classList.add('nav-links-desktop');

        // Groupe mobile : CTA + burger button
        const mobileGroup = document.createElement('div');
        mobileGroup.className = 'sivaa-mobile-right';
        mobileGroup.innerHTML = `
      <a href="checkout.html" class="sivaa-mobile-cta" data-i18n="nav.order">Commander</a>
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
    switchLanguage(getStoredLang());
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
