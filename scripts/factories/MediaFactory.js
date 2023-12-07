class MediaFactory {
  createMedia(data) {
    if (data.image) {
      return new Image(data);
    } else if (data.video) {
      return new Video(data);
    } else {
      throw "Type de media inconnu";
    }
  }
}
