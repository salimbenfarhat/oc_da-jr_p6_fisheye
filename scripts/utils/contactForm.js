// Initialisation de la variable isTitleAdded à false
let isTitleAdded = false;

// Fonction pour afficher la modal de contact
function displayModal() {
  // Récupération des éléments du DOM
  const modal = document.getElementById("contact_modal");
  const modalHeaderTitleName = modal.querySelector(".modal header h2");
  const modalForm = modal.querySelector("form");
  const closeButton = document.querySelector("#contact_modal img");
  const formFields = modalForm.querySelectorAll('input, textarea');

  // Ajout du titre à la modal de contact si ce n'est pas déjà fait
  if (!isTitleAdded) {
    modalHeaderTitleName.innerHTML += "<br>Mimi Keel";
    isTitleAdded = true;
  }

  // Gestion de l'événement de soumission du formulaire
  modalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupération des valeurs des champs du formulaire
    const firstName = modalForm.querySelector('[name="prenom"]').value;
    const lastName = modalForm.querySelector('[name="nom"]').value;
    const email = modalForm.querySelector('[name="email"]').value;
    const message = modalForm.querySelector('[name="message"]').value;

    // Initialisation du message d'erreur
    let errorMessage = "";

    // Vérification des conditions de validation du formulaire
    if (!firstName || !lastName || !email || !message) {
      errorMessage = "Veuillez remplir tous les champs.";
    } else if (firstName.length < 2 || lastName.length < 2) {
      errorMessage = "Le prénom et le nom doivent avoir au moins 2 caractères.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMessage = "Veuillez entrer une adresse email valide.";
      } else if (message.length > 255) {
        errorMessage = "Le message ne peut pas dépasser 255 caractères.";
      }
    }

    // Si un message d'erreur est défini, affiche l'alerte et arrête l'exécution
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    // Affichage des valeurs des champs du formulaire dans la console
    console.log("Prénom:", firstName);
    console.log("Nom:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);

    // Affichage de l'alerte de succès
    alert("Merci de m'avoir contacté, " + firstName + ". J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais. À très bientôt !");
  });

  // Affichage de la modal
  modal.style.display = "flex";
 
  // Ajout des écouteurs d'événements pour les touches du clavier
  addEnterListener(closeButton, function () {
    closeModal();
  });
  addEscapeListener(function () {
    if (modal.style.display === 'flex') {
      closeModal();
    }
  });
  formFields.forEach(field => {
    addEnterListener(field, function(event) {
      event.preventDefault();
    });
  });
  addEnterListener(modalForm, function () {
    modalForm.dispatchEvent(new Event("submit"));
  });
}

// Fonction pour fermer la modal de contact
function closeModal() {
  // Récupération des éléments du DOM
  const modal = document.getElementById("contact_modal");
  const modalForm = modal.querySelector("form");

  // Réinitialisation du formulaire et masquage de la modal
  modalForm.reset();
  modal.style.display = "none";
}