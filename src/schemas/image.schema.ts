import { z } from "zod";

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export const imageSchema = () => {
    try {
        return z
            .instanceof(FileList)
            .transform((list) => list.item(0)!)
            .refine((file) => {
                try {
                    return file[0].size <= MAX_FILE_SIZE;
                } catch {}
            }, "A imagem precisa ter no máximo 5Mb")
            .refine((file) => {
                try {
                    return ACCEPTED_IMAGE_TYPES.includes(file.type);
                } catch {}
            }, "Somente esses tipos de imagens são permitidos .jpg, .jpeg, .png e .webp");
    } catch {}
};
