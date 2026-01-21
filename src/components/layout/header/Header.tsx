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
import Nav from "@/components/ui/Nav";



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative mx-auto py-2">
      <div className="flex items-center justify-between gap-8">
        {/* Part 1: Logo */}
        <Link href="/" aria-label="الصفحة الرئيسية - حسن محمد فقيه للاستشارات الهندسية">
          <LogoIcon />
        </Link>

        {/* Part 2: Basic Navigation  */}
        <DesktopNav />

        {/* Part 3: Icons & Actions */}
        <Nav className="w-[255px] h-16">
            <span className="lg:block hidden">
              <InitIcon />
            </span>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-[2px]  text-white/80 hover:text-white border border-white/30 rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <InitIcon />}
            </button>

            <span className="w-[2px] h-16 bg-white/50 hidden lg:block  " />

            {/* Search Icon */}
            <button
              className="p-2 text-white/80"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            {/* WhatsApp Icon */}
            <Link
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/80"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </Link>

            {/* Mail Icon */}
            <Link
              href={CONTACTS.email}
              className="p-2 text-white/80"
              aria-label="Email"
            >
              <MailIcon />
            </Link>
        </Nav>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isMobileMenuOpen={isMobileMenuOpen} />
    </header>
  );
}
  