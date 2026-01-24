import Link from "next/link";
import { ChevronLeftIcon } from "@/components/ui/icons";
import { SlideUpAnimation } from "@/components/ui/animations";
import { NavLink } from "@/types/content";

interface FooterLinkColumnProps {
    title: string;
    links: NavLink[];
}

export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
    return (
        <div className="flex flex-col gap-4 py-2 text-xl">
            <span className="text-2xl font-bold">{title}</span>
            {links.map((link, index) => (
                <SlideUpAnimation key={index}>
                    <Link
                        className="text-[#B2B2B2] flex items-center gap-3 pl-3 py-1"
                        href={link.href}
                    >
                        <ChevronLeftIcon />
                        {link.label}
                    </Link>
                </SlideUpAnimation>
            ))}
        </div>
    );
}
