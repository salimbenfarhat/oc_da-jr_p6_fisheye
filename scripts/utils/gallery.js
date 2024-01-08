function updateTotalLikes(totalLikes) {
  const likesSpan = document.getElementById("totalLikes");
  likesSpan.textContent = `${totalLikes} `;
  const heartIcon = document.createElement("i");
  heartIcon.className = "fas fa-heart";
  likesSpan.appendChild(heartIcon);
}

function updatePrice(price) {
  const priceSpan = document.getElementById("price");
  priceSpan.textContent = `${price}€ / jour`;
}
