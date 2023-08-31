export const formData = {
  cuenta: "",
  banco: "",
  tipodoc: "",
  numdoc: "",
  telefono: "",
  monto: "",
  concepto: "",
  fecha: "",
  alias: "",
  checkbox: false,
  programa: {
    frecuencia: "",
    anio: "",
    mes: "",
    dia: "",
  },
};
export const formDataReset = {
  cuenta: "",
  banco: "",
  tipodoc: "",
  numdoc: "",
  telefono: "",
  monto: "",
  concepto: "",
  fecha: "",
  alias: "",
  checkbox: false,
  programa: {
    frecuencia: "",
    anio: "",
    mes: "",
    dia: "",
  },
};

export const setChangeValues = (values, name, index, event) => {
  switch (name) {
    case "cuenta":
      values[index].cuenta = event.target.value;
      break;
    case "banco":
      values[index].banco = event.target.value;
      break;
    case "tipodoc":
      values[index].tipodoc = event.target.value;
      break;
    case "numdoc":
      values[index].numdoc = event.target.value;
      break;
    case "telefono":
      values[index].telefono = event.target.value;
      break;
    case "monto":
      values[index].monto = event.target.value;
      break;
    case "concepto":
      values[index].concepto = event.target.value;
      break;
    case "fecha":
      values[index].fecha = event.target.value;
      break;
    case "alias":
      values[index].firstName = event.target.value;
      break;
    case "checkbox":
      values[index].checkbox = event.target.checked;
      break;
  }

  return values;
};

export const setChangeValuesLista = (values, name, index, value) => {
  switch (name) {
    case "cuenta":
      values[index].cuenta = value;
      break;
    case "banco":
      values[index].banco = value;
      break;
    case "tipodoc":
      values[index].tipodoc = value;
      break;
    case "numdoc":
      values[index].numdoc = value;
      break;
    case "telefono":
      values[index].telefono = value;
      break;
    case "monto":
      values[index].monto = value;
      break;
    case "concepto":
      values[index].concepto = value;
      break;
    case "fecha":
      values[index].fecha = value;
      break;
    case "alias":
      values[index].firstName = value;
      break;
    case "checkbox":
      values[index].checkbox = value;
      break;
  }

  return values;
};
