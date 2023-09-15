import css from "styled-jsx/css";

export default css.global`
  .deleteRow:hover {
    content: url("${process.env
      .NEXT_PUBLIC_BASIC_URL}/deleteHover.svg") !important;
    width: "36px" !important;
    height: "36px" !important;
  }

  .resumenTable td:first-child {
    border-left-style: solid;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .resumenTable td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }

  .resumenTable th:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .resumenTable th:last-child {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }

  .fontBody {
    font-family: Nunito;
    font-size: 12px !important;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }

  .fontTitle {
    font-family: Nunito;
    font-size: 14px !important;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
