import { useEffect, useState } from "react";
import { Provincia } from "../Modelo/Provincia";
import { getProvinciasJSONFetch, getProvinciasXBusqueda } from "./FuncionesApi";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

export default function ListaProvincias() {
  const [prov, setProv] = useState<Provincia[]>([]);

  const [search, setSearch] = useState<string>("");

  const getProvincias = async () => {
    if (search === "") {
      const datos: Provincia[] = await getProvinciasJSONFetch();
      setProv(datos);
    } else {
      const datos: Provincia[] = await getProvinciasXBusqueda(search);
      setProv(datos);
    }
  };

  const handleClick = () => {
    getProvincias();
  };

  useEffect(() => {
    getProvincias();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          style={{
            marginLeft: "150px",
            marginTop: "20px",
            marginRight: "20px",
          }}
          placeholder="buscar provincia..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleClick}>
          <Search />
        </Button>
      </div>

      <Link to={"/nuevo/0"}>
        <Button
          variant="success"
          size="sm"
          style={{ marginLeft: "180px", marginTop: "20px" }}
        >
          Nueva Provincia
        </Button>
      </Link>
      <Table className="table-text">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th scope="col">Provincia</th>
            <th scope="col">Abreviatura</th>
            <th scope="col">Bandera</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {prov.map((provincia) => (
            <tr key={provincia.id}>
              <td>{provincia.nombre}</td>
              <td>{provincia.abreviatura}</td>
              <td>
                <img src={`../../img/${provincia.bandera}`} alt="Bandera" />
              </td>
              <td>
                <Link to={`/detalle/${provincia.id}`}>
                  <Button variant="primary" size="sm">
                    Detalle
                  </Button>
                </Link>
                <Link to={`/nuevo/${provincia.id}`}>
                  <Button
                    variant="success"
                    size="sm"
                    style={{ marginLeft: "20px" }}
                  >
                    Modificar
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
