// Récupération des photographes à partir d'une API
async function getPhotographers() {
  const response = new PhotographerApi("data/photographers.json");
  const photographers = await response.getPhotographers();
  console.log("Réponse : ", response);
  console.log("Photographes :", photographers);
  return { photographers };
}

// Affichage des données récupérées dans le DOM
async function displayData({ photographers }) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = new photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Initialisation de ces données au chargement de la page
async function init() {
  const { photographers } = await getPhotographers();
  displayData({ photographers });
}

init();