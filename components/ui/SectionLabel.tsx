interface SectionLabelProps {
    text: string;
    className?: string;
}

export default function SectionLabel ({ text, className = ""}: SectionLabelProps){
    return(
        <p
        className={'text-xs font-sans font-medium tracking-[0.15em] uppercase text-ink-muted ${className}'}
        >
            {text}
        </p>
    );
}