import Link from "next/link";
import { SearchIcon } from "@/components/ui/icons";
import { CONTACTS } from "@/constants/contact";
import { FadeAnimation } from "@/components/ui/animations";

interface HeaderActionsProps {
    variant?: "desktop" | "mobile";
    color?: string; // "white" or "black"
}

export default function HeaderActions({ variant = "desktop", color = "white" }: HeaderActionsProps) {
    const isMobile = variant === "mobile";

    const containerClasses = isMobile
        ? "flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/20"
        : "flex items-center";

    // Dynamic classes based on variant color (desktop only, mobile is always dark/white text)
    const baseText = isMobile ? "text-white/80" : (color === "black" ? "text-black/80 hover:bg-black/5" : "text-white/80");
    const baseBorder = isMobile ? "border border-white/20" : "";
    const hoverBg = isMobile ? "hover:bg-white/10" : "";

    const iconClasses = `p-2 lg:p-2 transition-all duration-300 rounded-full ${baseText} ${baseBorder} ${hoverBg}`;

    const getHoverClass = (id: string) => {
        if (!isMobile) return "";
        if (id === "search") return "hover:text-amber-400";
        if (id === "واتساب") return "hover:text-green-400";
        if (id === "البريد الإلكتروني") return "hover:text-blue-400";
        return "";
    };

    const wrapAnimation = (children: React.ReactNode) => {
        if (isMobile) return children;
        return <FadeAnimation>{children}</FadeAnimation>;
    };

    return (
        <div className={containerClasses}>

            {/* Search Icon */}
            <button
                className={`${iconClasses} ${getHoverClass("search")}`}
                aria-label="البحث في الموقع"
            >
                {wrapAnimation(<SearchIcon color={isMobile ? "white" : color} />)}
                {/* Note: SearchIcon might need color prop update too if it doesn't support currentColor */}
            </button>

            {/* Contact Links from CONTACTS constant */}
            {CONTACTS.links.map((link, index) => {
                const Icon = link.icon;
                const ariaLabel = link.label === "واتساب" ? "تواصل عبر واتساب" : "تواصل عبر البريد الإلكتروني";
                return (
                    <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${iconClasses} ${getHoverClass(link.label || "")}`}
                        aria-label={ariaLabel}
                    >
                        {wrapAnimation(Icon ? <Icon /> : null)}
                        {/* Icons usually inherit current color, so className text-color handles it */}
                    </Link>
                );
            })}
        </div>
    );
}
