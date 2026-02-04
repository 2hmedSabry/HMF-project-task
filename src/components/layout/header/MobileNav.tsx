import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import { LogoIcon } from "@/components/ui";
import { FOOTER_CONTENT } from "@/constants/content/footer";
import FooterSocialLinks from "@/components/ui/FooterSocialLinks";

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

  const { contact } = FOOTER_CONTENT;

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          id={id}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-100 h-screen w-screen bg-black/95 backdrop-blur-2xl flex flex-col"
          dir="ltr"
        >
          {/* Header Area */}
          <div className="flex items-center justify-between px-6 py-8 border-b border-white/10">
            <Link href="/" onClick={onClose}>
              <div className="scale-75 origin-left">
                <LogoIcon />
              </div>
            </Link>
            <button
              onClick={onClose}
              className="p-3 text-white/70 hover:text-white bg-white/5 rounded-full transition-all active:scale-95"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Main Content Area - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-10 custom-scrollbar">
            {/* Navigation Links */}
            <nav>
              <ul className="space-y-4">
                {NAV_LINKS.map((link, index) => {
                  const hasSubLinks = link.subLinks && link.subLinks.length > 0;
                  const isOpen = activeAccordion === index;

                  return (
                    <li key={index} className="border-b border-white/5 last:border-0 pb-4">
                      {hasSubLinks ? (
                        <div className="w-full">
                          <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex items-center justify-between group py-2"
                          >
                            <span className={`text-2xl font-bold transition-colors duration-300 ${isOpen ? "text-white" : "text-white/70"}`}>
                              {link.label}
                            </span>
                            <ChevronDown
                              size={24}
                              className={`transition-transform duration-500 ${isOpen ? "rotate-180 text-white" : "text-white/30 rotate-0"}`}
                            />
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-white/5 rounded-2xl mt-4 px-4"
                              >
                                <ul className="py-4 space-y-4">
                                  {link.subLinks?.map((subLink, sIndex) => (
                                    <li key={sIndex}>
                                      <Link
                                        href={subLink.href}
                                        onClick={onClose}
                                        className="text-lg text-white/50 hover:text-white block transition-colors"
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
                          onClick={onClose}
                          className="text-2xl font-bold text-white/70 hover:text-white block py-2 transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Quick Contact Info */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <h3 className="text-white/40 text-sm font-medium tracking-widest uppercase">Direct Contact</h3>
              <div className="space-y-5">
                <a href={contact.phoneLink} className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-xs">Call Us</span>
                    <span className="text-white font-medium" dir="ltr">{contact.phone}</span>
                  </div>
                </a>

                <a href={contact.emailLink} className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-xs">Email</span>
                    <span className="text-white font-medium">{contact.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl text-white/40 group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-xs">Location</span>
                    <span className="text-white font-medium text-sm leading-relaxed">{contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Footer */}
          <div className="px-6 py-8 bg-white/5 border-t border-white/10 flex flex-col items-center gap-6">
            <FooterSocialLinks links={FOOTER_CONTENT.socialLinks} />
            <p className="text-white/20 text-[10px] text-center leading-relaxed">
              {FOOTER_CONTENT.copyright.text}
              <br />
              {FOOTER_CONTENT.copyright.developer}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

