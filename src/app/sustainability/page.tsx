"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";
import { motion } from "framer-motion";

export default function SustainabilityPage() {
    return (
        <GenericPlaceholderPage
            title="Commitment to Sustainability"
            subtitle="Green Steel"
            description="We are dedicated to forging a greener future. Discover our environmentally conscious manufacturing processes and reduction of carbon emissions."
            icon="🌱"
            color="accent-yellow"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative min-h-[500px] rounded-lg overflow-hidden border-2 border-green-500 shadow-xl group">
                        <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />

                        <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur pb-6 pt-8 px-6 border-l-4 border-green-500">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-3xl text-green-500">♻️</div>
                                <h4 className="font-heading text-xl text-black">Net Zero Goal</h4>
                            </div>
                            <p className="font-body text-black/70 font-medium">KAAVERI is committed to becoming entirely carbon neutral by 2040.</p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h3 className="font-heading text-3xl md:text-5xl text-black mb-6">Our Green Initiatives</h3>
                        <div className="w-16 h-1 bg-green-500 mb-8" />

                        <div className="space-y-8">
                            {[
                                { title: "Scrap Recycling Process", desc: "Over 60% of our raw materials are sourced from highly refined, purified scrap steel, massively minimizing virgin ore depletion." },
                                { title: "Water Conservation", desc: "Our Closed-Loop Water Cooling systems ensure ZERO discharge, recycling 99.8% of the water used during the quenching process." },
                                { title: "Slag Repurposing", desc: "100% of our blast furnace slag is captured and repurposed into raw materials for sustainable cement production." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold border border-green-200">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl text-black mb-2">{item.title}</h4>
                                        <p className="font-body text-black/70 font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}
