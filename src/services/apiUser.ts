import { getCookie } from "cookies-next";
import { iUser } from "../interfaces";
import { api } from "./api";

const token = getCookie("@TokenGetSolucoes");
api.defaults.headers.authorization = `Bearer ${token}`;

export async function getUsers(): Promise<iUser[]> {
    const { data } = await api.get<iUser[]>("users");
    return data;
}

export async function createfavoriteUser(id: string): Promise<void> {
    await api.patch(`users/${id}/favorite`);
}

export async function deletefavoriteUser(id: string): Promise<void> {
    await api.delete(`users/favorite/${id}`);
}
