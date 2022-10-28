function passvalues() {
  var nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido");
  const cuil = document.getElementById("cuil");
  const legajo = document.getElementById("legajo");
  const categoria = document.getElementById("categoria");
  const division = document.getElementById("division");
  const departamento = document.getElementById("departamento");
  const fechaingreso = document.getElementById("fechaingreso");
  const antiguedad = document.getElementById("antiguedad");
  const sueldobasico = document.getElementById("sueldobasico");
  const extras50 = document.getElementById("extras50");
  const extras100 = document.getElementById("extras100");
  const feriados = document.getElementById("feriados");
  const faltas = document.getElementById("faltas");

  localStorage.setItem("nombre-val", nombre);
  // const stored_name = localStorage.getItem("nombre-val");

  const slip_name = document.getElementById("pay-nombre");
  slip_name.innerHTML = `
  ${localStorage.getItem("nombre-val")}
  `;
}

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
