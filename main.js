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
    //////// Operacion Productividad /////////
    const res_productividad = parseInt(sueldobasico.value / 100) * 10;

    //////// Operacion Presentismo/////////
    if (faltas.value >= 5) {
      var porc_suma = 25;
    } else {
      var porc_suma = 25 - faltas.value * 5;
    }
    const res_presentismo = parseInt(sueldobasico.value / 100) * porc_suma;

    //////// Operacion Antiguedad /////////
    const cuenta_antiguedad =
      parseInt(sueldobasico.value / 100) * antiguedad.value;
    const res_antiguedad = cuenta_antiguedad * antiguedad.value;

    //////// Operacion Feriados /////////

    /////// Operacion Horas Extra (50) /////////
    var horas50valor = extras50.value;
    const horas50cuenta = parseInt(sueldobasico.value / 100) * 50;
    const res_horas50 = horas50cuenta * horas50valor;

    /////// Operacion Horas Extra (100) /////////
    var horas100valor = extras100.value;
    const horas100cuenta = parseInt(sueldobasico.value / 100) * 100;
    const res_horas100 = horas100cuenta * horas100valor;

    /////////// Operacion Faltas ///////////////

    /////////// Operacion Aguinaldo ///////////////
    const res_aguinaldo =
      parseInt(
        Number(res_presentismo) +
          Number(res_productividad) +
          Number(res_horas50) +
          Number(res_horas100)
      ) / 2;

    /////////// Operacion Vacaciones ///////////////
    const res_vacaciones =
      parseInt(
        Number(sueldobasico.value) +
          Number(res_presentismo) +
          Number(res_productividad)
      ) / 2;

    /////////// Operacion Remuneracion Bruta ///////////////
    const remuneracionbruta =
      Number(sueldobasico.value) +
      Number(res_productividad) +
      Number(res_presentismo) +
      Number(res_antiguedad) +
      Number(res_horas50) +
      Number(res_horas100);

    /////////// Operacion SIPA ///////////////
    const res_sipa = parseInt(remuneracionbruta / 100) * 11;

    /////////// Operacion INSSJP ////////////////////
    const res_inssjp = parseInt(remuneracionbruta / 100) * 3;

    /////////// Operacion Obra Social ///////////////
    const res_obrasocial = parseInt(remuneracionbruta / 100) * 3;

    /////////// Operacion Total Deducciones ///////////////
    const totaldeducciones =
      Number(res_sipa) + Number(res_inssjp) + Number(res_obrasocial);

    /////////// Operacion Total Deducciones ///////////////
    const remuneracion_neta = remuneracionbruta - totaldeducciones;
    ///////////////////////////////////////////////

    const resultText = document.getElementById("blankid");
    resultText.innerHTML = `
    <ul class="gap-4">
    <ul class="italic px-2 py-1 border-b-2 min-w-fit text-right">
    <li>${nombre.value}</li>
    <li>${apellido.value}</li>
    <li>${cuil.value}</li>
    <li>${legajo.value}</li>
    <li>${categoria.value}</li>
    <li>${division.value}</li>
    <li>${departamento.value}</li>
    <li>${fechaingreso.value}</li>
    </ul>
    </ul>

    <ul class="gap-4">
    <ul class="italic px-2 py-1 border-b-2 min-w-fit text-right">
    <li>$${Intl.NumberFormat().format(sueldobasico.value)} </li>
    <li>+ $${Intl.NumberFormat().format(res_productividad)}</li>
    <li>+ $${Intl.NumberFormat().format(res_presentismo)}</li>
    <li>+ $${Intl.NumberFormat().format(res_antiguedad)}</li>
    <li>+ $${null}</li>
    <li>+ $${Intl.NumberFormat().format(res_horas50)}</li>
    <li>+ $${Intl.NumberFormat().format(res_horas100)}</li>
    </ul>
    </ul>

    <ul class="gap-4">
    <ul class="italic px-2 py-1 border-b-2 min-w-fit text-right">
    <li>- $${Intl.NumberFormat().format(res_sipa)}</li>
    <li>- $${Intl.NumberFormat().format(res_inssjp)}</li>
    <li>- $${Intl.NumberFormat().format(res_obrasocial)}</li>
    <li>${null}</li>
    </ul>
    </ul>

    <ul class="gap-4">
    <ul class="italic px-2 py-1 border-b-2 min-w-fit text-right">
    <li>+ $${Intl.NumberFormat().format(res_aguinaldo)}</li>
    <li>+ $${Intl.NumberFormat().format(res_vacaciones)}</li>
    </ul>
    </ul>

    <ul class="gap-4">
    <ul class="italic px-2 py-1 border-b-2 min-w-fit text-right">
    <li>$${Intl.NumberFormat().format(remuneracionbruta)}</li>
    <li>$${Intl.NumberFormat().format(totaldeducciones)}</li>
    <li>$${Intl.NumberFormat().format(remuneracion_neta)}</li>
    </ul>
    </ul>
      `;
  }
}
