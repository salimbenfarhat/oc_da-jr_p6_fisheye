// Fonction pour récupérer les likes/dislikes depuis le stockage local
function getLikesAndDislikes() {
    const likesAndDislikes = localStorage.getItem('likesAndDislikes');
    return likesAndDislikes ? JSON.parse(likesAndDislikes) : {};
  }
  
  // Fonction pour mettre à jour les likes/dislikes dans le stockage local
  function updateLikesAndDislikes(likesAndDislikes) {
    localStorage.setItem('likesAndDislikes', JSON.stringify(likesAndDislikes));
  }
  