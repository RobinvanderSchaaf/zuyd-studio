import Link from "next/link";

interface ButtonProps {
    label: string;
    href?: string;
    variant?: "primary" | "ghost";
    arrow?: "right" | "down";
    onClick?: () => void;
    className?: string;
}

export default function Button({
    label,
    href,
    variant = "primary",
    arrow = "right",
    onClick,
    className = "",
}: ButtonProps) {
    const arrowChar = arrow === "down" ? "↓" : "→";

    const base =
        "inline-flex items-center gap-2 text-sm font-sans font-medium transition-all duration-200 cursor-pointer";


    const variants = {
        primary:
            "bg-forest text-white px-5 py-2.5 rounded-md hover:bg-forest-hover",
        ghost:
            "text-ink hover:text-ink-muted",
    };

    const classes = `${base} ${variants[variant]} ${className}`;


    if(href) {
        return(
            <Link href={href} className={classes}>
                {label}
                <span className="text-xs">{arrowChar}</span>
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {label}
            <span className="text-xs">{arrowChar}</span>
        </button>
    );
}

