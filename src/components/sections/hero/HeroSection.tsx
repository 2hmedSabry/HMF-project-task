'use client'
import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "./icons/PlayIcon";
import { STATS } from "@/constants/status";
import { HERO_CONTENT } from "@/constants/heroContent";
import Button from "@/components/ui/Button";
import { ArrowsIcon } from "./icons/ArrowsIcon";

export default function HeroSection({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState("/hero-backgroundN2.jpg");

  return (
    <section className="relative min-h-screen h-[1105px] " dir="rtl">

      <Image
        src={bgImage}
        alt="HMF Consulting Engineering"
        fill
        priority
        sizes="100vw"
        className=" -z-20 object-cover transition-all duration-700 ease-in-out"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="px-12 mx-auto " >
        {children}

        {/* First Part  */}
        <div className="px-8 flex flex-col text-white ">
          <div className="flex items-center py-18  gap-4 ">
            <button aria-label="تشغيل الفيديو" className="w-26 h-16 rounded-[100px] border border-white/50  flex items-center justify-center " >
              <PlayIcon />
            </button>
            <span className="text-[24px] font-bold" >تشغيل الفيديو</span>
          </div>
          {/* Main Content */}

          <div className="flex flex-col md:flex-row md:justify-between text-center md:text-right pt-20">
            <div className="w-full md:w-2/3 flex flex-col gap-8">
              <div>
                <h1 className="mb-4 text-2xl lg:text-4xl font-bold ">
                  {HERO_CONTENT.title}
                </h1>
                <p className=" lg:max-w-6xl text-sm lg:text-xl leading-10">
                  {HERO_CONTENT.description}
                </p>
              </div>

              <Button href={HERO_CONTENT.ctaLink} className="text-black  bg-white sm:px-12 lg:px-24  py-4 rounded-[12px] font-bold text-[18px]" icon={<ArrowsIcon />}>
                {HERO_CONTENT.cta}
              </Button>
            </div>

            <div className="flex flex-row md:flex-col gap-4 ">
              <div
                className={`rounded-xl shadow-[0_0_10.4px_#ffffff80] cursor-pointer transition-transform hover:scale-105 ${bgImage === "/hero-backgroundN2.jpg" ? "ring-2 ring-white/50" : ""}`}
                onClick={() => setBgImage("/hero-backgroundN2.jpg")}
              >
                <Image src="/hero-backgroundN2.jpg" alt="Hero Banner" width={200} height={156} style={{ height: 'auto' }} className="rounded-xl" />
              </div>
              <div
                className={`rounded-xl shadow-[0_0_10.4px_#ffffff80] cursor-pointer transition-transform hover:scale-105 ${bgImage === "/hero-backgroundN1.jpg" ? "ring-2 ring-white/50" : ""}`}
                onClick={() => setBgImage("/hero-backgroundN1.jpg")}
              >
                <Image src="/hero-backgroundN1.jpg" alt="Hero Banner" width={200} height={156} style={{ height: 'auto' }} className="rounded-xl" />
              </div>
            </div>
          </div>



          {/* Last Part */}
          <div className="flex gap-2 lg:gap-10 mt-12 lg:mt-20 justify-center md:justify-start">
            {STATS.map((item) => (
              <div key={item.label} className="text-center text-sm md:text-[24px] font-medium flex flex-col items-center gap-2 md:gap-4 lg:gap-6">
                <p className="px-2 sm:px-6 md:px-10">{item.label}</p>
                <p className="px-2 sm:px-6 md:px-10">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
