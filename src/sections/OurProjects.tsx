"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { OUR_PROJECTS_CONTENT } from "@/constants/content/ourProjects";
import { ProjectCardContent, AnimatedNav } from "@/components/ui";

export default function OurProjects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const projects = OUR_PROJECTS_CONTENT.list;

    // Calculate scroll progress through this tall section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update active index based on scroll position
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const total = projects.length;
        // Map 0-1 to discrete indices
        const index = Math.min(
            Math.max(Math.floor(latest * total), 0),
            total - 1
        );
        setActiveIndex(index);
    });

    const handleNavClick = (index: number) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const scrollableDistance = container.offsetHeight - window.innerHeight;

        // Calculate target position to land inside the specific index's scrolling zone
        // effectively (index / total) * scrollableDistance
        // We add a tiny buffer (0.01) to ensure we cross the threshold into the next index
        const progressTarget = (index + 0.1) / projects.length;
        const targetY = absoluteTop + (progressTarget * scrollableDistance);

        window.scrollTo({
            top: targetY,
            behavior: "smooth"
        });
    };

    return (
        <section
            ref={containerRef}
            id="ourProjects"
            className="relative"
            // Multiply viewport height by number of projects to give enough scroll room
            style={{ height: `${projects.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden py-10">
                <div className="container mx-auto px-5 md:px-0 flex flex-col items-center gap-12 lg:gap-16 w-full">

                    {/* Navigation - Acts as indicator / header */}
                    <div className="relative z-20 w-full flex justify-center">
                        <AnimatedNav
                            defaultField={OUR_PROJECTS_CONTENT.title}
                            links={projects.map((project, index) => ({
                                key: index,
                                label: project.city,
                                href: "#",
                                onClick: () => {
                                    handleNavClick(index);
                                },
                                isActive: index === activeIndex
                            }))}
                            textColor="text-black"
                            navClassName="px-16 lg:w-[43.5%] h-[64px] flex flex-row justify-between items-center"
                            navBorderColor="border border-[#B7B7B7/80]"
                            lineColor="bg-black"
                        />
                    </div>

                    {/* Card Container - Transitions based on activeIndex */}
                    <div className="relative z-0 w-full lg:w-[1280px] h-[551px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 150, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -150, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <div className="bg-white rounded-sm lg:rounded-[32px] overflow-hidden shadow-sm w-full h-full flex lg:flex-row flex-col-reverse">
                                    <ProjectCardContent project={projects[activeIndex]} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}


