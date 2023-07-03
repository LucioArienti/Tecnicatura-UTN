import { Usuario } from "../modelos/Agenda";

export async function getContactosJSONFetch() {
  const urlServer = "http://168.194.207.98:8081/api_contacto/get_contactos.php";
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

export async function getContactosXBusqueda(termino: string) {
  const urlServer =
    "http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=" +
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

export async function saveContacto(contacto: Usuario) {
  const urlServer = "http://168.194.207.98:8081/api_contacto/post_contacto.php";
  const response = await fetch(urlServer, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
    body: JSON.stringify(contacto),
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

export async function editarContacto(contacto: Usuario) {
  const urlServer = "http://168.194.207.98:8081/api_contacto/put_contacto.php";
  const response = await fetch(urlServer, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
    body: JSON.stringify(contacto),
  });

  console.log(response);
  return response;
}
