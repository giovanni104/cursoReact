import css from "styled-jsx/css";

export default css.global`
  .divInputs {
    width: 401px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }

  .divBloque {
    width: 862px;
    /* Grises/Blanco */
    background: #ffffff;

    margin: 0 auto;
    margin-top: 10px;
  }
  .infoIcon:hover {
    content: url("/_transaction/infoSelected.svg") !important;
    width: "24px" !important;
    height: "24px" !important;
  }
  .lblInfoSaldo {
    margin-left: 16px;
    font-family: Nunito;
    font-size: 12px !important;
    font-weight: 400 !important;
    line-height: 18px !important;
    letter-spacing: 0em !important;
  }
`;
