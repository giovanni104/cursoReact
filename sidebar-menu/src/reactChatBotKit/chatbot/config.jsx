import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";

import CoBotAvatar from "./componentes/CoBotavatar";
import GeneralOptions from "./componentes/GeneralOptions";
import SubMenu from "./componentes/SubMenu";
import CustomMessageP from "./componentes/CustomMessageP";
import CustomHeader from "./componentes/CustomHeader";
const botName = "ExcitementBot";

const parametros = [
  { category: "seguridad", component: "submenu" },
  { category: "afiliaciones", component: "submenu" },
  { category: "mercadocambiario", component: "submenu" },
  { category: "limitesoperaciones", component: "submenu" },
  { category: "seguridad1", component: "custom" },
  { category: "seguridad2", component: "custom" },
  { category: "seguridad3", component: "custom" },
  { category: "seguridad4", component: "custom" },
  { category: "seguridad5", component: "custom" },
];
const chatOpciones = (list) => {
  var opciones = {};
  list.forEach((element) => {
    if (element.component == "submenu") {
      opciones[element.category] = (props) => (
        <SubMenu {...props} opcion={element.category} />
      );
    }
    if (element.component == "custom") {
      opciones[element.category] = (props) => (
        <CustomMessageP {...props} opcion={element.category} />
      );
    }
  });
  return opciones;
};

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
    ),
  ],
  customComponents: {
    botAvatar: (props) => <CoBotAvatar {...props} />,
    header: () =>  <CustomHeader   />},

  customMessages: chatOpciones(parametros),
  widgets: [
    {
      widgetName: "generalOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
      mapStateToProps: ["messages"],
    },
  ],
};
export default config;
