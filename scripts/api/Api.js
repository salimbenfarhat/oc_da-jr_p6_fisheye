class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async get() {
    try {
      const res = await fetch(this._url);
      return await res.json();
    } catch (err) {
      console.log("An error occurred", err);
      throw err;
    }
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
