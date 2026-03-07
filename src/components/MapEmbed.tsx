"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MapEmbed() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-gray-50 overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch gap-0 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">

                    {/* 50% Content Area */}
                    <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative bg-white">
                        {/* Decorative background elements inside content */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-red/5 blur-2xl pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-yellow/10 blur-2xl pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-4 mb-6 relative z-10"
                        >
                            <div className="w-12 h-[2px] bg-accent-red" />
                            <h2 className="font-body text-accent-red uppercase tracking-[0.2em] font-bold text-sm">Our Location</h2>
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-heading text-4xl md:text-5xl text-black mb-8 relative z-10"
                        >
                            Visit Our <span className="text-accent-red">Facilities</span>
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8 relative z-10"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0 border border-accent-red/20 shadow-sm">
                                    <span className="text-accent-red text-xl">📍</span>
                                </div>
                                <div>
                                    <h4 className="font-heading text-2xl text-black mb-2">Headquarters</h4>
                                    <p className="font-body text-black/70 leading-relaxed font-medium">
                                        KAAVERI TMT BARS & STRUCTURALS<br />
                                        No.7/1 & 4/3, Komal Road,<br />
                                        Maruthur Village, Therizhandur Post,<br />
                                        Kuttalam Taluk, Mayiladuthurai<br />
                                        District - 609 808
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-accent-yellow/20 flex items-center justify-center flex-shrink-0 border border-accent-yellow/30 shadow-sm">
                                    <span className="text-accent-yellow text-xl">📞</span>
                                </div>
                                <div>
                                    <h4 className="font-heading text-2xl text-black mb-2">Contact Lines</h4>
                                    <p className="font-body text-black/70 leading-relaxed font-medium">
                                        Mobile: +91 88558 24555<br />
                                        Landline: 04123 456789<br />
                                        Email: info@kaaveristeel.co.in
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 50% Map Container */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full group bg-black">
                        {/* The iframe map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31343.22727569314!2d79.716668!3d10.894945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a551473ca1f3bdf%3A0xcf40526af31ae1e!2sPolagam%2C%20Tirumalairayan%20Pattinam%2C%20Puducherry!5e0!3m2!1sen!2sin!4v1770805749873!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            aria-hidden="false"
                            tabIndex={0}
                            className="absolute inset-0 grayscale-[50%] contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700 w-full h-full object-cover"
                        />

                        {/* Decorative styling overlays */}
                        <div className="absolute inset-0 pointer-events-none border-l-4 border-accent-red/50 z-20" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
