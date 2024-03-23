fetch('movies.json')
.then(response => response.json())
.then(data => {
    const movie = data.data.find(movie => movie.id === 1);
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