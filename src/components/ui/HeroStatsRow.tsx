"use client"
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { StatItem } from "@/types/content";

interface HeroStatsRowProps {
    stats: StatItem[];
}

function DigitColumn({ digit, delay }: { digit: string; delay: number }) {
    const target = parseInt(digit);

    // Create an array [0, 1, ..., 9]
    const numbers = Array.from({ length: 10 }, (_, i) => i);

    return (
        <div className="relative h-[1.2em] w-[0.6em] overflow-hidden inline-block">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: `-${target * 10}%` }}
                transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1], // Custom "Expo" ease for smooth wheel stop
                    delay: delay
                }}
                className="absolute left-0 top-0 w-full"
            >
                {numbers.map((num) => (
                    <div key={num} className="h-[1.2em] flex items-center justify-center">
                        {num}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

function Counter({ value }: { value: string | number }) {
    const stringValue = String(value);
    const characters = stringValue.split("");

    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { margin: "-20px" });

    // Only render the animation if in view
    return (
        <span ref={ref} className="inline-flex items-center justify-center leading-none h-[1.2em] overflow-hidden" dir="ltr">
            {characters.map((char, index) => {
                const isNumber = /[0-9]/.test(char);

                if (isNumber && isInView) {
                    return (
                        <DigitColumn
                            key={`${index}-${char}`}
                            digit={char}
                            delay={index * 0.1} // Stagger digits slightly
                        />
                    );
                }

                // Static character or placeholder if not in view yet
                return (
                    <span key={index} className="h-[1.2em] flex items-center">
                        {char}
                    </span>
                );
            })}
        </span>
    );
}

export default function HeroStatsRow({ stats }: HeroStatsRowProps) {
    return (
        <div className="flex gap-2 lg:gap-17 mt-12 lg:mt-22 justify-center lg:justify-start text-nowrap">
            {stats.map((item) => (
                <div key={item.label} className="text-center sm:text-xl md:text-[24px] font-medium flex flex-col items-center gap-2 md:gap-4 lg:gap-6">
                    <p className="px-2 sm:px-6 md:px-10">{item.label}</p>
                    <p className="px-2 sm:px-6 md:px-10">
                        <Counter value={item.value} />
                    </p>
                </div>
            ))}
        </div>
    );
}
