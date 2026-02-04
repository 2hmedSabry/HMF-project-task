"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LogoIcon, InitIcon, Nav, AnimatedNav } from "@/components/ui";
import HeaderActions from "@/components/ui/HeaderActions";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "@/constants";
import HeaderRight from "./HeaderRight";




export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="relative z-50 mx-auto py-2 w-full">
        <div className="flex items-center justify-between gap-8">
          {/* Part 1: Logo */}
          <Link href="/" aria-label="Home - Hassan Mohammed Faqih Engineering Consultations"
          >
            <LogoIcon />
          </Link>

          {/* Part 2: Basic Navigation  */}
          <AnimatedNav
            links={NAV_LINKS}
            navClassName="lg:w-[900px]  h-16 hidden lg:flex"
            linkClassName="px-4 py-4"
            lineColor="bg-white"
            lineWidth={30}
            lineHeight="1.5px"
          />

          {/* Part 3: Icons & Actions */}
          <HeaderRight
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            className={`transition-opacity duration-300 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          />
        </div>

        {/* Mobile Navigation */}
        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          id="mobile-navigation"
        />
      </header>

      {/* Floating HeaderRight on Scroll */}
      <div
        className={`fixed top-6 right-4 lg:right-12 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        <HeaderRight
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          color="black"
          className="bg-white/90 backdrop-blur-md border border-black/5 shadow-lg"
        />
      </div>
    </>
  );
}
