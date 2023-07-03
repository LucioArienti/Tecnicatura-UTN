import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Provincia } from "../Modelo/Provincia";
import { getProvinciasJSONFetch } from "./FuncionesApi";
import { Button, Col, Row } from "react-bootstrap";

export default function DetalleProvincia() {
  const { IdProv } = useParams();
  const [prov, setProv] = useState<Provincia>();

  const getProvincias = async () => {
    const datos: Provincia[] = await getProvinciasJSONFetch();
    const provincia = datos.filter((dato) => {
      return dato.id.toString() === IdProv;
    });
    setProv(provincia[0]);
  };

  useEffect(() => {
    getProvincias();
  }, []);

  console.log(prov);

  return (
    <div className="ContainerProductDetail">
      <Row style={{ width: "40%" }}>
        <Col>
          <div>Provincia:</div>
          <div>Abreviatura:</div>
          <div>Capital:</div>
          <div>Bandera:</div>
          <div>Poblacion:</div>
          <div>Superficie:</div>
          <div>Nº Departamentos:</div>
        </Col>
        <Col>
          <div>{prov?.nombre}</div>
          <div>{prov?.abreviatura}</div>
          <div>{prov?.capital}</div>
          <div>
            <img src={`../../img/${prov?.bandera}`} alt="Bandera" />
          </div>
          <div>{prov?.poblacion}</div>
          <div>{prov?.superficie}</div>
          <div>{prov?.nroDepartamentos}</div>
        </Col>
      </Row>
      <Row>
        <div className="d-flex justify-content-center align-items-center">
          <Link to={"/"}>
            <Button variant="danger" className="p-2" size="sm">
              VOLVER
            </Button>
          </Link>
        </div>
      </Row>
    </div>
  );
}
