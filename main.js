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
    ////////////////////////////////////////

    //////// Operacion Bonificacion/////////
    const bonificacion = parseInt(sueldobasico.value / 100) * 10;
    ////////////////////////////////////////

    /////// Operacion Horas Extra (50) /////////
    var horas50valor = extras50.value;
    const horas50cuenta = parseInt(sueldobasico.value / 100) * 50;
    const res_horas50 = horas50cuenta * horas50valor;
    ///////////////////////////////////////////////

    /////// Operacion Horas Extra (100) /////////
    var horas100valor = extras100.value;
    const horas100cuenta = parseInt(sueldobasico.value / 100) * 100;
    const res_horas100 = horas100cuenta * horas100valor;
    ///////////////////////////////////////////////

    const haberesfinal =
      Number(sueldobasico.value) +
      Number(porc_total) +
      Number(bonificacion) +
      Number(res_horas50);
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
    <p>+ Presentismo: ${porc_total} </p>
    <p>+ Bonificacion: ${bonificacion} </p>
    <p>+ Horas Extras (50%): ${res_horas50} </p>
    <p>+ Horas Extras (100%): ${res_horas100} </p>
    ######################################################
    <p>Haberes Final: ${haberesfinal}</p>
    ######################################################
      `;
  }
}
