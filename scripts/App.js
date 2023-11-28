class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );
    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    const isLocalPort5500 = isLocal && window.location.port === "5500";
    const githubRepo = "/oc_da-jr_p6_fisheye";
    const baseUrl = isLocalPort5500 ? "" : githubRepo;

    this.photographersApi = new PhotographerApi(
      `${baseUrl}/data/photographers.json`
    );
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
