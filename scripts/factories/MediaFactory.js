// Classe MediaFactory pour créer des objets de type Media
class MediaFactory {
  // Méthode pour créer un objet Media en fonction du type de média
  createMedia(data) {
    // Si les données contiennent une image, crée un nouvel objet Image
    if (data.image) {
      return new Image(data);
    } 
    // Si les données contiennent une vidéo, crée un nouvel objet Video
    else if (data.video) {
      return new Video(data);
    } 
    // Si le type de média n'est pas reconnu, lance une erreur
    else {
      throw new Error("Type de média inconnu");
    }
  }
}