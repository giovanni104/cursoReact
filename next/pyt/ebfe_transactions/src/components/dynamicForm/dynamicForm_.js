export const formDataPropia = {
  tipo: "propias",
  cuentaDebitar: "",
  cuentaAcreditar: "",
  descuentaDebitar: "",
  descuentaAcreditar: "",
  codBanco: "",
  banco: "",
  monto: "",
  montoFormat: "",
  concepto: "",
  programar: false,
  programa: {
    frecuencia: "",
    frecuenciaType: "",
    anio: "",
    mes: "",
    dia: "",
    repetir: "0",
  },
  monedaUsd: false,
  NroOperacion: "",
  errorLvl: "",
  responseDesc: "",
  monedaDebitar: "",
};

export const formDataPropiaReset = {
  tipo: "propias",
  cuentaDebitar: "",
  cuentaAcreditar: "",
  descuentaDebitar: "",
  descuentaAcreditar: "",
  monto: "",
  montoFormat: "",
  concepto: "",
  codBanco: "",
  banco: "",
  programar: false,
  programa: {
    frecuencia: "",
    frecuenciaType: "",
    anio: "",
    mes: "",
    dia: "",
    repetir: "0",
  },
  monedaUsd: false,
  monedaDebitar: "",
  NroOperacion: "",
  errorLvl: "",
  responseDesc: "",
};

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

export const formDataTerceros = {
  tipo: "terceros",
  index: "",
  cuentaDebitar: "",
  cuentaDebitarSaldoDisponible: "",
  descuentaDebitar: "",
  beneficiario: "",
  beneficiarioCuenta: "",
  beneficiarioBanco: "",
  beneficiarioTipoCuenta: "",
  beneficiarioCodBanco: "",
  descuentaAcreditar: "",
  noregistrado: false,
  instrumento: {
    tipo: "",
    telefono: "",
    bancodestino: "",

    tipodoc: "",
    numdoc: "",
    nombre: "",
    numcuenta: "",
  },
  monto: "",
  montoFormat: "",
  concepto: "",
  currency: "BS",
  registrar: false,
  registro: {
    tipo: "",
    alias: "",
    beneficiario: "",
  },
  programar: false,
  programa: {
    frecuencia: "",
    frecuenciaType: "",
    anio: "",
    mes: "",
    dia: "",
  },
  tasabcv: "0",
  montorecibir: "0",
  monedaDebitar: "",
  NroOperacion: "",
  errorLvl: "",
  responseDesc: "",
};

export const formDataTercerosReset = {
  tipo: "terceros",
  index: "",
  cuentaDebitar: "",
  cuentaDebitarSaldoDisponible: "",
  descuentaDebitar: "",
  beneficiario: "",
  beneficiarioCuenta: "",
  beneficiarioBanco: "",
  beneficiarioTipoCuenta: "",
  beneficiarioCodBanco: "",
  descuentaAcreditar: "",
  noregistrado: false,
  instrumento: {
    tipo: "",
    telefono: "",
    bancodestino: "",

    tipodoc: "",
    numdoc: "",
    nombre: "",
    numcuenta: "",
  },
  monto: "",
  montoFormat: "",
  concepto: "",
  currency: "BS",
  registrar: false,
  registro: {
    tipo: "",
    alias: "",
    beneficiario: "",
  },
  programar: false,
  programa: {
    frecuencia: "",
    frecuenciaType: "",
    anio: "",
    mes: "",
    dia: "",
  },
  tasabcv: "0",
  montorecibir: "0",
  monedaDebitar: "",
  NroOperacion: "",
  errorLvl: "",
  responseDesc: "",
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
