// Classe Image qui hérite de la classe Media pour représenter une image
class Image extends Media {
  // Constructeur de la classe Image
  constructor(data) {
    super(data);
    this._type = "image";
    // Construction du chemin d'accès à l'image
    const path = data.photographer.replace(/\s/g, "_");
    this._src = `assets/photographers/gallery/${path}/${data.image}`;
  }

  // Getters pour accéder aux propriétés de l'objet
  get type() {
    return this._type;
  }

  get src() {
    return this._src;
  }
}