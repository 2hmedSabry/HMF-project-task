'use client'
import { useState } from "react";
import NavigationArrows from "@/components/ui/NavigationArrows";
import { MEDIA_SECTION_CONTENT } from "@/constants/mediaSectionContent"
import Image from "next/image";
import Link from "next/link";
import NavLinkAnimation from "@/components/ui/NavLinkAnimation";
import AnimatedNav from "@/components/ui/AnimatedNav";

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
                                <Link href="/news" className="px-4 py-1 rounded-full border-[0.8px] mb-3 w-[95px] h-[55px] flex items-center justify-center">
                                    <svg width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.623 18.2973L19.534 20.6913C19.3285 20.7403 19.1348 20.8295 18.9639 20.9536C18.6173 21.1949 18.3799 21.5631 18.3031 21.9783C18.2605 22.1852 18.2592 22.3985 18.2993 22.6059L20.6933 33.6949C20.7379 33.9017 20.8229 34.0976 20.9432 34.2716C21.0636 34.4456 21.2171 34.5941 21.3949 34.7088C21.7539 34.9403 22.1903 35.0197 22.6079 34.9296C23.0255 34.8394 23.3902 34.5871 23.6218 34.228C23.8533 33.8689 23.9327 33.4326 23.8426 33.015L22.2538 25.7097L32.4875 32.3092C32.845 32.5398 33.2796 32.6189 33.6955 32.5291C34.1114 32.4394 34.4747 32.188 34.7053 31.8304C34.9359 31.4728 35.015 31.0383 34.9252 30.6224C34.8354 30.2064 34.5841 29.8432 34.2265 29.6126L23.9928 23.0131L31.3029 21.4465C31.5101 21.4027 31.7066 21.3183 31.881 21.1981C32.0554 21.0779 32.2043 20.9244 32.3191 20.7464C32.4338 20.5684 32.5123 20.3695 32.5498 20.161C32.5873 19.9526 32.5831 19.7388 32.5376 19.5319C32.4937 19.3247 32.4093 19.1283 32.2891 18.9539C32.169 18.7794 32.0155 18.6306 31.8375 18.5158C31.6595 18.401 31.4605 18.3226 31.2521 18.2851C31.0436 18.2476 30.8298 18.2517 30.623 18.2973Z" fill="black" />
                                    </svg>
                                </Link>
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
                                    <Link href="/news" className="px-4 py-1 rounded-full border-[0.8px] mb-3 w-[95px] h-[55px] flex items-center justify-center">
                                        <svg width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.623 18.2973L19.534 20.6913C19.3285 20.7403 19.1348 20.8295 18.9639 20.9536C18.6173 21.1949 18.3799 21.5631 18.3031 21.9783C18.2605 22.1852 18.2592 22.3985 18.2993 22.6059L20.6933 33.6949C20.7379 33.9017 20.8229 34.0976 20.9432 34.2716C21.0636 34.4456 21.2171 34.5941 21.3949 34.7088C21.7539 34.9403 22.1903 35.0197 22.6079 34.9296C23.0255 34.8394 23.3902 34.5871 23.6218 34.228C23.8533 33.8689 23.9327 33.4326 23.8426 33.015L22.2538 25.7097L32.4875 32.3092C32.845 32.5398 33.2796 32.6189 33.6955 32.5291C34.1114 32.4394 34.4747 32.188 34.7053 31.8304C34.9359 31.4728 35.015 31.0383 34.9252 30.6224C34.8354 30.2064 34.5841 29.8432 34.2265 29.6126L23.9928 23.0131L31.3029 21.4465C31.5101 21.4027 31.7066 21.3183 31.881 21.1981C32.0554 21.0779 32.2043 20.9244 32.3191 20.7464C32.4338 20.5684 32.5123 20.3695 32.5498 20.161C32.5873 19.9526 32.5831 19.7388 32.5376 19.5319C32.4937 19.3247 32.4093 19.1283 32.2891 18.9539C32.169 18.7794 32.0155 18.6306 31.8375 18.5158C31.6595 18.401 31.4605 18.3226 31.2521 18.2851C31.0436 18.2476 30.8298 18.2517 30.623 18.2973Z" fill="black" />
                                        </svg>
                                    </Link>
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