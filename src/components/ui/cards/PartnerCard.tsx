import Image from "next/image";
import { PartnerItem } from "@/types/content";

interface PartnerCardProps {
    partner: PartnerItem;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
    return (
        <div className="group w-full h-[410px] relative overflow-hidden cursor-pointer">
            {/* Black content layer - slides UP from below on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white z-0 translate-y-full group-hover:translate-y-0 transition-all duration-700">
                <Image
                    src={partner.image}
                    width={300}
                    height={300}
                    alt={partner.alt}
                    className="mb-4 brightness-0 invert"
                />
                <p className="text-center text-lg p-4">{partner.description}</p>
            </div>
            {/* White card layer - ON TOP (z-10) - slides DOWN on hover */}
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10 transition-transform duration-800 group-hover:translate-y-full hover:rounded-t-4xl">
                <Image
                    src={partner.image}
                    width={410}
                    height={410}
                    alt={partner.alt}
                    className="brightness-0"
                />
            </div>
        </div>
    );
}
