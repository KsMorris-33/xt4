"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductForm() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log({
            name,
            price,
            stock,
        })

        alert("Producto simulado registrado")
    }

    return (
        <Card className="bg-black border-white/10 neon-border max-w-xl">
            <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="space-y-2">
                        <label>Nombre del producto</label>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ej: Monitor Gaming Neon"
                        />
                    </div>

                    <div className="space-y-2">
                        <label>Precio</label>
                        <Input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Ej: 499"
                        />
                    </div>

                    <div className="space-y-2">
                        <label>Stock</label>
                        <Input
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            placeholder="Ej: 20"
                        />
                    </div>

                    <Button type="submit" className="w-full neon-border">
                        Registrar Producto
                    </Button>

                </form>
            </CardContent>
        </Card>
    )
}