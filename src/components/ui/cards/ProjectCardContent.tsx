import Image from "next/image"
import { ProjectLocationIcon } from "@/components/ui/icons"
import { AnimatedButton } from "@/components/ui/animations"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import { ProjectItem } from "@/types/content"
import { Typography } from "@/components/ui"

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
                        sizes="150px"
                        className="opacity-50 w-[150px] h-[100px] object-cover"
                    />
                    <Typography variant="body" as="span" className="flex flex-row items-center gap-1 font-bold">
                        <ProjectLocationIcon />
                        مدينة {project.city}
                    </Typography>
                </div>
                <Typography variant="h3">{project.projectName}</Typography>
                <Typography variant="body" className="lg:pb-8 sm:w-[528px] sm:h-[132px]">
                    {project.description}
                </Typography>

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
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="lg:rounded-[32px] w-[640px] h-[551px] object-cover"
                />
            </div>
        </>
    )
}
