function validarUsuario () {
    let user = document.getElementById("txtUser");
    let password = document.getElementById("txtPassword");

    //Estructura de control simple
    if (user.value === "admin") {
        if (password.value === "root") {
            alert("Login exitoso");
            location.href = "./principal.html";
        }
        else {
            alert("Contraseña incorrecta");
        }
    } else {
        alert("Usuario incorrecto");
    }
}