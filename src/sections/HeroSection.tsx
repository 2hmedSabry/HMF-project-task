'use client'
import { useState } from "react";
import Image from "next/image";
import { STATS } from "@/constants/status";
import { HERO_CONTENT } from "@/constants/content/hero";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import {
  Typography,
  HeroThumbnail,
  HeroStatsRow,
  HeroVideoModal,
  AnimatedButton,
  AutoWrittenText,
  PlayIcon
} from "@/components/ui";

export default function HeroSection({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState("/hero-backgroundN2.jpg");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-2 pb-10 lg:h-[1005px]  " dir="rtl">
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

      <div className="px-2 lg:px-12 mx-auto" >
        {children}

        {/* First Part  */}
        <div className="px-2 md:px-8 lg:px-16 flex flex-col text-white ">
          <div className="flex items-center px-2 py-6 md:py-10 lg:py-18  gap-4 ">
            <button
              onClick={() => setIsVideoOpen(true)}
              aria-label="تشغيل الفيديو"
              className="w-26 h-16 rounded-[100px] border border-white/50  flex items-center justify-center hover:bg-white/10 transition-colors group"
            >
              <PlayIcon />
            </button>
            <Typography variant="h3" as="span" className="min-w-[150px]">
              <AutoWrittenText
                text="تشغيل الفيديو"
              />
            </Typography>
          </div>
          {/* Main Content */}

          <div className="flex flex-col md:flex-row md:justify-between text-center md:text-right pt-20">
            <div className="w-full md:w-2/3 flex flex-col gap-8">
              <div>
                <Typography variant="h1" className="mb-4 md:text-[32px]!">
                  {HERO_CONTENT.title}
                </Typography>
                <Typography variant="body" className="max-w-xl lg:max-w-4xl mx-auto md:mx-0">
                  {HERO_CONTENT.description}
                </Typography>
              </div>

              <AnimatedButton
                href={HERO_CONTENT.ctaLink}
                text={HERO_CONTENT.cta}
                icon={<MdOutlineKeyboardDoubleArrowLeft size={24} />}
                className="text-black bg-white  text-[18px]"
              />
            </div>

            <div className="flex flex-row md:flex-col gap-4 mx-auto md:mx-0">
              <HeroThumbnail
                src="/hero-backgroundN2.jpg"
                isActive={bgImage === "/hero-backgroundN2.jpg"}
                onClick={() => setBgImage("/hero-backgroundN2.jpg")}
              />
              <HeroThumbnail
                src="/hero-backgroundN1.jpg"
                isActive={bgImage === "/hero-backgroundN1.jpg"}
                onClick={() => setBgImage("/hero-backgroundN1.jpg")}
              />
            </div>
          </div>

          <HeroStatsRow stats={STATS} />
        </div>
      </div>

      <HeroVideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </section>
  );
}
