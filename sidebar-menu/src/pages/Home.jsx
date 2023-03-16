import React, { useState, Fragment } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formdate } from "../formDate/FormDate";

import "./home.css";
export const Home = () => {
  const formData = {
    cuenta: "Gastos personales 0102***3245",
    banco: "none",
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
      dia: ""
    },
  };

  const [inputFields, setInputFields] = useState([formData]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push(formData);
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    switch (event.target.name) {
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

    setInputFields(values);
  };


  const handlePeriodoChange = (index,datos) => {
    const values = [...inputFields];     
        values[index].programa = datos;
        setInputFields(values);
    }

  
 






  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert(JSON.stringify(inputFields, null, 2));
  };

  const resetForm = (e) => setInputFields([formData]);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <>
         
          <h1>Dynamic Form Fields in React</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              {inputFields.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                  <div className="divBloque">
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={6}>
                        <div className="divInputs">
                          <input
                            type="text"
                            className="inputText"
                            id="cuenta"
                            name="cuenta"
                            value={inputField.cuenta}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                          <label>Saldo disponible: Bs. 4.325,45</label>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="divInputs">
                          <select
                            name="banco"
                            id="banco"
                            className="selectText"
                            value={inputField.banco}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          >
                            <option value="none" disabled selected>
                              Pago frecuente
                            </option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="divInputs"></div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="divCheckbox">
                          <input
                            name="checkbox"
                            id="checkbox"
                            type="checkbox"
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />{" "}
                          <label>Beneficiario no registrado</label>
                        </div>
                      </Grid>

                      {inputField.checkbox && (
                        <>
                          <Grid item xs={6}>
                            <div style={{ width: "86px", float: "left" }}>
                              <select
                                defaultValue={"none"}
                                className="selectTextBeneficiario"
                                name="tipodoc"
                                id="tipodoc"
                                value={inputField.tipodoc}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              >
                                <option value="none" disabled>
                                  Tipo
                                </option>
                                <option value="V">V</option>
                                <option value="E">E</option>
                                <option value="P">P</option>
                                <option value="J">J</option>
                              </select>
                            </div>

                            <div
                              style={{
                                width: "291px",
                                float: "left",
                                marginLeft: "23px",
                              }}
                            >
                              <input
                                type="text"
                                className="inputTextBeneficiario"
                                id="numdoc"
                                name="numdoc"
                                placeholder="Documento"
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              />
                            </div>
                          </Grid>

                          <Grid item xs={6}>
                            <div className="divInputs">
                              <input
                                type="text"
                                className="inputText"
                                id="telefono"
                                name="telefono"
                                placeholder="Teléfono"
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              />
                            </div>
                          </Grid>
                        </>
                      )}
                      <Grid item xs={6}>
                        <div className="divInputs">
                          <input
                            type="text"
                            className="inputText"
                            id="monto"
                            name="monto"
                            placeholder="Monto(*)"
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="divInputs">
                          <select
                            name="concepto"
                            id="concepto"
                            className="selectText"
                            value={inputField.concepto}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          >
                            <option value="none" disabled selected>
                              Concepto(*)
                            </option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  <button
                    className="btn btn-link"
                    type="button"
                    disabled={index === 0}
                    onClick={() => handleRemoveFields(index)}
                  >
                    -
                  </button>

                  <Formdate handleInputChange={handlePeriodoChange} index={index} />
                </Fragment>
              ))}
            </div>

            <button
              className="btn btn-link"
              type="button"
              onClick={() => handleAddFields()}
            >
              +
            </button>
            <div className="submit-button">
              <button
                className="btn btn-primary mr-2"
                type="submit"
                onSubmit={handleSubmit}
              >
                Save
              </button>
              <button
                className="btn btn-secondary mr-2"
                type="reset"
                onClick={resetForm}
              >
                Reset Form
              </button>
            </div>
            <br />
            <pre>{JSON.stringify(inputFields, null, 2)}</pre>
          </form>
        </>
      </Box>
    </>
  );
};
