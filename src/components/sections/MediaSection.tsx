'use client'
import { useState } from "react";
import { MEDIA_SECTION_CONTENT } from "@/constants/content/media";
import { AnimatedNav } from "@/components/ui/animations";
import NavigationArrows from "@/components/ui/NavigationArrows";
import MediaCard from "@/components/ui/cards/MediaCard";
import { Typography } from "@/components/ui";

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
        <section className="min-h-screen container mx-auto py-16 md:py-24 flex flex-col gap-8 lg:gap-12" dir="rtl">
            {/* Header row with title and nav */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 ">
                <Typography variant="h2" className="hidden lg:block">
                    <span dangerouslySetInnerHTML={{ __html: MEDIA_SECTION_CONTENT.title }} />
                </Typography>
                <div className="lg:absolute md:left-1/2 md:-translate-x-1/2">
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
                <div className="flex flex-row-reverse gap-8 lg:gap-12">
                    {/* Main Card (current) */}
                    <MediaCard card={currentCard} isAnimating={isAnimating} />

                    {/* Preview Card (next) - only show if exists */}
                    {nextCard && (
                        <MediaCard card={nextCard} isAnimating={isAnimating} />
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