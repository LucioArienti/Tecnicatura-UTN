import { useEffect, useState } from "react";
import "./Agenda.css";
import { Usuario } from "../modelos/Agenda";
import { getContactosJSONFetch, deleteContactoXId } from "./FuncionesApi";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function TablaAgenda() {
  const [cont, setCont] = useState<Usuario[]>([]);
  const navigate = useNavigate();

  const getContactos = async () => {
    const datos: Usuario[] = await getContactosJSONFetch();
    setCont(datos);
  };

  useEffect(() => {
    getContactos();
  }, []);

  const EditarContacto = (contacto: Usuario) => {
    navigate(`/editContact/${contacto.id}`, {
      state: { cont: { ...contacto, fotourl: contacto.fotourl } },
    });
  };
  const handleDelete = async (id: number) => {
    if (window.confirm("¿Estás seguro de que quieres borrar este contacto?")) {
      try {
        await deleteContactoXId(id);
        await getContactos();
        // Realizar cualquier acción adicional después de eliminar el instrumento
        console.log("Contacto eliminado");
      } catch (error) {
        console.error("Error al eliminar el contacto:", error);
      }
    }
  };

  return (
    <div>
      {"  "}
      <div style={{ display: "flex" }}>
        {" "}
        <h2>Agenda de Contactos</h2>
        <Link to={"/newContact"}>
          <Button variant="success" size="sm" style={{ marginLeft: "50px" }}>
            {" "}
            Nuevo
          </Button>
        </Link>
      </div>

      <div className="grid-container-agenda-1">
        <div className="grid-item-agenda">Foto</div>
        <div className="grid-item-agenda">Apellido</div>
        <div className="grid-item-agenda">Nombre</div>
        <div className="grid-item-agenda">Telefono</div>
        <div className="grid-item-agenda">Email</div>
        <div className="grid-item-agenda">Acciones</div>

        {cont.map((contacto) => (
          <>
            <div className="grid-item">
              <img src={contacto.fotourl} />
            </div>
            <div className="grid-item">{contacto.apellido}</div>
            <div className="grid-item">{contacto.nombre}</div>
            <div className="grid-item">{contacto.telefono}</div>
            <div className="grid-item">{contacto.email}</div>
            <div className="grid-item">
              <Button
                variant="primary"
                size="sm"
                onClick={() => EditarContacto(contacto)}
              >
                Editar
              </Button>
              <Button
                variant="danger"
                size="sm"
                style={{ marginLeft: "20px" }}
                onClick={() => handleDelete(contacto.id)}
              >
                Eliminar
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
