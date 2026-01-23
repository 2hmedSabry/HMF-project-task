import React, { ReactNode } from "react";

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    fullWidth?: boolean;
    bg?: string;
}

/**
 * Standard Section Wrapper for Reusability and Sustainability.
 * Handles semantic HTML and consistent spacing.
 */
export default function Section({
    id,
    children,
    className = "",
    containerClassName = "",
    fullWidth = false,
    bg = "bg-transparent"
}: SectionProps) {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${bg} ${className}`}
            aria-labelledby={id ? `${id}-title` : undefined}
        >
            <div className={`
                ${fullWidth ? "w-full" : "container mx-auto px-4 md:px-6"} 
                ${containerClassName}
            `}>
                {children}
            </div>
        </section>
    );
}
