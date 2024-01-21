// Classe Photographer pour représenter un photographe
class Photographer {
  // Constructeur de la classe Photographer
  constructor(data) {
    // Initialisation des propriétés de l'objet à partir des données fournies
    this._id = data.id;
    this._name = data.name;
    this._portrait = data.portrait;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
  }

  // Getters pour accéder aux propriétés de l'objet
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get portrait() {
    // Construction du chemin d'accès à l'image du portrait
    return `assets/photographers/${this._portrait}`;
  }

  get city() {
    return this._city;
  }

  get country() {
    return this._country;
  }

  get tagline() {
    return this._tagline;
  }

  get price() {
    return this._price;
  }
}