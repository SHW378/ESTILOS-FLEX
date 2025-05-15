let Medicos = [
    {   id: 1,
        nombre: "César",
        apellidos: "Cázares Chaván",
        Cedula: "9798798",
        ProcedenciaUniversidad: "La Salle Bajio",
        FechaNacimiento: "12-17-2005",
        Genero: "Masculino",
        Especialidad: "Cardiología", 
    },
    {   
        id: 2,
        nombre: "María",
        apellidos: "González Pérez",
        Cedula: "3456723",
        ProcedenciaUniversidad: "La Salle Bajio",
        FechaNacimiento: "08-22-1987",
        Genero: "Femenino",
        Especialidad: "Neurología", 
    },
    {   
        id: 3,
        nombre: "Javier",
        apellidos: "López Ramírez",
        Cedula: "6789345",
        ProcedenciaUniversidad: "La Salle Bajio",
        FechaNacimiento: "03-15-1992",
        Genero: "Masculino",
        Especialidad: "Pediatría", 
    }
];
   

function mostrarTabla() {
    let tabla = document.getElementById("tablaMedicos")
    tabla.innerHTML= "";

    let cuerpoTabla = "";
    Medicos.forEach(medico =>{
        cuerpoTabla += `
                    <tr>
                        <th>${medico.id}</th>
                        <th>${medico.nombre}</th>
                        <th>${medico.apellidos}</th>
                        <th>${medico.Cedula}</th>
                        <th>${medico.ProcedenciaUniversidad}</th>
                        <th>${medico.FechaNacimiento}</th>
                        <th>${medico.Genero}</th>
                        <th>${medico.Especialidad}</th>
                        <td>
                            <button class="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                        `
    });
    tabla.innerHTML = cuerpoTabla;
}

mostrarTabla();