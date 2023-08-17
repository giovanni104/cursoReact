import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormPay } from "../form/FormPay";
import { FormAccordion } from "../formAccordion/FormAccordion";
import { formData, setChangeValues } from "./dynamicForm_";

export const DynamicForm = () => {
  const [inputFields, setInputFields] = useState([
    JSON.parse(JSON.stringify(formData)),
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    if (values.length < 5) {
      values.push(JSON.parse(JSON.stringify(formData)));

      setInputFields(values);
    }
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = setChangeValues([...inputFields], event.target.name, index);
    setInputFields(values);
  };

  const handlePeriodoChange = (index, datos) => {
    const values = [...inputFields];
    values[index].programa = datos;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert(JSON.stringify(inputFields, null, 2));
  };

  const resetForm = (e) => setInputFields([formData]);

  return (
    <div style={{ marginTop: "40px" }}>
      <Box
        container="main"
        sx={{ width: "1054px", p: 3 }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <>
          <form onSubmit={handleSubmit}>
            <div>
              {inputFields.map((inputField, index) =>
                inputFields.length == 1 ? (
                  <FormPay
                    key={index}
                    handleInputChange={handleInputChange}
                    handleRemoveFields={handleRemoveFields}
                    handlePeriodoChange={handlePeriodoChange}
                    handleAddFields={handleAddFields}
                    inputField={inputField}
                    index={index}
                  />
                ) : (
                  <FormAccordion key={index} index={index}>
                    <FormPay
                      key={index}
                      handleInputChange={handleInputChange}
                      handleRemoveFields={handleRemoveFields}
                      handlePeriodoChange={handlePeriodoChange}
                      handleAddFields={handleAddFields}
                      inputField={inputField}
                      index={index}
                    />
                  </FormAccordion>
                )
              )}
            </div>

            <div>
              <table style={{ margin: "0 auto", width: "40%" }}>
                <tbody>
                  <tr>
                    <td>Cuenta a debitar:</td>
                    <td>0102***3245</td>
                  </tr>
                  <tr>
                    <td>Cuenta a acreditar:</td>
                    <td>0102***4560</td>
                  </tr>
                  <tr>
                    <td>Monto:</td>
                    <td>2.237,32</td>
                  </tr>

                  <tr>
                    <td>Concepto:</td>
                    <td>Pago</td>
                  </tr>

                  <tr>
                    <td>Fecha valor:</td>
                    <td>24/01/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: "center", marginTop: "80px" }}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  borderRadius: "5px",
                  textTransform: "none",
                  width: "148px",
                  height: "38px",
                  padding: "8px, 32px, 8px, 32px",
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily: "Nunito",
                  backgroundColor: "#0067B1",
                  "&:hover": {
                    backgroundColor: "#004A72",
                  },
                }}
              >
                Continuar
              </Button>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  borderRadius: "5px",
                  textTransform: "none",
                  width: "148px",
                  height: "38px",
                  marginLeft: "10px",
                  fontSize: "16px",
                  border: "2px solid #0067B1",
                  fontWeight: "700",
                  fontFamily: "Nunito",
                  color: "#4A96D2",
                  backgroundColor: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#4A96D2",
                    color: "#FFFFFF",
                    border: "2px solid #4A96D2",
                  },
                }}
              >
                Limpiar
              </Button>
            </div>
            {/*<div className="submit-button">
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
        <pre>{JSON.stringify(inputFields, null, 2)}</pre> */}
          </form>
        </>
      </Box>
      {/*<pre>{JSON.stringify(inputFields, null, 2)}</pre>*/}

      <style jsx>{`
        td {
          font-family: "Nunito";
          font-weight: 800;
          font-size: 16px;
          color: #3f3c37;
        }
        tr {
          height: 50px;
        }
      `}</style>
    </div>
  );
};
