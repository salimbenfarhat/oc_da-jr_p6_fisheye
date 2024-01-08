class Video extends Media {
  constructor(data) {
    super(data);
    this._type = "video";
    const path = data.photographer.replace(/\s/g, "_");
    this._src = `assets/photographers/gallery/${path}/${data.video}`;
  }
  get type() {
    return this._type;
  }
  get src() {
    return this._src;
  }
}
