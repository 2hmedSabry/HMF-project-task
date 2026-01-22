import Button from "@/components/ui/Button"
import { OUR_PROJECTS_CONTENT } from "@/constants/ourProjectsContent"
import Image from "next/image"
import Location from "./Icons/location"
import AnimatedButton from "@/components/ui/AnimatedButton"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import AnimatedNav from "@/components/ui/AnimatedNav"

export default function OurProjects() {


    return (

        <section id="ourProjects" className="min-h-screen container mx-auto py-10">
            <div className="flex flex-col justify-between items-center gap-16">
                <AnimatedNav
                    defaultField={OUR_PROJECTS_CONTENT.title}
                    links={OUR_PROJECTS_CONTENT.list.map((project, index) => ({
                        key: index,
                        label: project.city,
                        href: project.ctaLink,
                    }))}
                    textColor="text-black"
                    navClassName="px-16 w-[43.5%] h-[64px] flex flex-row justify-between items-center"
                    navBorderColor="border border-[#B7B7B7/80]"
                    lineColor="px-1 py-5 font-bold text-[20px] cursor-pointer"
                />
                <div className="flex flex-row items-center justify-center  bg-white rounded-[32px] w-[1280px] h-[551px]">
                    <div className="w-[50%] flex flex-col pr-[32px] ">
                        <Image src={OUR_PROJECTS_CONTENT.list[0].flag} alt="flag" width={100} height={100} className="opacity-50" />
                        <span className="flex flex-row items-center gap-1 mb-3 text-lg font-bold"><Location />مدينة {OUR_PROJECTS_CONTENT.list[0].city}</span>
                        <h2 className="text-2xl font-bold pb-[10px]">{OUR_PROJECTS_CONTENT.list[0].projectName}</h2>
                        <p className="text-lg pb-8 w-[528px] h-[132px]">{OUR_PROJECTS_CONTENT.list[0].description}</p>
                        <AnimatedButton
                            href={OUR_PROJECTS_CONTENT.list[0].ctaLink}
                            text={OUR_PROJECTS_CONTENT.list[0].cta}
                            icon={<MdOutlineKeyboardDoubleArrowLeft size={24} />}
                            className="flex items-center justify-center gap-2 px-6 bg-black text-white w-[270px] h-[56px] rounded-[12px] text-center font-bold text-[18px] mt-[21px]"
                        />
                    </div>
                    <div className="w-[50%] ">
                        <Image src={OUR_PROJECTS_CONTENT.list[0].image} alt="project" width={100} height={100} className="rounded-[32px] w-[640px] h-[551px] object-cover" />
                    </div>
                </div>
            </div>

        </section>

    )
}
