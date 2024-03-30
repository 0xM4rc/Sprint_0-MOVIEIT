class HighlightedFilmCard {
  constructor(link, time, id) {
    this.link = link;
    this.time = time;
    this.id = id;
  }

  generateHTML() {
    return `
      <div class="movie">
        <div class="movie-card">
            <div class="movie-card-content">
                <div class="movie-card-back">
                    <div class="movie-card-back-content">
                        <img src="${this.link}" alt="">
                    </div>
                </div>
                <div class="movie-card-front">
                    <div class="movie-card-front-content">
                        <small class="badge">Categoría</small>
                        <div class="description">
                            <div class="title">
                                <div class="rating">
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span><span>★</span>
                                </div>
                            </div>
                            <p class="card-footer">
                                ${this.time} &nbsp;
                            </p>
                            <a href="../movie_description/movie-description.html">
                                <button class="watch-more-button" id="${this.id}">Ir</button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      `;
  }
}

var containers = document.querySelectorAll(".highlightedFilmCard");

containers.forEach(function(container) {
  var link = container.getAttribute("data-link");
  var time = container.getAttribute("data-time");
  var id = container.getAttribute("data-id")

  var card = new HighlightedFilmCard(link, time, id);
  container.innerHTML = card.generateHTML();
});
