let currentPhotographer = null;
/*
  Récupère les détails d'un photographe et ses médias associés en fonction de l'ID.
  @param {number} id - L'identifiant du photographe.
  @returns {Object} - Contient le photographe actuel, les médias associés et tous les médias.
*/
async function getPhotographerById(id) {
  const response = new PhotographerApi("data/photographers.json");
  const data = await response.get();
  const photographers = data.photographers;
  const media = data.media;
  currentPhotographer = photographers.find(
    (photographer) => photographer.id == id
  );
  const photographerMedia = media.filter((item) => item.photographerId == id);
  return { currentPhotographer, photographerMedia };
}
/*
  Affiche les informations du photographe et ses médias associés sur la page HTML.
  @param {Object} data - Contient le photographe actuel et les médias associés.
*/
async function displayData(data) {
  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = new photographerTemplate(data.currentPhotographer);
  const userCardDOM = photographerModel.getCurrentUserCardDOM();
  photographersSection.appendChild(userCardDOM);
  photographerModel.displayFilters(data.photographerMedia);
  photographerModel.displayPhotographerGallery(
    data.currentPhotographer,
    data.photographerMedia
  );
}
/*
  Initialise la page du photographe en utilisant les paramètres de l'URL pour obtenir l'ID du photographe
  et affiche les détails correspondants.
*/
async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = parseInt(urlParams.get("id"));
  const { currentPhotographer, photographerMedia } = await getPhotographerById(
    photographerId
  );
  displayData({ currentPhotographer, photographerMedia });
}
// Appel de la fonction d'initialisation au chargement de la page
init();