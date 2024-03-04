// Function to generate footer HTML
function generateFooter() {
    return `
    <footer>
    <div class="footer-line"></div>

    <div class="footer-content">
      <div class="footer-section">
        <h3>Enlaces Importantes</h3>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contacto</h3>
        <p>Dirección: Calle Principal, Ciudad, País</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
    </div>


    <p class="footer-copyright">© 2024 MOVIEIT. Todos los derechos reservados.</p>
  </footer>
    `;
  }
  
  // Generate header HTML and insert into the page
  document.getElementById("footer").innerHTML = generateFooter();
  