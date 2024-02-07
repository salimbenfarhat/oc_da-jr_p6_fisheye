/*
  Modèle de photographe : Génère des éléments DOM pour représenter un photographe dans l'interface utilisateur.
*/
function photographerTemplate(data) {
  const { id, name, portrait, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;
  // Crée un élément DOM représentant une carte utilisateur pour la liste des photographes.
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
    a.setAttribute("alt", name);
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Profile de " + name);
    
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
  // Crée un élément DOM représentant la carte utilisateur actuelle dans la page du photographe.
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
  // Affiche les filtres de tri dans la page du photographe.
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
    
    let selectedButton = defaultButton;

    function updateTabindex(activeButton) {
        filterButtons.forEach((button) => {
            const isSelected = button === activeButton;
            const tabIndex = isSelected ? 10 : 10;
            const ariaSelected = isSelected ? "true" : "false";

            button.setAttribute("tabindex", tabIndex);
            button.setAttribute("aria-selected", ariaSelected);

            if (isSelected) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        selectedButton = activeButton;
    }

    dropbtn.textContent = defaultButton.textContent;
    defaultButton.classList.add("active");
    dropbtn.innerHTML =
      dropbtn.textContent +
  ' <em class="fa-solid fa-chevron-up rotate" aria-hidden="true"></em>';
      
    dropbtn.addEventListener("click", (event) => {
      event.stopPropagation(); 
      const isHidden = dropdownContent.classList.contains("hide-menu");
      if (isHidden) {
        dropdownContent.classList.remove("hide-menu");
        dropbtn.innerHTML =
          dropbtn.textContent +
          ' <em class="fa-solid fa-chevron-up" aria-hidden="true"></em>';
      } else {
        dropdownContent.classList.add("hide-menu");
        dropbtn.innerHTML =
          dropbtn.textContent +
          ' <em class="fa-solid fa-chevron-up rotate" aria-hidden="true"></em>';
      }
    });

    dropdownContent.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
          filterButtons.forEach((button) => {
              button.classList.remove("active");
          });

          event.target.classList.add("active");
          dropbtn.textContent = event.target.textContent;

          updateTabindex(event.target);
          selectedButton = event.target;

          const activeButtonIndex = filterButtons.indexOf(event.target);
          const reorderedButtons = [
              filterButtons[activeButtonIndex],
              ...filterButtons.slice(0, activeButtonIndex),
              ...filterButtons.slice(activeButtonIndex + 1),
          ];

          dropdownContent.innerHTML = "";
          reorderedButtons.forEach((button) => {
              dropdownContent.appendChild(button);
          });
      }
    });

    document.addEventListener("click", () => {
      if (!dropdownContent.classList.contains("hide-menu")) {
        dropdownContent.classList.add("hide-menu");
        dropbtn.innerHTML =
          dropbtn.textContent +
          ' <em class="fa-solid fa-chevron-up rotate" aria-hidden="true"></em>';
      }
    });
  }
  // Affiche la galerie de médias pour un photographe donné.
  function displayPhotographerGallery(photographer, photographerMedia) {
    const gallery = document.querySelector(".gallery");
    const likesAndDislikes = getLikesAndDislikes();
    const mediaFactory = new MediaFactory();
    let tabindexCount = 13;
  
    if (gallery && photographer) {
      let totalLikes = 0;
      const price = photographer.price || 0;
      
      gallery.innerHTML = "";

      photographerMedia.forEach((mediaData) => {
        const media = mediaFactory.createMedia({
          ...mediaData,
          photographer: photographer.name,
        });
  
        const mediaElement = media.type === "image" ? document.createElement("img") : media.type === "video" ? document.createElement("video"): (() => {
          console.error("Type de média inconnu :", media.type);
        })();

        const mediaLink = document.createElement("a");
        const card = document.createElement("article");
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const titleElement = document.createElement("h2");
        const likesContainer = document.createElement("span");
        const heartIcon = document.createElement("i");
  
        // Media
        mediaElement.src = media.src;
        if (media.type === "image") {
          mediaElement.alt = "A phtot titled :" + media.title;
        } else if (media.type === "video") {
          mediaElement.controls = true;
          mediaElement.setAttribute("aria-label", "A video titled :" + media.title);
        }
  
        // Configuration du conteneur du lien
        mediaLink.classList.add("media-container");
        mediaLink.setAttribute("title", "Lilac breasted roller, closeup view");
        mediaLink.appendChild(mediaElement);
        mediaLink.setAttribute("tabindex", tabindexCount);
        tabindexCount++;
  
        // Configuration du conteneur des likes
        likesContainer.setAttribute("tabindex", tabindexCount);
        tabindexCount++;
  
        heartIcon.className = "fas fa-heart";
        heartIcon.setAttribute("role", "img");
        heartIcon.setAttribute("aria-label", "likes");

        // Gestion de l'état initial du like
        if (likesAndDislikes[media.id] === 'liked') {
          heartIcon.classList.add('liked');
        }

        likesContainer.appendChild(heartIcon);
        
        // Si les likes de l'utilisateur sont indéfinis, les définir sur les likes actuels
        if(mediaData.userLikes === undefined) {
          mediaData.userLikes = mediaData.likes;
        } 

        // Met à jour l'apparence du like en fonction de l'état actuel
        if(mediaData.userLikes == mediaData.likes) {
          heartIcon.classList.remove("liked");
        } else {
          heartIcon.classList.add("liked");
        }

        const likesNumber = document.createElement("b");
        likesNumber.textContent = mediaData.userLikes;
        likesContainer.appendChild(likesNumber);
  
        titleElement.textContent = media.title;
        
        // Configuration du lien du média
        mediaLink.setAttribute("role", "button");
        mediaLink.setAttribute("href", "#");
        mediaLink.setAttribute("data-media", media.id);
        mediaLink.onclick = function (event) {
          event.preventDefault();
          displayLightbox(media, photographerMedia);
        };
        // Gestion de l'événement de la touche "Entrée" pour ouvrir la lightbox
        mediaLink.addEventListener("keydown", function (event) {
          if (event.code === "Enter") {
            event.preventDefault();
            displayLightbox(media, photographerMedia);
          }
        });
        
        // Gestion du clic sur l'icône de like
        likesContainer.addEventListener("click", function () {
          const currentLikes = parseInt(likesNumber.textContent, 10);
          const isLiked = mediaData.likes !== mediaData.userLikes;
  
          if (isLiked) {
            mediaData.userLikes = currentLikes - 1;
            likesNumber.textContent = currentLikes - 1;
            heartIcon.classList.remove("liked");
            likesAndDislikes[media.id] = 'disliked'; 
          } else {
            mediaData.userLikes = currentLikes + 1;
            likesNumber.textContent = currentLikes + 1;
            heartIcon.classList.add("liked");
            likesAndDislikes[media.id] = 'liked';
          }
          updateLikesAndDislikes(likesAndDislikes);
          totalLikes = isLiked ? totalLikes - 1 : totalLikes + 1;
          updateTotalLikes(totalLikes);
        });
  
        // Ajoute les éléments au DOM
        figcaption.appendChild(titleElement);
        figcaption.appendChild(likesContainer);
        figure.appendChild(mediaLink);
        figure.appendChild(figcaption);
        card.appendChild(figure);
  
        totalLikes += media.likes;
        gallery.appendChild(card);
      });

      // Met à jour le nombre total de likes et le prix du photographe
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
