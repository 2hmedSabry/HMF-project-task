import Tag from "@/components/ui/Tag";
import { AnimatedButton } from "@/components/ui/animations";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { Typography } from "@/components/ui";

interface SectionHeaderProps {
    title: string;
    description: string;
    description2?: string;
    cta?: string;
    ctaLink?: string;
    className?: string;
    textColor?: string;
}

export default function SectionHeader({
    title,
    description,
    description2,
    cta,
    ctaLink,
    className = "",
    textColor = "text-black" // Default to black, change to white for dark sections
}: SectionHeaderProps) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <Tag>{title}</Tag>
            <Typography variant="h2" as="h2" className={textColor}>
                <span dangerouslySetInnerHTML={{ __html: description }} />
            </Typography>
            {description2 && (
                <Typography variant="body" className={textColor === "text-white" ? "text-white/80" : "text-gray-600"}>
                    {description2}
                </Typography>
            )}

            {cta && ctaLink && (
                <AnimatedButton
                    href={ctaLink}
                    text={cta}
                    icon={<MdOutlineKeyboardDoubleArrowLeft size={24} />}
                    className={`flex items-center justify-center gap-2 ${textColor === "text-white" ? "bg-white text-black" : "bg-black text-white"} rounded-[12px] text-center font-bold text-[18px] mt-[21px]`}
                />
            )}
        </div>
    );
}
