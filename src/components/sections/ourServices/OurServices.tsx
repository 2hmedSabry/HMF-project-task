import Button from "@/components/ui/Button"
import Tag from "@/components/ui/Tag"
import { SERVICES_CONTENT , SERVICES_CARDS } from "@/constants/servicesContent"
import Image from "next/image"


export default function OurServices() {
    return (
        <section id="about" className="min-h-screen container mx-auto py-10 ">
           <div className="flex flex-row justify-between ">
             <div className="min-h-[472px]">
            <Tag>{SERVICES_CONTENT.title}</Tag>
            <h1 className="text-[64px] font-bold " dangerouslySetInnerHTML={{ __html: SERVICES_CONTENT.description }} />
            <p className="text-[24px] leading-[140%] text-[#666666] mt-8 w-[450px]">{SERVICES_CONTENT.description2}</p>
            <Button href={SERVICES_CONTENT.ctaLink} className="bg-black text-white w-[271px] h-[56px] rounded-[12px] text-center font-bold text-[18px] mt-[21px]" >
                {SERVICES_CONTENT.cta}
            </Button>
            </div>

            <div className=" grid grid-cols-2 gap-4">
                {SERVICES_CARDS.map((service, index) => (
                    <div key={index} className="flex flex-col shadow-[0px_0px_2px_0px_#00000040] w-[394px] h-[406px] mb-4 rounded-[16px] bg-white">
                        <Image src={service.image} alt={service.title} width={300} height={300} className="rounded-[16px] w-full h-full object-cont " />
                        <div className="py-2 px-2">
                            <h1 className="font-bold text-[20px]">{service.title}</h1>
                            <p className="py-2 font-medium">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </section>
    )
}