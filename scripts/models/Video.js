// Classe Video qui hérite de la classe Media pour représenter une vidéo
class Video extends Media {
  // Constructeur de la classe Video
  constructor(data) {
    super(data);
    this._type = "video";
    // Construction du chemin d'accès à la vidéo
    const path = data.photographer.replace(/\s/g, "_");
    this._src = `assets/photographers/gallery/${path}/${data.video}`;
  }

  // Getters pour accéder aux propriétés de l'objet
  get type() {
    return this._type;
  }

  get src() {
    return this._src;
  }
}