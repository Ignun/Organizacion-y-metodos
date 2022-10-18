// Variables
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cuil = document.getElementById("cuil");
const legajo = document.getElementById("legajo");
const categoria = document.getElementById("categoria");
const division = document.getElementById("division");
const departamento = document.getElementById("departamento");
const fechaingreso = null;
const antiguedad = document.getElementById("antiguedad");
////////
const sueldobasico = document.getElementById("sueldobasico");

function generar() {
  let conf = confirm("Esta seguro de los datos ingresados?");
  if (conf == true) {
    const resultText = document.getElementById("blankid");
    resultText.innerHTML = `
    <p>Nombre: ${nombre.value}</p>
    <p>Apellido: ${apellido.value} </p>
    <p>CUIL: ${cuil.value} </p>
      `;
  }
}
