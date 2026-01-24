'use client'
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedButtonProps {
    href: string;
    text: string;
    icon?: ReactNode;
    className?: string;
    width?: string;
    height?: string;
}

export default function AnimatedButton({ href, text, icon, className = "", width = "270px", height = "56px" }: AnimatedButtonProps) {
    return (
        <Link
            href={href}
            className={`mx-auto lg:mx-0 my-4 lg:my-0 mt-0 md:mt-4 group flex items-center justify-center gap-0.5 rounded-[12px] font-bold transition-all relative overflow-hidden ${className}`}
            style={{
                width: width,
                height: height,
            }}

        >
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes firstWord {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          50% { transform: translate(8px, -8px); opacity: 0; }
        }
        @keyframes middleWord {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          50% { transform: translate(4px, 4px); opacity: 0; }
        }
        @keyframes iconWord {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          50% { transform: translate(-8px, 8px); opacity: 0; }
        }
        .group:hover .cta-first { animation: firstWord 1s ease-in-out; }
        .group:hover .cta-middle { animation: middleWord 1s ease-in-out; }
        .group:hover .cta-icon { animation: iconWord 1s ease-in-out; }
      `}} />

            <span className="flex gap-1">
                {text.split(' ').map((word, index) => {
                    const isFirst = index === 0;
                    return (
                        <span
                            key={index}
                            className={`inline-block ${isFirst ? 'cta-first' : 'cta-middle'}`}
                        >
                            {word}
                        </span>
                    );
                })}
            </span>

            {icon && (
                <span className="inline-block cta-icon">
                    {icon}
                </span>
            )}
        </Link>

    );
}
