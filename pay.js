function printExternal(url) {
  var printWindow = window.open(
    url,
    "Print",
    "left=200, top=200, width=950, height=500, toolbar=0, resizable=0"
  );

  printWindow.addEventListener(
    "load",
    function () {
      if (Boolean(printWindow.chrome)) {
        printWindow.print();
        setTimeout(function () {
          printWindow.close();
        }, 500);
      } else {
        printWindow.print();
        printWindow.close();
      }
    },
    true
  );
}

const nombreget = localStorage.getItem("val_nombre");
const apeget = localStorage.getItem("val_apellido");
const cuilget = localStorage.getItem("val_cuil");
const legajoget = localStorage.getItem("val_legajo");
const categoriaget = localStorage.getItem("val_categoria");
const divisionget = localStorage.getItem("val_division");
const deptoget = localStorage.getItem("val_departamento");
const fechaingresoget = localStorage.getItem("val_fechaingreso");
const basicoget = localStorage.getItem("val_sbasico");
const productividadget = localStorage.getItem("val_productividad");
const presentismoget = localStorage.getItem("val_presentismo");
const antiguedadget = localStorage.getItem("val_antiguedad");
const feriadosget = localStorage.getItem("val_feriados");
const extras50get = localStorage.getItem("val_extras50");
const extras100get = localStorage.getItem("val_extras100");
const brutoget = localStorage.getItem("val_rembruta");
const sipaget = localStorage.getItem("val_sipa");
const inssjpget = localStorage.getItem("val_inssp");
const obrasocialget = localStorage.getItem("val_obrasocial");
const faltasget = localStorage.getItem("val_faltas");
const faltasjustiget = localStorage.getItem("val_faltasjusti");
const totaldeduccionesget = localStorage.getItem("val_deducciones");
const aguinaldoget = localStorage.getItem("val_aguinaldo");
const vacacionesget = localStorage.getItem("val_vacaciones");
const totalbonificacionget = localStorage.getItem("val_totalbonificacion");
const netaget = localStorage.getItem("val_remneta");

document.getElementById("pay-nombre").textContent = nombreget + " " + apeget;
document.getElementById("pay-cuil").textContent = cuilget;
document.getElementById("pay-legajo").textContent = legajoget;
document.getElementById("pay-categoria").textContent = categoriaget;
document.getElementById("pay-division").textContent = divisionget;
document.getElementById("pay-departamento").textContent = deptoget;
document.getElementById("pay-fechaingreso").textContent = fechaingresoget;
document.getElementById("pay-basico").textContent = basicoget;
document.getElementById("pay-productividad").textContent = productividadget;
document.getElementById("pay-presentismo").textContent = presentismoget;
document.getElementById("pay-antiguedad").textContent = antiguedadget;
document.getElementById("pay-feriados").textContent = feriadosget;
document.getElementById("pay-extras50").textContent = extras50get;
document.getElementById("pay-extras100").textContent = extras100get;
document.getElementById("pay-bruto").textContent = brutoget;
document.getElementById("pay-sipa").textContent = sipaget;
document.getElementById("pay-inssjp").textContent = inssjpget;
document.getElementById("pay-obrasocial").textContent = obrasocialget;
document.getElementById("pay-faltas").textContent = faltasget;
document.getElementById("pay-faltasinjus").textContent = faltasjustiget;
document.getElementById("pay-deducciones").textContent = totaldeduccionesget;
document.getElementById("pay-aguinaldo").textContent = aguinaldoget;
document.getElementById("pay-vacaciones").textContent = vacacionesget;
document.getElementById("pay-totalboni").textContent = totalbonificacionget;
document.getElementById("pay-neto").textContent = netaget;