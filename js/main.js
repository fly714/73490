let datos = []
const formularioAlumno = document.getElementById("alumnoForm");
formularioAlumno.addEventListener("submit", (event)=> {
        event.preventDefault();// 
              
        const nombre = document.getElementById("alumnoNombre").value;
        const curso = document.getElementById("alumnoCurso").value;
        document.getElementById("alumnoNombre").value = '';
        document.getElementById("alumnoCurso").value = '';        
        if (nombre && curso) {
            const listaAlumnos = {nombre, curso};
            datos.push({ listaAlumnos });
            mostrarDatos();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });

function mostrarDatos() {
    const lista = document.getElementById("lisAlumnos");
    lista.innerHTML = ''; 
    datos.forEach((alumno, index) => {
        const li = document.createElement("li");
        li.textContent = `${alumno.listaAlumnos.nombre} - ${alumno.listaAlumnos.curso}`;
        lista.appendChild(li);
    });
}