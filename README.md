# Invitation électronique – Cérémonie de dot

Invitation numérique responsive au format portrait, avec une identité africaine moderne : beige, noir et doré.

## Fichiers
- `index.html` : contenu de l'invitation.
- `style.css` : design responsive et impression.
- `script.js` : lien Google Maps et impression PDF.
- `assets/images/couple.jpg` : photo du couple à ajouter.

## Installation
```bash
git clone https://github.com/longesha/invitation-dote.git
cd invitation-dote
```
Ouvrez le dossier dans Visual Studio Code, puis ouvrez `index.html` dans votre navigateur (ou utilisez Live Server).

## Personnalisation
1. Dans `index.html`, remplacez les textes entre crochets : prénoms, familles, date, heure et lieu.
2. Ajoutez la photo du couple dans `assets/images/` et nommez-la exactement `couple.jpg`.
3. Dans `script.js`, remplacez `[Nom de la salle, commune, ville]` par l'adresse réelle pour activer le lien Google Maps.
4. Cliquez sur « Télécharger / Imprimer en PDF », puis choisissez « Enregistrer au format PDF ».

**Note :** la carte interactive s'ouvre dans Google Maps depuis la version web. Le PDF garde le lien vers le lieu, car une carte interactive ne s'imprime pas de manière fiable.