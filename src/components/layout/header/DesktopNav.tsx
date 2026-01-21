import Nav from "@/components/ui/Nav";
import { NAV_LINKS } from "@/constants/navLinks";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <Nav 
      className="w-[872px] h-16"
    >
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="px-4 py-2 text-md font-bold text-white/90 group block"
        >
          {link.label}
        </Link>
      ))}
    </Nav>
  )
}
