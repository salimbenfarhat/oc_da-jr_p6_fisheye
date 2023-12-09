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

  let lightboxMediaElement;

  let lightboxTitleElement;

  if (currentMedia.type === "image") {
    lightboxMediaElement = document.createElement("img");
    lightboxMediaElement.src = currentMedia.src;
    lightboxMediaElement.alt = "Image en plein écran";
    lightboxMediaElement.classList.add("lightbox-media");
  } else if (currentMedia.type === "video") {
    lightboxMediaElement = document.createElement("video");
    lightboxMediaElement.src = currentMedia.src;
    lightboxMediaElement.alt = "Vidéo en plein écran";
    lightboxMediaElement.controls = true;
    lightboxMediaElement.classList.add("lightbox-media");
  } else {
    throw new Error("Le type du média courant n'est pas reconnu");
  }
  lightboxTitleElement = document.createElement("h2");
  lightboxTitleElement.textContent = currentMedia.title;

  lightboxContent.appendChild(lightboxMediaElement);
  lightboxContent.appendChild(lightboxTitleElement);

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
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox_modal");
  lightbox.style.display = "none";
}
