import Contact from "@/components/sections/Contact";

export const metadata = {
    title: "Contact — Zuyd Studio",
    description: "Get in touch with Zuyd Studio. We'll get back to you within 24 hours.",
};


export default function ContactPage(){
    return (
        <main className="min-h-screen bg-cream pt-32 pb-24">
            <Contact />
        </main>
    );
}