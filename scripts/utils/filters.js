function sortByDate(mediaData, displayPhotographerGallery) {
  const sortedMediaByDate = mediaData.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  displayPhotographerGallery(currentPhotographer, sortedMediaByDate);
}

function sortByTitle(mediaData, displayPhotographerGallery) {
  const sortedMediaByTitle = mediaData.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  displayPhotographerGallery(currentPhotographer, sortedMediaByTitle);
}

function sortByPopularity(mediaData, displayPhotographerGallery) {
  const sortedMediaByPopularity = mediaData.sort((a, b) => b.likes - a.likes);
  displayPhotographerGallery(currentPhotographer, sortedMediaByPopularity);
}
