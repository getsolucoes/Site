import axios from "axios";

export const api = axios.create({
    baseURL: "https://mother.solucoesget.tec.br/",
    timeout: 10000,
});
