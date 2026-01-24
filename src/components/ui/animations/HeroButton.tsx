"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroButtonProps {
    href: string;
    text: string;
    icon?: ReactNode;
    className?: string;
    width?: string;
    height?: string;
}

export default function HeroButton({ href, text, icon, className = "", width = "270px", height = "56px" }: HeroButtonProps) {
    const words = text.split(" ");
    // Combine words and icon into a single array of items to animate
    const items = [...words.map((w, i) => ({ type: 'text', content: w, key: i })), ...(icon ? [{ type: 'icon', content: icon, key: 'icon' }] : [])];

    return (
        <Link
            href={href}
            className={`mx-auto lg:mx-0 my-4 lg:my-0 mt-0 md:mt-4 group flex items-center justify-center gap-2 rounded-[12px] font-bold transition-all relative overflow-hidden ${className}`}
            style={{
                width: width,
                height: height,
            }}
        >
            <span className="flex items-center gap-1">
                {items.map((item, i) => (
                    <div key={item.key} className="relative overflow-hidden h-[24px]">
                        <span
                            className="flex flex-col -translate-y-[24px] group-hover:translate-y-0 transition-none group-hover:transition-transform group-hover:duration-500 group-hover:ease-in-out"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            <span className="h-[24px] flex items-center min-w-fit whitespace-nowrap">
                                {item.content}
                            </span>
                            <span className="h-[24px] flex items-center min-w-fit whitespace-nowrap">
                                {item.content}
                            </span>
                        </span>
                    </div>
                ))}
            </span>
        </Link>
    );
}
