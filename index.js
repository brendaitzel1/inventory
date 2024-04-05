
function agregarFila(formulario) {
  // Obtener los datos del formulario
  const fecha = formulario.fecha.value;
  const departamento = formulario.departamento.value;
  const entrada = formulario.entrada.value;
  const salida = formulario.salida.value;
  const producto= formulario.producto.value;
  const precioun=formulario.precioun.value;

  // Validar los datos
  if (!fecha || !departamento || !entrada || !producto||!salida||!precioun) {
      alert("Todos los campos son obligatorios");
      return false;
  }

  // Crear una nueva fila
  const fila = document.createElement("tr");
  fila.innerHTML = `
      <td>${fecha}</td>
      <td>${departamento}</td>
      <td>${entrada}</td>
      <td>${salida}</td>
      <td>${producto}</td>
      <td>${precioun}</td>
  `;

  // Agregar la nueva fila a la tabla
  document.getElementById("tabla-registros").getElementsByTagName("tbody")[0].appendChild(fila);

  return false;
}


