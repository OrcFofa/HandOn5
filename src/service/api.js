import axios from "axios";

export const api = axios.create({
    baseURL: "https://breja-backend-production.up.railway.app/"
});