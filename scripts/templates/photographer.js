function photographerTemplate(data) {
  const { id, name, portrait, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;
  let tabIndexCounter = 2;

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

    img.setAttribute("src", picture), img.setAttribute("alt", name), img.setAttribute("tabindex", 9);
    img.classList.add("avatar");

    photographerHeader.appendChild(h1);
    photographerHeader.appendChild(h2);
    photographerHeader.appendChild(p);

    return img;
  }

  function displayFilters(photographerMedia) {
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropbtn = document.querySelector(".dropbtn");
    const filterButtons = Array.from(
      document.querySelectorAll(".dropdown-content button")
    );

    const defaultButton = filterButtons.find(
      (button) => button.id === "btn-popularity"
    );
    const btnPopularity = document.getElementById("btn-popularity");
    const btnDate = document.getElementById("btn-date");
    const btnTitle = document.getElementById("btn-title");
    btnPopularity.addEventListener("click", function () {
      sortByPopularity(photographerMedia, displayPhotographerGallery);
      updateTabindex(btnPopularity);
    });
    btnDate.addEventListener("click", function () {
      sortByDate(photographerMedia, displayPhotographerGallery);
      updateTabindex(btnDate);
    });
    btnTitle.addEventListener("click", function () {
      sortByTitle(photographerMedia, displayPhotographerGallery);
      updateTabindex(btnTitle);
    });
    function updateTabindex(activeButton) {
      filterButtons.forEach((button) => {
          const tabIndex = button === activeButton ? 10 : 10;
          button.setAttribute("tabindex", tabIndex);
      });
    }
    dropbtn.textContent = defaultButton.textContent;
    defaultButton.classList.add("active");
    dropbtn.innerHTML =
      dropbtn.textContent +
      ' <i class="fa-solid fa-chevron-up rotate" aria-hidden="true"></i>';
      
    dropbtn.addEventListener("click", (event) => {
      event.stopPropagation(); 
      const isHidden = dropdownContent.classList.contains("hide-menu");
      if (isHidden) {
        dropdownContent.classList.remove("hide-menu");
        dropbtn.innerHTML =
          dropbtn.textContent +
          ' <i class="fa-solid fa-chevron-up" aria-hidden="true"></i>';
      } else {
        dropdownContent.classList.add("hide-menu");
        dropbtn.innerHTML =
          dropbtn.textContent +
          ' <i class="fa-solid fa-chevron-up rotate" aria-hidden="true"></i>';
      }
    });

    dropdownContent.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        filterButtons.forEach((button) => {
          button.classList.remove("active");
        });
        event.target.classList.add("active");
        dropbtn.textContent = event.target.textContent;
        const activeButtonIndex = filterButtons.indexOf(event.target);
        const reorderedButtons = [
          filterButtons[activeButtonIndex],
          ...filterButtons.slice(0, activeButtonIndex),
          ...filterButtons.slice(activeButtonIndex + 1),
        ];
        dropdownContent.innerHTML = "";
        reorderedButtons.forEach((button) => {
          dropdownContent.appendChild(button.parentElement);
        });
      }
    });

    document.addEventListener("click", () => {
      if (!dropdownContent.classList.contains("hide-menu")) {
        dropdownContent.classList.add("hide-menu");
        dropbtn.innerHTML =
          dropbtn.textContent +
          ' <i class="fa-solid fa-chevron-up rotate" aria-hidden="true"></i>';
      }
    });
  }

  function displayPhotographerGallery(photographer, photographerMedia) {
    const gallery = document.querySelector(".gallery");
    const mediaFactory = new MediaFactory();
    let tabindexCount = 11;
  
    if (gallery && photographer) {
      let totalLikes = 0;
      const photographerId = photographer.id;
      const price = photographer.price || 0;
  
      const photographerMediaFiltered = photographerMedia.filter(
        (mediaData) => mediaData.photographerId === photographerId
      );
  
      gallery.innerHTML = "";
  
      photographerMediaFiltered.forEach((mediaData) => {
        const media = mediaFactory.createMedia({
          ...mediaData,
          photographer: photographer.name,
        });
  
        const mediaElement = document.createElement(
          media.type === "image" ? "img" : "video"
        );
        const mediaLink = document.createElement("a");
        const card = document.createElement("article");
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const titleElement = document.createElement("h2");
        const likesContainer = document.createElement("span");
        const heartIcon = document.createElement("i");
  
        // Image
        mediaElement.src = media.src;
        mediaElement.alt = media.title;
  
        // Link container
        mediaLink.classList.add("media-container");
        mediaLink.setAttribute("title", "Lilac breasted roller, closeup view");
        mediaLink.appendChild(mediaElement);
        mediaLink.setAttribute("tabindex", tabindexCount);
        tabindexCount++;
  
        // Likes container
        likesContainer.setAttribute("tabindex", tabindexCount);
        tabindexCount++;
  
        heartIcon.className = "fas fa-heart";
        heartIcon.setAttribute("aria-label", "likes");
        likesContainer.appendChild(heartIcon);
  
        const likesNumber = document.createElement("span");
        likesNumber.textContent = media.likes;
        likesContainer.appendChild(likesNumber);
  
        titleElement.textContent = media.title;
  
        mediaLink.setAttribute("role", "button");
        mediaLink.setAttribute("href", "#");
        mediaLink.setAttribute("data-media", media.id);
        mediaLink.onclick = function (event) {
          event.preventDefault();
          displayLightbox(media, photographerMediaFiltered);
        };
  
        likesContainer.addEventListener("click", function () {
          const currentLikes = parseInt(likesNumber.textContent, 10);
          const isLiked = heartIcon.classList.contains("liked");
  
          if (isLiked) {
            likesNumber.textContent = currentLikes - 1;
            heartIcon.classList.remove("liked");
          } else {
            likesNumber.textContent = currentLikes + 1;
            heartIcon.classList.add("liked");
          }
  
          totalLikes = isLiked ? totalLikes - 1 : totalLikes + 1;
          updateTotalLikes(totalLikes);
        });
  
        // Add elements to DOM
        figcaption.appendChild(titleElement);
        figcaption.appendChild(likesContainer);
        figure.appendChild(mediaLink);
        figure.appendChild(figcaption);
        card.appendChild(figure);
  
        totalLikes += media.likes;
        gallery.appendChild(card);
      });
      updateTotalLikes(totalLikes);
      updatePrice(price);
    }
  }
  
  

  return {
    picture,
    getUserCardDOM,
    getCurrentUserCardDOM,
    displayFilters,
    displayPhotographerGallery,
  };
}
