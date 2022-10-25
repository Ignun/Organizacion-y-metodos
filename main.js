// Variables
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cuil = document.getElementById("cuil");
const legajo = document.getElementById("legajo");
const categoria = document.getElementById("categoria");
const division = document.getElementById("division");
const departamento = document.getElementById("departamento");
const fechaingreso = document.getElementById("fechaingreso");
const antiguedad = document.getElementById("antiguedad");
////////
const sueldobasico = document.getElementById("sueldobasico");
const extras50 = document.getElementById("extras50");
const extras100 = document.getElementById("extras100");
///////
const feriados = document.getElementById("feriados");
const faltas = document.getElementById("faltas");
///////
const haberesfinal = 0;

///////// Operaciones ///////////////
var porc_og = 25;
var resultado = 0;
var cuenta = faltas.value * 5;
resultado += cuenta;
porc_og - resultado;

if (resultado >= 25) {
  resultado = 25;
}
const porc_final = porc_og % sueldobasico;
///////

res_extra50 = 50 * extras50;

function generar() {
  let conf = confirm("Esta seguro de los datos ingresados?");
  if (conf == true) {
    const resultText = document.getElementById("blankid");
    resultText.innerHTML = `
    <p>Nombre: ${nombre.value}</p>
    <p>Apellido: ${apellido.value} </p>
    <p>CUIL: ${cuil.value} </p>
    <p>Legajo: ${cuil.value} </p>
    <p>Categoria: ${categoria.value} </p>
    <p>Division: ${division.value} </p>
    <p>Departamento: ${departamento.value} </p>
    <p>Fecha de Ingreso: ${fechaingreso.value} </p>
    <p>Antiguedad: ${antiguedad.value} </p>
    <p>Feriados: ${feriados.value} </p>
    <p>Faltas: ${faltas.value} </p>
    ######################################################
    <p>Sueldo Basico: ${sueldobasico.value} </p>
    <p>Horas Extras (50%): ${res_extra50} </p>
    <p>Horas Extras (100%): ${extras100.value} </p>
    ######################################################
    <p>Presentismo: ${porc_final} </p>
    ######################################################
    <p>Haberes Final: ${null}</p>
      `;
  }
}
