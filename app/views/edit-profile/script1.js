document.addEventListener('DOMContentLoaded', function() {
    var images = [
        '/assets/images/films_profile_header/Avatar2.jpeg',
        '/assets/images/films_profile_header/BladeRunner.jpeg',
        '/assets/images/films_profile_header/IndianaJoneshd.jpg',
        '/assets/images/films_profile_header/RegresoAlFuturo.jpg',
        '/assets/images/films_profile_header/RegresoAlFuturo2.jpg',
        '/assets/images/films_profile_header/Skyfall2.jpg',
        '/assets/images/films_profile_header/ww1984.jpg',
        '/assets/images/films_profile_header/Thena.jpg',
        '/assets/images/films_profile_header/TheCreator.jpg',
        '/assets/images/films_profile_header/TheBatman3.jpg',
        '/assets/images/films_profile_header/Lara.jpg',
        '/assets/images/films_profile_header/Joker.jpeg',
        '/assets/images/films_profile_header/Alien2.jpg',
        '/assets/images/films_profile_header/Alien3.jpg',
        '/assets/images/films_profile_header/TheFlash1.jpeg',
        '/assets/images/films_profile_header/harley3.jpg',
        '/assets/images/films_profile_header/Napoleon.jpeg',
        '/assets/images/films_profile_header/Spiderman2.jpeg',
        '/assets/images/films_profile_header/Spiderman4.jpeg',
        '/assets/images/films_profile_header/Alicia.jpg',
        '/assets/images/films_profile_header/WonderWoman.jpeg',
        '/assets/images/films_profile_header/Harley4.jpg',
        '/assets/images/films_profile_header/Harley2.jpg',
        '/assets/images/films_profile_header/Spiderman.jpeg',
        '/assets/images/films_profile_header/Argylle2.jpeg',
        '/assets/images/films_profile_header/Ghostbuster.jpg',
        '/assets/images/films_profile_header/MadameWeb.jpeg'
        ]
    var colors = [
        'yellow',
        '#cb89b6',
        '/assets/images/films_profile_header/IndianaJoneshd.jpg',
        '/assets/images/films_profile_header/RegresoAlFuturo.jpg',
        '/assets/images/films_profile_header/RegresoAlFuturo2.jpg',
        '/assets/images/films_profile_header/Skyfall2.jpg',
        '/assets/images/films_profile_header/ww1984.jpg',
        '/assets/images/films_profile_header/Thena.jpg',
        '/assets/images/films_profile_header/TheCreator.jpg',
        '/assets/images/films_profile_header/TheBatman3.jpg',
        '/assets/images/films_profile_header/Lara.jpg',
        '/assets/images/films_profile_header/Joker.jpeg',
        '/assets/images/films_profile_header/Alien2.jpg',
        '/assets/images/films_profile_header/Alien3.jpg',
        '/assets/images/films_profile_header/TheFlash1.jpeg',
        '/assets/images/films_profile_header/harley3.jpg',
        '/assets/images/films_profile_header/Napoleon.jpeg',
        '/assets/images/films_profile_header/Spiderman2.jpeg',
        '/assets/images/films_profile_header/Spiderman4.jpeg',
        '#4da467',
        '/assets/images/films_profile_header/WonderWoman.jpeg',
        '/assets/images/films_profile_header/Harley4.jpg',
        '/assets/images/films_profile_header/Harley2.jpg',
        '/assets/images/films_profile_header/Spiderman.jpeg',
        '/assets/images/films_profile_header/Argylle2.jpeg',
        '/assets/images/films_profile_header/Ghostbuster.jpg',
        '/assets/images/films_profile_header/MadameWeb.jpeg'
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


