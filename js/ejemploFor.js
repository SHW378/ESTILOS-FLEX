// declarar una estructura de datos con nuestra información 
let productos = ["producto 1 ", "producto 2 ", "producto 3 ", "producto 4 ", "producto 5 ", "producto 6 ", "producto 7 ", "producto 8 ", "producto 9 ", "producto 10 "];

//Accedo al elemento de html que quiero alterar
let contenedor = document.getElementById("contenedor"); 

let contenido = "";
productos.forEach(producto => {
    contenido = contenido + "<div> <h3>" + producto + "</h3>" + "</div>"; 
})
contenedor.innerHTML = contenido;
