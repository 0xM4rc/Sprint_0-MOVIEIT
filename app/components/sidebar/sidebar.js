// Function to generate footer HTML
function generateSidebar() {
    return `
    <div id="sidebar" class="sidebar">
      <h2>Filtros</h2>
      <hr>
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
    `;
}
// Generate header HTML and insert into the page
document.getElementById("sidebarTemplate").innerHTML = generateSidebar();

document.getElementById('openBtn').addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('show-sidebar');
});

