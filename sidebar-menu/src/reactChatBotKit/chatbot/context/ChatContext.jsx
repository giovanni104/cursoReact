import React, {  useState } from "react";

export const ChatContext = React.createContext({});
export default function ChatContextProvider({ children }) {
  const [optionChat, setOptionChat] = useState(""); 
  return (
    <ChatContext.Provider value={{ optionChat, setOptionChat }}>
      {children}
    </ChatContext.Provider>
  );
}
