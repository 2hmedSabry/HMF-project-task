'use client'

import { useState } from "react"
import Button from "@/components/ui/Button"
import { OUR_PROJECTS_CONTENT } from "@/constants/content/ourProjects"
import Image from "next/image"
import { ProjectLocationIcon } from "@/components/icons"
import { AnimatedButton, AnimatedNav } from "@/components/ui/animations"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"

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
        <section id="ourProjects" className="min-h-screen container mx-auto py-10">

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
                    navClassName="px-16 w-[43.5%] h-[64px] flex flex-row justify-between items-center"
                    navBorderColor="border border-[#B7B7B7/80]"
                    lineColor="bg-black"
                />
                <div className="bg-white rounded-[32px] overflow-hidden relative">

                    {/* GHOST LAYER - Background copy that fades out (shows previous content) */}
                    {isAnimating && previousProject && (
                        <div
                            className={`absolute inset-0 flex flex-row items-center justify-center w-[1280px] h-[551px] transition-opacity duration-500 ease-in-out pointer-events-none
                                ghost-fade
                                `}
                        >
                            <div className="w-[50%] flex flex-col pr-[32px] ">
                                <Image src={previousProject.flag} alt="flag" width={100} height={100} className="opacity-50" />
                                <span className="flex flex-row items-center gap-1 mb-3 text-lg font-bold"><ProjectLocationIcon />مدينة {previousProject.city}</span>
                                <h2 className="text-2xl font-bold pb-[10px]">{previousProject.projectName}</h2>
                                <p className="text-lg pb-8 w-[528px] h-[132px]">{previousProject.description}</p>
                                <AnimatedButton
                                    className="flex items-center justify-center gap-2 px-black text-white w-[2ded-[12px] text-center font-bold text-[18px] mt-[21px]"
                                    href={previousProject.ctaLink}
                                    text={previousProject.cta}
                                    icon={<MdOutlineKeyboardDoubleArrowLeft />}

                                />
                            </div>
                            <div className="w-[50%] ">
                                <Image src={previousProject.image} alt="project" width={100} height={100} className="rounded-[32px] w-[640px] h-[551px] object-cover" />
                            </div>
                        </div>
                    )}

                    {/* MAIN CONTENT - Moves down/up with animation */}
                    <div
                        onClick={() => {
                            // if selectedIndex is the last index, go back to the first index
                            const nextIndex = (selectedIndex + 1) % OUR_PROJECTS_CONTENT.list.length;
                            handleProjectSelect(nextIndex);
                        }}
                        className={`flex flex-row items-center justify-center w-[1280px] h-[551px] transition-all duration-500 ease-in-out cursor-pointer relative z-10
                            ${animationDirection === 'exit' && isAnimating
                                ? 'opacity-100 translate-y-full'
                                : animationDirection === 'enter' &&
                                'opacity-100 translate-y-0'
                            }`}
                    >
                        <div className="w-[50%] flex flex-col pr-[32px] ">
                            <Image src={currentProject.flag} alt="flag" width={100} height={100} className="opacity-50" />
                            <span className="flex flex-row items-center gap-1 mb-3 text-lg font-bold"><ProjectLocationIcon />مدينة {currentProject.city}</span>
                            <h2 className="text-2xl font-bold pb-[10px]">{currentProject.projectName}</h2>
                            <p className="text-lg pb-8 w-[528px] h-[132px]">{currentProject.description}</p>
                            <AnimatedButton
                                href={currentProject.ctaLink}
                                text={currentProject.cta}
                                icon={<MdOutlineKeyboardDoubleArrowLeft size={24} />}
                                className="flex items-center justify-center gap-2 px-black text-white w-[ ded-[12px] text-center font-bold text-[18px] mt-[21px] "
                            />
                        </div>
                        <div className="w-[50%] ">
                            <Image src={currentProject.image} alt="project" width={100} height={100} className="rounded-[32px] w-[640px] h-[551px] object-cover" />
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

