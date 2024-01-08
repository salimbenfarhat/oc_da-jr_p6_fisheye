class Image extends Media {
  constructor(data) {
    super(data);
    this._type = "image";
    const path = data.photographer.replace(/\s/g, "_");
    this._src = `assets/photographers/gallery/${path}/${data.image}`;
  }
  get type() {
    return this._type;
  }
  get src() {
    return this._src;
  }
}
