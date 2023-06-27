import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Settings } from "./pages/Settings";
import { Sidenav } from "./menu/Sidenav";
import MenuContextProvider from "./context/MenuContext";

function App() {
  return (
    <>
     <MenuContextProvider>
      <Sidenav />
      </MenuContextProvider>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/settings" exact element={<Settings />}></Route>
      </Routes>
    </>
  );
}

export default App;
