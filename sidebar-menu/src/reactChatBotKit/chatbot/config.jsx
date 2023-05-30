import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
 
import CoBotAvatar from "./componentes/CoBotavatar";
import GeneralOptions from "./componentes/GeneralOptions";
import SubMenu from "./componentes/SubMenu";
import CustomMessageP from "./componentes/CustomMessageP";
const botName = "ExcitementBot";

const parametros = [
  {"topic":"seguridad","action":"seguridad"},
  {"topic":"afiliaciones","action":"afiliaciones"},
  {"topic":"mercadocambiario","action":"mercadocambiario"},
  {"topic":"limitesoperaciones","action":"limitesoperaciones"}
  ]
  const chatOpciones = (list)=>{
    var opciones = {};
    list.forEach(element => {
      opciones[element.topic] = (props) => <SubMenu {...props} opcion={element.topic} />;    
    });
    return opciones;
  }

const config = {
  botName: "Prueba",
  initialMessages: [
    createChatBotMessage(
      `Bienvenido al centro de ayuda BDV ¿Cómo podemos ayudarte? `
    ),
    createChatBotMessage(
      "Te facilitamos las siguientes opciones que pueden estar asociadas a tu solicitud:",
      {
        withAvatar: false,
        delay: 400,
        widget: "generalOptions",
      }
    )  
  ],
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },

  customMessages:  chatOpciones(parametros),
  widgets: [  

    {
      widgetName: "generalOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
      mapStateToProps: ["messages"],
    } 
  ],
};
export default config;



