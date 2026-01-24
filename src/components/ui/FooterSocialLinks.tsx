import Link from "next/link";
import { ContactLink } from "@/types/content";

interface FooterSocialLinksProps {
    links: ContactLink[];
}

export default function FooterSocialLinks({ links }: FooterSocialLinksProps) {
    return (
        <div className="group/social flex flex-row justify-between gap-5 w-fit px-3">
            {links.map((social, index) => {
                const Icon = social.icon;
                return (
                    <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        className="p-1 transition-all duration-300 
                            group-hover/social:opacity-50 group-hover/social:translate-x-[4px] group-hover/social:translate-y-[4px]
                            hover:opacity-100! hover:translate-x-[3px]! hover:translate-y-[4px]! hover:scale-120
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
                        aria-label={social.ariaLabel}
                    >
                        {Icon && <Icon />}
                    </Link>
                );
            })}
        </div>
    );
}
