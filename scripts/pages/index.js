/*
  Récupère les photographes à partir d'une API.
  @returns {Object} - Contient un tableau d'objets représentant les photographes.
*/
async function getPhotographers() {
  const response = new PhotographerApi("data/photographers.json");
  const photographers = await response.getPhotographers();
  return { photographers };
}
/*
  Affiche les données récupérées dans le DOM.
  @param {Object} data - Contient un tableau d'objets représentant les photographes.
*/
async function displayData({ photographers }) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = new photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
/*
  Initialise les données au chargement de la page en récupérant les photographes et en les affichant.
*/
async function init() {
  const { photographers } = await getPhotographers();
  displayData({ photographers });
}
// Appel de la fonction d'initialisation au chargement de la page
init();