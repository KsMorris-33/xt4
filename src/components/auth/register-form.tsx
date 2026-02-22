"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, RegisterSchema } from "@/lib/validations/auth.schema"
import { supabase } from "@/lib/supabase-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: RegisterSchema) => {
        setLoading(true)

        const { error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        })

        setLoading(false)

        if (error) {
            alert(error.message)
        } else {
            alert("Revisa tu correo para confirmar tu cuenta.")
        }
    }

    return (
        <Card className="bg-black border-white/10 neon-border w-full max-w-md">
            <CardContent className="p-8 space-y-6">
                <h1 className="text-3xl font-bold neon-text text-center">
                    Crear Cuenta
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    <div className="space-y-2">
                        <Label>Correo</Label>
                        <Input type="email" {...register("email")} />
                        {errors.email && (
                            <p className="text-red-400 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Contraseña</Label>
                        <Input type="password" {...register("password")} />
                        {errors.password && (
                            <p className="text-red-400 text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Confirmar contraseña</Label>
                        <Input type="password" {...register("confirmPassword")} />
                        {errors.confirmPassword && (
                            <p className="text-red-400 text-sm">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full neon-border"
                        disabled={loading}
                    >
                        {loading ? "Creando cuenta..." : "Registrarse"}
                    </Button>

                </form>
            </CardContent>
        </Card>
    )
}