// Classe Media pour représenter un média
class Media {
  // Constructeur de la classe Media
  constructor(data) {
    // Initialisation des propriétés de l'objet à partir des données fournies
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._likes = data.likes;
  }

  // Getters pour accéder aux propriétés de l'objet
  get id() {
    return this._id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get likes() {
    return this._likes;
  }
}