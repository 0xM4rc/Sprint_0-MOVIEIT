document.addEventListener('DOMContentLoaded', function() {
    var images = [
        './resources/films_profile_header/Avatar2.jpeg',
        './resources/films_profile_header/BladeRunner.jpeg',
        './resources/films_profile_header/ElBueno2.jpeg',
        './resources/films_profile_header/IndianaJoneshd.jpg',
        './resources/films_profile_header/KatnissEverdeen.jpg',
        './resources/films_profile_header/RegresoAlFuturo.jpg',
        './resources/films_profile_header/RegresoAlFuturo2.jpg',
        './resources/films_profile_header/Skyfall2.jpg',
        './resources/films_profile_header/ww1984.jpg',
        './resources/films_profile_header/Thena.jpg',
        './resources/films_profile_header/TheCreator.jpg',
        './resources/films_profile_header/TheBatman3.jpg',
        './resources/films_profile_header/Lara.jpg',
        './resources/films_profile_header/Joker.jpeg',
        './resources/films_profile_header/Alien2.jpg',
        './resources/films_profile_header/Alien3.jpg'
    ];

    var imageElement = document.getElementById('imageToChange');

    var randomIndex = Math.floor(Math.random() * images.length);

    imageElement.src = images[randomIndex];
});


