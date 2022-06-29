import { Routes, Route } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Example from "./Example";

const App = () => {
  return (
    <>
      {/* <Example /> */}
      <Sidebar />
    </>
  );
};

export default App;
