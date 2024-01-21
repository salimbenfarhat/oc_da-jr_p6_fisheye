// Fonction pour mettre à jour le nombre total de likes
function updateTotalLikes(totalLikes) {
  // Sélection de l'élément du DOM pour afficher le total des likes
  const likesSpan = document.getElementById("totalLikes");
  // Mise à jour du contenu textuel de l'élément avec le total des likes
  likesSpan.textContent = `${totalLikes} `;
  // Création d'une icône de coeur
  const heartIcon = document.createElement("i");
  heartIcon.className = "fas fa-heart";
  // Ajout de l'icône de coeur à l'élément
  likesSpan.appendChild(heartIcon);
}

// Fonction pour mettre à jour le prix
function updatePrice(price) {
  // Sélection de l'élément du DOM pour afficher le prix
  const priceSpan = document.getElementById("price");
  // Mise à jour du contenu textuel de l'élément avec le prix
  priceSpan.textContent = `${price}€ / jour`;
}