//Declaramos nuestra estructura de datos a implementar

let pacientes = [
    {   id: 1,
        nombre: "Cristian",
        apellido: "Estrada Andrade",
        fechaNacimiento: "23-11-1997",
        genero: "Masculino"
    },
    {   id: 2,
        nombre: "César",
        apellido: "Cázares Chaván",
        fechaNacimiento: "17-12-2005",
        genero: "Masculino"
        
    },
    {   id: 3,
        nombre: "Victor",
        apellido: "Chavéz Valadez",
        fechaNacimiento: "10-01-2006",
        genero: "Masculino"
    }
];

//Funciones en javascript = Metodos de Java
/* 
function sumar(num1, num2) {

}
*/

//Función para cargar los registros en la tabla
function mostrarTabla() {
    let tabla = document.getElementById("tablaPacientes");
    tabla.innerHTML = ""; //Limpiamos los registor actuales de la tabla
    
    let cuerpoTabla = "";
    pacientes.forEach(paciente =>{
        cuerpoTabla += `
                    <tr>
                        <td>${paciente.id}</td>
                        <td>${paciente.nombre}</td>
                        <td>${paciente.apellido}</td>
                        <td>${paciente.fechaNacimiento}</td>
                        <td>${paciente.genero}</td>
                        <td>${paciente.fechaNacimiento}</td>
                        <td>
                            <button class="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                        `;
    });
    tabla.innerHTML = cuerpoTabla;

}
    mostrarTabla();
