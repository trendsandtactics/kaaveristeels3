"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";
import { motion } from "framer-motion";

export default function CertificationsPage() {
    return (
        <GenericPlaceholderPage
            title="Quality & Standards"
            subtitle="Certifications"
            description="KAAVERI is proud to be ISO 9001:2015 and Green Steel certified. Discover our commitment to global quality standards."
            icon="🏆"
            color="accent-red"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 bg-white">
                <div className="text-center mb-16">
                    <h3 className="font-heading text-3xl md:text-5xl text-black mb-6">Our Accreditations</h3>
                    <p className="font-body text-black/70 max-w-2xl mx-auto text-lg font-medium">
                        We don&apos;t just meet industry standards; we define them. Our manufacturing processes and final products are rigorously audited by elite global certifying bodies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "ISO 9001:2015", desc: "Quality Management System", icon: "✔️" },
                        { title: "ISO 14001:2015", desc: "Environmental Management", icon: "🌍" },
                        { title: "ISO 45001:2018", desc: "Occupational Health & Safety", icon: "🛡️" },
                        { title: "BIS Certification", desc: "Bureau of Indian Standards IS:1786", icon: "🔖" }
                    ].map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 border border-gray-200 p-8 flex flex-col items-center text-center rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
                        >
                            <div className="text-5xl mb-6 bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                {cert.icon}
                            </div>
                            <h4 className="font-heading text-xl text-black mb-2">{cert.title}</h4>
                            <p className="font-body text-black/60 font-medium">{cert.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Visual Section */}
                <div className="mt-24 p-12 bg-black text-white rounded-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)),linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05))] bg-[size:40px_40px] opacity-10" />
                    <div className="relative z-10 max-w-xl mb-8 md:mb-0">
                        <h3 className="font-heading text-3xl md:text-4xl text-accent-yellow mb-4">Request Our Quality Audit Report</h3>
                        <p className="font-body text-white/80 font-medium">For enterprise clients requiring full metallurgical breakdown reports and lifecycle analysis documents, our engineering team is ready to assist.</p>
                    </div>
                    <button className="relative z-10 px-8 py-4 bg-accent-yellow text-black font-body font-bold tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap">
                        Download PDF
                    </button>
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}
