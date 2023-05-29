import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
 
import CoBotAvatar from "./componentes/CoBotavatar";
import GeneralOptions from "./componentes/GeneralOptions";
import SubMenu from "./componentes/SubMenu";
import CustomMessageP from "./componentes/CustomMessageP";
const botName = "ExcitementBot";
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

  customMessages: {
    seguridad: (props) => <SubMenu {...props} />,
    afiliaciones: (props) => <SubMenu {...props} />,
    mercadocambiario: (props) => <SubMenu {...props} />,
    limitesoperaciones: (props) => <SubMenu {...props} />,   
    custom2: (props) => <CustomMessageP {...props} />,
  },
  widgets: [  

    {
      widgetName: "generalOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
      mapStateToProps: ["messages"],
    } 
  ],
};
export default config;
