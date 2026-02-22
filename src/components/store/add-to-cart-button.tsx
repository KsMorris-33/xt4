"use client"

import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart-store"

export default function AddToCartButton() {
    const addItem = useCartStore((state) => state.addItem)

    return (
        <Button
            onClick={() =>
                addItem({
                    id: "1",
                    name: "Producto Neon",
                    price: 99,
                    quantity: 1,
                })
            }
        >
            Agregar producto de prueba
        </Button>
    )
}