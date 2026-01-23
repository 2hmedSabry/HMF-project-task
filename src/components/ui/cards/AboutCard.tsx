import React from "react";
import { AboutCard as AboutCardType } from "@/types/content";

interface AboutCardProps {
    card: AboutCardType;
    isReversed: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    index: number;
}

export default function AboutCard({
    card,
    isReversed,
    onMouseEnter,
    onMouseLeave,
    index
}: AboutCardProps) {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`group flex flex-row gap-0 rounded-lg mx-auto px-4 py-3 cursor-pointer transition-all duration-300 ease-in-out  ${index === 0
                ? isReversed
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                : isReversed
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                }`}
            style={index !== 0 ? { boxShadow: '0px 0px 2px 0px #00000040' } : undefined}
            tabIndex={0}
            role="listitem"
        >
            <div className="flex flex-row items-center justify-center gap-1.5 max-w-[350px]">
                <div className={`shrink-0 w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300 ${isReversed ? 'bg-white text-black' : 'bg-transparent'
                    }`}>
                    <card.icon />
                </div>
                <div>
                    <h3 className="mb-2 text-2xl font-bold">{card.title}</h3>
                    <p className={`text-[13px] leading-[16px] transition-colors duration-300 ${index === 0
                        ? isReversed ? 'text-[#848484]' : 'text-white'
                        : isReversed ? 'text-white' : 'text-[#848484]'
                        }`}>
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
