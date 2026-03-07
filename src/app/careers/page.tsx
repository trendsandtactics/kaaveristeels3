"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";
import { motion } from "framer-motion";

export default function CareersPage() {
    return (
        <GenericPlaceholderPage
            title="Join The Forge"
            subtitle="Careers"
            description="Build your future with a leader in the steel manufacturing industry. Explore exciting career opportunities at KAAVERI."
            icon="🔥"
            color="accent-yellow"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="text-center mb-16">
                    <h3 className="font-heading text-3xl md:text-5xl text-black mb-6">Open Positions</h3>
                    <p className="font-body text-black/70 max-w-2xl mx-auto text-lg font-medium">
                        We are fundamentally searching for talent driven by excellence, safety, and innovation. Review our open roles across engineering, operations, and corporate functions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {[
                        { title: "Senior Metallurgical Engineer", dept: "Engineering & QA", location: "Mayiladuthurai Plant", type: "Full-Time" },
                        { title: "Industrial Electrician", dept: "Maintenance", location: "Mayiladuthurai Plant", type: "Full-Time" },
                        { title: "Supply Chain Manager", dept: "Logistics", location: "Corporate HQ", type: "Full-Time" },
                        { title: "Process Automation Technician", dept: "Technology", location: "Mayiladuthurai Plant", type: "Full-Time" },
                        { title: "Regional Sales Director", dept: "Sales", location: "Chennai", type: "Full-Time" }
                    ].map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border-2 border-gray-100 p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-accent-yellow shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="mb-4 md:mb-0">
                                <h4 className="font-heading text-xl text-black group-hover:text-accent-yellow transition-colors mb-2">{job.title}</h4>
                                <div className="flex flex-wrap gap-3 font-body text-sm font-medium text-black/60">
                                    <span className="flex items-center gap-1">🏢 {job.dept}</span>
                                    <span className="flex items-center gap-1">📍 {job.location}</span>
                                    <span className="flex items-center gap-1">⏱️ {job.type}</span>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-black text-white font-body text-xs font-bold uppercase tracking-widest group-hover:bg-accent-yellow group-hover:text-black transition-colors shrink-0">
                                Apply Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}
