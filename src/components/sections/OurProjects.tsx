'use client'

import { useState } from "react"
import { OUR_PROJECTS_CONTENT } from "@/constants/content/ourProjects"
import { AnimatedNav } from "@/components/ui/animations"
import ProjectCardContent from "@/components/ui/cards/ProjectCardContent"

export default function OurProjects() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState<number | null>(null); // Track previous content for ghost layer
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<'enter' | 'exit'>('enter');

    const handleProjectSelect = (index: number) => {
        if (index === selectedIndex || isAnimating) return;

        // Store current index as previous before changing
        setPreviousIndex(selectedIndex);

        // Start exit animation
        setAnimationDirection('exit');
        setIsAnimating(true);

        // After exit animation, change content and start enter animation
        setTimeout(() => {
            setSelectedIndex(index);
            setAnimationDirection('enter');

            // Reset animation state after enter animation
            setTimeout(() => {
                setIsAnimating(false);
                setPreviousIndex(null); // Clear ghost layer
            }, 500);
        }, 400);
    };

    const currentProject = OUR_PROJECTS_CONTENT.list[selectedIndex];
    const previousProject = previousIndex !== null ? OUR_PROJECTS_CONTENT.list[previousIndex] : null;

    return (
        <section id="ourProjects" className="min-h-screen container mx-auto py-10 px-5 md:px-0">

            <div className="flex flex-col justify-between items-center gap-16">
                {/* PROBLEM FIXED: lineColor was "px-1 py-5 font-bold text-[20px] cursor-pointer" which are CSS classes, NOT a color!
                    The animated line needs a color value like "bg-black" or "#000000" to be visible */}
                <AnimatedNav
                    defaultField={OUR_PROJECTS_CONTENT.title}
                    links={OUR_PROJECTS_CONTENT.list.map((project, index) => ({
                        key: index,
                        label: project.city,
                        href: "#",
                        onClick: () => handleProjectSelect(index),
                    }))}
                    textColor="text-black"
                    navClassName="px-16 lg:w-[43.5%] h-[64px] flex flex-row justify-between items-center"
                    navBorderColor="border border-[#B7B7B7/80]"
                    lineColor="bg-black"
                />
                <div className="bg-white rounded-sm lg:rounded-[32px] overflow-hidden relative ">

                    {/* GHOST LAYER - Background copy that fades out (shows previous content) */}
                    {isAnimating && previousProject && (
                        <div
                            className={`absolute inset-0 flex lg:flex-row flex-col-reverse items-center justify-center lg:w-[1280px] lg:h-[551px] w-full h-full transition-opacity duration-500 ease-in-out pointer-events-none
                                ghost-fade
                                `}
                        >
                            <ProjectCardContent project={previousProject} />
                        </div>
                    )}

                    {/* MAIN CONTENT - Moves down/up with animation */}
                    <div
                        onClick={() => {
                            // if selectedIndex is the last index, go back to the first index
                            const nextIndex = (selectedIndex + 1) % OUR_PROJECTS_CONTENT.list.length;
                            handleProjectSelect(nextIndex);
                        }}
                        className={`flex lg:flex-row flex-col-reverse items-center justify-center lg:w-[1280px] lg:h-[551px] w-full h-full transition-all duration-500 ease-in-out cursor-pointer relative z-10
                            ${animationDirection === 'exit' && isAnimating
                                ? 'opacity-100 translate-y-full'
                                : animationDirection === 'enter' &&
                                'opacity-100 translate-y-0'
                            }`}
                    >
                        <ProjectCardContent project={currentProject} />
                    </div>
                </div>
            </div>

        </section>

    )
}


