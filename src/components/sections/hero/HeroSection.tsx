'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { PlayIcon } from "./icons/PlayIcon";
import { STATS } from "@/constants/status";
import { HERO_CONTENT } from "@/constants/heroContent";
import { X } from "lucide-react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AutoWrittenText from "@/components/ui/AutoWrittenText";

export default function HeroSection({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState("/hero-backgroundN2.jpg");
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  // Handle ESC key to close video
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Auto-close video after 15 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVideoOpen) {
      timer = setTimeout(() => {
        setIsVideoOpen(false);
      }, 15500); // 15 seconds + small buffer
    }
    return () => clearTimeout(timer);
  }, [isVideoOpen]);

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
            <button
              onClick={() => setIsVideoOpen(true)}
              aria-label="تشغيل الفيديو"
              className="w-26 h-16 rounded-[100px] border border-white/50  flex items-center justify-center hover:bg-white/10 transition-colors group"
            >
              <PlayIcon />
            </button>
            <AutoWrittenText
              text="تشغيل الفيديو"
              className="text-[24px] font-bold min-w-[150px]"
            />
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

              <AnimatedButton
                href={HERO_CONTENT.ctaLink}
                text={HERO_CONTENT.cta}
                icon={<MdOutlineKeyboardDoubleArrowLeft size={24} />}
                className="mt-4  text-black bg-white  text-[18px]"
              />
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
          <div className="flex gap-2 lg:gap-10 mt-12 lg:mt-22 justify-center md:justify-start">
            {STATS.map((item) => (
              <div key={item.label} className="text-center text-sm md:text-[24px] font-medium flex flex-col items-center gap-2 md:gap-4 lg:gap-6">
                <p className="px-2 sm:px-6 md:px-10">{item.label}</p>
                <p className="px-2 sm:px-6 md:px-10">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Page Video Container */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black transition-opacity duration-500 animate-in fade-in"
        >
          {/* Close Button (Hidden by default based on request, but kept for accessibility unless you really want it gone) */}
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-8 right-8 z-110 p-4 text-white/50 hover:text-white transition-colors"
            aria-label="إغلاق"
          >
            <X size={48} strokeWidth={1} />
          </button>

          {/* Full Screen Video - No Controls, Autoplay, Muted for Autoplay compliance */}
          <div className="w-full h-full">
            <iframe
              className="w-full h-full pointer-events-none scale-110" // scale to hide potential thin edges
              src="https://www.youtube.com/embed/Mh5LY4Mz15o?autoplay=1&controls=0&mute=1&loop=1&playlist=Mh5LY4Mz15o&modestbranding=1&showinfo=0&rel=0"
              title="Building Architecture Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
