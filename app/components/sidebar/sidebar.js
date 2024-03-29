// Define la función que genera el componente HTML
function createSidebar() {
  return `
  <div id="sidebar" class="closed">
  <ul>
      <li><a href="../register/register.html"><button>Registrarse</button></a></li>
      <li><a href="../login/login.html"><button>Iniciar sesión</button></a></li>
  </ul>
</div>
  `;
}

// Función para insertar la barra lateral en la página y añadir interactividad
function insertSidebar(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.innerHTML = createSidebar();

    // Lógica para el menú lateral
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');

    if (burger) {
      burger.addEventListener('change', function() {
        if (burger.checked) {
          sidebar.classList.add('open');
        } else {
          sidebar.classList.remove('open');
        }
      });
    }
  } else {
    console.error('No se encontró el elemento con ID:', targetId);
  }
}


// Inserta el componente automáticamente al cargar la página y añade interactividad
document.addEventListener('DOMContentLoaded', function() {
  insertSidebar('sidebar_component');
});