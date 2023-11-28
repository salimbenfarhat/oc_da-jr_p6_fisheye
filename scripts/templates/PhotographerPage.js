class PhotographerPage {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerPage() {
    const $photographHeader = document.querySelector(".photograph-header");
    const $photographGallery = document.querySelector(".photograph-gallery");

    // Créer et ajouter le contenu du header
    this.createHeader().forEach((element) => {
      $photographHeader.appendChild(element);
    });

    // Créer et ajouter le contenu de la galerie
    this.createGallery().forEach((element) => {
      $photographGallery.appendChild(element);
    });
  }

  createHeader() {
    const $headerInfo = document.createElement("div");
    $headerInfo.classList.add("photograph-info");
    const photographerInfoHeader = `
          <h1>${this._photographer.name}</h1>
          <h2>${this._photographer.city}, ${this._photographer.country}</h2>
          <p>${this._photographer.tagline}</p>`;
    $headerInfo.innerHTML = photographerInfoHeader;

    const $headerBtnInfo = document.createElement("button");
    $headerBtnInfo.classList.add("contact_button");
    $headerBtnInfo.textContent = "Contactez-moi";
    //$headerBtnInfo.onClick = displayModal;

    const $headerImgInfo = document.createElement("img");
    $headerImgInfo.src = this._photographer.portrait;
    $headerImgInfo.alt = this._photographer.name;
    $headerImgInfo.classList.add("avatar");

    return [$headerInfo, $headerBtnInfo, $headerImgInfo];
  }

  createGallery() {
    // $filter
    const $filter = document.createElement("div");
    $filter.classList.add("filter");
    const filterContent = `
         <h3>Trier par :</h3>
         <div class="dropdown">
             <button id="btn-popularity" class="dropbtn">Popularité <i class="fas fa-chevron-up chevron"></i></button>
             <div class="dropdown-content">
                 <button id="btn-date">Date</button>
                 <button id="btn-title">Titre</button>
             </div>
         </div>
     `;
    $filter.innerHTML = filterContent;

    // $gallery
    const $gallery = document.createElement("div");
    $gallery.classList.add("gallery");
    const galleryMessage = document.createElement("p");
    galleryMessage.textContent =
      "Bienvenue dans la galerie photo de ce photographe!";
    $gallery.appendChild(galleryMessage);

    // $bottomBar
    const $bottomBar = document.createElement("div");
    $bottomBar.classList.add("gallery-bottom-bar");
    const bottomBarContent = `
         <span>297 081 <i class="fas fa-heart"></i></span>
         <span>300€ / jour</span>
     `;
    $bottomBar.innerHTML = bottomBarContent;

    return [$filter, $gallery, $bottomBar];
  }
}
