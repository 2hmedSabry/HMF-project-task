'use client';

import { useState } from "react";
import Button from "@/components/ui/Button";
import { ABOUT_CARDS, ABOUT_CONTENT } from "@/constants/content/about";
import Image from "next/image";
import Tag from "@/components/ui/Tag";
import { AnimatedButton } from "@/components/ui/animations";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import SectionHeader from "@/components/ui/SectionHeader";


export default function About() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Check if first card should be reversed (when hovering on card 1 or 2, or hovering on card 0 itself)
    const isFirstCardReversed = hoveredCard === 0 || hoveredCard === 1 || hoveredCard === 2;

    return (
        <section id="about" className="min-h-screen container mx-auto py-10">
            <div className="flex flex-row items-center justify-between">
                <div className="w-1/2 p-5 flex flex-col gap-2">
                    <SectionHeader
                        title={ABOUT_CONTENT.title}
                        description={ABOUT_CONTENT.description}
                        description2={ABOUT_CONTENT.description2}
                        cta={ABOUT_CONTENT.cta}
                        ctaLink={ABOUT_CONTENT.ctaLink}
                    />
                </div>
                <div className="w-1/2 p-5 relative ">
                    <div className="absolute top-[10px] left-[10px] w-[43%] h-[56.3%] border-[2.57px] border-black -z-10" />
                    <Image src="/about.jpg" alt="عن الشركة" width={600} height={600} style={{ height: 'auto' }} className="rounded-[5.14px] " />
                    <div className="" >
                        <div className="absolute bottom-[15px] right-[10px] w-[140px] h-[108px] rounded-[5.14px] border-[6.43px] border-white overflow-hidden">
                            <Image src="/hero-backgroundN2.jpg" alt="صورة المشروع" fill sizes="140px" className="object-cover" />
                        </div>
                    </div>
                </div>

            </div>


            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46px]">
                {ABOUT_CARDS.map((card, index) => {
                    // Determine if this card should show reversed colors
                    const isReversed = index === 0 ? isFirstCardReversed : hoveredCard === index;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`group flex flex-row items-center justify-center gap-2 rounded-lg px-4 cursor-pointer transition-all duration-300 ease-in-out ${index === 0
                                ? isReversed
                                    ? 'bg-white text-black'
                                    : 'bg-black text-white'
                                : isReversed
                                    ? 'bg-black text-white'
                                    : 'bg-white text-black'
                                }`}
                            style={index !== 0 ? { boxShadow: '0px 0px 2px 0px #00000040' } : undefined}
                        >
                            <card.icon />
                            <div>
                                <h3 className="mb-4 text-2xl">{card.title}</h3>
                                <p className={`text-[13px] leading-[16px] transition-colors duration-300 ${index === 0
                                    ? isReversed ? 'text-[#848484]' : 'text-white'
                                    : isReversed ? 'text-white' : 'text-[#848484]'
                                    }`}>{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    )
}