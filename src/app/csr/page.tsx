"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";
import { motion } from "framer-motion";

export default function CSRPage() {
    return (
        <GenericPlaceholderPage
            title="Community First"
            subtitle="Corporate Social Responsibility"
            description="Beyond the forge, KAAVERI is committed to uplifting communities, supporting education, and driving positive social impact."
            icon="🤝"
            color="accent-yellow"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-[500px] w-full bg-[url('https://images.unsplash.com/photo-1593113565694-c6f13e1104e1?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center rounded-2xl shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <div className="font-body text-accent-yellow font-bold uppercase tracking-widest mb-2 text-sm">Key Initiative</div>
                            <h4 className="font-heading text-3xl mb-2">Rural Education Outreach</h4>
                            <p className="font-body text-white/80 font-medium">Building and funding schools in the communities surrounding our manufacturing plants.</p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col justify-center">
                        <h3 className="font-heading text-4xl text-black mb-6">Our Responsibility</h3>
                        <div className="w-16 h-1 bg-accent-yellow mb-8" />
                        <p className="font-body text-black/70 text-lg leading-relaxed mb-6 font-medium">
                            At KAAVERI, we believe that true strength isn&apos;t just measured in Megapascals; it is measured by the impact we have on the lives around us. We dedicate a significant portion of our annual revenue directly into community uplifting initiatives.
                        </p>

                        <div className="space-y-6 mt-4">
                            {[
                                { title: "Healthcare Infrastructure", desc: "Equipping local hospitals with modern diagnostic tools and funding free medical camps monthly." },
                                { title: "Women Empowerment", desc: "Establishing skill-development centers that have trained over 5,000 rural women to date." },
                                { title: "Clean Water Access", desc: "Installing advanced RO plants across 50+ villages to provide safe drinking water." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 border border-gray-100 bg-gray-50 rounded-lg hover:border-accent-yellow transition-colors cursor-default">
                                    <div className="text-2xl mt-1">✨</div>
                                    <div>
                                        <h5 className="font-heading text-xl text-black">{item.title}</h5>
                                        <p className="font-body text-black/60 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-accent-yellow p-12 text-center rounded-2xl shadow-xl">
                    <h3 className="font-heading text-4xl text-black mb-4">Partner With Us</h3>
                    <p className="font-body text-black/80 font-medium max-w-2xl mx-auto mb-8">Are you an NGO or local community leader? We are always looking for effective partners to expand our CSR footprint.</p>
                    <button className="px-8 py-3 bg-black text-white font-body text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors border-2 border-black">
                        Submit Proposal
                    </button>
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}
