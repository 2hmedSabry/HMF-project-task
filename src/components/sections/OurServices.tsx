import { SERVICES_CONTENT, SERVICES_CARDS } from "@/constants/content/services";
import {
    Section,
    SectionHeader,
    ServiceCard,
} from "@/components/ui";


export default function OurServices() {
    return (
        <Section id="ourServices" bg="bg-[#F7F6F6]">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 lg:gap-6 w-full">
                    {SERVICES_CARDS.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    )
}