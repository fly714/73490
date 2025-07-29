const btnAgregar = document.getElementById('agregar');
const btnBuscar = document.getElementById('buscar');
const btnCargarNota = document.getElementById('cargarNota');
const audioError = new Audio('./audio/pacman-dies.mp3');
const audioCarga = new Audio('./audio/mario-bros vida.mp3');



function obtenerAlumnos() {
      return JSON.parse(localStorage.getItem('alumnos')) || [];
    }

    function guardarAlumnos(alumnos) {
      localStorage.setItem('alumnos', JSON.stringify(alumnos));
    }
    
    btnAgregar.addEventListener('click', function() {
      const nombre = document.getElementById('nombre').value.trim();
      const curso = document.getElementById('curso').value.trim();

      if (nombre && curso) {
        const alumnos = obtenerAlumnos();
        alumnos.push({ nombre, curso, notas: [] });
        guardarAlumnos(alumnos);
        audioCarga.play();
        alert('Alumno agregado con éxito.');
        document.getElementById('nombre').value = '';
        document.getElementById('curso').value = '';
        
      } else {
        audioError.play();
        alert('Por favor, completa ambos campos.');
      }
    })

    let alumnoActual = null;

    btnBuscar.addEventListener('click', function() {
      const nombreBuscar = document.getElementById('buscarNombre').value.trim().toLowerCase();
      const alumnos = obtenerAlumnos();
    
      let alumno = null;

      for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nombre.toLowerCase() === nombreBuscar) {
          alumno = alumnos[i];
          break;
        }
      }
      
      document.getElementById('buscarNombre').value = '';       
        if (alumno) {
        alumnoActual = alumno;
        audioCarga.play();
        document.getElementById('resultadoBusqueda').innerHTML = `
          <p><strong>Nombre:</strong> ${alumno.nombre}</p>
          <p><strong>Curso:</strong> ${alumno.curso}</p>
          <p><strong>Notas:</strong> ${alumno.notas.join(', ') || 'Sin notas'}</p>`;
        document.getElementById('agregarNota').style.display = 'block';
      } else {
        alumnoActual = null;
        audioError.play();
        document.getElementById('resultadoBusqueda').innerHTML = '<p>Alumno no encontrado.</p>';
        document.getElementById('agregarNota').style.display = 'none';
      }
    })

    btnCargarNota.addEventListener('click', function() {
      const nota = document.getElementById('nota').value.trim();

      if (alumnoActual && nota) {
        const alumnos = obtenerAlumnos();
        const index = alumnos.findIndex(a => a.nombre === alumnoActual.nombre && a.curso === alumnoActual.curso);
        if (index !== -1) {
          alumnos[index].notas.push(nota);
          guardarAlumnos(alumnos);
          audioCarga.play();
          alert('Nota agregada.');
          document.getElementById('nota').value = '';
          buscarAlumno();
        }
      } else {
        audioError.play();
        alert('Debes buscar un alumno y escribir una nota.');
      }
    })



















