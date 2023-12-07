async function getPhotographers() {
  const response = new PhotographerApi("data/photographers.json");
  const photographers = await response.getPhotographers();
  console.log("Réponse : ", response);
  console.log("Photographes :", photographers);
  return { photographers };
}

async function displayData({ photographers }) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = new photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData({ photographers });
}

init();
