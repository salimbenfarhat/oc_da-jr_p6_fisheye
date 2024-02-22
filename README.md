# oc_da-jr_p6_fisheye
Openclassrooms - Développeur d'application - JavaScript React - Projet 6 - FishEye

## P6 - Créez un site accessible pour une plateforme de photographes
### Scénario
Depuis quelques semaines, vous êtes développeur junior chez Techasite, une société de conseil spécialisée dans le développement de sites web et d'applications mobiles.
![Logo FishEye](https://user.oc-static.com/upload/2020/08/18/15977566540758_15975854296086_image1%20%281%29.png)  
Avec votre cheffe de projet Amanda et le Designer UI, vous venez de faire une réunion de lancement du projet avec un nouveau client, FishEye. FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Ils ont récemment levé des fonds et aimeraient mettre à jour leur site web. 
Après la réunion de lancement, vous voyez un mail de votre cheffe de projet concernant le projet FishEye. Vous l'ouvrez immédiatement :

 

> **Objet** : Réunion de lancement FishEye 
> **De** : Amanda  
> **À** : Moi  
> 
> Salut, 
> Merci d'avoir participé à la réunion de ce matin ! Pour résumer, notre objectif est de construire un prototype fonctionnel d'un nouveau site web que nous pourrons présenter à FishEye lors de notre prochaine réunion avec les clients. Tu seras chargé de fournir tout le HTML, le CSS et le JavaScript nécessaires au prototype. Notre équipe de back-end intégrera le système existant de FishEye une fois que tu auras terminé le code pour ta partie du projet.
>
> - Mes [notes de réunion](https://course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/Notes+de+reunion.pdf) détaillant les principales fonctionnalités et les exigences techniques à mettre en œuvre.
> - Les [maquettes approuvées](https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?node-id=0%3A1), développées par notre designer. Tu vas créer une page principale ainsi qu’une page avec les informations pour chaque photographe de l’échantillon.
> - [Des exemples de photos et de vidéos](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEye_Photos.zip) de FishEye, que tu devras utiliser pour la conception des pages.
> - [Des exemples de données au format JSON](https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye/blob/main/data/photographers.json), que tu pourras utiliser pour créer les différentes pages des photographes de façon dynamique. Ce format imite la structure des données dans la base de données, donc ne modifie pas les données existantes.
> 
> J'avais demandé à Zoé de s’occuper de ce projet, mais après avoir rédigé un premier jet très rapidement, elle a dû passer à autre chose. Tu trouveras [la base de son code sur ce repo](https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye) avec une partie du HTML et CSS mis en place, ce qui devrait t’aider. Tu peux forker son repo pour te lancer dans le code.
> Bien que le site web soit un prototype, il devrait correspondre aux maquettes et fonctionner correctement (pas d'erreur dans la console). Comme l'a mentionné le client lors de la réunion de lancement, sa priorité absolue est l'accessibilité. Veille à construire le site conformément aux exigences d'accessibilité indiquées dans mes notes.
> Une fois que tu m'auras envoyé le repo GitHub avec le code complété, nous passerons en revue et vérifierons toutes les fonctionnalités des pages. Je te demanderai également de faire une démonstration de la navigation du site au moyen du clavier pour qu’on s’assure qu'il est utilisable par les [lecteurs d'écran](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders).  
> De plus, avant de soumettre ton travail, assure-toi qu'il respecte bien les contraintes techniques indiquées dans mes notes de réunion.
> 
> **Amanda**
> Cheffe de Projet @Techasite

Vous commencez par ouvrir les maquettes pour avoir une idée de ce qui doit être fait : 
![Maquettes du site de FishEye](https://user.oc-static.com/upload/2022/10/14/16657380159236_Index%20%281%29.png)  
Lorsque vous commencez à regarder les maquettes, vous recevez un message instantané de Zoé, une développeuse senior que vous admirez beaucoup. Elle vous a encadré et a effectué un grand nombre de vos révisions de code :
> **Zoé** : Salut ! Amanda m'a dit qu'elle t'avait chargé de développer le premier prototype du projet FishEye, c'est bien ça ?
> **Moi** : Oui, je viens de commencer !
> **Zoé** : Tant mieux pour toi ! J'avais commencé ce projet, mais on m'a passé sur autre chose. Je pense que tu apprendras beaucoup au cours du processus. Je voulais juste te donner un petit conseil technique. Amanda a mentionné que FishEye a des vidéos et des photos pour le photographe. Pour ça il faudra que tu utilises un pattern Factory Method, ça sera idéal pour créer les media en distinguant les vidéos des photos.
> **Moi** : OK, je vais utiliser le pattern Factory Method. Merci encore !

Bon, il semble bien que vous ayez maintenant tous les éléments dont vous avez besoin pour démarrer.  Il est temps de se mettre au travail !