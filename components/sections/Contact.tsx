"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        honeypot: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleSubmit = async () => {
        setFormState("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMessage(data.error || "Something went wrong. ");
                setFormState("error");
                return;
            }

            setFormState("success");
            setForm({ name: "", email: "", message: "", honeypot: "" });
        } catch {
            setErrorMessage("Something went wrong. Please try again.");
            setFormState("error");
        }
    };

    return (
        <section className="bg-cream py-24 md:py-32 border-t border-cream-border" id="contact">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">


                    {/* Left - copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <SectionLabel text="Get in touch" className="mb-4" />
                        <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1] tracking-tight mt-4">
                            Let's build
                            <br />
                            Something
                            <br />
                            <em className="italic text-forest">great.</em>
                        </h2>
                        <p className="mt-6 font-sans text-sm md:text-base text-ink-muted leading-relaxed max-w-sm">
                            Have a project in mind? Fill in the form and we'll get back to
                            you within 24 hours.
                        </p>
                        <p className="mt-4 font-sans text-sm text-ink-muted">
                            Or email us directly at {" "}
                            <a
                                href="mailto:info@zuydstudio.nl"
                                className="text-ink hover:text-ink-muted transition-colors duration-200 underline underline-offset-4"
                            >
                                info@zuydstudio.nl
                            </a>
                        </p>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                        className="flex flex-col gap-5"
                    >

                        {/* Honey Pot */}
                        <input
                            type="text"
                            name="honeypot"
                            value={form.honeypot}
                            onChange={handleChange}
                            style={{ display: "none" }}
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-xs text-ink-muted uppercase tracking-widest">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Jan de Vries"
                                className="w-full bg-cream-dark border border-cream-border rounded-xl px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink-muted transition-colors duration-200"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-xs text-ink-muted uppercase tracking-widest">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="jan@bedrijf.nl"
                                className="w-full bg-cream-dark border border-cream-border rounded-xl px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink-muted transition-colors duration-200"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-xs text-ink-muted uppercase tracking-widest">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                rows={5}
                                className="w-full bg-cream-dark border border-cream-border rounded-xl px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink-muted transition-colors duration-200 resize-none"
                            />
                        </div>

                        <div className="flex items-center gap-4 mt-2">
                            <button
                                onClick={handleSubmit}
                                disabled={formState === "loading"}
                                className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-forst-hover transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formState === "loading" ? "Sending..." : "Send message →"}
                            </button>
                        </div>

                        {/* Success message */}
                        {formState === "success" && (
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="font-sans text-sm text-forest"
                            >
                                ✓ Message sent — we'll get back to you within 24 hours.
                            </motion.p>
                        )}

                        {/* Error message */}
                        {formState === "error" && (
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="font-sans text-sm text-red-500"
                            >
                                {errorMessage}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </Container>
        </section>
    )

}