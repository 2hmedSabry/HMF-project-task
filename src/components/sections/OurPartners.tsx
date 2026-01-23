"use client";

import Tag from "@/components/ui/Tag";
import Image from "next/image";
import { Section } from "@/components/ui";
import NavigationArrows from "@/components/ui/NavigationArrows";
import { OUR_PARTNERS_CONTENT } from "@/constants/content/ourPartners";
import SectionHeader from "@/components/ui/SectionHeader";

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
                    <div key={partner.id} className="group w-full h-[410px] relative overflow-hidden cursor-pointer">
                        {/* Black content layer - slides UP from below on hover */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white z-0 translate-y-full group-hover:translate-y-0 transition-all duration-700">
                            <Image src={partner.image} width={300} height={300} alt={partner.alt} className="mb-4 brightness-0 invert" />
                            <p className="text-center text-lg p-4">{partner.description}</p>
                        </div>
                        {/* White card layer - ON TOP (z-10) - slides DOWN on hover */}
                        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10 transition-transform duration-800 group-hover:translate-y-full hover:rounded-t-4xl">
                            <Image src={partner.image} width={410} height={410} alt={partner.alt} className="brightness-0" />
                        </div>
                    </div>
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