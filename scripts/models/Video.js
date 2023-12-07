class Video extends Media {
  constructor(data) {
    super(data);
    this._type = "video";
    this._src = `assets/photographers/gallery/${data.photographer}/${data.video}`;
  }
  get type() {
    return this._type;
  }
  get src() {
    return this._src;
  }
}
