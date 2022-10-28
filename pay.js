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

document.getElementById("pay-nombre").textContent = nombreget + " " + apeget;
document.getElementById("pay-cuil").textContent = cuilget;
document.getElementById("pay-legajo").textContent = legajoget;
document.getElementById("pay-categoria").textContent = categoriaget;
document.getElementById("pay-division").textContent = divisionget;
document.getElementById("pay-departamento").textContent = deptoget;
document.getElementById("pay-fechaingreso").textContent = fechaingresoget;
