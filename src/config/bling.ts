import axios from "axios";

const { BLING_URL, BLING_API_TOKEN } = process.env;

const blingApi = axios.create({
  baseURL: BLING_URL,
  params: { apikey: BLING_API_TOKEN },
});

export { blingApi };
