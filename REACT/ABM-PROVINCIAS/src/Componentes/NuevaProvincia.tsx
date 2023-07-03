import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  saveProvincia,
  getProvinciasXId,
  editarProvincia,
} from "./FuncionesApi";
import { Provincia } from "../Modelo/Provincia";
import { ChangeEvent } from "react";

export default function NuevaProvincia() {
  const { id } = useParams();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [prov, setProv] = useState<Provincia>(
    location.state?.prov || ({} as Provincia)
  );

  const getProvincia = async () => {
    if (id != "0") {
      const dato: Provincia = await getProvinciasXId(id!);
      setProv(dato);
    }
  };

  useEffect(() => {
    getProvincia();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id === "0") {
      try {
        await saveProvincia(prov);
        setShowModal(true);
        console.log("Provincia creada");
      } catch (error) {
        console.error("Error al crear la provincia`:", error);
      }
    } else {
      try {
        await editarProvincia(prov);
        setShowModal(true);
        console.log("Provincia editada");
      } catch (error) {
        console.error("Error al editar la provincia`:", error);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProv({
      ...prov,
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
          <h2 className="mb-3">"Crear Provincia"</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formInstrumento">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                onChange={handleChange}
                value={prov?.nombre}
                required
                size="sm"
              />
            </Form.Group>

            <Form.Group controlId="formMarca">
              <Form.Label>Capital</Form.Label>
              <Form.Control
                type="text"
                name="capital"
                onChange={handleChange}
                value={prov?.capital}
                required
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="formModelo">
              <Form.Label>Poblacion</Form.Label>
              <Form.Control
                type="number"
                name="poblacion"
                onChange={handleChange}
                value={prov?.poblacion}
                required
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="imagen">
              <Form.Label>Superficie</Form.Label>
              <Form.Control
                type="number"
                name="superficie"
                className="form-control"
                onChange={handleChange}
                value={prov?.superficie}
                required
                size="sm"
              />
            </Form.Group>

            <Form.Group controlId="formPrecio">
              <Form.Label>N° Departamentos</Form.Label>
              <Form.Control
                type="number"
                name="nroDepartamentos"
                onChange={handleChange}
                value={prov?.nroDepartamentos}
                required
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="formPrecio">
              <Form.Label>Abreviatura</Form.Label>
              <Form.Control
                type="text"
                name="abreviatura"
                onChange={handleChange}
                value={prov?.abreviatura}
                required
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="formPrecio">
              <Form.Label>Bandera</Form.Label>
              <Form.Control
                type="text"
                name="bandera"
                onChange={handleChange}
                value={prov?.bandera}
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
            <Link to="/">Volver a la lista</Link>
          </div>

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Body>Provincia creada/editada exitosamente</Modal.Body>
            <Modal.Footer>
              <Link to={"/"}>
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
