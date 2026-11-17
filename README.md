# Invitation électronique — Cérémonie de dot

Modèle responsive mobile et ordinateur, design beige, noir brun et doré. Le bouton télécharge ou partage la carte en image PNG.

## Démarrer
Clonez le dépôt puis ouvrez `index.html` dans un navigateur. Live Server dans VS Code est recommandé.

## Informations fictives à remplacer
Familles : Mbuyi et Ilunga. Couple : Grâce et David. Date : samedi 19 décembre 2026. Heure : 14h00. Lieu : Salle La Perle, Golf, Lubumbashi. Ces informations sont uniquement des exemples.

## Ajouter la photo du couple
Placez votre photo dans `assets/images/couple.jpg`. Dans `index.html`, remplacez le bloc `.photo-placeholder` par `<img class="couple-image" src="assets/images/couple.jpg" alt="Photo du couple">`. Ajoutez dans `style.css` : `.couple-image{width:100%;height:100%;object-fit:cover;display:block}`.

## Export PNG
Le bouton utilise html2canvas via CDN. Une connexion Internet est nécessaire pour charger la bibliothèque et les polices web.