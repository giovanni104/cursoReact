import css from "styled-jsx/css";

export default css.global`
  .atrasTab:hover {
    content: url("${process.env
      .NEXT_PUBLIC_BASIC_URL}tabs/volvertab2.svg") !important;
    width: "40px" !important;
    height: "40px" !important;
  }

  [data-tab-info] {
    display: none;
  }

  .active[data-tab-info] {
    display: block;
  }

  .tabs {
    font-family: "Nunito";
    font-style: normal;

    font-size: 14px;
    line-height: 22px;
    color: #2c2c2c;
    display: flex;
    margin: 0;
  }

  .tabs span {
    padding: 5px;
    border: 1px solid rgb(255, 255, 255);
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .act {
    cursor: pointer;
    color: #484848;
    border-bottom: 2px solid #e21050 !important;
    font-weight: 600;
  }

  .contenTabs {
    border-left: 2px solid white !important;
    height: 25px;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contenTabs2 {
    border-left: 2px solid #d9d9d9 !important;
    height: 25px;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contenedor {
    box-sizing: border-box;
    position: absolute;
    left: 136px;
    top: 50px;
    /* Grises/Blanco */
    background: #ffffff;

    padding-top: 20px;
    margin-bottom: 30px !important;
  }

  .contenedor2 {
    position: absolute;
    top: 120px;

    height: 100%;
    width: 100%;
  }
  .titulo {
    font-family: Nunito;
    font-size: 24px;
    font-weight: 800;
    line-height: 33px;
    letter-spacing: 0em;
    margin-left: 135px !important;
  }

  .subtitulo {
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    display: table;
    margin: 0 auto;
    color: #e21050;
  }
  .subtituloTerceros {
    font-family: Nunito;
    font-size: 24px;
    font-weight: 700;
    display: table;
    margin: 0 auto;
    color: #484848;
  }
  .ocultarT {
    display: none !important;
  }
`;
