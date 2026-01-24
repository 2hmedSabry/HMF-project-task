'use client'
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { STATS } from "@/constants/status";
import { HERO_SLIDES } from "@/constants/content/hero";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import {
  Typography,
  HeroThumbnail,
  HeroVideoModal,
  HeroButton,
  AutoWrittenText,
  PlayIcon
} from "@/components/ui";
import HeroStatsRow from "@/components/ui/HeroStatsRow";

export default function HeroSection({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Parallax & Floating Effects
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);

  // Distinct parallax for different elements to give depth
  const yText = useTransform(scrollY, [0, 1000], [0, 200]);
  const yThumbnails = useTransform(scrollY, [0, 1000], [0, 120]);

  const activeSlide = HERO_SLIDES[currentIndex];

  // Calculate distinct next slide for the thumbnail queue behavior
  const nextIndex = (currentIndex + 1) % HERO_SLIDES.length;
  const visibleSlides = [HERO_SLIDES[currentIndex], HERO_SLIDES[nextIndex]];

  const handleThumbnailClick = (index: number) => {
    // Only allow clicking if it's not already active (although clicking active is harmless, 
    // the request implies interaction with the 'next' one drives the scroll)
    setCurrentIndex(index);
  };

  return (
    <section className="relative min-h-screen pt-2 pb-10 lg:h-[1005px] overflow-hidden" dir="rtl">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeSlide.id}
          initial={{ scale: 1.5, y: "100%" }}
          animate={{ scale: 1, y: "0%" }}
          exit={{ scale: 1.5, y: "-100%", filter: "blur(10px)" }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src={activeSlide.src}
            alt="HMF Consulting Engineering"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="px-2 lg:px-12 mx-auto" >
        {children}

        {/* Hero Content with Parallax & Floating */}
        <div className="px-2 md:px-8 lg:px-16 flex flex-col text-white relative z-10">

          <motion.div style={{ y: yText }} className="flex flex-col">
            <div
              className="flex items-center px-2 py-6 md:py-10 lg:py-18 gap-4"

            >
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
              <div
                className="w-full md:w-2/3 flex flex-col gap-8 h-[300px]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div>
                      <Typography variant="h1" className="mb-4 md:text-[32px]!">
                        {activeSlide.content.title}
                      </Typography>
                      <Typography variant="body" className="max-w-xl lg:max-w-4xl mx-auto md:mx-0">
                        {activeSlide.content.description}
                      </Typography>
                    </div>

                    <div className="mt-8">
                      <HeroButton
                        href={activeSlide.content.ctaLink}
                        text={activeSlide.content.cta}
                        icon={<MdOutlineKeyboardDoubleArrowLeft size={24} />}
                        className="text-black bg-white  text-[18px]"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div
                className="flex flex-row md:flex-col gap-4 mx-auto md:mx-0 min-h-[340px]"
                style={{ y: yThumbnails }}
              >
                <AnimatePresence mode="popLayout">
                  {visibleSlides.map((slide, i) => {
                    // Calculate the actual index in the full array for the click handler
                    // The first item in visibleSlides is currentIndex
                    // The second item is (currentIndex + 1) % len
                    const realIndex = (currentIndex + i) % HERO_SLIDES.length;

                    return (
                      <motion.div
                        key={slide.id}
                        layout
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.8 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        <HeroThumbnail
                          src={slide.src}
                          projectName={slide.projectName}
                          isActive={realIndex === currentIndex}
                          onClick={() => handleThumbnailClick(realIndex)}
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>

            <HeroStatsRow stats={STATS} />
          </motion.div>

        </div>
      </div>

      <HeroVideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </section>
  );
}
