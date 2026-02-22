"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase-client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        setLoading(false)

        if (error) {
            alert(error.message)
        } else {
            router.push("/dashboard")
        }
    }

    return (
        <Card className="bg-black border-white/10 neon-border w-full max-w-md">
            <CardContent className="p-6 space-y-6">
                <h1 className="text-2xl font-bold neon-text">
                    Iniciar Sesión
                </h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        className="w-full neon-border"
                        disabled={loading}
                    >
                        {loading ? "Entrando..." : "Ingresar"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}