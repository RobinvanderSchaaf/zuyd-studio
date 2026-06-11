interface ComparisonCardProps {
    title: string;
    type: "negative" | "positive";
    items: string[];
}

export default function ComparisonCard({
    title,
    type,
    items,

}: ComparisonCardProps) {
    const isPositive = type === "positive";

    return (
        <div
            className={`flex-1 rounded-2xl p-6 border shadow-sm ${isPositive
                    ? "bg-cream border-cream-border"
                    : "bg-cream-dark border-cream-border"
                }`}
        >
            <p className="font-sans text-sm font-medium text-ink mb-4">{title}</p>
            <div
                className="h-[1.5px] mb-5"
                style={{
                    background: isPositive
                        ? "linear-gradient(to right, #E0DDD8, transparent)"
                        : "linear-gradient(to right, #C8C4BC, transparent)",
                }}
            />
            <ul className="flex flex-col gap-5">
                {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                        <span
                            className={`text-xs font-bold flex-shrink-0 ${isPositive ? "text-forest" : "text-ink-muted"
                                }`}
                        >
                            {isPositive ? "✓" : "✗"}
                        </span>
                        <span className="font-sans text-xs text-ink-muted">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}