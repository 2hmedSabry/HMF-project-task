'use client';

import { useState } from "react";
import Button from "@/components/ui/Button";
import { ABOUT_CARDS, ABOUT_CONTENT } from "@/constants/content/about";
import Image from "next/image";
import { Section } from "@/components/ui";
import SectionHeader from "@/components/ui/SectionHeader";
import AboutCard from "@/components/ui/cards/AboutCard";


export default function About() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Check if first card should be reversed (when hovering on card 1 or 2, or hovering on card 0 itself)
    const isFirstCardReversed = hoveredCard === 0 || hoveredCard === 1 || hoveredCard === 2;

    return (
        <Section id="about">
            <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-8 lg:gap-12">
                <div className="md:w-1/2 lg:p-5 flex flex-col gap-4">
                    <SectionHeader
                        title={ABOUT_CONTENT.title}
                        description={ABOUT_CONTENT.description}
                        description2={ABOUT_CONTENT.description2}
                        cta={ABOUT_CONTENT.cta}
                        ctaLink={ABOUT_CONTENT.ctaLink}
                    />
                </div>
                <div className="md:w-1/2 p-5 relative ">
                    <div className="absolute top-[10px] left-[10px] w-[43%] h-[56.3%] border-[2.57px] border-black -z-10" />
                    <Image src="/about.jpg" alt="عن الشركة" width={600} height={600} style={{ height: 'auto' }} className="rounded-[5.14px] w-full " />
                    <div className="" >
                        <div className="absolute bottom-[15px] right-[15px] w-[140px] h-[108px] rounded-[5.14px] border-[6.43px] border-white overflow-hidden">
                            <Image src="/hero-backgroundN2.jpg" alt="صورة المشروع" fill sizes="140px" className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-items-center" role="list">
                {ABOUT_CARDS.map((card, index) => (
                    <div
                        key={index}
                        className={`w-full flex justify-center ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
                    >
                        <AboutCard
                            index={index}
                            card={card}
                            isReversed={index === 0 ? isFirstCardReversed : hoveredCard === index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        />
                    </div>
                ))}
            </div>

        </Section>
    )
}