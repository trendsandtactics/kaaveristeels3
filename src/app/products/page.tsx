import React from "react";
import HomeProducts from "@/components/HomeProducts";

export default function ProductsPage() {
    return (
        <main className="flex min-h-screen flex-col w-full relative pt-24">
            <div className="w-full bg-background min-h-screen">
                <div className="py-24 bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow text-black text-center relative overflow-hidden shadow-2xl">
                    {/* Glowing background decorations - Multiple layers for depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />

                    {/* Vivid intense glow centers */}
                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF200]/50 rounded-full blur-[100px] pointer-events-none" />

                    {/* Subtle grid overlay to make it look industrial/premium */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

                    <div className="relative z-10 max-w-4xl mx-auto px-4">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-12 h-[2px] bg-black" />
                            <h2 className="font-body text-black uppercase tracking-[0.2em] font-bold text-sm">Our Catalog</h2>
                            <div className="w-12 h-[2px] bg-black" />
                        </div>
                        <h1 className="font-heading text-5xl md:text-7xl mb-6 text-black">Premium <span className="text-black">Steel Products</span></h1>
                        <p className="font-body text-black max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                            Through cutting-edge manufacturing processes and rigorous quality standards, we forge structural solutions that withstand the test of time and support tomorrow&apos;s infrastructure.
                        </p>
                    </div>
                </div>

                {/* The new products listing component */}
                <HomeProducts />
            </div>
        </main>
    );
}
