import React, { useState } from "react";
import Box from "@mui/material/Box";
import { FormPropia } from "../formPropia/cpropia";
import { FormTerceros } from "../formTerceros/FormTerceros";
import { ProvidersTerceros } from "../../store/storeCuentasTerceros";
import { FormAccordion } from "../formAccordion/FormAccordion";

export const DynamicForm = ({
  handleInputChange,
  handleRemoveFields,
  handlePeriodoChange,
  handleAddFields,
  inputFields,
  addVisible,
  setInputFields,
  type,
  setBtnTranferir,
  handleSubtitulo,
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
              {type == "propia" &&
                inputFields.map(
                  (inputField, index) =>
                    inputFields.length == 1 && (
                      <FormPropia
                        key={index}
                        inputField={inputField}
                        index={index}
                        setInputFields={setInputFields}
                        inputFields={inputFields}
                        setBtnTranferir={setBtnTranferir}
                      />
                    )
                )}

              {type == "terceros" && (
                <ProvidersTerceros>
                  {inputFields.map((inputField, index) =>
                    inputFields.length == 1 ? (
                      <FormTerceros
                        key={index}
                        handleRemoveFields={handleRemoveFields}
                        handleAddFields={handleAddFields}
                        index={index}
                        addVisible={addVisible}
                        setInputFields={setInputFields}
                        inputFields={inputFields}
                        setBtnTranferir={setBtnTranferir}
                      />
                    ) : (
                      <FormAccordion key={index} index={index}>
                        <FormTerceros
                          key={index}
                          handleRemoveFields={handleRemoveFields}
                          handleAddFields={handleAddFields}
                          index={index}
                          addVisible={addVisible}
                          setInputFields={setInputFields}
                          inputFields={inputFields}
                          setBtnTranferir={setBtnTranferir}
                        />
                      </FormAccordion>
                    )
                  )}
                </ProvidersTerceros>
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
