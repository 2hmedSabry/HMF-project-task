import { NAV_LINKS } from "@/constants";
import HeaderActions from "@/components/ui/HeaderActions";

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


        <HeaderActions variant="mobile" />



      </nav>
    </div>
  );
};
