class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const $wrapper = document.createElement("article");
    const photographerCard = `
          <a href="photographer.html?id=${this._photographer.id}" role="link">
              <img
                  alt="${this._photographer.name}"
                  src="${this._photographer.portrait}"
                  class="avatar"
              />
              <h2>${this._photographer.name}</h2>
          </a>
          <div class="info">
            <span>${this._photographer.city}, ${this._photographer.country}</span>
            <p>${this._photographer.tagline}</p>
            <p>${this._photographer.price}€/jour</p>
          </div>
      `;

    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
