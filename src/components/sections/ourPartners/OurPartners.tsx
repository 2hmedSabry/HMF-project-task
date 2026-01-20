"use client";

import Tag from "@/components/ui/Tag";
import Image from "next/image";
import NavigationArrows from "@/components/ui/NavigationArrows";

export default function OurPartners() {
    return (
        <section className="min-h-screen container mx-auto py-[60px] flex flex-col gap-12">
            <div className="flex flex-col items-center  ">
                <Tag >شركائنا</Tag>
                <h2 className="text-[40px] font-bold">شركاؤنا في النجاح</h2>
                <p className="text-[#666666] mt-5 ">نفخر بتعاوننا مع مؤسسات وشركات رائدة تشاركنا التزامنا بالجودة والابتكار والتميز. معًا، نبني قيمة مستدامة ونُنجز مشاريع ناجحة في مختلف القطاعات.</p>

            </div>
            <div className="grid grid-cols-3">
                <div className="w-[410px] h-[410px] bg-white flex items-center justify-center">
                    <Image src="/ourPartners/ourPartners1.png" width={410} height={410} alt="شريك 1" />
                </div>
                <div className="w-[410px] h-[410px] bg-white flex items-center justify-center">
                    <Image src="/ourPartners/ourPartners2.png" width={410} height={410} alt="شريك 2" />
                </div>
                <div className="w-[410px] h-[410px] bg-white flex items-center justify-center">
                    <Image src="/ourPartners/ourPartners3.png" width={410} height={410} alt="شريك 3" />
                </div>
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-end  ">
                <NavigationArrows
                    onPrevious={() => console.log('Previous')}
                    onNext={() => console.log('Next')}
                />
            </div>
        </section>
    );
}