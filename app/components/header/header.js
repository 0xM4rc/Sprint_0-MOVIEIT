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
          <button>${data.registerButtonText}</button>
          <button>${data.loginButtonText}</button>
        </div>
      </div>
    </header>
  `;
}

let headerData = {
  siteName: "MOVIEIT",
  filterButtonText: "Filtrar",
  searchAction: "/buscar",
  searchMethod: "get",
  searchName: "q",
  searchPlaceholder: "Buscar...",
  searchButtonText: "Buscar",
  registerButtonText: "Registrarse",
  loginButtonText: "Iniciar sesión"
};

// Generate header HTML and insert into the page
document.getElementById("header").innerHTML = generateHeader(headerData);
