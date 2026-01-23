import Image from "next/image"
import { ProjectLocationIcon } from "@/components/icons"
import { AnimatedButton } from "@/components/ui/animations"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import { ProjectItem } from "@/types/content"

interface ProjectCardContentProps {
    project: ProjectItem;
}

export default function ProjectCardContent({ project }: ProjectCardContentProps) {
    return (
        <>
            <div className="lg:w-[50%] w-full flex flex-col px-4 lg:px-0 lg:pr-[32px] gap-5">
                <div className="flex flex-row-reverse lg:flex-row pt-2 items-center justify-between mb-0 md:mb-3 text-lg font-bold lg:contents">
                    <Image
                        src={project.flag}
                        alt="flag"
                        width={150}
                        height={100}
                        className="opacity-50 w-[150px] h-[100px] object-cover"
                    />
                    <span className="flex flex-row items-center gap-1 text-lg font-bold">
                        <ProjectLocationIcon />
                        مدينة {project.city}
                    </span>
                </div>
                <h2 className="text-2xl font-bold">{project.projectName}</h2>
                <p className="text-lg lg:pb-8 sm:w-[528px] sm:h-[132px] leading-8">
                    {project.description}
                </p>

                <AnimatedButton
                    href={project.ctaLink}
                    text={project.cta}
                    icon={<MdOutlineKeyboardDoubleArrowLeft size={24} />}
                    className="flex items-center justify-center gap-2 px-black text-white bg-black rounded-[12px] text-center font-bold text-[18px]"
                />
            </div>
            <div className="lg:w-[50%] w-full">
                <Image
                    src={project.image}
                    alt="project"
                    width={640}
                    height={551}
                    className="lg:rounded-[32px] w-[640px] h-[551px] object-cover"
                />
            </div>
        </>
    )
}
