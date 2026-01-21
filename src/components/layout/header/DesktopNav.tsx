'use client'
import Nav from "@/components/ui/Nav";
import { NAV_LINKS } from "@/constants/navLinks";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function DesktopNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 20 });
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Function to calculate line position
  const updateLinePosition = (index: number) => {
    const item = navItemsRef.current[index];
    if (item) {
      const { offsetLeft, offsetWidth } = item;
      // Calculate center of the item for the 20px line
      const center = offsetLeft + (offsetWidth / 2) - 15;
      setLineStyle({ left: center, width: 30 });
    }
  };

  // Update position whenever hoveredIndex changes OR on mount
  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : 0;
    updateLinePosition(targetIndex);
  }, [hoveredIndex]);

  // Also update position after some time to ensure layout is ready (font loading, etc.)
  useEffect(() => {
    const timer = setTimeout(() => updateLinePosition(0), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Nav className="w-[872px] h-16 relative" dir="rtl">
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          ref={(el) => { navItemsRef.current[index] = el; }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative px-4 py-2 text-md font-bold text-white/90 transition-colors hover:text-white block"
        >
          {link.label}
        </Link>
      ))}

      {/* Moving Underline (20px width) */}
      <div
        className="absolute bottom-0 h-[1.5px] bg-white transition-all duration-300 ease-out pointer-events-none rounded-full"
        style={{
          left: `${lineStyle.left}px`,
          width: `${lineStyle.width}px`,
          opacity: 1 // Always visible
        }}
      />
    </Nav>
  )
}
