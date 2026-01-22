import AnimatedButton from "@/components/ui/AnimatedButton"
import Button from "@/components/ui/Button"
import Tag from "@/components/ui/Tag"
import { SERVICES_CONTENT, SERVICES_CARDS } from "@/constants/servicesContent"
import Image from "next/image"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"


export default function OurServices() {
    return (
        <section id="ourServices" className="min-h-screen container mx-auto py-10 ">
            <div className="flex flex-row justify-between ">
                <div className="">
                    <Tag>{SERVICES_CONTENT.title}</Tag>
                    <h2 className="text-[64px] font-bold " dangerouslySetInnerHTML={{ __html: SERVICES_CONTENT.description }} />
                    <p className="text-[24px] leading-[140%] text-[#666666] mt-8 w-[450px]">{SERVICES_CONTENT.description2}</p>
                    <AnimatedButton
                        href={SERVICES_CONTENT.ctaLink}
                        text={SERVICES_CONTENT.cta}
                        icon={<MdOutlineKeyboardDoubleArrowLeft size={24} />}
                        className="flex items-center justify-center gap-2 bg-black text-white rounded-[12px] text-center font-bold text-[18px] mt-[21px]"
                    />
                </div>

                <div className=" grid grid-cols-2 gap-4">
                    {SERVICES_CARDS.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col shadow-[0px_0px_2px_0px_#00000040] w-[394px] h-[380px] hover:h-[410px] hover:-mt-[15px] hover:mb-[19px] mb-4 rounded-[16px] bg-white overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
                        >
                            {/* Image container - shrinks on hover */}
                            <div className="relative w-full h-[260px] group-hover:h-[180px] transition-all duration-500 ease-in-out overflow-hidden rounded-sm">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 394px"
                                    className="rounded-sm object-cover scale-110 transition-transform duration-500 ease-in-out group-hover:scale-100"
                                />
                            </div>
                            {/* Text container - expands on hover */}
                            <div className="py-3 px-4 flex-1 flex flex-col transition-all duration-500 ease-in-out overflow-hidden">
                                <h3 className="font-bold text-[20px]">
                                    {service.title}
                                </h3>
                                {/* Description - shows ~35 chars by default, full text on hover */}
                                <p className="py-2 font-medium text-[#666666] transition-all duration-500">
                                    <span className="group-hover:hidden">
                                        {service.description.slice(0, 35)}...
                                    </span>
                                    <span className="hidden group-hover:inline">
                                        {service.description}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}