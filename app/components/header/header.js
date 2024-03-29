// Function to generate header HTML
function generateHeader(data) {
  return `
    <header>
      <div class="navbar">
        <div class="navbar-left">
          <span class="logo">${data.siteName}</span>
        </div>
        <div class="navbar-center">
          <button id="openBtn">${data.filterButtonText}</button>
          <div class="search-bar">
            <form action="${data.searchAction}" method="${data.searchMethod}">
              <input type="text" name="${data.searchName}" placeholder="${data.searchPlaceholder}">
              <button type="submit">${data.searchButtonText}</button>
            </form>
          </div>
        </div>
        <div class="navbar-right">
          <a href="../register/register.html"><button>Registrarse</button></a>
          <a href="../login/login.html"><button>Iniciar sesión</button></a>
        </div>
      </div>
    </header>
  `;
}

let headerData = {
  siteName: "MOVIEIT",
  filterButtonText: "Filtrar",
  searchAction: "../search-result-page/search-result-page.html",
  searchMethod: "get",
  searchName: "q",
  searchPlaceholder: "Buscar...",
  searchButtonText: "Buscar",
  registerButtonText: "Registrarse",
  loginButtonText: "Iniciar sesión",
};

// Generate header HTML and insert into the page
document.getElementById("header").innerHTML = generateHeader(headerData);
