"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoIcon } from "./icons/LogoIcon";
import { InitIcon } from "./icons/InitIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { MailIcon } from "./icons/MailIcon";
import { CONTACTS } from "@/constants/contact";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Link from "next/link";



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative mx-auto  py-4 container">
      <div className="flex items-center justify-between gap-2">

        {/* Part 1: Logo */}
        <div>
          <Link href="/" aria-label="الصفحة الرئيسية - حسن محمد فقيه للاستشارات الهندسية">
            <LogoIcon />
          </Link>
        </div>

        {/* Part 2: Basic Navigation  */}
        <DesktopNav />


        {/* Part 3: Icons & Actions */}
        <div className="flex items-center">
          <div className="flex items-center border border-white/50 rounded-full bg-transparent px-5 lg:h-18">
            <div className="flex items-center gap-2">


              <div className="lg:block hidden">
                <InitIcon />
              </div>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white border border-white/30 rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <InitIcon />}
              </button>

              {/* Divider */}
              <div className="w-[2px] h-18 bg-white/50" />

              {/* Search Icon */}
              <button
                className="p-2 text-white/80"
                aria-label="Search"
              >
                <SearchIcon />
              </button>

              {/* WhatsApp Icon */}
              <a
                href={CONTACTS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/80"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>

              {/* Mail Icon */}
              <a
                href={CONTACTS.email}
                className="p-2 text-white/80"
                aria-label="Email"
              >
                <MailIcon />
              </a>


            </div>
          </div>


        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isMobileMenuOpen={isMobileMenuOpen} />
    </header>
  );
}
