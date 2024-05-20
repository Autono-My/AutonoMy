import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import QuemSomos from "./pages/QuemSomos";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/quemsomos" element={<QuemSomos />}/>
    </Routes>
  );
}

export default MainRoutes;