"use client";

import { useState, useEffect } from "react";
import Container from "../ui/Container";
import LogoCarousel from "../ui/LogoCarousel";

const allLogos = [
    { name: "Van Dijk Bouw", src: "/images/logos/van-dijk.png" },
    { name: "The Oche", src: "/images/logos/Oche.png" },
    { name: "Origin", src: "/images/logos/Origin.png" },
    // { name: "Nordic Studio",      src: "/images/logos/nordic.png"     },
    // { name: "Limburg Fysio",      src: "/images/logos/limburg.png"    },
    // { name: "Valkenburg Retreat", src: "/images/logos/valkenburg.png" },
    // { name: "Client 7",           src: "/images/logos/client-7.png"   },
    // { name: "Client 8",           src: "/images/logos/client-8.png"   },
    // { name: "Client 9",           src: "/images/logos/client-9.png"   },
    // { name: "Client 10",          src: "/images/logos/client-10.png"  },
];

export default function TrustBar() {
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const update = () => {
            setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <section className="hidden md:block py-6 md:py-10 border-t border-cream-border bg-cream-dark">
            <Container>
                <p className="text-center text-xs font-sans font-medium tracking-[0.2em] uppercase text-ink-muted mb-8">
                    Trusted by Ambitious Businesses
                </p>
                <LogoCarousel
                    logos={allLogos}
                    visibleCount={visibleCount}
                    interval={2500}
                    logoHeight="h-12 md:h-16"
                />
            </Container>
        </section>
    );
}