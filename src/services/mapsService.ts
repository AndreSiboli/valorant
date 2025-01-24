import axios from "axios";

const baseUrl = "https://valorant-api.com/v1";

export async function getAllMaps() {
  return await axios
    .get(`${baseUrl}/maps`)
    .then(({ data }) => data.data || null)
    .catch(() => null);
}

export async function getAnSpecificMap(id: string) {
  return await axios
    .get(`${baseUrl}/maps/${id}`)
    .then(({ data }) => data.data || null)
    .catch(() => null);
}
