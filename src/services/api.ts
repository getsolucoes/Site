import axios from "axios";

// export const api = axios.create({
//     baseURL: "https://solucoesget.tec.br/api/",
//     timeout: 10000,
// });
export const api = axios.create({
    baseURL: "http://localhost:3000/api/",
    timeout: 10000,
});
