import React from "react";
import { createCustomMessage } from "react-chatbot-kit";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleList = (options) => {

    //console.log(options)
    const message = createChatBotMessage(
      "Te facilitamos las siguientes opciones que pueden estar asociadas a tu solicitud:",
      {
        widget: "overview",
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



  const handleCustom = (options) => {
    const message = createCustomMessage("Test", "custom");

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
            handleHello,
            handleDog,
            handleList,handleCustom
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
