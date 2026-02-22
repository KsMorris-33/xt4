import ProductForm from "@/components/admin/product-form"

export default function ProductsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold neon-text">
                Registrar Producto
            </h1>

            <ProductForm />
        </div>
    )
}