import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./home.css";
import { DynamicForm } from "../dynamicForm/DynamicForm";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Home = () => {
  const formData = {
    cuenta: "",
    banco: "",
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
      dia: "",
    },
  };

  const [inputFields, setInputFields] = useState([formData]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push(JSON.parse(JSON.stringify(formData)));
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    console.log(index);
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
    <>
      <Box
        container="main"
        sx={{ width: "1054px", p: 3 }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <>
          <h1>Dynamic Form Fields in React</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              {inputFields.map((inputField, index) =>
                inputFields.length == 1 ? (
                  <DynamicForm
                    key={index}
                    handleInputChange={handleInputChange}
                    handleRemoveFields={handleRemoveFields}
                    handlePeriodoChange={handlePeriodoChange}
                    handleAddFields={handleAddFields}
                    inputField={inputField}
                    index={index}
                  />
                ) : (
                  <Accordion  
                    key={index}
                    sx={{
                      paddingBottom: "10px",
                      boxShadow: "none",
                       
                      
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel{index}a-content"
                      id="panel{index}a-header"
                      sx={{ background: "#F5F5F5" }}
                    >
                      <Typography
                        fontFamily={"Nunito"}
                        fontSize={"20px"}
                        color={"#DB0032"}
                        fontWeight={"700"}
                        fontStyle={"normal"}
                      >
                        Transacción {index + 1}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <DynamicForm
                        key={index}
                        handleInputChange={handleInputChange}
                        handleRemoveFields={handleRemoveFields}
                        handlePeriodoChange={handlePeriodoChange}
                        handleAddFields={handleAddFields}
                        inputField={inputField}
                        index={index}
                      />
                    </AccordionDetails>
                  </Accordion>
                )
              )}
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
