import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Folders from "./pages/Folders";
import Sidebar from "./components/Sidebar";

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/folders" element={<Folders />}></Route>
    </Routes>
  );
};

export default MainRoutes;
