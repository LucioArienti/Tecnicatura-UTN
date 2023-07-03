import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaProvincias from "./Componentes/ListaProvincias";
import NavBar from "./Componentes/NavBar";
import DetalleProvincia from "./Componentes/DetalleProvincia";
import NuevaProvincia from "./Componentes/NuevaProvincia";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ListaProvincias />} />
        <Route path="/detalle/:IdProv" element={<DetalleProvincia />} />
        <Route path="/nuevo/:id" element={<NuevaProvincia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
