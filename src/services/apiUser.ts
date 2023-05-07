import { iUser } from "../interfaces";
import { api } from "./api";

export async function getUser(token: string): Promise<iUser> {
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.get<iUser>("users");
    return data;
}
