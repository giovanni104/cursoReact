import React from "react";
import { createCustomMessage } from "react-chatbot-kit";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
   

  const handleGeneralOptions = (options) => {

    //console.log(options)
    const message = createChatBotMessage(
      "Te facilitamos las siguientes opciones que pueden estar asociadas a tu solicitud:",
      {
        widget: "generalOptions",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };



  const handleSubMenu = (options) => {
    const message = createCustomMessage(options, options,{message: options });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };



  const handleCustom2 = (options) => {
    const message = createCustomMessage("Test", "custom2");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {       
            handleGeneralOptions,handleSubMenu,handleCustom2
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
