import Image from "next/image";
import { PlayIcon } from "./icons/PlayIcon";
import { STATS } from "@/constants/status";
import { HERO_CONTENT } from "@/constants/heroContent";
import Button from "@/components/ui/Button";
import { ArrowsIcon } from "./icons/ArrowsIcon";

export default function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen " dir="rtl">

      <Image
        src="/hero-backgroundN2.jpg"
        alt="HMF Consulting Engineering"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 text-white container mx-auto " >
        {children}

        {/* First Part  */}
        <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
          <button aria-label="تشغيل الفيديو" className="w-26 h-16 rounded-full bg-transparent border border-white/50  flex items-center justify-center my-12 " >
            <PlayIcon />
          </button>
          <span className="text-[24px] font-bold" >تشغيل الفيديو</span>
        </div>
        {/* Main Content */}


        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 items-center  text-center md:text-right  ">
          <div className="w-10/12">
            <h1 className="mb-4 text-[24px] lg:text-[40px] font-bold ">
              {HERO_CONTENT.title}
            </h1>
            <p className=" lg:max-w-6xl text-sm lg:text-[24px] ">
              {HERO_CONTENT.description}
            </p>
            <Button href={HERO_CONTENT.ctaLink} className="text-black bg-white sm:px-12 lg:px-24  py-4 rounded-[12px] font-bold text-[18px]" icon={<ArrowsIcon />}>
              {HERO_CONTENT.cta}
            </Button>

          </div>
          <div className="flex flex-row md:flex-col gap-4 mx-auto mt-8">
            <div className="rounded-xl shadow-[0_0_10.4px_#ffffff80]">
              <Image src="/hero-backgroundN2.jpg" alt="Hero Banner" width={200} height={156} style={{ height: 'auto' }} className="rounded-xl" />
            </div>
            <div className="rounded-xl shadow-[0_0_10.4px_#ffffff80]">
              <Image src="/hero-backgroundN1.jpg" alt="Hero Banner" width={200} height={156} style={{ height: 'auto' }} className="rounded-xl" />
            </div>
          </div>
        </div>



        {/* Last Part */}
        <div className="flex gap-2 lg:gap-10 mt-12 lg:mt-20 justify-center md:justify-start">
          {STATS.map((item) => (
            <div key={item.label} className="text-center text-sm md:text-[24px] lg:text-[28px] font-medium flex flex-col items-center gap-2 md:gap-4 lg:gap-6">
              <p className="px-2 sm:px-6 md:px-10">{item.label}</p>
              <p className="px-2 sm:px-6 md:px-10">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



