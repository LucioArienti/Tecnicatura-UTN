import { Provincia } from "../Modelo/Provincia";

export async function getProvinciasJSONFetch() {
  const urlServer =
    "http://168.194.207.98:8081/api_provincia/get_provincias.php";
  const response = await fetch(urlServer, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
  console.log(response);
  return await response.json();
}

export async function getProvinciasXBusqueda(termino: string) {
  const urlServer =
    "http://168.194.207.98:8081/api_provincia/get_provincias.php?nombre=" +
    termino;
  const response = await fetch(urlServer, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
  console.log(response);
  return await response.json();
}

export async function getProvinciasXId(id: string) {
  const urlServer =
    "http://168.194.207.98:8081/api_provincia/get_provincia.php?id=" + id;
  const response = await fetch(urlServer, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
  console.log(response);
  return await response.json();
}

export async function saveProvincia(provincia: Provincia) {
  const urlServer =
    "http://168.194.207.98:8081/api_provincia/post_provincia.php";
  const response = await fetch(urlServer, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
    body: JSON.stringify(provincia),
  });
  console.log(response);
  return response;
}

export async function deleteContactoXId(id: number) {
  const urlServer = `http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=${id}`;
  await fetch(urlServer, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
}

export async function editarProvincia(provincia: Provincia) {
  const urlServer =
    "http://168.194.207.98:8081/api_provincia/put_provincia.php";
  const response = await fetch(urlServer, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
    body: JSON.stringify(provincia),
  });

  console.log(response);
  return response;
}
