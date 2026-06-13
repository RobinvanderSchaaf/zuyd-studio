"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";

const projects = [
    {
        title: "Van Dijk bouw",
        category: "Construction Company",
        href: "#",
        imageSrc: "",
    },
    {
        title: "Origin Peptides",
        category: "E-commerce Store",
        href: "#",
        imageSrc: "",
    },
    {
        title: "Valkenburg Retreat",
        category: "Hospitality Website",
        href: "#",
        imageSrc: "",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

export default function RecentProjects() {
    return (
        <section className="bg-cream py-24 md:py-32" id="work">
            <section className="bg-cream pb-24 md:pb-32 border-t border-cream-border" id="work"></section>
            <Container>

                {/* header Row */}
                <div className="flex itemd-end justify-between mb-12">
                    <div>
                        <SectionLabel text="Selected Work" className="mb-3" />
                        <h2 className="font-serif font-semibold text-3xl md:text-4xl text-ink  tracking-tight">
                            Recent Projects
                        </h2>
                    </div>
                    <Button
                        label="View all projects"
                        href="#"
                        variant="ghost"
                        arrow="right"
                    />
                </div>

                {/* Project Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {projects.map((project) => (
                        <motion.div key={project.title} variants={cardVariants}>
                            <ProjectCard
                                title={project.title}
                                category={project.category}
                                href={project.href}
                                imageSrc={project.imageSrc}
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </Container>
        </section>
    );
}
