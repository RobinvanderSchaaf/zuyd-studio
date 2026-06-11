"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";


const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-cream/90 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <Container>
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col leading-none group">
                        <span className="text-xl font-sans font-medium  tracking-widest text-ink uppercase">
                            Zuyd
                        </span>
                        <span className="text-md font-sans font-light tracking-widest text-ink-muted uppercase">
                            Studio
                        </span>
                    </Link>

                    {/* Desktop nav Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-sans text-ink-muted hover:text-ink transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button label="Let's talk" href="#contact" />
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10"
                        aria-label="Toggle menu"
                    >                   
                        <span
                            className={`block h-px bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px] w-6" : "w-6"
                                }`}
                        />

                        <span
                            className={`block h-px bg-ink transition-all duration-300 ${menuOpen ? "opacity-0 w-4" : "w-4"
                                }`}
                        />

                        <span
                            className={`block h-px bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px] w-6" : "w-5"
                                }`}
                        />
                    </button>
                </nav>
            </Container>

            {/* Mobile menu */}

            <div
                className={`md:hidden bg-cream/90 backdrop-blur-md z-50 transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <Container>
                    <ul className="flex flex-col py-6 gap-6 border-t border-cream-border">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-base font-sans text-ink hover:text-ink-muted transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Button label="Let's talk" href="#contact" />
                        </li>
                    </ul>
                </Container>
            </div>
        </header>
    );

}