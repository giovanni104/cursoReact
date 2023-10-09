import { separadoresMiles } from "../../utils/genericas";

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
  index,
  setCheckedUsd
) => {
  setChecked(event.target.checked);
  let valores = [...inputFields];
  valores[index].programar = event.target.checked;
  setInputFields(valores);

  if (!event.target.checked) {
    setCheckedUsd(false);
    valores[index].monto = "";
    valores[index].monedaUsd = false;
  }
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
      valor != "" &&
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
  cuentasUser,
  setSaldo
) => {
  let valores = [...inputFields];
  let cuenta;
  switch (id) {
    case "cuentaDebitar":
      valores[index].cuentaDebitar = valor;
      valores[index].descuentaDebitar = "";
      valores[index].monedaDebitar = "";
      setSaldo("");
      cuenta = cuentasUser.filter(function (el) {
        return el.numberAccount == valor;
      });

      if (cuenta.length > 0) {
        valores[index].descuentaDebitar =
          cuenta[0].descriptionAccount + " " + cuenta[0].numberMask;
        setSaldo(cuenta[0].balanceMask);
        valores[index].monedaDebitar = cuenta[0].currency;
      }
      break;

    case "cuentaAcreditar":
      setSaldo("");
      valores[index].cuentaAcreditar = valor;
      cuenta = cuentasUser.filter(function (el) {
        return el.numberAccount == valor;
      });

      if (cuenta.length > 0) {
        valores[index].descuentaAcreditar =
          cuenta[0].descriptionAccount + " " + cuenta[0].numberMask;

        setSaldo(cuenta[0].balanceMask);
      }
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
    dataCuentas[i].balanceMask = separadoresMiles(
      dataCuentas[i].balanceAvailable
    );
  }

  setCuentasUser(dataCuentas);

  const cuentas = dataCuentas.filter(function (el) {
    return el.actionDebited == "A" || el.actionDebited == "D";
  });
  setCuentasPropias(cuentas);
};

export const validacionFormulario = (setBtnTranferir, inputFields, index) => {
  setBtnTranferir(true);

  let valores = [...inputFields];

  if (
    valores[index].cuentaDebitar != "" &&
    valores[index].cuentaAcreditar != "" &&
    valores[index].monto != "" &&
    valores[index].concepto != ""
  ) {
    if (valores[index].programar == true) {
      if (
        valores[index].programa.frecuencia != "" &&
        valores[index].programa.anio != "" &&
        valores[index].programa.mes != "" &&
        valores[index].programa.dia != ""
      ) {
        if (valores[index].programa.frecuencia == "Una vez") {
          setBtnTranferir(false);
        } else {
          if (valores[index].programa.repetir != "") {
            setBtnTranferir(false);
          }
        }
      }
    } else {
      setBtnTranferir(false);
    }
  }
};
