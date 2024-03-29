// Función que genera el HTML para el menú de búsqueda
function createSearchMenu() {
    return `
      <div class="search-container" id="searchMenu" style="display: none;">
        <div class="input__container input__container--variant">
          <input type="text" name="text" class="input__search input__search--variant" placeholder="Search...">
          <button class="input__button__shadow input__button__shadow--variant">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="1.5em" width="13em">
              <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#000"></path>
            </svg>
          </button>
        </div>
        <div class="input__container input__container--variant">
          <h1 class="filter-header">Filtros</h1>
          <div id="genreFilter" class="filter">
            <h3>Género</h3>
            <ul>
              <li><input type="checkbox" value="action"> Acción</li>
              <li><input type="checkbox" value="comedy"> Comedia</li>
              <li><input type="checkbox" value="drama"> Drama</li>
            </ul>
          </div>
          <div id="yearFilter" class="filter">
            <h3>Año</h3>
            <select id="yearSelect">
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
      </div>
    `;
  }
  
  // Función para insertar el menú de búsqueda y añadir interactividad
  function insertSearchMenu(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      target.innerHTML = createSearchMenu();
  
      // Lógica para el ícono de búsqueda
      const searchIcon = document.querySelector('.search_icon');
      const searchMenu = document.getElementById('searchMenu');
  
      if (searchIcon && searchMenu) {
        searchIcon.addEventListener('click', function() {
          searchMenu.style.display = searchMenu.style.display === 'none' ? 'flex' : 'none';
        });
      }
    } else {
      console.error('No se encontró el elemento con ID:', targetId);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    insertSearchMenu("search-menu");
  });