import { useEffect, useState } from "react";
import "./Agenda.css";
import { Usuario } from "../modelos/Agenda";
import { getContactosXBusqueda } from "./FuncionesApi";

export default function AgendaContacto() {
  const [cont, setCont] = useState<Usuario[]>([]);

  const [search, setSearch] = useState<string>("A");

  const getContactos = async () => {
    const datos: Usuario[] = await getContactosXBusqueda(search);
    setCont(datos);
  };

  useEffect(() => {
    getContactos();
  }, [search]);

  return (
    <div>
      {"  "}
      <h1>Agenda de Contactos</h1>
      <div className="grid-container-agenda">
        <div className="grid-item-agenda">Foto</div>
        <div className="grid-item-agenda">Apellido</div>
        <div className="grid-item-agenda">Nombre</div>
        <div className="grid-item-agenda">Telefono</div>
        <div className="grid-item-agenda">Email</div>

        {cont.map((contacto) => (
          <>
            <div className="grid-item">
              <img src={contacto.fotourl} />
            </div>
            <div className="grid-item">{contacto.apellido}</div>
            <div className="grid-item">{contacto.nombre}</div>
            <div className="grid-item">{contacto.telefono}</div>
            <div className="grid-item">{contacto.email}</div>
          </>
        ))}
      </div>
      <h3>Busqueda por Indice</h3>
      <div className="grid-container">
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("A");
            }}
          >
            A
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("B");
            }}
          >
            B
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("C");
            }}
          >
            C
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("D");
            }}
          >
            D
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("E");
            }}
          >
            E
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("F");
            }}
          >
            F
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("G");
            }}
          >
            G
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("H");
            }}
          >
            H
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("I");
            }}
          >
            I
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("J");
            }}
          >
            J
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("K");
            }}
          >
            K
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("L");
            }}
          >
            L
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("M");
            }}
          >
            M
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("N");
            }}
          >
            N
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("Ñ");
            }}
          >
            Ñ
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("O");
            }}
          >
            O
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("P");
            }}
          >
            P
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("Q");
            }}
          >
            Q
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("R");
            }}
          >
            R
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("S");
            }}
          >
            S
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("T");
            }}
          >
            T
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("U");
            }}
          >
            U
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("V");
            }}
          >
            V
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("W");
            }}
          >
            W
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("X");
            }}
          >
            X
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("Y");
            }}
          >
            Y
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={() => {
              setSearch("Z");
            }}
          >
            Z
          </button>
        </div>
      </div>
    </div>
  );
}
