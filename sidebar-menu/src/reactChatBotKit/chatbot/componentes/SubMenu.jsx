import Options from "./Options";
import { submenu } from "./dataSubMenu";
const SubMenu = (props) => {
  let opcion = "";
  let opcionSubmenu;
  let title="";
  let options = [];
console.log(props)
let prueba=["seguridad","afiliaciones","limitesoperaciones","mercadocambiario"]
 

let position=parseInt(Math.random()*4)


  const results = props.state.messages.filter(function (submenu) {
    return submenu.type == "seguridad";
    //return submenu.type == prueba[position];
  });

  if (results.length !== 0) {
    opcion = results[results.length - 1].message;

    opcionSubmenu = submenu(props).filter(function (submenu) {
      return submenu.id == opcion;
    });

    if (opcionSubmenu.length !== 0) {
      options = opcionSubmenu[0].opciones;
      title= opcionSubmenu[0].title;
    }
  }

  /*
  const options = [
    {
      name: "Cambio de contraseña",
      handler: props.actionProvider.handleCustom2,
      id: 1
    },
    {
      name: "Actualización de correo",
      handler: props.actionProvider.handleCustom2,
      id: 2
    },
    {
      name: "Preguntas de seguridad",
      handler: props.actionProvider.handleCustom2,
      id: 3
    },
    {
      name: "Actualizacion de Clavemóvil",
      handler: props.actionProvider.handleCustom2,
      id: 4
    }
    ,
    {
      name: "Ami Ven",
      handler: props.actionProvider.handleCustom2,
      id:5
    }
  ];*/
  return (
    <>
      <div className="boton"> {title}</div>
      <div className="react-chatbot-kit-chat-bot-message-container">
        <div className="react-chatbot-kit-chat-bot-message">
          <span>Selecciona la opción que deseas restablecer</span>
        </div>
      </div>
      <Options options={options} {...props} />
    </>
  );
};

export default SubMenu;
