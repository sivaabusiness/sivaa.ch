# CSS Tailwind de l'accueil (précompilé)

L'accueil chargeait Tailwind depuis cdn.tailwindcss.com, qui compile le CSS dans le navigateur
(plusieurs secondes de blocage sur mobile). Le CSS est maintenant précompilé et intégré dans
`index.html` (`<style id="tailwind">`, juste avant `</head>`, à la même place que celui du CDN).

`classes.html` liste les classes réellement présentes dans la page (y compris celles ajoutées
par le JavaScript). Si vous ajoutez une classe Tailwind dans `index.html`, ajoutez-la dans
`classes.html`, puis :

    npx tailwindcss@3.4.17 -c _build/tailwind/tailwind.config.js -i _build/tailwind/input.css --minify

et remplacez le contenu de `<style id="tailwind">` par le résultat.
