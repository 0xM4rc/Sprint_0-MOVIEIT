document.addEventListener('DOMContentLoaded', function() {
  let images = [
    '../../../assets/images/films_profile_header/Avatar2.jpeg',
    '../../../assets/images/films_profile_header/BladeRunner.jpeg',
    '../../../assets/images/films_profile_header/IndianaJoneshd.jpg',
    '../../../assets/images/films_profile_header/RegresoAlFuturo.jpg',
    '../../../assets/images/films_profile_header/RegresoAlFuturo2.jpg',
    '../../../assets/images/films_profile_header/Skyfall2.jpg',
    '../../../assets/images/films_profile_header/ww1984.jpg',
    '../../../assets/images/films_profile_header/Thena.jpg',
    '../../../assets/images/films_profile_header/TheCreator.jpg',
    '../../../assets/images/films_profile_header/TheBatman3.jpg',
    '../../../assets/images/films_profile_header/Lara.jpg',
    '../../../assets/images/films_profile_header/Joker.jpeg',
    '../../../assets/images/films_profile_header/Alien2.jpg',
    '../../../assets/images/films_profile_header/Alien3.jpg',
    '../../../assets/images/films_profile_header/TheFlash1.jpeg',
    '../../../assets/images/films_profile_header/harley3.jpg',
    '../../../assets/images/films_profile_header/Napoleon.jpeg',
    '../../../assets/images/films_profile_header/Spiderman2.jpeg',
    '../../../assets/images/films_profile_header/Spiderman4.jpeg',
    '../../../assets/images/films_profile_header/Alicia.jpg',
    '../../../assets/images/films_profile_header/WonderWoman.jpeg',
    '../../../assets/images/films_profile_header/Harley4.jpg',
    '../../../assets/images/films_profile_header/Harley2.jpg',
    '../../../assets/images/films_profile_header/Spiderman.jpeg',
    '../../../assets/images/films_profile_header/Argylle2.jpeg',
    '../../../assets/images/films_profile_header/Ghostbuster.jpg',
    '../../../assets/images/films_profile_header/MadameWeb.jpeg'
  ]

  let imageElement = document.getElementById('imageToChange');

  let randomIndex = Math.floor(Math.random() * images.length);

  imageElement.src = images[randomIndex];

});


