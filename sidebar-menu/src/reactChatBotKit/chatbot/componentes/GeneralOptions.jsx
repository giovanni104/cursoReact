import Options from "./Options2";

const GeneralOptions = (props) => {

let mensaje="";

  const results = props.messages.filter(function (submenu) {
    return submenu.widget == "overview" && submenu.hasOwnProperty('mensaje')  ;
  });

  if(results.length!==0) {

    mensaje=results[results.length-1].mensaje;
  }


  

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
  return <Options options={options}  mensaje={mensaje}    {...props} />;
};

export default GeneralOptions;
