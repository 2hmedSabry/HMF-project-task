'use client'
import { useState } from "react";
import { MEDIA_SECTION_CONTENT } from "@/constants/mediaSectionContent"
import Image from "next/image";
import AnimatedNav from "@/components/ui/AnimatedNav";
import AnimatedArrowLink from "@/components/ui/AnimatedArrowLink";
import ArrowIcon from "@/components/icons/ArrowIcon";
import NavigationArrows from "@/components/ui/NavigationArrows";

export default function MediaSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const totalCards = MEDIA_SECTION_CONTENT.cards.length;

    const handlePrevious = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                // Loop to last card when at first
                setCurrentIndex(currentIndex === 0 ? totalCards - 1 : currentIndex - 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                // Loop to first card when at last
                setCurrentIndex(currentIndex === totalCards - 1 ? 0 : currentIndex + 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    // Get the two visible cards (current and next with loop)
    const currentCard = MEDIA_SECTION_CONTENT.cards[currentIndex];
    const nextCardIndex = (currentIndex + 1) % totalCards;
    const nextCard = MEDIA_SECTION_CONTENT.cards[nextCardIndex];

    return (
        <section className="min-h-screen container mx-auto py-[60px] flex flex-col gap-8" dir="rtl">
            {/* Header row with title and nav */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: MEDIA_SECTION_CONTENT.title }} />
                <div className="absolute left-1/2 -translate-x-1/2">

                    {/* PROBLEM FIXED: lineColor was "px-1 py-5 font-bold text-[20px] cursor-pointer" which are CSS classes, NOT a color!
                    The animated line needs a color value like "bg-black" or "#000000" to be visible */}
                    <AnimatedNav
                        links={MEDIA_SECTION_CONTENT.list}
                        textColor="text-black"
                        navClassName="px-16 w-[393px] h-[64px] flex flex-row justify-between items-center"
                        navBorderColor="border border-[#B7B7B7/80]"
                        lineColor="bg-black"
                    />
                </div>



                {/* Empty div to balance flexbox */}
                <div className="w-[259px]"></div>
            </div>
            <div className="mx-auto">

            </div>
            {/* Cards container - shows 2 cards with fade effect */}
            <div className="overflow-visible">
                <div className="flex flex-row-reverse gap-8">
                    {/* Main Card (current) */}
                    <div className="shrink-0 flex flex-row items-center bg-white rounded-[32px] w-[1028px] h-[442px]">
                        <div className={`w-[50%] flex flex-col p-8 gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-bold">{currentCard.title}</h3>
                                <p className="text-lg pb-2">{currentCard.description}</p>
                            </div>
                            <div className="flex flex-col gap-13">
                                <AnimatedArrowLink href="/news" className="mb-3" icon={<ArrowIcon />} />
                                <span className="px-4 py-1 rounded-full border-[0.8px] mb-3 w-[146px] h-[55px] flex items-center justify-center">{currentCard.tag}</span>
                            </div>
                        </div>
                        <div className={`w-[50%] h-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            <Image src={currentCard.image} alt={currentCard.title} width={640} height={551} className="rounded-l-[32px] w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Preview Card (next) - only show if exists */}
                    {nextCard && (
                        <div className="shrink-0 flex flex-row items-center bg-white rounded-[32px] w-[1028px] h-[442px]">
                            <div className={`w-[50%] flex flex-col p-8 gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl font-bold">{nextCard.title}</h3>
                                    <p className="text-lg pb-2">{nextCard.description}</p>
                                </div>
                                <div className="flex flex-col gap-13">
                                    <AnimatedArrowLink href="/news" className="mb-3" />
                                    <span className="px-4 py-1 rounded-full border-[0.8px] mb-3 w-[146px] h-[55px] flex items-center justify-center">{nextCard.tag}</span>
                                </div>
                            </div>
                            <div className={`w-[50%] h-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                                <Image src={nextCard.image} alt={nextCard.title} width={640} height={551} className="rounded-l-[32px] w-full h-full object-cover" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end">
                <NavigationArrows
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    isAtStart={currentIndex === 0}
                    isAtEnd={currentIndex === totalCards - 1}
                />
            </div>
        </section>
    );
}