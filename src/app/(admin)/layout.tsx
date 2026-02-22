import { ReactNode } from "react"

export default function AdminLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="flex">

                {/* Sidebar futura */}
                <aside className="w-64 border-r border-white/10 p-6 hidden md:block">
                    <h2 className="text-xl font-bold neon-text mb-8">
                        Admin Panel
                    </h2>

                    <nav className="flex flex-col gap-4 text-sm">
                        <a href="/dashboard">Dashboard</a>
                        <a href="/dashboard/products">Productos</a>
                    </nav>
                </aside>

                {/* Contenido */}
                <main className="flex-1 p-8">
                    {children}
                </main>

            </div>
        </div>
    )
}