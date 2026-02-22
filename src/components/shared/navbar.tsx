"use client"
import { useCartStore } from "@/store/cart-store"
import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"


export function Navbar() {
    const items = useCartStore((state) => state.items)
    return (
        <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold neon-text tracking-widest"
                >
                    XT4
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    <Link href="/products" className="hover:text-white/80 transition">
                        Productos
                    </Link>
                    <Link href="/cart" className="hover:text-white/80 transition">
                        Carrito
                    </Link>
                    <Link href="/login" className="hover:text-white/80 transition">
                        Login
                    </Link>

                    <Button
                        variant="outline"
                        size="icon"
                        className="border-white/20 hover:neon-border"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        {items.length > 0 && (
                            <span className="absolute -top-2 -right-2 text-xs bg-emerald-500 text-black px-1.5 py-0.5 rounded-full">
                                {items.length}
                            </span>
                        )}
                    </Button>
                </nav>

                {/* Mobile */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="bg-black border-white/10"
                        >
                            <div className="flex flex-col gap-6 mt-10 text-lg">
                                <Link href="/products">Productos</Link>
                                <Link href="/cart">Carrito</Link>
                                <Link href="/login">Login</Link>
                            </div>

                            <Separator className="my-6 bg-white/10" />

                            <Button className="w-full neon-border">
                                <ShoppingCart className="mr-2 h-4 w-4" />

                                Ver carrito
                            </Button>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}