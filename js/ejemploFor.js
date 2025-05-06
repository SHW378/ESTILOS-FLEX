// declarar una estructura de datos con nuestra información 
let productos = ["producto 1 ", "producto 2 ", "producto 3 ", "producto 4 ", "producto 5 ", "producto 6 ", "producto 7 ", "producto 8 ", "producto 9 ", "producto 10 "];

//Arreglos de objetos
let products = [
    {   nombreProducto: "Producto1",
        descripcion: "Este es el producto 1",
    },
    {   nombreProducto: "Producto2",
        descripcion: "Este es el producto 2",
    },
    {   nombreProducto: "Producto3",
        descripcion: "Este es el producto 3",
    },
    {   nombreProducto: "Producto4",
        descripcion: "Este es el producto 4",
    },
    {   nombreProducto: "Producto5",
        descripcion: "Este es el producto 5",
    }
];
//Accedo al elemento de html que quiero alterar
let contenedor = document.getElementById("contenedor"); 

let contenido = "";
productos.forEach(producto => {
    contenido = contenido + '<div style="width: 100px; border: solid 1px red; margin: 5px;"> <h3>' + producto.nombreProducto + '</h3>' + '</div>'; 
})
contenedor.innerHTML = contenido;
