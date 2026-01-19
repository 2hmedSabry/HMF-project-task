import Button from "@/components/ui/Button";
import { ABOUT_CARDS, ABOUT_CONTENT } from "@/constants/aboutContent";
import Image from "next/image";
import Tag from "@/components/ui/Tag";


export default function About() {
    return (
        <section id="about" className="min-h-screen container mx-auto py-10">
            <div className="flex flex-row items-center justify-between">
                <div className="w-1/2 p-5 flex flex-col gap-2">
                    <Tag>{ABOUT_CONTENT.title}</Tag>
                    <h1 className="text-[40px] font-bold " dangerouslySetInnerHTML={{ __html: ABOUT_CONTENT.description }} />
                    <p className="text-[20px] leading-[32px]">{ABOUT_CONTENT.description2}</p>
                    <Button href={ABOUT_CONTENT.ctaLink} className="bg-black text-white w-[271px] h-[56px] rounded-[12px] text-center font-bold text-[18px]" >
                        {ABOUT_CONTENT.cta}
                    </Button>

                </div>
                <div className="w-1/2 p-5 relative ">
                    {/* <div className="absolute top-[5px] left-[5px] w-[280.0272521972656px] h-[277.21417236328125px] border-[2.57px] border-black -z-10" /> */}
                    <div className="absolute top-[10px] left-[10px] w-[43%] h-[56.3%] border-[2.57px] border-black -z-10" />
                    <Image src="/about.jpg" alt="about" width={600} height={600} className="rounded-[5.14px] " />
                    <div className="" >
                        <Image src="/hero-backgroundN2.jpg" alt="about" width={100} height={100} className="rounded-[5.14px] absolute bottom-[15px] right-[10px] w-[21.6%] h-[22.4%] border-[6.43px] border-white " />
                        {/* <Image src="/hero-backgroundN2.jpg" alt="about" width={100} height={100} className="rounded-[5.14px] absolute bottom-[15px] right-[10px] w-[138.61px] h-[108.24px] border-[6.43px] border-gray-500 " /> */}

                    </div>
                </div>

            </div>


            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46px]">
                {ABOUT_CARDS.map((card, index) => (
                    <div
                        key={index}
                        className={`flex flex-row items-center justify-center gap-2 rounded-lg px-4 ${index === 0
                            ? 'bg-black text-white'
                            : 'bg-white text-black'
                            }`}
                        style={index !== 0 ? { boxShadow: '0px 0px 2px 0px #00000040' } : undefined}
                    >
                        <card.icon />
                        <div>
                            <h1 className="mb-4 text-2xl">{card.title}</h1>
                            <p className={`text-[13px] leading-[16px] ${index === 0 ? 'text-white' : 'text-[#848484]'}`}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}