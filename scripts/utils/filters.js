// Fonction pour trier les données des médias par date
function sortByDate(mediaData, displayPhotographerGallery) {
  // Tri des données des médias par date en ordre croissant
  const sortedMediaByDate = mediaData.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  // Affichage de la galerie du photographe avec les médias triés
  displayPhotographerGallery(currentPhotographer, sortedMediaByDate);
}

// Fonction pour trier les données des médias par titre
function sortByTitle(mediaData, displayPhotographerGallery) {
  // Tri des données des médias par titre en ordre alphabétique
  const sortedMediaByTitle = mediaData.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  // Affichage de la galerie du photographe avec les médias triés
  displayPhotographerGallery(currentPhotographer, sortedMediaByTitle);
}

// Fonction pour trier les données des médias par popularité
function sortByPopularity(mediaData, displayPhotographerGallery) {
  // Tri des données des médias par popularité (nombre de likes) en ordre décroissant
  const sortedMediaByPopularity = mediaData.sort((a, b) => b.likes - a.likes);
  // Affichage de la galerie du photographe avec les médias triés
  displayPhotographerGallery(currentPhotographer, sortedMediaByPopularity);
}