import api from "../api";

export async function buscaUsuario() {
  try {
    const response = await api.get("/users");
    return response.data[0];
  } catch (error) {
    console.log(error);
    return {};
  }
}
