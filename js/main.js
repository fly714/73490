
function miEnvio() {
    let nomb = document.getElementById("nombre").value;
    let edad = document.getElementById("edades").value;
    let ed = edad

    if (ed < 5) {
    alert("Hola, " + nomb + ". Aun no tienes la edad necesaria para ingresar al Grupo Scout, debes ser mayor de 5 años.")
    } else if (ed <= 6) {
    alert("Hola, " + nomb + ". Perteneces a la Rama Castores.")
    } else if (ed <= 11) {
    alert("Hola, " + nomb + ". Perteneces a la Rama Manada.")
    } else if (ed <= 14) {
    alert("Hola, " + nomb + ". Perteneces a la Rama Unidad.")
    } else if (ed <= 17) {
    alert("Hola, " + nomb + ". Perteneces a la Rama Caminantes.")
    } else if (ed <= 21) {
    alert("Hola, " + nomb + ". Perteneces a la Rama Rover.")
    } else {
    alert("Hola, " + nomb + ". Perteneces a los Educadores.")
    }
}




