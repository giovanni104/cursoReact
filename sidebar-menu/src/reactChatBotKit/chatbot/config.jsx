import { createChatBotMessage,createCustomMessage } from "react-chatbot-kit";
import DogPicture from "./componentes/DogPicture";
import CoBotAvatar from "./componentes/CoBotavatar";
import Overview from "./componentes/Overview";
import CustomMessage from './componentes/CustomMessage';
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
        widget: "overview"
      }
    )/*,
    createCustomMessage('Test', 'custom'),*/
  ],
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
   
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },

    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "custom1",
      widgetFunc: (props) => <CustomMessage {...props} />,
      mapStateToProps: ["messages"],
    },
  ],
};
export default config;
