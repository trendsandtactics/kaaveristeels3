"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";
import { motion } from "framer-motion";

export default function DealersPage() {
    return (
        <GenericPlaceholderPage
            title="Partner Network"
            subtitle="Dealers & Distributors"
            description="Find an authorized KAAVERI dealer near you or learn how to join our exclusive network of trusted distributors."
            icon="📍"
            color="accent-red"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="bg-black text-white rounded-2xl p-8 md:p-12 mb-24 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-[80px]" />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="font-heading text-3xl md:text-5xl text-accent-yellow mb-4">Become a Dealer</h3>
                            <p className="font-body text-white/80 mb-8 font-medium text-lg leading-relaxed">
                                Join India&apos;s fastest-growing premium steel network. Enjoy unmatched margins, comprehensive marketing support, and priority dispatch logistics.
                            </p>
                            <ul className="space-y-3 mb-8 font-body font-medium">
                                <li className="flex items-center gap-3"><span className="text-accent-yellow">✓</span> Exclusive Regional Rights</li>
                                <li className="flex items-center gap-3"><span className="text-accent-yellow">✓</span> Aggressive Marketing & Brand Support</li>
                                <li className="flex items-center gap-3"><span className="text-accent-yellow">✓</span> Dedicated B2B Portal Access</li>
                            </ul>
                            <button className="px-8 py-3 bg-accent-yellow text-black font-body font-bold tracking-widest uppercase hover:bg-white transition-colors">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
                            <h4 className="font-heading text-2xl mb-6">Quick Inquiry</h4>
                            <form className="space-y-4">
                                <div>
                                    <input type="text" placeholder="Firm Name" className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/50 focus:outline-none focus:border-accent-yellow font-body" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Contact Person" className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/50 focus:outline-none focus:border-accent-yellow font-body" />
                                    <input type="text" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/50 focus:outline-none focus:border-accent-yellow font-body" />
                                </div>
                                <div>
                                    <input type="text" placeholder="City / District" className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/50 focus:outline-none focus:border-accent-yellow font-body" />
                                </div>
                                <button type="button" className="w-full bg-white text-black font-body font-bold tracking-widest uppercase py-3 mt-4 hover:bg-accent-yellow transition-colors">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h3 className="font-heading text-4xl text-black mb-4">Authorized Regional Distributors</h3>
                    <p className="font-body text-black/70 font-medium max-w-2xl mx-auto">Locate our primary distribution centers across South India.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { city: "Chennai", address: "Ambattur Industrial Estate", contact: "+91 98765 43210" },
                        { city: "Coimbatore", address: "Peelamedu Main Road", contact: "+91 98765 43211" },
                        { city: "Madurai", address: "Kappalur SIDCO Ind. Estate", contact: "+91 98765 43212" },
                        { city: "Trichy", address: "Thuvakudi Industrial Estate", contact: "+91 98765 43213" },
                        { city: "Salem", address: "Leigh Bazaar", contact: "+91 98765 43214" },
                        { city: "Puducherry", address: "Mettupalayam Industrial Estate", contact: "+91 98765 43215" }
                    ].map((dealer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-gray-50 p-6 border-l-4 border-black hover:border-accent-yellow hover:bg-white shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                            <h4 className="font-heading text-2xl text-black mb-2">{dealer.city} Center</h4>
                            <p className="font-body text-black/60 text-sm mb-4">{dealer.address}</p>
                            <div className="font-body text-black font-bold flex items-center gap-2">
                                <span>📞</span> {dealer.contact}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}
