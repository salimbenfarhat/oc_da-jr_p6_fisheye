class Image extends Media {
  constructor(data) {
    super(data);
    this._type = "image";
    this._src = `assets/photographers/gallery/${data.photographer}/${data.image}`;
  }
  get type() {
    return this._type;
  }
  get src() {
    return this._src;
  }
}
