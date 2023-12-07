class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async get() {
    return fetch(this._url)
      .then((res) => res.json())
      .catch((err) => {
        console.log("Une erreur se produit", err);
        throw err;
      });
  }
}

class PhotographerApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    const data = await this.get();
    return data.photographers;
  }

  async getMedias() {
    const data = await this.get();
    return data.media;
  }
}
