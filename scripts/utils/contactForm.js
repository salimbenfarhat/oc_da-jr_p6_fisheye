let isTitleAdded = false;
function displayModal() {
  const modal = document.getElementById("contact_modal");
  const modalHeaderTitleName = modal.querySelector(".modal header h2");
  const modalForm = modal.querySelector("form");
  const closeButton = document.querySelector("#contact_modal img");

  if (!isTitleAdded) {
    modalHeaderTitleName.innerHTML += "<br>Mimi Keel";
    isTitleAdded = true;
  }

  modalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = modalForm.querySelector('[name="prenom"]').value;
    const lastName = modalForm.querySelector('[name="nom"]').value;
    const email = modalForm.querySelector('[name="email"]').value;
    const message = modalForm.querySelector('[name="message"]').value;

    if (!firstName || !lastName || !email || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (firstName.length < 2 || lastName.length < 2) {
      alert("Le prénom et le nom doivent avoir au moins 2 caractères.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    if (message.length > 255) {
      alert("Le message ne peut pas dépasser 255 caractères.");
      return;
    }

    console.log("Prénom:", firstName);
    console.log("Nom:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);
  });

  modal.style.display = "flex";
 
  closeButton.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      closeModal();
    }
  });
  modalForm.addEventListener("keydown", function(event) { if (event.keyCode === 13) { modalForm.submit(); } });
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  const modalForm = modal.querySelector("form");
  modalForm.reset();
  modal.style.display = "none";
}
