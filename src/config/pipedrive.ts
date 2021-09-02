import axios from "axios";

const { PIPEDRIVE_URL, PIPEDRIVE_API_TOKEN } = process.env;

const pipedriveApi = axios.create({
  baseURL: PIPEDRIVE_URL,
  params: { api_token: PIPEDRIVE_API_TOKEN },
});

export { pipedriveApi };
