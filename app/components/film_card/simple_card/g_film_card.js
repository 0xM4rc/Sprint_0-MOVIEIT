class SimpleFilmCard2 {
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

fetch('../../data/covers.json')
    .then(response => response.json())
    .then(data => {
        // Seleccionar todos los contenedores basados en una clase
        const filmsContainers = document.querySelectorAll('.simpleFilmsContainerG');

        filmsContainers.forEach(container => {
            const dataIds = container.getAttribute('data-ids');
            const selectedIds = dataIds ? dataIds.split(',').map(id => parseInt(id.trim())) : [];

            selectedIds.forEach(id => {
                const item = data.data.find(movie => movie.id === id);
                if (item) {
                    const card = new SimpleFilmCard2(item.attributes.Url, "30 Mins", item.id.toString());
                    container.innerHTML += card.generateHTML();
                }
            });
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));
