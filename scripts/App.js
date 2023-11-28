class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );
    this.photographersApi = new PhotographerApi("data/photographers.json");
  }

  async main() {
    const pageType = this.getPageType();
    if (pageType === "index") {
      await this.renderPhotographersList();
    } else if (pageType === "photographer") {
      await this.renderPhotographerPage();
    }
  }

  getPageType() {
    const currentPage = window.location.pathname;
    if (currentPage.includes("photographer.html")) {
      return "photographer";
    } else {
      return "index";
    }
  }

  async renderPhotographersList() {
    const photographersData = await this.photographersApi.getPhotographers();
    photographersData
      .map((photographer) => new Photographer(photographer))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }

  async renderPhotographerPage() {
    const photographerId = this.getPhotographerIdFromUrl();
    const photographersData = await this.photographersApi.getPhotographers();
    const photographerData = photographersData.find(
      (photographer) => photographer.id === parseInt(photographerId)
    );
    const photographer = new Photographer(photographerData);
    const photographerPage = new PhotographerPage(photographer);
    photographerPage.createPhotographerPage();
  }

  getPhotographerIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }
}

const app = new App();
app.main();
