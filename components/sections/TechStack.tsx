"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

const techs = [
    { name: "React", icon: "/icons/tech/react.svg" },
    { name: "Next.js", icon: "/icons/tech/nextjs.svg" },
    { name: "TypeScript", icon: "/icons/tech/typescript.svg" },
    { name: "Tailwind CSS", icon: "/icons/tech/tailwind.svg" },
    { name: "Vercel", icon: "/icons/tech/vercel.svg" },
];


const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};



{/* TechStack icon layout */ }

export default function TechStack() {
    return (
        <section className="bg-cream py-16 md:py-20">
            <Container>
                <div className="rounded-2xl bg-cream-dark border border-cream-border px-8 py-8">
                    
                    <p className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-ink-muted mb-8 text-center">
                        Technology we use
                    </p>

                    <motion.div
                        className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        {techs.map((tech) => (
                            <motion.div
                                key={tech.name}
                                variants={itemVariants}
                                className="flex items-center gap-2.5 group"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                                />
                                <span className="font-sans text-xs text-ink-muted group-hover:text-ink transition-colors duration-200">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </Container>
        </section>
    )
}