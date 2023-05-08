import { z } from "zod";
import { LoginSchema } from "../schemas";

export interface iUser {
    id: string;
    fullName: string;
    whatsApp: string;
    history: string;
    image: iImage;
    favorites_in: iFavorite[];
}

export interface iAdmin {
    id: string;
    username: string;
    favorites: iFavorite[];
}

export interface iImage {
    id: string;
    name: string;
    size: number;
    url: string;
    key: string;
    user_id: string;
}

export interface iFavorite {
    id: string;
    user_id: string;
    admin_id: string;
}

export type iLogin = z.infer<typeof LoginSchema>;

export interface iLoginResponse {
    token: string;
}
