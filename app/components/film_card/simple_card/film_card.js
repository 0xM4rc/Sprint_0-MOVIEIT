class SimpleFilmCard {
  constructor(link, time) {
      this.link = link;
      this.time = time;
  }

  generateHTML() {
      return `
        <div class="movie">
            <div class="movie-card">
                <div class="movie-card-content">
                    <div class="movie-card-back-content">
                        <img src="${this.link}" alt="">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
  }
}

var containers = document.querySelectorAll(".simpleFilmCard");

// Iterar sobre cada contenedor y generar la tarjeta de película destacada para cada uno
containers.forEach(function(container) {
  var link = container.getAttribute("data-link");
  var time = container.getAttribute("data-time");

  // Crear una nueva instancia de HighlightedFilmCard y generar el HTML
  var card = new SimpleFilmCard(link, time);
  container.innerHTML = card.generateHTML();
});

