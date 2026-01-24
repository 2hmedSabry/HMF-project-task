import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import HeaderActions from "@/components/ui/HeaderActions";

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  id?: string;
}

export default function MobileNav({ isMobileMenuOpen, id }: MobileNavProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div
      id={id}
      className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
    >
      <nav className="border border-white/30 rounded-2xl bg-black/40 backdrop-blur-lg p-4">
        <ul className="space-y-2" dir="rtl">
          {NAV_LINKS.map((link, index) => {
            const hasSubLinks = link.subLinks && link.subLinks.length > 0;
            const isOpen = activeAccordion === index;

            return (
              <li key={index} className="flex flex-col">
                <div className="flex items-center justify-between">
                  {hasSubLinks ? (
                    <button
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen}
                      aria-controls={`accordion-content-${index}`}
                      className="flex-1 flex items-center justify-between px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-right"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="block w-full px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-right"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>

                {/* Accordion Content */}
                {hasSubLinks && (
                  <div
                    id={`accordion-content-${index}`}
                    role="region"
                    aria-label={`${link.label} links`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[400px] opacity-100 mt-1" : "max-h-0 opacity-0"
                      }`}
                  >
                    <ul className="pr-6 space-y-1">
                      {link.subLinks?.map((subLink, sIndex) => (
                        <li key={sIndex}>
                          <Link
                            href={subLink.href}
                            className="block px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 text-right border-r border-white/10"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Icons */}
        <HeaderActions variant="mobile" />
      </nav>
    </div>
  );
};
