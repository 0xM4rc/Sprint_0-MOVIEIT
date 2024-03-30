var movie;
var selectedMovie;

function createAndAppendRowContent(row, elementContent) {
    const element = document.createElement("td");
    element.textContent = elementContent
    row.appendChild(element);
}

selectedMovie = sessionStorage.getItem("selectedMovie");
fetch('/app/data/covers.json')
    .then(response => response.json())
    .then(data => {
        const movieImage = document.querySelector(".movie-image");
        const cover = data.data.find(movie => movie.id == selectedMovie);
        let imageElement = document.createElement("img");
        imageElement.src = cover.attributes.Url;
        movieImage.prepend(imageElement);
    });
fetch('/app/data/movies.json')
.then(response => response.json())
.then(data => {
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

    createAndAppendRowContent(directorRow, movie.attributes.Director);
    createAndAppendRowContent(producersRow, movie.attributes.Producers);
    createAndAppendRowContent(castRow, movie.attributes.Cast);
    createAndAppendRowContent(genresRow, movie.attributes.Genres);
    createAndAppendRowContent(lengthRow, movie.attributes.Length);
    createAndAppendRowContent(streamingPlatformsRow, movie.attributes.StreamingPlatforms);

    titleDescriptionContainer.prepend(movieText);
    titleDescriptionContainer.prepend(movieTitle);
});