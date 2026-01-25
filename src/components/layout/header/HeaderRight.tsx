import { InitIcon, Nav } from "@/components/ui";
import HeaderActions from "@/components/ui/HeaderActions";

interface HeaderRightProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    className?: string;
    color?: "white" | "black";
}

export default function HeaderRight({ isMobileMenuOpen, setIsMobileMenuOpen, className = "", color = "white" }: HeaderRightProps) {
    const isDark = color === "black";
    const buttonClasses = `p-[2px] transition-all duration-300 border rounded-lg ${isDark
        ? "text-black/80 hover:text-black border-black/20 hover:border-black/40 hover:bg-black/5"
        : "text-white/80 hover:text-white border-white/30 hover:border-white/50 hover:bg-white/10"
        }`;
    const spacerClasses = `mr-2 w-[2px] h-16 block ${isDark ? "bg-black/20" : "bg-white/50"}`;

    return (
        <Nav className={`h-16 lg:justify-around! ${className}`}>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                className={buttonClasses}
                aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
                <InitIcon isOpen={isMobileMenuOpen} color={isDark ? "black" : "white"} />
            </button>

            <span className={spacerClasses} />

            <HeaderActions color={color} />
        </Nav>
    );
}
