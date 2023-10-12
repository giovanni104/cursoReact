import { useState } from "react";
import { separadoresMiles } from "../../utils/genericas";
export const useCuentaTerceros = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorNumcuenta, setErrorNumcuenta] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorTelefono, setErrorTelefono] = useState("");
  const [errorNumdoc, setErrorNumdoc] = useState("");
  const [errorAlias, setErrorAlias] = useState("");
  const [cuentasPropias, setCuentasPropias] = useState([]);
  const [cuentasUser, setCuentasUser] = useState([]);
  const [listBeneficiarios, setListBeneficiarios] = useState([]);
  const [dataBeneficiarios, setDataBeneficiarios] = useState([]);
  const [cuentasBeneficiario, setcuentasBeneficiario] = useState([]);
  const [saldoAcreditar, setSaldoAcreditar] = useState("");
  const clearDataNoRegistrado = (inputFields, setInputFields, index) => {
    let valores = [...inputFields];
    let atributos = [
      "tipo",
      "telefono",
      "bancodestino",
      "tipodoc",
      "numdoc",
      "nombre",
      "numcuenta",
    ];

    atributos.forEach(function (atributo) {
      valores[index]["instrumento"][atributo] = "";
    });
    setErrorNumcuenta("");
    setErrorNombre("");
    setErrorNumdoc("");
    setErrorTelefono("");
    setterDataFields(
      "beneficiario",
      false,
      null,
      inputFields,
      setInputFields,
      index
    );
    setterDataFields(
      "beneficiarioCuenta",
      "",
      null,
      inputFields,
      setInputFields,
      index
    );
    setterDataFields(
      "beneficiarioBanco",
      "",
      null,
      inputFields,
      setInputFields,
      index
    );

    setterDataFields(
      "registrar",
      false,
      null,
      inputFields,
      setInputFields,
      index
    );
    clearDataRegistrar(inputFields, setInputFields, index);

    setInputFields(valores);
  };

  const clearDataRegistrar = (inputFields, setInputFields, index) => {
    let valores = [...inputFields];
    let atributos = ["tipo", "alias", "beneficiario"];

    atributos.forEach(function (atributo) {
      valores[index]["registro"][atributo] = "";
    });
    setInputFields(valores);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const infoIcon = `
  Programa operaciones con una fecha de
  ejecución futura. Además, podrás
  asignar una frecuencia y cantidad de 
  repeticiones.
  `;

  const infoTasa = `
  La operación será procesada en
  Bolívares según la tasa BCV de
  la fecha valor.
  `;

  const validacionFormulario = (setBtnTranferir, inputFields, index) => {
    setBtnTranferir(true);

    let valores = [...inputFields];

    if (
      valores[index].cuentaDebitar != "" &&
      valores[index].monto != "" &&
      valores[index].concepto != ""
    ) {
      setBtnTranferir(false);

      if (valores[index].noregistrado == true) {
        setBtnTranferir(true);

        if (valores[index].instrumento.tipo == "") {
          setBtnTranferir(true);
        } else {
          setBtnTranferir(true);
          switch (valores[index].instrumento.tipo) {
            case "cuenta":
              if (valores[index].instrumento.numcuenta != "") {
                setBtnTranferir(false);
              }
              break;
            case "telefono":
              if (
                valores[index].instrumento.telefono != "" &&
                valores[index].instrumento.bancodestino != "" &&
                valores[index].instrumento.tipodoc != "" &&
                valores[index].instrumento.numdoc != "" &&
                valores[index].instrumento.nombre != ""
              ) {
                setBtnTranferir(false);
              }
              break;
            default:
              console.log("3");
              setBtnTranferir(true);
              break;
          }
        }

        if (valores[index].registrar == true) {
          setBtnTranferir(true);

          switch (valores[index].registro.tipo) {
            case "cuenta":
              if (valores[index].registro.beneficiario != "") {
                setBtnTranferir(false);
              }
              break;
            case "telefono":
              if (valores[index].registro.alias != "") {
                setBtnTranferir(false);
              }
              break;
            default:
              setBtnTranferir(true);
              break;
          }
        }
      } else {
        if (valores[index].beneficiarioCuenta != "") {
          setBtnTranferir(false);
        }
      }

      if (valores[index].programar == true) {
        setBtnTranferir(false);
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
      }

      if (
        errorNumcuenta != "" ||
        errorNombre != "" ||
        errorTelefono != "" ||
        errorNumdoc != "" ||
        errorAlias != ""
      ) {
        setBtnTranferir(true);
      }
    }
  };

  const setterDataFields = (
    atributo,
    valor,
    atributo2,
    inputFields,
    setInputFields,
    index
  ) => {
    let valores = [...inputFields];
    if (atributo2 == null || atributo2 == "" || atributo2 == undefined) {
      valores[index][atributo] = valor;
    } else {
      valores[index][atributo][atributo2] = valor;
    }

    setInputFields(valores);
  };

  const cargaCuentasDebitar = (dataCuentas, currency) => {
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
      return (
        (el.actionDebited == "A" || el.actionDebited == "D") &&
        el.currency == currency
      );
    });
    setCuentasPropias(cuentas);
  };

  const filtroCuentas = (currency) => {
    const cuentas = cuentasUser.filter(function (el) {
      return (
        (el.actionDebited == "A" || el.actionDebited == "D") &&
        el.currency == currency
      );
    });
    setCuentasPropias(cuentas);
  };

  const datosBeneficiario = (data) => {
    let dataBeneficiarios = data.map(function (beneficiario) {
      return beneficiario.nameOwner;
    });
    setDataBeneficiarios(data);

    setListBeneficiarios(dataBeneficiarios);
  };

  const filterCuentasBeneficiario = (beneficiario) => {
    if (beneficiario != "") {
      const cuentas = dataBeneficiarios.filter(function (el) {
        return el.nameOwner == beneficiario;
      });

      setcuentasBeneficiario(cuentas[0].accounts);
    } else {
      setcuentasBeneficiario([]);
    }
  };

  const valoresCuenta = (valor, id, index, inputFields, setInputFields) => {
    let valores = [...inputFields];
    let cuenta;
    switch (id) {
      case "cuentaDebitar":
        setSaldoAcreditar("");
        cuenta = cuentasUser.filter(function (el) {
          return el.numberAccount == valor;
        });

        if (cuenta.length > 0) {
          valores[index].descuentaDebitar =
            cuenta[0].descriptionAccount + " " + cuenta[0].numberMask;
          setSaldoAcreditar(cuenta[0].balanceMask);
          valores[index].monedaDebitar = cuenta[0].currency;
        }
        break;

      case "cuentaAcreditar":
        setSaldoAcreditar("");
        valores[index].cuentaAcreditar = valor;
        cuenta = cuentasUser.filter(function (el) {
          return el.numberAccount == valor;
        });

        if (cuenta.length > 0) {
          valores[index].descuentaAcreditar =
            cuenta[0].descriptionAccount + " " + cuenta[0].numberMask;

          setSaldoAcreditar(cuenta[0].balanceMask);
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

  return {
    openModal,
    setOpenModal,
    errorNumcuenta,
    setErrorNumcuenta,
    errorNombre,
    setErrorNombre,
    errorTelefono,
    setErrorTelefono,
    errorNumdoc,
    setErrorNumdoc,
    errorAlias,
    setErrorAlias,
    infoIcon,
    handleClose,
    clearDataNoRegistrado,
    clearDataRegistrar,
    infoTasa,
    validacionFormulario,
    setterDataFields,
    cargaCuentasDebitar,
    cuentasPropias,
    filtroCuentas,
    datosBeneficiario,
    listBeneficiarios,
    filterCuentasBeneficiario,
    cuentasBeneficiario,
    saldoAcreditar,
    valoresCuenta,
  };
};
