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

var containers = document.querySelectorAll(".listCard");

containers.forEach(function(container) {
  var link = container.getAttribute("data-link");
  var number = container.getAttribute("data-number");
  
  var card = new listCard(link, number);
  container.innerHTML = card.generateHTML();
});

