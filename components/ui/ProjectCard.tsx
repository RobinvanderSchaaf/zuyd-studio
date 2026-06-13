"use client";

import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    category: string;
    href?: string;
    imageSrc?: string;
}

export default function ProjectCard({
    title,
    category,
    href = "#",
    imageSrc,
}: ProjectCardProps) {
    return (
        <Link href={href} className="group flex flex-col gap-4">

            {/* Image */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-cream-dark">
                {imageSrc ? (
                    <motion.img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                ) : (
                    /* Placeholder */
                    <div className="w-full h-full flex items-center justify-center bg-cream-dark">
                        <span className="font-sans text-xs text-ink-subtle">
                            {title}
                        </span>
                    </div>
                )}
            </div>

            {/* Info */}

            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="font-sans text-sm font-medium text-ink group-hover:text-ink-muted transition-colors duration-200">
                        {title}
                    </p>
                    <p className="font-sans text-xs text-ink-muted">
                        {category}
                    </p>
                </div>
                <span className="font-sans text-sm text-ink-muted group-hover:translate-x-1 transition-transform duration-200">
                    →
                </span>
            </div>

        </Link>
    );
}