"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate, useMotionValueEvent } from "framer-motion";
import { MEDIA_SECTION_CONTENT } from "@/constants/content/media";
import { Typography, MediaCard, AnimatedNav, NavigationArrows } from "@/components/ui";

export default function MediaSection() {
    const [width, setWidth] = useState(0);
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const cards = MEDIA_SECTION_CONTENT.cards;

    useEffect(() => {
        const calculateWidth = () => {
            if (carouselRef.current && innerRef.current) {
                // In RTL, we might want to ensure we're strictly measuring the overflow distance
                // scrollWidth - offsetWidth gives the total scrollable area
                setWidth(innerRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };

        calculateWidth();
        window.addEventListener("resize", calculateWidth);
        return () => window.removeEventListener("resize", calculateWidth);
    }, [cards]);

    // Update active nav based on horizontal drag position
    useMotionValueEvent(x, "change", (latestString) => {
        const latest = typeof latestString === 'number' ? latestString : parseFloat(latestString);
        // In LTR, x is negative when viewing content to the right
        if (latest < -300) {
            setActiveNavIndex(1);
        } else {
            setActiveNavIndex(0);
        }
    });

    const handleNavClick = (index: number) => {
        // News (0) -> Start coordinates (0)
        // Events (1) -> Scroll to reveal right content (negative X)
        const targetX = index === 0 ? 0 : -650;

        // Clamp to LTR bounds [-width, 0]
        const clampedX = Math.min(Math.max(targetX, -width), 0);

        animate(x, clampedX, {
            type: "spring",
            stiffness: 300,
            damping: 30
        });
    };

    const handleDragEnd = () => {
        if (!innerRef.current) return;

        // Calculate snap point based on card width
        // We assume the first child is representative of card width
        const firstCard = innerRef.current.children[0] as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 32; // gap-8 = 32px
        const stride = cardWidth + gap;

        const currentX = x.get();
        const velocity = x.getVelocity();

        // Project where the drag would land based on velocity (for swipe feel)
        const projectedX = currentX + (velocity * 0.2);

        // Find closest index
        // In LTR logic: x is negative. Index 0 at 0, Index 1 at -stride, etc.
        const targetIndex = Math.round(projectedX / stride);
        const targetX = targetIndex * stride;

        // Clamp to valid range [-width, 0]
        const clampedX = Math.min(Math.max(targetX, -width), 0);

        animate(x, clampedX, {
            type: "spring",
            stiffness: 400,
            damping: 40
        });
    };

    const handleCardNavigation = (direction: 'prev' | 'next') => {
        if (!innerRef.current) return;
        const firstCard = innerRef.current.children[0] as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 32;
        const stride = cardWidth + gap;
        const currentX = x.get();

        // In LTR, x is negative. Target index is currentX / stride.
        const currentIndex = Math.round(currentX / stride);
        const targetIndex = direction === 'prev' ? currentIndex + 1 : currentIndex - 1;
        const targetX = targetIndex * stride;

        const clampedX = Math.min(Math.max(targetX, -width), 0);

        animate(x, clampedX, {
            type: "spring",
            stiffness: 300,
            damping: 30
        });
    };

    return (
        <section className="mx-auto py-16 md:py-24 flex flex-col gap-12 overflow-hidden" dir="ltr">

            {/* Header Row: Title & Nav */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
                <Typography variant="h2" className="hidden lg:block">
                    <span dangerouslySetInnerHTML={{ __html: MEDIA_SECTION_CONTENT.title }} />
                </Typography>

                <div className="w-full md:w-auto flex justify-center">
                    <AnimatedNav
                        links={MEDIA_SECTION_CONTENT.list.map((item, index) => ({
                            ...item,
                            onClick: () => handleNavClick(index),
                            isActive: index === activeNavIndex
                        }))}
                        textColor="text-black"
                        navClassName="px-8 lg:px-16 w-full md:w-[393px] h-[64px] flex flex-row justify-between items-center"
                        navBorderColor="border border-[#B7B7B7/80]"
                        lineColor="bg-black"
                    />
                </div>
                {/* Spacer to balance title */}
                <div className="hidden lg:block w-[250px]"></div>
            </div>

            {/* Draggable Cards Row */}
            <div ref={carouselRef} className="w-full cursor-grab active:cursor-grabbing pr-4">
                <motion.div
                    ref={innerRef}
                    style={{ x }}
                    drag="x"
                    // In LTR, we drag Left (negative) to see overflowing right content.
                    // So constraints are effectively [-width, 0].
                    dragConstraints={{ left: -width, right: 0 }}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "grabbing" }}
                    className="flex flex-nowrap flex-row gap-8 w-fit pr-12"
                >
                    {cards.map((card, index) => (
                        <div key={index} className="w-[90vw] md:w-[600px] lg:w-[900px] shrink-0">
                            <MediaCard card={card} isAnimating={false} className="w-full select-none pointer-events-none md:pointer-events-auto" />
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="container mx-auto flex justify-end mt-4">
                <NavigationArrows
                    onPrevious={() => handleCardNavigation('prev')}
                    onNext={() => handleCardNavigation('next')}
                />
            </div>
        </section>

    );
}