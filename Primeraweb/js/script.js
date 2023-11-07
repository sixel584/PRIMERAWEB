/* function retornarFecha() {
    let fecha;
    fecha = new Date();
    var cadena = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
    return cadena;
}

function retornarHora() {
    let fecha;
    fecha = new Date();
    var cadena = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    return cadena;
}*/

// SELECCIONAR ELEMENTOS
document.addEventListener("DOMContentLoaded", function() {
  let contenidoTitulo = "Nombre";

  // Error 1: Corregir la selección del elemento por ID.
  let titulo = document.getElementById("titulo1");
  
  // Error 2: Agregar "titulo." para establecer el innerHTML.
  titulo.innerHTML = contenidoTitulo;

  // CONDICIONALES
  let textoTitulo = titulo.innerText;
  console.log(textoTitulo);

  if (textoTitulo == "Nombre") {
    // Error 3: Corregir la actualización de innerHTML.
    titulo.innerHTML = "CORTE Y CONFECCION DE ROPA DEPORTIVA";
  } else {
    console.log("No se cumple");
  }
});
/* document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    let nombre = "SSOLARTE";
    let ciudad = "POPAYAN";
    let gusto = "CAFE";

    let elementos = document.getElementsByClassName("informacion");

    function cambiarTexto() {
        let contenido = `Mi nombre es ${nombre}, vivo en la ciudad de Popayán, y me gusta el ${gusto}. Me gradué del Instituto de Tecnología de Florida en 2020 con una licenciatura en desarrollo de software. Mientras estaba en la escuela, obtuve diferentes reconocimientos por mi desempeño académico ejemplar y mis habilidades de liderazgo.`;

        return contenido;
    }

    // Itera a través de los elementos y establece el texto en cada uno
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].innerText = cambiarTexto();
    }
});

 */
document.addEventListener("DOMContentLoaded", function() {
let nombre="SSOLARTE";
let ciudad="Popayan";
let gusto="Cafe";

    let parrafo = document.querySelector(".informacion");
function cambiarTexto(nombre, ciudad, gusto){ 
let contenido = `Mi nombre es ${nombre}, vivo en la ciudad de ${ciudad}, y me gusta el ${gusto}. Me gradué del Centro Educativo Empresarial Comfacauca en 2015. Mientras estaba en la escuela.`;

return contenido;
}
parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

 });
// SELECCIONAR NAVBAR MEDIANTE JAVASCRIPT
document.addEventListener("DOMContentLoaded", function(){
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
}
});
 const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
