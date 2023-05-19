import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Settings } from "./pages/Settings";
import { Sidenav } from "./menu/Sidenav";
import MenuContextProvider from "./context/MenuContext";
import  {Horizontal} from "./Horizontal";
import {Chat} from "./reactChatBotKit/index"
function App() {
  return (
    <>
<Chat></Chat>

 
    </>
  );
}

export default App;
