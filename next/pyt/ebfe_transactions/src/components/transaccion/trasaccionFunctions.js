import {
  formData,
  formDataTerceros,
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

export const handleAddFields = (inputFields, setInputFields, form) => {
  const values = [...inputFields];
  if (values.length < 5) {
    switch (form) {
      case "terceros":
        values.push(JSON.parse(JSON.stringify(formDataTerceros)));
        break;

      default:
        values.push(JSON.parse(JSON.stringify(formData)));
        break;
    }

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
  let values;
  if (type == "lista") {
    values = setChangeValuesLista([...inputFields], event, index, value);
  } else {
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
