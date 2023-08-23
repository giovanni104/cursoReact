import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormPay } from "../form/FormPay";
import { FormAccordion } from "../formAccordion/FormAccordion";

export const DynamicForm = ({
  handleInputChange,
  handleRemoveFields,
  handlePeriodoChange,
  handleAddFields,
  inputFields,
  addVisible,
  setInputFields,
}) => {
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
          <form>
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
                    addVisible={addVisible}
                    setInputFields={setInputFields}
                    inputFields={inputFields}
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
                      addVisible={addVisible}
                      setInputFields={setInputFields}
                      inputFields={inputFields}
                    />
                  </FormAccordion>
                )
              )}
            </div>
          </form>

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
        </>
      </Box>
      {/*<pre>{JSON.stringify(inputFields, null, 2)}</pre>*/}

      <style jsx>{``}</style>
    </div>
  );
};