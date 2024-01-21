// Classe Api pour gérer les requêtes à l'API
class Api {
  /**
   * Constructeur de la classe Api
   * @param {string} url - L'URL de l'API
   */
  constructor(url) {
    this._url = url;
  }

  // Méthode pour effectuer une requête GET à l'API
  async get() {
    try {
      // Envoi de la requête à l'API
      const res = await fetch(this._url);
      // Renvoie la réponse de l'API sous forme de JSON
      return await res.json();
    } catch (err) {
      // En cas d'erreur, affiche l'erreur et la renvoie
      console.log("Une erreur s'est produite", err);
      throw err;
    }
  }
}

// Classe PhotographerApi qui hérite de la classe Api
class PhotographerApi extends Api {
  /**
   * Constructeur de la classe PhotographerApi
   * @param {string} url - L'URL de l'API
   */
  constructor(url) {
    super(url);
  }

  // Méthode pour obtenir les photographes de l'API
  async getPhotographers() {
    const data = await this.get();
    // Renvoie les photographes de l'API
    return data.photographers;
  }

  // Méthode pour obtenir les médias de l'API
  async getMedias() {
    const data = await this.get();
    // Renvoie les médias de l'API
    return data.media;
  }
}