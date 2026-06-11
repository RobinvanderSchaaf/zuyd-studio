"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
    const reduced = useReducedMotion();

    const textContent = (
        <motion.div
            initial={reduced ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: "transform" }}
        >
            <h1 className="font-serif text-4xl text-ink leading-[1.1] tracking-tight">
                Websites that help
                <br />
                businesses{"  "}
                <em className="italic">grow.</em>
            </h1>

            <p className="mt-5 font-sans text-sm text-ink-muted leading-relaxed max-w-xs">
                We design and build custom websites that
                are fast, scalable and made to convert.
            </p>

            <div className="mt-7 flex items-center gap-6">
                <Button label="See our work" href="#work" />
                <Button
                    label="Learn more"
                    href="#about"
                    variant="ghost"
                    arrow="down"
                />
            </div>
        </motion.div>
    );

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Mobile image */}
            <Image
                src="/images/hero/Hero2.png"
                alt="Zuyd Studio - premium web design"
                fill
                className="object-cover object-bottom md:hidden"
                priority
            />

            {/* Desktop Image */}
            <Image
                src="/images/hero/Hero.png"
                alt="Zuyd Studio - premium web design"
                fill
                className="object-cover object-center hidden md:block"
                priority
            />

            {/* Mobile gradient — strong at top where text is, fades to transparent */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream/97 via-cream/85 to-cream/20 z-10 md:hidden" />

            {/* Desktop gradient — strong on left, fades right */}
            <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/60 to-cream/10 z-10 hidden md:block" />

            {/* Content */}
            <Container>
                <div className="relative z-20 flex flex-col  items-start justify-start  min-h-screen pt-28 pb-20 md:justify-center md:pt-24">
                    <div className="max-w-lg">
                        {textContent}
                    </div>
                </div>
            </Container>
        </section>
    );
}

