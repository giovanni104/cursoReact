import Options from "./Options";
import { submenu } from "./dataSubMenu";
const SubMenu = (props) => {
  let opcion = "";
  let opcionSubmenu;
  let title="";
  let options = [];
//console.log(props)

 
  opcionSubmenu = submenu.filter(function (submenu) {
    return submenu.id == props.opcion;
  });

  if (opcionSubmenu.length !== 0) {
    options = opcionSubmenu[0].opciones;
    title= opcionSubmenu[0].title;
  }

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
