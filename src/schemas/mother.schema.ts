import { z } from "zod";

export const MotherSchema = z.object({
    fullName: z
        .string({ required_error: "Nome completo é obrigatório" })
        .min(1, "Nome completo é obrigatório"),
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
        .string({
            required_error: "História da foto é obrigatório",
        })
        .min(1, "História da foto é obrigatório"),
});
