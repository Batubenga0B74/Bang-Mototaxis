import axios from "axios";

export const API_PATH = "http://localhost:3333";
export const api = axios.create({
  baseURL: API_PATH
})