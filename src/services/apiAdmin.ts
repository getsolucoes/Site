import { getCookie } from "cookies-next";
import { iAdmin, iFavorite } from "../interfaces";
import { api } from "./api";

const token = getCookie("@TokenGetSolucoes");
api.defaults.headers.authorization = `Bearer ${token}`;

export async function getProfile(): Promise<iAdmin> {
    const { data } = await api.get<iAdmin>("admin/profile");
    return data;
}

export async function getFavorites(): Promise<iFavorite[]> {
    const { data } = await api.get<iFavorite[]>("admin/favorites");
    return data;
}
