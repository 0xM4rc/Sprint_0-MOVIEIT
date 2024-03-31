class HighlightedFilmCard2 {
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
                                        <button class="watch-more-button" data-id="${this.id}">Ir</button>
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

fetch('../../data/covers.json')
    .then(response => response.json())
    .then(data => {
        const filmsContainer = document.getElementById('highlightedFilmsContainer');
        const selectedIds = [1, 2, 3, 4, 5]; /* Aqui se eligen las pelis que se muestran */

        data.data.forEach(item => {
            if (selectedIds.includes(item.id)) {
                const card = new HighlightedFilmCard2(item.attributes.Url, "30 Mins", item.id.toString());
                filmsContainer.innerHTML += card.generateHTML();
            }
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));
