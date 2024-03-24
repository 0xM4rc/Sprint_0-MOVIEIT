var boton1 = document.createElement("button");
var boton2 = document.createElement("button");
var punto = 1;

function generateProfileHeader(data) {
  return `
    <header>
    <div class="header-user" id="header-user">
      <div class="header-img">
        <img src="" id="imageToChange" alt="header"/>
        <script src="../../components/profile-header/script1.js"></script>
      </div>
      <div class="user-img">
        <img src="../../../assets/images/films_profile_covers/user/Avatar2.jpeg" alt="Descripción de la imagen"/>
      </div>
      <div class="user-name">
        <div class="etiqueta-bonita" id="name">${data.userName}</div>
      </div>
      <div class="buttons-mode" id="menu"></div>
    </div>
  </header>
  `;
}

let profileData = {
  userName: "Nombre de Usuario",
  editarBtn: "Editar perfil",
  cerrarBtn: "Cerrar sesión"
};

const editarBtn = document.getElementById('editar');
const closeBtn = document.getElementById('close');
const headerUser = document.getElementById('header-user');
let anchoPantalla = window.innerWidth;

function generateHeader(){
  return '<div id="profile-header"></div>';
}

if(anchoPantalla < 431) {
  document.getElementById("header1").innerHTML = generateHeader();
}else{
  document.getElementById('header2').innerHTML=generateHeader();
}

document.getElementById("profile-header").innerHTML = generateProfileHeader(profileData);

if(anchoPantalla < 431){
  document.getElementById("menu").innerHTML = generatePuntos();
}else{
  document.getElementById("menu").innerHTML = generateBotones();

}

if (window.location.pathname.includes('edit-profile.html')) {
  editarBtn.remove();
}

function changeThree() {
  var container = document.createElement("div");
  container.className("container");
  headerUser.appendChild(container);

  let menu = document.createElement("div");
  menu.className("group-menu");
  container.appendChild(menu);

  for(let i = 0;i<3;i++){
    let dots = document.createElement("div");
    dots.className("dot");
    menu.appendChild(dots);
  }
}



function generateBotones() {
  return '<a href="../edit-profile/edit-profile.html">\n' +
      '<button class="btn edit" id="editar">Editar</button>\n' +
      '</a>\n' +
      '<button class="btn close" id="close">Cerrar Sesión</button>'
}

function generatePuntos() {
  return '<div class="container">\n' +
      '    <div class="more">\n' +
      '        <button id="more-btn" class="more-btn">\n' +
      '            <span class="more-dot"></span>\n' +
      '            <span class="more-dot"></span>\n' +
      '            <span class="more-dot"></span>\n' +
      '        </button>\n' +
      '    </div>\n' +
      '<div id="contenedorBotones" class="contenedorBotones"></div>' +
      '</div>'
}

var el = document.querySelector('.more');
var btn = el.querySelector('.more-btn');
var menu = el.querySelector('.more-menu');
var visible = false;

function showMenu(e) {
  e.preventDefault();
  if (!visible) {
    visible = true;
    el.classList.add('show-more-menu');
    menu.setAttribute('aria-hidden', false);
    document.addEventListener('mousedown', hideMenu, false);
  }
}

function hideMenu(e) {
  if (btn.contains(e.target)) {
    return;
  }
  if (visible) {
    visible = false;
    el.classList.remove('show-more-menu');
    menu.setAttribute('aria-hidden', true);
    document.removeEventListener('mousedown', hideMenu);
  }
}

document.getElementById("more-btn").addEventListener("click", function() {
  var contenedor = document.getElementById("contenedorBotones");
  if(punto == 1){
    boton1.textContent = "Editar perfil";
    boton2.textContent = "Cerrar Sesión";

    boton1.classList.add("botones");
    boton2.classList.add("botones");

    contenedor.appendChild(boton1);
    contenedor.appendChild(boton2);
    punto = 2;
  }else{
    contenedor.removeChild(boton1);
    contenedor.removeChild(boton2);
    punto = 1;
  }

});

boton1.addEventListener("click", function() {
  window.location.href = "../edit-profile/edit-profile.html";
});
boton2.addEventListener("click", function() {
  window.location.href = "https://www.google.com";
});

