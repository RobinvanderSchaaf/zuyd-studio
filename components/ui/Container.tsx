interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className = ""}: ContainerProps){
    return (
        <div className={'mx-auto w-full max-w-6xl px-5 md:px-10 ${CLASSnAME}'}>
            {children}
        </div>
    )
}