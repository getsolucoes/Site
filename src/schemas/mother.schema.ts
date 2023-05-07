import { z } from "zod";

export const MotherSchema = z.object({
    fullName: z
        .string({ required_error: "Nome completo é obrigatório" })
        .nonempty("Nome completo é obrigatório"),
    whatsApp: z
        .string({ required_error: "WhatsApp é obrigatório" })
        .regex(/^[0-9]+$/, "Digite apenas números")
        .min(10, "Precisa ter no mínimo 10 números"),
    image: z
        .string({
            invalid_type_error: "A imagem precisa ter no máximo 5Mb",
            required_error: "Foto é obrigatório",
        })
        .min(1, "Foto é obrigatório"),
    history: z
        .string({ required_error: "Nome completo é obrigatório" })
        .nonempty("Nome completo é obrigatório"),
});

export const LoginSchema = z.object({
    username: z
        .string({ required_error: "Username é obrigatório" })
        .nonempty("Username é obrigatório"),
    password: z
        .string({ required_error: "Senha é obrigatório" })
        .nonempty("Senha é obrigatório"),
});
