import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovie-api-wmdi.onrender.com"
});
