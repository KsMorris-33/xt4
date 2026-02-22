import { create } from "zustand"

export type CartItem = {
    id: string
    name: string
    price: number
    quantity: number
    image?: string
}

type CartState = {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
    clearCart: () => void
    getTotal: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],

    addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id)

        if (existing) {
            set({
                items: get().items.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                ),
            })
        } else {
            set({ items: [...get().items, item] })
        }
    },

    removeItem: (id) =>
        set({
            items: get().items.filter((item) => item.id !== id),
        }),

    increaseQuantity: (id) =>
        set({
            items: get().items.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        }),

    decreaseQuantity: (id) =>
        set({
            items: get().items.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        }),

    clearCart: () => set({ items: [] }),

    getTotal: () =>
        get().items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        ),
}))