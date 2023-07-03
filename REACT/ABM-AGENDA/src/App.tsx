import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import AgendaContacto from "./componentes/AgendaContacto";
import TablaAgenda from "./componentes/TablaAgenda";
import FormularioAgenda from "./componentes/FormularioAgenda";
import EditarContacto from "./componentes/EditarContacto";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AgendaContacto />} />
        <Route path="/agenda" element={<TablaAgenda />} />
        <Route path="/newContact" element={<FormularioAgenda />} />
        <Route path="/editContact/:id" element={<EditarContacto />} />
      </Routes>
    </BrowserRouter>
  );
}
