
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const p1 = document.getElementById("password1").value;
        const p2 = document.getElementById("password2").value;
        if (p1 !== p2) {
            alert("Las contraseñas deben de coincidir");
            return false;
        } else {
            alert("Todo esta correcto");
            form.submit();
            return true;
        }
    })
})

