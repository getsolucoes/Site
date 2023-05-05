import { ReactNode } from "react";

export interface iContextProps {
    children: ReactNode;
}

export interface iUser {
    id: string;
    fullName: string;
    whatsApp: string;
    history: string;
}

export interface iImage {
    id: string;
    name: string;
    size: number;
    url: string;
    key: string;
    user_id: string;
}

export interface iResponse {
    message: string;
}
