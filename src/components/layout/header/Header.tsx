"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoIcon, InitIcon, Nav, AnimatedNav } from "@/components/ui";
import HeaderActions from "@/components/ui/HeaderActions";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "@/constants";




export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto py-2">
      <div className="flex items-center justify-between gap-8">
        {/* Part 1: Logo */}
        <Link href="/" aria-label="الصفحة الرئيسية - حسن محمد فقيه للاستشارات الهندسية"
        >
          <LogoIcon />
        </Link>

        {/* Part 2: Basic Navigation  */}
        <AnimatedNav
          links={NAV_LINKS}
          navClassName="lg:w-[872px]  h-16 hidden lg:flex"
          linkClassName="px-4 py-4"
          lineColor="bg-white"
          lineWidth={30}
          lineHeight="1.5px"
        />

        {/* Part 3: Icons & Actions */}
        <Nav className="w-full lg:w-[255px] h-16  lg:justify-around!">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="p-[2px]  text-white/80 hover:text-white border border-white/30 rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300"
            aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <InitIcon isOpen={isMobileMenuOpen} />
          </button>

          <span className="w-[2px] h-16 bg-white/50 block " />

          <HeaderActions />
        </Nav>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        id="mobile-navigation"
      />
    </header>
  );
}
