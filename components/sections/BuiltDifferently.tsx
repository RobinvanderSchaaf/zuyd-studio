"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ComparisonCard from "@/components/ui/ComparisonCard";
import Button from "@/components/ui/Button";


const negativeItems = [
    "Limited flexibility",
    "Slower performance",
    "Generic designs",
    "Plugin dependency",
    "Hard to scale",
]

const positiveItems = [
    "Custom built",
    "Lightning fast",
    "Unique design",
    "Fully scalable",
    "Future proof",
]

export default function BuiltDifferently() {
    return (
        <section className="bg-cream pt-16 pb-16 md:pt-20 md:pb-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Left Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <SectionLabel text="Built Differently" className="mb-4" />

                        <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1]  tracking-tight mt-4">
                            No templates. No shortcuts.
                            <br />
                            Just clean, custom code.
                        </h2>

                        <p className="mt-6 font-sans text-sm md:text-base text-ink-muted leading-relaxed max-w-sm">
                            We build every website from scratch using React, Next.js and
                            modern web technologies. No page builders. No bloated plugins.
                            Just everything your business actually needs.
                        </p>

                        <div className="mt-8">
                            <Button
                                label="See why it matters"
                                href="about"
                                variant="ghost"
                                arrow="right"
                            />
                        </div>
                    </motion.div>

                    {/* Comparison Cards */}
                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                    >
                        <ComparisonCard
                            title="Template Builders"
                            type="negative"
                            items={negativeItems}
                        />
                        <ComparisonCard
                            title="Zuyd Studio"
                            type="positive"
                            items={positiveItems}
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
