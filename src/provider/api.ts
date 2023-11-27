import axios from "axios";

export const api = axios.create({
    baseURL: 'https://desenvolvedor-m3-serve.vercel.app'
});

