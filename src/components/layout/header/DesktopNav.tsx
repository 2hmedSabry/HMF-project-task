import { NAV_LINKS } from "@/constants/navLinks";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:block max-w-4xl">
      <div className="h-18 border border-white/50 rounded-full bg-transparent px-4 flex items-center">
        <ul className="flex items-center justify-center gap-1 flex-1" dir="rtl">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-md font-bold text-white/90 group inline-block"
              >
                {/* This for the text of the link */}
                <span className="relative z-10">{link.label}</span>
                {/* This for line under the link */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 " />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
