let currentIndex = 0;
let filteredMedia = [];

function updateLightboxContent() {
  const mediaFactory = new MediaFactory();
  const currentMedia = mediaFactory.createMedia({
    ...filteredMedia[currentIndex],
    photographer: currentPhotographer.name,
  });
  displayLightbox(currentMedia, filteredMedia);
}
function showNextMedia() {
  currentIndex = (currentIndex + 1) % filteredMedia.length;
  console.log("Current Index", currentIndex);
  updateLightboxContent();
}

function showPreviousMedia() {
  currentIndex =
    (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
  console.log("Current Index", currentIndex);
  updateLightboxContent();
}

function displayLightbox(currentMedia, allMedia) {
  const lightbox = document.getElementById("lightbox_modal");
  const lightboxContent = lightbox.querySelector(".lightbox #lightboxContent");

  // Efface le contenu précédent
  while (lightboxContent.firstChild) {
    lightboxContent.removeChild(lightboxContent.firstChild);
  }

  let lightboxElement;

  console.log("curent media :", currentMedia);
  console.log("curent media type :", currentMedia.type);
  if (currentMedia.type === "image") {
    lightboxElement = document.createElement("img");
    lightboxElement.src = currentMedia.src;
    lightboxElement.alt = "Image en plein écran";
    lightboxElement.classList.add("lightbox-media");
  } else if (currentMedia.type === "video") {
    lightboxElement = document.createElement("video");
    lightboxElement.src = currentMedia.src;
    lightboxElement.alt = "Vidéo en plein écran";
    lightboxElement.controls = true;
    lightboxElement.classList.add("lightbox-media");
  } else {
    throw new Error("Le type du média courant n'est pas reconnu");
  }

  lightboxContent.appendChild(lightboxElement);

  const leftArrow = document.createElement("i");
  leftArrow.className = "fas fa-chevron-left arrow";
  leftArrow.addEventListener("click", showPreviousMedia);

  const rightArrow = document.createElement("i");
  rightArrow.className = "fas fa-chevron-right arrow";
  rightArrow.addEventListener("click", showNextMedia);

  lightboxContent.appendChild(leftArrow);
  lightboxContent.appendChild(rightArrow);

  lightbox.style.display = "flex";

  // Mettez à jour l'array des médias filtrés
  filteredMedia = allMedia;

  // Trouvez l'index du média actuel dans l'array filtrée
  currentIndex = filteredMedia.findIndex(
    (media) => media.id === currentMedia.id
  );

  console.log("current index:", currentIndex);
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox_modal");
  lightbox.style.display = "none";
}
