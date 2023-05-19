import Options from "./Options";

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
      handler: props.actionProvider.handleCustom,
      id: 1
    },
    {
      name: "Afiliaciones",
      handler: props.actionProvider.handleCustom,
      id: 2
    },
    {
      name: "Mercado cambiario",
      handler: props.actionProvider.handleCustom,
      id: 3
    },
    {
      name: "Límites de operaciones",
      handler: props.actionProvider.handleCustom,
      id: 4
    }
  ];
  return <Options options={options}  mensaje={mensaje}    {...props} />;
};

export default GeneralOptions;
