"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    return (
        <GenericPlaceholderPage
            title="Iconic Projects"
            subtitle="Portfolio"
            description="From towering skyscrapers to critical infrastructure, KAAVERI steel forms the unbreakable backbone of monumental developments."
            icon="🏙️"
            color="accent-yellow"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="text-center mb-16">
                    <h3 className="font-heading text-3xl md:text-5xl text-black mb-6">Our Legacy of Strength</h3>
                    <p className="font-body text-black/70 max-w-2xl mx-auto text-lg font-medium">
                        KAAVERI has proudly anchored some of the nation&apos;s most vital architectural feats. Here is a glimpse into the developments forged with our steel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Metropolitan Airport Hub", category: "Public Infrastructure", status: "Completed 2024", metric: "15,000+ Tonnes" },
                        { name: "Skyline Financial Center", category: "Commercial High-Rise", status: "Ongoing", metric: "22,000+ Tonnes" },
                        { name: "Coastal Defense Bridge", category: "Civil Engineering", status: "Completed 2022", metric: "8,500+ Tonnes" },
                        { name: "National Sports Arena", category: "Commercial Stadium", status: "Completed 2023", metric: "12,000+ Tonnes" },
                        { name: "Hyperloop Testing Rail", category: "R&D Infrastructure", status: "Ongoing", metric: "4,200+ Tonnes" },
                        { name: "Tech Park Central", category: "Commercial IT Park", status: "Completed 2025", metric: "18,000+ Tonnes" }
                    ].map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 rounded-md overflow-hidden border border-gray-200 shadow-lg group hover:bg-white transition-colors"
                        >
                            <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <div className="w-full h-full bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%,transparent_75%,#f3f4f6_75%,#f3f4f6),linear-gradient(45deg,#f3f4f6_25%,transparent_25%,transparent_75%,#f3f4f6_75%,#f3f4f6)] bg-[size:20px_20px] bg-[position:0_0,10px_10px] opacity-20" />
                            </div>
                            <div className="p-8">
                                <div className="text-xs font-body font-bold text-accent-yellow tracking-widest uppercase mb-2">{project.category}</div>
                                <h4 className="font-heading text-2xl text-black mb-4">{project.name}</h4>
                                <div className="flex justify-between items-end border-t border-gray-200 pt-4 mt-4">
                                    <div className="font-body text-sm font-medium text-black/60">{project.status}</div>
                                    <div className="font-body text-sm font-bold text-black border border-black px-2 py-1">{project.metric}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}
