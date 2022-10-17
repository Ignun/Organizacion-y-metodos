function variables() {
  // Variables
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let cuil = document.getElementById("cuil").value;
  let legajo = document.getElementById("legajo").value;
  let categoria = document.getElementById("categoria").value;
  let division = document.getElementById("division").value;
  let departamento = document.getElementById("departamento").value;
  let fechaingreso;
  let antiguedad = document.getElementById("antiguedad").value;
  ////////
  let sueldobasico = document.getElementById("sueldobasico").value;
}

function generar() {
  variables();
  let conf = confirm("Esta seguro de los datos ingresados?");
  if (conf == true) {
    let resultText = document.getElementById("blankid");
    resultText.innerHTML =
      "<p>Nombre: " +
      nombre.value +
      "</p> <p>Apellido:" +
      apellido.value +
      "</p> <p class=bold">CUIL:" +
      cuil.value +
      "</p> <p>Legajo:" +
      legajo.value +
      "</p> <p>Categoria:" +
      categoria.value +
      "</p>";
  }
}
