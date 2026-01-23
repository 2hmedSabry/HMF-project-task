import Link from "next/link";
import { SearchIcon } from "@/components/icons";
import { CONTACTS } from "@/constants/contact";
import { FadeAnimation } from "@/components/ui/animations";

interface HeaderActionsProps {
    variant?: "desktop" | "mobile";
}

export default function HeaderActions({ variant = "desktop" }: HeaderActionsProps) {
    const isMobile = variant === "mobile";

    const containerClasses = isMobile
        ? "flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/20"
        : "flex items-center";

    const iconClasses = isMobile
        ? "p-3 text-white/80 hover:bg-white/10 transition-all duration-300 border border-white/20 rounded-full"
        : "p-2 text-white/80";

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
                aria-label="Search"
            >
                {wrapAnimation(<SearchIcon />)}
            </button>

            {/* Contact Links from CONTACTS constant */}
            {CONTACTS.links.map((link, index) => {
                const Icon = link.icon;
                return (
                    <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${iconClasses} ${getHoverClass(link.label)}`}
                        aria-label={link.label}
                    >
                        {wrapAnimation(Icon ? <Icon /> : null)}
                    </Link>
                );
            })}
        </div>
    );
}
