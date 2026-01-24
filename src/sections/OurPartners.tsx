"use client";

import { OUR_PARTNERS_CONTENT } from "@/constants/content/ourPartners";
import {
    Section,
    SectionHeader,
    PartnerCard,
    NavigationArrows
} from "@/components/ui";

export default function OurPartners() {
    return (
        <Section id="ourPartners" containerClassName="flex flex-col gap-8 lg:gap-12">
            <div className="flex flex-col items-center w-full">
                <SectionHeader
                    title={OUR_PARTNERS_CONTENT.title}
                    description={OUR_PARTNERS_CONTENT.subtitle}
                    description2={OUR_PARTNERS_CONTENT.description}
                    className="items-center text-center "
                    textColor="text-black"
                />
            </div>
            <div className="flex flex-col md:flex-row">
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