import React from "react";
import {Chatbot} from "react-chatbot-kit"
import 'react-chatbot-kit/build/main.css'

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

//https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/getting-started

//https://www.youtube.com/watch?v=vTpk-PKZwTs   9:58

export const Chat = () => {
  return (
    <>
   <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </>
  );
};
