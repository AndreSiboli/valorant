import axios from "axios";

const baseUrl = "https://valorant-api.com/v1";

export async function getAllAgents() {
  return await axios
    .get(`${baseUrl}/agents?isPlayableCharacter=true`)
    .then(({ data }) => data.data)
    .catch(() => null);
}

export async function getAnSpecificAgent(id: string) {
  return await axios
    .get(`${baseUrl}/agents/${id}`)
    .then(({ data }) => data.data || null)
    .catch(() => null);
}
