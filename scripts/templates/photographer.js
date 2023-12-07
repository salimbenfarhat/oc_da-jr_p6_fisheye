let tabIndexCounter = 0;
function photographerTemplate(data) {
  const { id, name, portrait, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const a = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const info = document.createElement("div");
    const span = document.createElement("span");
    const pTagline = document.createElement("p");
    const pPrice = document.createElement("p");

    a.href = `photographer.html?id=${id}`;
    a.setAttribute("tabindex", tabIndexCounter);
    tabIndexCounter++;

    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.classList.add("avatar");

    h2.textContent = name;

    info.classList.add("info");
    span.textContent = `${city}, ${country}`;
    pTagline.textContent = tagline;
    pPrice.textContent = `${price}€/jour`;

    info.appendChild(span);
    info.appendChild(pTagline);
    info.appendChild(pPrice);

    a.appendChild(img);
    a.appendChild(h2);

    article.appendChild(a);
    article.appendChild(info);

    return article;
  }

  function getCurrentUserCardDOM() {
    const photographerHeader = document.querySelector(".photograph-info");
    const picture = `assets/photographers/${portrait}`;
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h1.textContent = name;
    h2.textContent = `${city}, ${country}`;
    p.textContent = tagline;

    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.classList.add("avatar");

    photographerHeader.appendChild(h1);
    photographerHeader.appendChild(h2);
    photographerHeader.appendChild(p);

    return img;
  }

  function displayPhotographerGallery(photographer, photographerMedia) {
    const gallery = document.querySelector(".gallery");
    const mediaFactory = new MediaFactory();
    if (gallery && photographer) {
      const photographerId = photographer.id;
      const photographerMediaFiltered = photographerMedia.filter(
        (mediaData) => mediaData.photographerId === photographerId
      );

      photographerMediaFiltered.forEach((mediaData) => {
        const media = mediaFactory.createMedia({
          ...mediaData,
          photographer: photographer.name,
        });

        const mediaElement = document.createElement(
          media.type === "image" ? "img" : "video"
        );
        const card = document.createElement("article");
        const mediaLink = document.createElement("a");
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const titleElement = document.createElement("h2");
        const likesNumber = document.createElement("span");
        const heartIcon = document.createElement("i");
        mediaLink.setAttribute("role", "link");
        mediaLink.setAttribute("href", "#");
        mediaLink.setAttribute("data-media", media.id);

        mediaLink.onclick = function () {
          displayLightbox(media, photographerMediaFiltered);
        };

        mediaElement.src = media.src;
        mediaElement.alt = media.title;
        titleElement.textContent = media.title;
        likesNumber.textContent = `${media.likes} `;
        heartIcon.className = "fas fa-heart";

        likesNumber.appendChild(heartIcon);
        figcaption.appendChild(titleElement);
        figcaption.appendChild(likesNumber);
        figure.appendChild(mediaLink);
        mediaLink.appendChild(mediaElement);
        figure.appendChild(figcaption);
        card.appendChild(figure);
        gallery.appendChild(card);
      });
    }
  }

  return {
    picture,
    getUserCardDOM,
    getCurrentUserCardDOM,
    displayPhotographerGallery,
  };
}
