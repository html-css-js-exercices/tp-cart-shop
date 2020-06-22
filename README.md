# TP HTML/CSS : Intégrer une page panier
## 1. Contexte
Un prospect qui tient une petite boutique e-commerce cherche à améliorer son tunnel d’achat. Il m’a sollicité car il veut refondre la page panier de son site afin d’inciter davantage à l’achat et d’améliorer le taux
de transformation de sa boutique. Mais comme j’ai des cours à préparé, je n’ai pas trop le temps alors j’ai
pensé à toi.

Par chance, il a travaillé en amont avec un UI designer qui a créé une maquette qui a été validée.
Mais il ne m’a fournit cette maquette qu’au format .jpg car il a perdu le fichier source.
Il a quand même retrouvé certaines informations que je te transmet dans les guidelines ci-dessous ainsi que
les images à intégrer dans le dossier images (par contre il m’a dit ne pas être trop sûr des tailles).
## 2. Guidelines
- Jeu de couleurs : #557b97, #3d4246, #69727b, #f5f5f5
- Police : Tahoma
- Images : Les originales (voir le dossier images) devront être redimensionnées si nécessaire et placées dans le dossier img
- Largeur du site : 1200px et centré dans le navigateur
- Les liens au survol deviennent soulignés

## 3. Mission
> Vous tâcherez de reproduire aussi fidèlement que possible la maquette en HTML et CSS et préparerez les
liens et autres bouttons avec des urls fictives.
Vous serez attendu sur un code HTML qui soit sémantiquement correcte, valide au niveau du W3C, le plus
optimisé possible et compatible cross-browser. Côté CSS il vous faudra utiliser les meilleurs sélecteurs et
appliquer les propriétés les plus appropriées.

#### Ça vous parait trop facile ? Voilà de quoi corser le tout (Optionnel et dans l’ordre de votre choix)
- Ne pas utiliser de balises html pour leur propre style par défaut (ça ne devrait même pas être une option)
- N’utiliser que des sélecteurs de poids 10 ou inférieur
- Utiliser des combinateurs descendants n’excédant pas 2 sélecteurs
  - div span
  - div a span
- Intégrer la police WorkSans (à la place de Tahoma). Elle est disponible sur [https://fonts.google.com/specimen/Work+Sans](https://fonts.google.com/specimen/Work+Sans) ou dans le dossier fonts
> *Indice: faire un tour du côté de la balise <link> ou de @font-face*
- Le client est un peu poussif, il a demandé à intégrer une popin lors du click sur « Ajouter une réduction »
qui doit idéalement apparaître au dessus de la page panier. Vous trouverez la maquette à intégrer dans le
même dossier ainsi que le fichier workspace/script.js (avec quelques instructions dedans) à lier à votre page
panier.html
## 4. Quelques instructions
- Les urls des images devront absolument être relatives pour pouvoir envoyer votre travail sans perdre le
lien vers vos fichiers.
- Utiliser la structure de fichiers actuelle, il n’y a pas besoin de créer plus de fichiers.
Si vous savez utiliser un logiciel graphique comme Photoshop vous pouvez ouvrir la maquette .jpg dedans
pour récupérer certaines informations comme les couleurs, les dimensions et tailles des espacements et
des différents éléments.
Sinon, il y a toujours une option.
- Affichez les maquettes
  - Panier : [panier.jpg](https://github.com/html-css-js-exercices/tp-cart-shop/blob/master/panier.jpg)
  - Popin : [popin.jpg](https://github.com/html-css-js-exercices/tp-cart-shop/blob/master/popin.jpg)
- Récupérer les couleurs directement sur l’image grâce au plugin Colorzilla
  - Chrome : [https://chrome.google.com/webstore/detail/colorzilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp)
  - Firefox : https://addons.mozilla.org/fr/firefox/addon/colorzilla
- Récupérez les dimensions grâce au plugin navigateur MeasureIt
  - Pour Chrome : [https://chrome.google.com/webstore/detail/measure-it](https://chrome.google.com/webstore/detail/measure-it/jocbg)
