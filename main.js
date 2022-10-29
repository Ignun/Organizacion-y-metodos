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
const faltasjusti = document.getElementById("faltasjustificadas");
///////

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    //Tecla enter
    generar();
  }
});

function generar() {
  let conf = confirm("Esta seguro de los datos ingresados?");
  if (conf == true) {
    const valor_hora = parseInt(sueldobasico.value / 176);
    //////// Operacion Productividad /////////
    const res_productividad = parseInt(sueldobasico.value / 100) * 10;

    //////// Operacion Presentismo/////////
    if (faltas.value >= 5) {
      var porc_suma = 0; //valor anterior: 25
    } else {
      var porc_suma = 25 - faltas.value * 5;
    }
    const res_presentismo = parseInt(sueldobasico.value / 100) * porc_suma;

    //////// Operacion Antiguedad /////////
    const cuenta_antiguedad =
      parseInt(sueldobasico.value / 100) * antiguedad.value;
    const res_antiguedad = cuenta_antiguedad * antiguedad.value;

    //////// Operacion Feriados /////////
    const res_feriado = parseInt(feriados.value) * valor_hora * 8;

    /////// Operacion Horas Extra (50) /////////
    const res_horas50 = Number(valor_hora / 2) * extras50.value;
    // const res_horas50 = horas50cuenta * horas50valor;

    /////// Operacion Horas Extra (100) /////////
    const res_horas100 = Number(valor_hora) * extras100.value;

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
      Number(res_feriado) +
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
    <li>$ ${Intl.NumberFormat().format(valor_hora)}</li>
    <li>$ ${Intl.NumberFormat().format(sueldobasico.value)} </li>
    <li>+ $${Intl.NumberFormat().format(res_productividad)}</li>
    <li>+ $${Intl.NumberFormat().format(res_presentismo)}</li>
    <li>+ $${Intl.NumberFormat().format(res_antiguedad)}</li>
    <li>+ $${Intl.NumberFormat().format(res_feriado)}</li>
    <li>+ $${Intl.NumberFormat().format(res_horas50)}</li>
    <li>+ $${Intl.NumberFormat().format(res_horas100)}</li>
    </ul>
    </ul>

    <ul class="gap-4">
    <ul class="italic px-2 py-1 border-b-2 min-w-fit text-right">
    <li>- $${Intl.NumberFormat().format(res_sipa)}</li>
    <li>- $${Intl.NumberFormat().format(res_inssjp)}</li>
    <li>- $${Intl.NumberFormat().format(res_obrasocial)}</li>
    <li> ${Intl.NumberFormat().format(faltas.value)}</li>
    <li> ${Intl.NumberFormat().format(faltasjusti.value)}</li>
    </ul>
    </ul>

    <ul class="gap-4">
    <ul class="italic px-2 py-1 border-b-2 min-w-fit text-right">
    <li>+ $${Intl.NumberFormat().format(res_aguinaldo)}</li>
    <li>+ $${Intl.NumberFormat().format(res_vacaciones)}</li>
    </ul>
    </ul>

    <ul class="gap-4">
    <ul class="italic px-2 py-1 min-w-fit text-right">
    <li>$${Intl.NumberFormat().format(remuneracionbruta)}</li>
    <li>$${Intl.NumberFormat().format(totaldeducciones)}</li>
    <li>$${Intl.NumberFormat().format(remuneracion_neta)}</li>
    </ul>
    </ul>

      `;

    const resbut = document.getElementById("blankbut");
    resbut.innerHTML = `

      <form action="payslip.html">
      <button
        type="submit"
        class="rounded-md bg-[#419D78] h-10 w-full mt-4 text-white italic hover:bg-[#3C906E] active:bg-[#368163] px-2"
      >
        Version para Imprimir
      </button>
      </form>
      `;
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombrevalue = nombre.value;
  const apellidovalue = apellido.value;
  const cuilvalue = cuil.value;
  const legajovalue = legajo.value;
  const categoriavalue = categoria.value;
  const divisionvalue = division.value;
  const departamentovalue = departamento.value;
  const fechaingresovalue = fechaingreso.value;
  const basicovalue = sueldobasico.value;
  const productividadvalue = res_productividad.value;
  const presentismovalue = res_presentismo.value;
  const antiguedadvalue = antiguedad.value;
  const feriadosvalue = feriados.value;
  const extras50value = res_horas50.value;
  const extras100value = res_horas100.value;
  const sipavalue = res_sipa.value;
  const inssjpvalue = res_inssjp.value;
  const obrasocialvalue = res_obrasocial.value;
  const faltasvalue = faltas.value;
  const faltasjustivalue = faltasjusti.value;
  const aguinaldovalue = res_aguinaldo.value;
  const vacacionesvalue = res_vacaciones.value;
  const rembrutavalue = remuneracionbruta.value;
  const deduccionesvalue = totaldeducciones.value;
  const remnetavalue = remuneracion_neta.value;
  localStorage.setItem("val_nombre", nombrevalue);
  localStorage.setItem("val_apellido", apellidovalue);
  localStorage.setItem("val_cuil", cuilvalue);
  localStorage.setItem("val_legajo", legajovalue);
  localStorage.setItem("val_categoria", categoriavalue);
  localStorage.setItem("val_division", divisionvalue);
  localStorage.setItem("val_departamento", departamentovalue);
  localStorage.setItem("val_fechaingreso", fechaingresovalue);
  localStorage.setItem("val_sbasico", basicovalue);
  localStorage.setItem("val_productividad", productividadvalue);
  localStorage.setItem("val_presentismo", presentismovalue);
  localStorage.setItem("val_antiguedad", antiguedadvalue);
  localStorage.setItem("val_feriados", feriadosvalue);
  localStorage.setItem("val_extras50", extras50value);
  localStorage.setItem("val_extras100", extras100value);
  localStorage.setItem("val_sipa", sipavalue);
  localStorage.setItem("val_inssjp", inssjpvalue);
  localStorage.setItem("val_obrasocial", obrasocialvalue);
  localStorage.setItem("val_faltas", faltasvalue);
  localStorage.setItem("val_faltasjusti", faltasjustivalue);
  localStorage.setItem("val_aguinaldo", aguinaldovalue);
  localStorage.setItem("val_vacaciones", vacacionesvalue);
  localStorage.setItem("val_rembruta", rembrutavalue);
  localStorage.setItem("val_deducciones", deduccionesvalue);
  localStorage.setItem("val_remneta", remnetavalue);

  window.location.href = "payslip.html";
});
