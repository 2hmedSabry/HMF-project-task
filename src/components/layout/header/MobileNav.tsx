import { NAV_LINKS } from "@/constants/navLinks";
import { MailIcon } from "./icons/MailIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface MobileNavProps {
  isMobileMenuOpen: boolean;
}

export default function MobileNav({ isMobileMenuOpen }: MobileNavProps) {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
    >
      <nav className="border border-white/30 rounded-2xl bg-black/40 backdrop-blur-lg p-4">
        <ul className="space-y-2" dir="rtl">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-right"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icons */}


        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/20">
          <button
            className="p-3 text-white/80 hover:text-amber-400 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white/80 hover:text-green-400 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon
            />
          </a>
          <a
            href="mailto:info@example.com"
            className="p-3 text-white/80 hover:text-blue-400 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20"
            aria-label="Email"
          >
            <MailIcon />
          </a>
        </div>



      </nav>
    </div>
  );
};
