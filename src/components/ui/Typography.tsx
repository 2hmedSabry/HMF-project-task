import React, { ReactNode } from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant: "h1" | "h2" | "h3" | "body" | "body-small" | "description" | "tag";
    children: ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const variantMapping = {
    h1: "text-[40px] md:text-[64px] font-bold leading-tight",
    h2: "text-[32px] md:text-[40px] font-bold",
    h3: "text-[20px] md:text-[24px] font-bold",
    body: "text-[18px] md:text-[20px] leading-[32px]",
    "body-small": "text-[14px] leading-tight",
    description: "text-[16px] text-text-description",
    tag: "text-[14px] font-medium tracking-wider uppercase",
};

/**
 * Standardized Typography component for Sustainability.
 * Centralizes all font sizes and weights.
 */
export default function Typography({
    variant,
    children,
    className = "",
    as,
    ...props
}: TypographyProps) {
    const Component = as || (variant.startsWith("h") ? (variant as any) : "p");
    const baseStyles = variantMapping[variant];

    return (
        <Component className={`${baseStyles} ${className}`} {...props}>
            {children}
        </Component>
    );
}
