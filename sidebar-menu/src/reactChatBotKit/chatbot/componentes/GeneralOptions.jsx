import Options from "./Options2";

const GeneralOptions = (props) => {

 
  

  const options = [
    {
      name: "Seguridad",
      handler:  "seguridad",
      id: 1
    },
    {
      name: "Afiliaciones",
      handler: "afiliaciones",
      id: 2
    },
    {
      name: "Mercado cambiario",
      handler: "mercadocambiario",
      id: 3
    },
    {
      name: "Límites de operaciones",
      handler: "limitesoperaciones",
      id: 4
    }
  ];
  return <Options options={options}      {...props} />;
};

export default GeneralOptions;
