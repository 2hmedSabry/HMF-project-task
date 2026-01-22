'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { ChevronDown } from "lucide-react";
import NavLinkAnimation from "./NavLinkAnimation";


interface SubLink {
    label: string;
    href: string;
}

interface NavLink {
    label: string;
    href: string;
    subLinks?: SubLink[];
}

interface AnimatedNavProps {
    defaultField?: string;
    links: NavLink[];
    navClassName?: string;
    navBorderColor?: string;
    linkClassName?: string;
    lineColor?: string;
    lineWidth?: number;
    lineHeight?: string;
    dir?: "rtl" | "ltr";
    textColor?: string;
}

export default function AnimatedNav({
    defaultField,
    links,
    navClassName = "",
    linkClassName = "",
    lineColor = "bg-white",
    lineWidth = 30,
    lineHeight = "1.5px",
    dir = "rtl",
    textColor = "text-white",
    navBorderColor = "border border-white/50",
}: AnimatedNavProps) {
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [lineStyle, setLineStyle] = useState({ left: 0, width: lineWidth, opacity: 0 });
    const navItemsRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Find active index based on current URL
    const activeIndex = links.findIndex(link => link.href === pathname);
    const finalActiveIndex = activeIndex !== -1 ? activeIndex : 0;

    const updateLine = useCallback((index: number) => {
        const item = navItemsRef.current[index];
        const container = containerRef.current;
        if (item && container) {
            const containerRect = container.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();

            const relativeLeft = itemRect.left - containerRect.left;
            const center = relativeLeft + (itemRect.width / 2) - (lineWidth / 2);

            setLineStyle({ left: center, width: lineWidth, opacity: 1 });
        }
    }, [lineWidth]);

    useLayoutEffect(() => {
        const target = hoveredIndex !== null ? hoveredIndex : finalActiveIndex;
        updateLine(target);
    }, [hoveredIndex, finalActiveIndex, updateLine]);

    useEffect(() => {
        const handleRefresh = () => updateLine(hoveredIndex !== null ? hoveredIndex : finalActiveIndex);
        window.addEventListener('resize', handleRefresh);
        const observer = new ResizeObserver(handleRefresh);
        if (containerRef.current) observer.observe(containerRef.current);

        handleRefresh();
        const timers = [100, 500, 1000].map(ms => setTimeout(handleRefresh, ms));

        return () => {
            window.removeEventListener('resize', handleRefresh);
            observer.disconnect();
            timers.forEach(clearTimeout);
        };
    }, [finalActiveIndex, hoveredIndex, updateLine]);

    const isBgClass = lineColor.startsWith('bg-');

    return (
        <nav
            onMouseLeave={() => {
                setHoveredIndex(null);
                setOpenDropdown(null);
            }}
            className={`hidden lg:flex items-center ${navBorderColor} rounded-[100px] px-3 relative h-16 ${navClassName}`}
            dir={dir}
        >
            <div
                ref={containerRef}
                className="flex items-center gap-1 flex-1 justify-between relative h-full"
            >
                <span className="px-1 py-5 font-bold text-[20px] cursor-pointer">{defaultField}</span>
                {links.map((link, index) => {
                    const hasSubLinks = link.subLinks && link.subLinks.length > 0;

                    return (
                        <div
                            key={index}
                            className="relative h-full flex items-center group"
                            onMouseEnter={() => {
                                setHoveredIndex(index);
                                if (hasSubLinks) setOpenDropdown(index);
                            }}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <NavLinkAnimation>
                                <Link
                                    href={link.href}
                                    ref={(el) => { navItemsRef.current[index] = el; }}
                                    className={`relative text-xl font-bold z-10 flex items-center gap-1
                                    ${textColor}
                                    ${linkClassName}`}
                                >
                                    {link.label}
                                    {hasSubLinks && <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''}`} />}
                                </Link>
                            </NavLinkAnimation>
                            {/* Dropdown Menu */}
                            {hasSubLinks && (
                                <div
                                    className={`absolute top-full right-0 mt-2 py-4  border border-white/20 rounded-2xl shadow-2xl min-w-[240px] transition-all duration-300 z-50
                                        ${openDropdown === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                                >
                                    <div className="flex flex-col gap-1 px-2">
                                        {link.subLinks?.map((sub, sIdx) => (
                                            <Link
                                                key={sIdx}
                                                href={sub.href}
                                                className="px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-all text-sm font-medium border-r-2 border-transparent hover:border-white"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Animated Line */}
                <div
                    className={`absolute bottom-0 transition-all duration-300 ease-out pointer-events-none rounded-full z-0 ${isBgClass ? lineColor : ''}`}
                    style={{
                        height: lineHeight,
                        width: `${lineStyle.width}px`,
                        left: 0,
                        transform: `translateX(${lineStyle.left}px)`,
                        opacity: lineStyle.opacity,
                        ...(isBgClass ? {} : { backgroundColor: lineColor })
                    }}
                />
            </div>
        </nav>
    );
}
