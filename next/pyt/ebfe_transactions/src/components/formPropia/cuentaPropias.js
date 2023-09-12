export const conceptos = [
  { value: "Pagos", label: "Pagos" },
  { value: "Alquiler condominio", label: "Alquiler condominio" },
  { value: "Varios", label: "Varios" },
  { value: "Otros", label: "Otros" },
];

export const switchHandler = (
  event,
  setChecked,
  inputFields,
  setInputFields,
  index
) => {
  setChecked(event.target.checked);
  let valores = [...inputFields];
  valores[index].programar = event.target.checked;
  setInputFields(valores);
};

export const handleChangeUsd = (
  event,
  index,
  inputFields,
  setInputFields,
  setCheckedUsd
) => {
  let valores = [...inputFields];
  valores[index].monto = "";
  valores[index].monedaUsd = event.target.checked;

  setInputFields(valores);
  setCheckedUsd(event.target.checked);
};

export const filtroCuentasAcreditar = (
  valor,
  index,
  setCuentasAcreditar,
  setInputFields,
  inputFields,
  cuentasUser
) => {
  const cuentas = cuentasUser.filter(function (el) {
    return (
      el.numberAccount != valor &&
      (el.actionDebited == "C" || el.actionDebited == "A")
    );
  });

  setCuentasAcreditar(cuentas);
  let valores = [...inputFields];
  valores[index].cuentaAcreditar = "";
  setInputFields(valores);
};

export const valoresCuenta = (
  valor,
  id,
  inputFields,
  setInputFields,
  index,
  cuentasUser
) => {
  let valores = [...inputFields];
  let cuenta;
  switch (id) {
    case "cuentaDebitar":
      valores[index].cuentaDebitar = valor;
      cuenta = cuentasUser.filter(function (el) {
        return el.numberAccount == valor;
      });
      valores[index].descuentaDebitar =
        cuenta[0].descriptionAccount + " " + cuenta[0].numberMask;
      break;

    case "cuentaAcreditar":
      valores[index].cuentaAcreditar = valor;
      cuenta = cuentasUser.filter(function (el) {
        return el.numberAccount == valor;
      });
      valores[index].descuentaAcreditar =
        cuenta[0].descriptionAccount + " " + cuenta[0].numberMask;
      break;

    case "concepto":
      valores[index].concepto = valor;
      break;

    default:
      break;
  }

  setInputFields(valores);
};

export const infoIcon = `
  Programa operaciones con una fecha de
  ejecución futura. Además, podrás
  asignar una frecuencia y cantidad de 
  repeticiones.
  `;

export const infoTasa = `
  La operación será procesada en
  Bolívares según la tasa BCV de
  la fecha valor.
  `;

export const cargaCuentasDebitar = (
  setCuentasPropias,
  dataCuentas,
  setCuentasUser
) => {
  for (let i = 0; i <= dataCuentas.length - 1; i++) {
    let dato =
      dataCuentas[i].numberAccount.slice(0, 4) +
      "****" +
      dataCuentas[i].numberAccount.slice(-4);
    dataCuentas[i].numberMask = dato;
  }

  setCuentasUser(dataCuentas);

  const cuentas = dataCuentas.filter(function (el) {
    return el.actionDebited == "A" || el.actionDebited == "D";
  });
  setCuentasPropias(cuentas);
};
