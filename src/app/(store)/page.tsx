import AddToCartButton from "@/components/store/add-to-cart-button"

export default function HomePage() {
    return (
        <main className="container mx-auto py-16 space-y-8">
            <h1 className="text-6xl font-bold neon-text">
                XT4 Store
            </h1>

            <AddToCartButton />
        </main>
    )
}