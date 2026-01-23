"use client";

import { Section } from "@/components/ui";
import NavigationArrows from "@/components/ui/NavigationArrows";
import { OUR_PARTNERS_CONTENT } from "@/constants/content/ourPartners";
import SectionHeader from "@/components/ui/SectionHeader";
import PartnerCard from "@/components/ui/cards/PartnerCard";

export default function OurPartners() {
    return (
        <Section id="ourPartners" containerClassName="flex flex-col gap-12">
            <div className="flex flex-col items-center w-full">
                <SectionHeader
                    title={OUR_PARTNERS_CONTENT.title}
                    description={OUR_PARTNERS_CONTENT.subtitle}
                    description2={OUR_PARTNERS_CONTENT.description}
                    className="items-center text-center "
                    textColor="text-black"
                />
            </div>
            <div className="flex">
                {OUR_PARTNERS_CONTENT.partners.map((partner) => (
                    <PartnerCard key={partner.id} partner={partner} />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end">
                <NavigationArrows
                    onPrevious={() => console.log('Previous')}
                    onNext={() => console.log('Next')}
                />
            </div>
        </Section>
    );
}