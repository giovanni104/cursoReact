import css from "styled-jsx/css";

export default css.global`
  .imgCurrencyBS:hover {
    content: url("${process.env
      .NEXT_PUBLIC_BASIC_URL}moneda/hoverBs.svg") !important;
  }
  .imgCurrencyEUR:hover {
    content: url("${process.env
      .NEXT_PUBLIC_BASIC_URL}moneda/hoverEUR.svg") !important;
  }

  .imgCurrencyUSD:hover {
    content: url("${process.env
      .NEXT_PUBLIC_BASIC_URL}moneda/hoverUSD.svg") !important;
  }

  .lblNombre {
    font-family: Nunito !important;
    font-size: 20px !important;
    font-weight: 700 !important;
  }

  .lbltasa {
    font-family: Nunito;
    font-size: 12px;

    color: #7b7b7b;
  }

  .inputText {
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px 10px 20px;
    gap: 10px;
    width: 400px;
    height: 50px;
    left: 98px;
    top: 251px;
    /* Grises/Blanco */
    background: #ffffff;
    border: 1px solid rgba(123, 123, 123, 0.5);
    border-radius: 4px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #7b7b7b;
  }

  .divInputs {
    text-align: left;
    width: 401px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }

  .divCheckbox {
    text-align: left;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 320px;
    height: 22px;
    left: 597px;
    top: 207px;

    color: #7b7b7b;
  }

  .divBloque {
    width: 862px;
    /* Grises/Blanco */
    background: #ffffff;

    margin: 0 auto;
    margin-top: 10px;
  }

  .divTrash {
    width: 100%;
    float: right;
    text-align: right;
  }

  .selectText {
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px 10px 20px;
    gap: 20px;
    width: 400px;
    height: 50px;
    left: 558px;
    top: 135px;
    /* Grises/Blanco */
    background: #ffffff;
    border: 1px solid rgba(123, 123, 123, 0.5);
    border-radius: 4px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    display: flex;
    align-items: center;
    color: #7b7b7b;

    /* Arrow */
    appearance: none;
    background-image: url("${process.env
      .NEXT_PUBLIC_BASIC_URL}forms/rowSelect.svg");
    background-repeat: no-repeat;
    background-position: right 30px top 50%;
    background-size: 0.65rem auto;
  }

  .selectTextBeneficiario {
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 10px 10px 10px 20px;
    gap: 20px;
    width: 86px;
    height: 50px;
    left: 96px;
    top: 248px;
    /* Grises/Blanco */
    background: #ffffff;
    border: 1px solid rgba(123, 123, 123, 0.5);
    border-radius: 4px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #7b7b7b;

    /* Arrow */
    appearance: none;
    background-image: url("${process.env
      .NEXT_PUBLIC_BASIC_URL}forms/rowSelect.svg");
    background-repeat: no-repeat;
    background-position: right 12px top 50%;
    background-size: 0.65rem auto;
  }

  .inputTextBeneficiario {
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: end;
    padding: 10px 10px 10px 20px;
    gap: 10px;
    height: 50px;
    width: 290px;
    left: 0px;
    top: 0px;
    /* Grises/Blanco */
    background: #ffffff;
    border: 1px solid rgba(123, 123, 123, 0.5);
    border-radius: 4px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    display: flex;

    color: #7b7b7b;
  }

  .trash img:hover {
    content: url("${process.env
      .NEXT_PUBLIC_BASIC_URL}trash_blanco.svg") !important;
  }
`;
