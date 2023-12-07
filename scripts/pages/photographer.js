async function getPhotographerById(id) {
  const response = new PhotographerApi("data/photographers.json");
  console.log("Réponse: ", response);
  const data = await response.get();
  const photographers = data.photographers;
  console.log("Photographes :", photographers);
  const media = data.media;
  console.log(media);

  const currentPhotographer = photographers.find(
    (photographer) => photographer.id == id
  );
  const photographerMedia = media.filter((item) => item.photographerId == id);
  return { currentPhotographer, photographerMedia, media };
}

async function displayData(data) {
  console.log("Médias :", data.photographerMedia);

  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = new photographerTemplate(data.currentPhotographer);
  const userCardDOM = photographerModel.getCurrentUserCardDOM();
  photographersSection.appendChild(userCardDOM);
  currentPhotographer = data.currentPhotographer;
  photographerModel.displayPhotographerGallery(
    data.currentPhotographer,
    data.photographerMedia
  );
}

let currentPhotographer = null;

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = parseInt(urlParams.get("id"));
  const { currentPhotographer, photographerMedia } = await getPhotographerById(
    photographerId
  );
  displayData({ currentPhotographer, photographerMedia });
}

init();
