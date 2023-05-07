import { z } from "zod";
import { LoginSchema } from "../schemas";

export interface iUser {
    id: string;
    fullName: string;
    whatsApp: string;
    history: string;
    image: iImage;
}

export interface iImage {
    id: string;
    name: string;
    size: number;
    url: string;
    key: string;
    user_id: string;
}

export type iLogin = z.infer<typeof LoginSchema>;

export interface iLoginResponse {
    token: string;
}
