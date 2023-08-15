import React, { useState } from "react";
import Box from "@mui/material/Box";
 
import { FormPay } from "../form/FormPay";
import { FormAccordion } from "../formAccordion/FormAccordion";
import { formData, setChangeValues } from "./dynamicForm_";


export const DynamicForm = () => {
  
  const [inputFields, setInputFields] = useState([JSON.parse(JSON.stringify(formData))]);

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
    <div  style={{marginTop:"40px"}}>
      <Box
        container="main"
        sx={{ width: "1054px", p: 3 }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <>
        
          <form onSubmit={handleSubmit}>
            <div  >
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
        <pre>{JSON.stringify(inputFields, null, 2)}</pre> */ }  
          </form>
        </>
      </Box>
      <pre>{JSON.stringify(inputFields, null, 2)}</pre>
    </div>
  );
};
