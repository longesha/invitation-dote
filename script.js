// Remplacez cette adresse par l'adresse exacte de la salle.
const venueAddress = "[Nom de la salle, commune, ville]";

const mapLink = document.getElementById("mapLink");
if (mapLink && venueAddress && !venueAddress.startsWith("[")) {
  mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(venueAddress);
}

const printButton = document.getElementById("printButton");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}