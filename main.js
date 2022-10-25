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
// const porc_og = 25;
// const cuenta = faltas.value * 5;

// if (cuenta >= 25) {
//   porc_og = 25;
// } else {
//   porc_og - cuenta;
//   const present_resultado = sueldobasico % porc_og;
// }
///////

function generar() {
  let conf = confirm("Esta seguro de los datos ingresados?");
  if (conf == true) {
    //////// Operacion Presentismo/////////
    if (faltas.value >= 5) {
      var porc_suma = 25;
    } else {
      var porc_suma = 25 - faltas.value * 5;
    }
    const porc_total = parseInt(sueldobasico.value / 100) * porc_suma;
    ///////////////////////////////////////

    const resultText = document.getElementById("blankid");
    resultText.innerHTML = `
    #################### DATOS/INFORMACION ##################
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
    #################### INFORMACION ECONOMICA ##############
    <p>Sueldo Basico: ${sueldobasico.value} </p>
    <p>Horas Extras (50%): ${extras50.value} </p>
    <p>Horas Extras (100%): ${extras100.value} </p>
    ######################### HABERES #######################
    <p>Presentismo: ${porc_total} </p>
    ######################################################
    <p>Haberes Final: ${null}</p>
    ######################################################
    ######################################################
    ######################################################
    
      `;
  }
}
