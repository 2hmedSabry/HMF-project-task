import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import HeaderActions from "@/components/ui/HeaderActions";

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  onClose: () => void;
  id?: string;
}

export default function MobileNav({ isMobileMenuOpen, onClose, id }: MobileNavProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          id={id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 h-screen w-screen bg-black/95 backdrop-blur-xl pt-32 flex flex-col overflow-y-auto"
        >
          {/* Internal Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <nav className="w-full flex-1 flex flex-col items-center gap-8 pb-10">
            <ul className="w-full max-w-md px-6 flex flex-col items-center space-y-6" dir="rtl">
              {NAV_LINKS.map((link, index) => {
                const hasSubLinks = link.subLinks && link.subLinks.length > 0;
                const isOpen = activeAccordion === index;

                return (
                  <li key={index} className="w-full flex flex-col items-center">
                    {hasSubLinks ? (
                      <div className="w-full flex flex-col items-center">
                        <button
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={isOpen}
                          aria-controls={`accordion-content-${index}`}
                          className="group flex items-center justify-center gap-2 text-2xl font-medium text-white hover:text-primary transition-colors duration-300"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-white/50 group-hover:text-primary"
                              }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              id={`accordion-content-${index}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden w-full"
                            >
                              <ul className="flex flex-col items-center gap-4 py-4 bg-white/5 rounded-xl mt-2 w-full">
                                {link.subLinks?.map((subLink, sIndex) => (
                                  <li key={sIndex}>
                                    <Link
                                      href={subLink.href}
                                      className="text-lg text-white/70 hover:text-white transition-colors"
                                    >
                                      {subLink.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-2xl font-medium text-white hover:text-primary transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto mb-8">
              <HeaderActions variant="mobile" />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
