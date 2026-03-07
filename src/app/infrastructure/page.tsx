"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";
import { motion } from "framer-motion";

export default function InfrastructurePage() {
    return (
        <GenericPlaceholderPage
            title="World-Class Infrastructure"
            subtitle="Our Facilities"
            description="Step into the future of steel manufacturing. Our state-of-the-art facilities are engineered for maximum efficiency, precision, and sustainability."
            icon="🏗️"
            color="accent-yellow"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h3 className="font-heading text-4xl text-black mb-6">Automated Rolling Mills</h3>
                        <div className="w-16 h-1 bg-accent-yellow mb-8" />
                        <p className="font-body text-black/70 text-lg leading-relaxed mb-6 font-medium">
                            Our primary manufacturing facility features fully automated, continuous rolling mills capable of producing thousands of metric tons of extremely uniform TMT bars daily. By removing human error from the direct rolling process, we guarantee exact dimensions and superior surface finish on every single bar.
                        </p>
                        <ul className="space-y-4 font-body text-black font-medium">
                            <li className="flex items-center gap-3"><span className="text-accent-yellow">✓</span> PLC Controlled Operations</li>
                            <li className="flex items-center gap-3"><span className="text-accent-yellow">✓</span> High-Speed Block Mills</li>
                            <li className="flex items-center gap-3"><span className="text-accent-yellow">✓</span> Automated Cooling Beds</li>
                        </ul>
                    </div>
                    <div className="h-[400px] bg-black/5 rounded-lg border border-black/10 flex items-center justify-center p-8 text-center bg-[url('https://images.unsplash.com/photo-1565514020179-026ddbaaf426?q=80&w=2942&auto=format&fit=crop')] bg-cover bg-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/40" />
                        <span className="relative z-10 font-heading text-3xl text-white tracking-widest uppercase">Mill Plant 01</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Advanced Quality Testing Lab", desc: "Equipped with Universal Testing Machines (UTM), Spectrometers, and rigorous bend/rebend stations." },
                        { title: "Smart Extrusion Hub", desc: "For manufacturing intricate structural components using precision temperature control and high-pressure extrusion." },
                        { title: "Sustainable Power Grid", desc: "Fueled by captive renewable energy sources aiming to reduce our carbon footprint by 40%." }
                    ].map((facility, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 border-t-4 border-black shadow-xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <h4 className="font-heading text-xl md:text-2xl text-black mb-4">{facility.title}</h4>
                            <p className="font-body text-black/70 leading-relaxed font-medium">{facility.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}
