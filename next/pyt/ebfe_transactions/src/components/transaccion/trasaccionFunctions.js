import {
  formData,
  setChangeValues,
  setChangeValuesLista,
} from "../dynamicForm/dynamicForm_";

export const removeTabActive = async () => {
  const tabs = document.querySelectorAll("[data-tab-value]");
  tabs.forEach((tab) => {
    const target = document.querySelector(tab.dataset.tabValue + "h");
    target.classList.remove("act");
  });
};

export const handleAddFields = (inputFields, setInputFields) => {
  const values = [...inputFields];
  if (values.length < 5) {
    values.push(JSON.parse(JSON.stringify(formData)));

    setInputFields(values);
  }
};

export const handleRemoveFields = (index, inputFields, setInputFields) => {
  const values = [...inputFields];
  values.splice(index, 1);
  setInputFields(values);
};

export const handleInputChange = (
  index,
  event,
  inputFields,
  setInputFields,
  type,
  value
) => {
  console.log(event);
  let values;
  if (type == "lista") {
    console.log(1);
    values = setChangeValuesLista([...inputFields], event, index, value);
  } else {
    console.log(2);
    values = setChangeValues([...inputFields], event.target.name, index, event);
  }

  setInputFields(values);
};

export const handlePeriodoChange = (
  index,
  datos,
  inputFields,
  setInputFields
) => {
  const values = [...inputFields];
  values[index].programa = datos;
  setInputFields(values);
};

export const handleSubmit = (inputFields, setInputFields) => {
  e.preventDefault();
  // handle form submission here
  alert(JSON.stringify(inputFields, null, 2));
};
