import { AnimatedButton } from "@/components/ui/animations"
import { Section } from "@/components/ui"
import Button from "@/components/ui/Button"
import Tag from "@/components/ui/Tag"
import { SERVICES_CONTENT, SERVICES_CARDS } from "@/constants/content/services"
import Image from "next/image"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import SectionHeader from "@/components/ui/SectionHeader"
import ServiceCard from "@/components/ui/cards/ServiceCard"


export default function OurServices() {
    return (
        <Section id="ourServices" bg="bg-[#F7F6F6]">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
                <div>
                    <SectionHeader
                        title={SERVICES_CONTENT.title}
                        description={SERVICES_CONTENT.description}
                        description2={SERVICES_CONTENT.description2}
                        cta={SERVICES_CONTENT.cta}
                        ctaLink={SERVICES_CONTENT.ctaLink}
                        className="w-full lg:w-[405px]"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 w-full">
                    {SERVICES_CARDS.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    )
}