import { z } from "zod"

export const registerSchema = z.object({
    email: z.string().email("Correo inválido"),
    password: z
        .string()
        .min(6, "Mínimo 6 caracteres")
        .regex(/[A-Z]/, "Debe contener una mayúscula")
        .regex(/[0-9]/, "Debe contener un número"),
    confirmPassword: z.string(),
})

    .refine((data) => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
    })

export type RegisterSchema = z.infer<typeof registerSchema>