export const formatDate = (inputDate) => {
  let date, month, year;
  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();
  date = date.toString().padStart(2, "0");
  month = month.toString().padStart(2, "0");
  return `${date}/${month}/${year}`;
};

export const patterns = {
  name: /^[A-Za-z ]+$/i,
  mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  phone: /^[0-9]+$/i,
  selDataInfo: /^[A-Za-z]+$/i,
  numDoc: /^[0-9]+$/i,
  numToken: /^[0-9]+$/i,
  passw: /^[a-zA-Z0-9.!#$%@]+$/i,
  question: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+$/i,
  usuarioUnico: /^[a-zA-Z0-9]+$/i,
  monto: /^[0-9]+$/i,
};

export const separadoresMiles = (numberoCompleto) => {
  let separadorMil = ".";
  let separadorDecimal = ",";

  let numero = new String(numberoCompleto);

  numero = numero.replace(/\./g, ",");

  let numeroSize = numero.length;
  let arrayNumero = numero.split(separadorDecimal);

  let number = new String(arrayNumero[0]);
  let result = "";

  if (numero != null) {
    while (number.length > 3) {
      result = separadorMil + number.substr(number.length - 3) + result;
      number = number.substring(0, number.length - 3);
    }

    if (arrayNumero.length == 1) {
      result = number + result;
    }
    if (arrayNumero.length > 1) {
      result = number + result + separadorDecimal + arrayNumero[1];
    }

    return result;
  }
};

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
