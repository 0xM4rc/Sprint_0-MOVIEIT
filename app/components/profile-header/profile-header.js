function generateProfileHeader(data) {
  return `
    <header>
    <div class="header-user">
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
      <div class="buttons-mode">
        <a href="../edit-profile/edit-profile.html">
          <button class="btn edit" id="editar">${data.editarBtn}</button>
        </a>
        <button class="btn close">${data.cerrarBtn}</button>
      </div>
    </div>
  </header>
  `;
}

let profileData = {
  userName: "Nombre de Usuario",
  editarBtn: "Editar perfil",
  cerrarBtn: "Cerrar sesión"
};


document.getElementById("profile-header").innerHTML = generateProfileHeader(profileData);

const editarBtn = document.getElementById('editar');

if (window.location.pathname.includes('edit-profile.html')) {
  // Si la URL contiene "pagina1.html", elimina el botón
  editarBtn.remove();
}

window.onload = function() {
  let anchoPantalla = window.innerWidth;
  if(anchoPantalla<431){
    editarBtn.remove();


  }else{
    changeImage(images);
  }
}
