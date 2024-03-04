document.addEventListener('DOMContentLoaded', function() {
    var images = [
        './resources/films_profile_header/Avatar2.jpeg',
        './resources/films_profile_header/BladeRunner.jpeg',
        './resources/films_profile_header/IndianaJoneshd.jpg',
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
        './resources/films_profile_header/Alien3.jpg',
        './resources/films_profile_header/TheFlash1.jpeg',
        './resources/films_profile_header/harley3.jpg',
        './resources/films_profile_header/Napoleon.jpeg',
        './resources/films_profile_header/Spiderman2.jpeg',
        './resources/films_profile_header/Spiderman4.jpeg',
        './resources/films_profile_header/Alicia.jpg',
        './resources/films_profile_header/WonderWoman.jpeg',
        './resources/films_profile_header/Harley4.jpg',
        './resources/films_profile_header/Harley2.jpg',
        './resources/films_profile_header/Spiderman.jpeg',
        './resources/films_profile_header/Argylle2.jpeg',
        './resources/films_profile_header/Ghostbuster.jpg',
        './resources/films_profile_header/MadameWeb.jpeg'
        ]
    var colors = [
        'yellow',
        '#cb89b6',
        './resources/films_profile_header/IndianaJoneshd.jpg',
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
        './resources/films_profile_header/Alien3.jpg',
        './resources/films_profile_header/TheFlash1.jpeg',
        './resources/films_profile_header/harley3.jpg',
        './resources/films_profile_header/Napoleon.jpeg',
        './resources/films_profile_header/Spiderman2.jpeg',
        './resources/films_profile_header/Spiderman4.jpeg',
        '#4da467',
        './resources/films_profile_header/WonderWoman.jpeg',
        './resources/films_profile_header/Harley4.jpg',
        './resources/films_profile_header/Harley2.jpg',
        './resources/films_profile_header/Spiderman.jpeg',
        './resources/films_profile_header/Argylle2.jpeg',
        './resources/films_profile_header/Ghostbuster.jpg',
        './resources/films_profile_header/MadameWeb.jpeg'
    ]

    var imageElement = document.getElementById('imageToChange');

    var randomIndex = Math.floor(Math.random() * images.length);

    imageElement.src = images[randomIndex];

    //var b = document.getElementById("editar");
    //b.style.backgroundColor='#cb89b6';
    //var c = document.getElementsByClassName("etiqueta-bonita");
    //for(var i = 0;i<c.length;i++){
    //  c[i].style.backgroundColor='#cb89b6';
    //}
    //var a=document.getElementById("name");
    //a.style.backgroundColor= 'rgba(203,137,182,0.2)';
});


