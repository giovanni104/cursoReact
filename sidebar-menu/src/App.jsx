import { Routes, Route, BrowserRouter } from "react-router-dom";
//import { Home } from "./pages/Home";
// { About } from "./pages/About";
//import { Settings } from "./pages/Settings";
//import { Sidenav } from "./menu/Sidenav";
//import MenuContextProvider from "./context/MenuContext";
import { Contacto } from "./Contacto";

function App() {
  return (
   <div className="App">
     
<Contacto/>





   
  { /*<>
     <MenuContextProvider>
      <Sidenav />
      </MenuContextProvider>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/settings" exact element={<Settings />}></Route>
      </Routes>
  </>*/}

 
</div>

  );
}

export default App;
