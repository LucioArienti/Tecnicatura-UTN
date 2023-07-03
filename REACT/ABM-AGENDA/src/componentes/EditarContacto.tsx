import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { editarContacto } from "./FuncionesApi";
import { Usuario } from "../modelos/Agenda";
import { ChangeEvent } from "react";

export default function EditarContacto() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [cont, setCont] = useState<Usuario>(
    location.state?.cont || ({} as Usuario)
  );

  useEffect(() => {
    if (location.state && location.state.cont) {
      setCont(location.state.cont);
    } else {
      // Manejar la situación en caso de que no se haya proporcionado un instrumento válido
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await editarContacto(cont);
      setShowModal(true);
      // Realizar cualquier acción adicional después de editar el instrumento
      console.log("Contacto editado");
    } catch (error) {
      console.error("Error al editar el contacto`:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCont({
      ...cont,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 ">
          <h2 className="mb-3">"Editar Contacto"</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formInstrumento">
              <Form.Label>Foto</Form.Label>
              <Form.Control
                type="text"
                name="fotourl"
                value={cont?.fotourl}
                onChange={handleChange}
                required
                size="sm"
              />
            </Form.Group>

            <Form.Group controlId="formMarca">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={cont?.apellido}
                onChange={handleChange}
                required
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="formModelo">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={cont?.nombre}
                onChange={handleChange}
                required
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="imagen">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                name="telefono"
                className="form-control"
                value={cont?.telefono}
                onChange={handleChange}
                required
                size="sm"
              />
            </Form.Group>

            <Form.Group controlId="formPrecio">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={cont?.email}
                onChange={handleChange}
                required
                size="sm"
              />
            </Form.Group>
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Guardar cambios
              </Button>
            </div>
          </Form>
          <div className="mt-3 text-center">
            <Link to="/agenda">Volver a la lista</Link>
          </div>

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Body>Contacto editado exitosamente</Modal.Body>
            <Modal.Footer>
              <Link to={"/agenda"}>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
