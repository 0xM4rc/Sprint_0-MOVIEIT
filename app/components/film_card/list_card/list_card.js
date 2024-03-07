class listCard {
  constructor(link, number) {
    this.link = link;
    this.number = number;
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
                                </div>
                                <p class="card-footer">
                                ${this.number} &nbsp;
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

let containers = document.querySelectorAll(".listCard");

// Iterar sobre cada contenedor y generar la tarjeta de película destacada para cada uno
containers.forEach(function(container) {
  let link = container.getAttribute("data-link");
  let number = container.getAttribute("data-number");

  // Crear una nueva instancia de HighlightedFilmCard y generar el HTML
  let card = new listCard(link, number);
  container.innerHTML = card.generateHTML();
});

