import Link from "next/link";
import Container from "../ui/Container";

const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
];

export default function Footer() {
    return (
        <footer className="bg-cream border-t border-cream-border py-10">
            <Container>

                {/* Top row  */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

                    {/* Logo */}
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-sans font-medium tracking-widest text-ink uppercase">
                            Zuyd
                        </span>
                        <span className="text-md font-sans font-light tracking-widest text-ink uppercase">
                            Studio
                        </span>
                    </div>

                    <ul className="flex items-center gap-8">
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

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="text-sm font-sans text-ink-muted hover:text-ink transition-colors duration-200"
                    >
                        info@zuydstudio.nl
                    </Link>
                </div>

                {/* Divider */}

                <div className="h-px bg-cream-border" />


                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-5 mt-6">
                    <p className="font-sans text-xs text-ink-subtle">
                         © {new Date().getFullYear()} Zuyd Studio. All rights reserved.
                    </p>
                    <p className="font-sans text-xs text-ink-subtle">
                        Designed & built in Zuid-Limburg
                    </p>
                </div>


            </Container>
        </footer>
    );
}