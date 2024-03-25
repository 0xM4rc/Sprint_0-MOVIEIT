var movie;
var selectedMovie;
const boton1 = document.getElementById('1');
const boton2 = document.getElementById('2');
const boton3 = document.getElementById('3');
const boton4 = document.getElementById('4');
const boton5 = document.getElementById('20');

function obtenerIdBoton(boton) {
    return boton.id;
}

fetch('movies.json')
.then(response => response.json())
.then(data => {

    selectedMovie = sessionStorage.getItem("selectedMovie");
    movie = data.data.find(movie => movie.id == selectedMovie);
    const titleDescriptionContainer = document.getElementById("title-description");
    const directorRow = document.getElementById("movie-director");
    const producersRow = document.getElementById("movie-producers");
    const castRow = document.getElementById("movie-cast");
    const genresRow = document.getElementById("movie-genres");
    const lengthRow = document.getElementById("movie-length");
    const streamingPlatformsRow = document.getElementById("movie-streaming-platforms");

    const movieTitle = document.createElement("h1");
    movieTitle.textContent = movie.attributes.Title;

    const movieText = document.createElement("p");
    movieText.classList.add("movie-text");
    movieText.textContent = movie.attributes.Description;

    var movieDirector = document.createElement("td");
    movieDirector.textContent = movie.attributes.Director;
    directorRow.appendChild(movieDirector);

    var movieProducers = document.createElement("td");
    movieProducers.textContent = movie.attributes.Producers;
    producersRow.appendChild(movieProducers);

    var movieCast = document.createElement("td");
    movieCast.textContent = movie.attributes.Cast;
    castRow.appendChild(movieCast);

    var movieGenres = document.createElement("td");
    movieGenres.textContent = movie.attributes.Genres;
    genresRow.appendChild(movieGenres);

    var movieLength = document.createElement("td");
    movieLength.textContent = movie.attributes.Length;
    lengthRow.appendChild(movieLength);

    var movieStreamingPlatforms = document.createElement("td");
    movieStreamingPlatforms.textContent = movie.attributes.StreamingPlatforms;
    streamingPlatformsRow.appendChild(movieStreamingPlatforms);

    titleDescriptionContainer.prepend(movieText);
    titleDescriptionContainer.prepend(movieTitle);
})