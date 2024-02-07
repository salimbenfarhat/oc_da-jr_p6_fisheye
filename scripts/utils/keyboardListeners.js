// Fonction pour ajouter un écouteur d'événements qui réagit à la touche 'Échap'
function addEscapeListener(callback) {
    // Ajout d'un écouteur d'événements 'keydown' au document
    document.addEventListener("keydown", function (event) {
      // Si la touche pressée est 'Échap', exécute la fonction de rappel
      if (event.code === "Escape") {
        callback();
      }
    });
}

// Fonction pour ajouter un écouteur d'événements qui réagit à la touche 'Entrée'
function addEnterListener(element, callback) {
    // Ajout d'un écouteur d'événements 'keydown' à l'élément spécifié
    element.addEventListener("keydown", function (event) {
      // Si la touche pressée est 'Entrée', exécute la fonction de rappel et annule l'événement
      if (event.code === "Enter") {
        callback();
        event.preventDefault();
      }
    });
}

function addArrowKeyListener(callbackLeft, callbackRight) {
  document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
          callbackLeft();
      } else if (event.key === "ArrowRight") {
          callbackRight();
      }
  });
}