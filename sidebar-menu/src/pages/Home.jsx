import React, { useState, Fragment } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./home.css";

export const Home = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: "Gastos personales 0102***3245", lastName: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ firstName: "", lastName: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "firstName") {
      values[index].firstName = event.target.value;
    } else {
      values[index].lastName = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert(JSON.stringify(inputFields, null, 2));
  };

  const resetForm = (e) => setInputFields([{ firstName: "", lastName: "" }]);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
                  id="firstName"
                  name="firstName"
                  placeholder="Buscar gifs"
                />
                <label>Saldo disponible: Bs. 4.325,45</label>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="divInputs">
                <select name="cars" id="cars" className="selectText">
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
                <input type="checkbox" name="cb-autos" value="gusta" />{" "}
                <label>Beneficiario no registrado</label>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div style={{width: '86px', float:'left'}}>
                <select name="tipo" id="tipo" className="selectTextBeneficiario">
                <option disabled selected>Tipo</option>
                  <option value="V">V</option>
                  <option value="E">E</option>
                  <option value="P">P</option>
                  <option value="J">J</option>
                </select>
              </div>

              <div style={{width: '291px' , float:'left' , marginLeft:'23px'}}>
                <input
                  type="text"
                  className="inputTextBeneficiario"
                  id="firstName"
                  name="firstName"
                  placeholder="hhh"
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <>
          <h1>Dynamic Form Fields in React</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              {inputFields.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                  <div className="divInputs">
                    <input
                      type="text"
                      className="inputText"
                      id="firstName"
                      name="firstName"
                      placeholder="Buscar gifs"
                      value={inputField.firstName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <label htmlFor="firstName">
                      Saldo disponible: Bs. 4.325,45
                    </label>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={inputField.lastName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="form-group col-sm-2">
                    <button
                      className="btn btn-link"
                      type="button"
                      disabled={index === 0}
                      onClick={() => handleRemoveFields(index)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleAddFields()}
                    >
                      +
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
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
