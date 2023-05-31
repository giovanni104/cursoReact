import React from "react";
import "./style.css";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import ChatContextProvider from "./chatbot/context/ChatContext";

//https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/getting-started

//https://www.youtube.com/watch?v=vTpk-PKZwTs   9:58
//https://danbom425.tistory.com/45
export const Chat = () => {
  return (
    <>
      <div style={{ maxWidth: "430px", maxHeight: "700px" }}>
      
          <Chatbot
            headerText="¿Qué deseas hacer?"
            placeholderText="Escribe aquí"
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
       
      </div>
    </>
  );
};
