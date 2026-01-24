import React from "react";
import Image from "next/image";
import { ServiceCard as ServiceCardType } from "@/types/content";
import { Typography } from "@/components/ui";

interface ServiceCardProps {
    service: ServiceCardType;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <div
            className="
            group flex flex-col shadow-[0px_0px_2px_0px_#00000040] 
            h-full w-full 
            hover:mb-[25px]
            hover:scale-y-110 origin-center
            mb-4 rounded-[16px] bg-white overflow-hidden cursor-pointer
            transition-all duration-800 ease-in-out focus-within:ring-2
            focus-within:ring-white/80 outline-none"
            tabIndex={0}
            role="article"
            aria-labelledby={`service-title-${index}`}
        >
            {/* Image container - shrinks on hover */}
            <div className="relative w-full h-[200px] sm:h-[260px] 
            sm:group-hover:h-[180px] transition-all duration-500 
            ease-in-out overflow-hidden rounded-sm ">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-sm object-cover scale-110 transition-transform duration-500 ease-in-out group-hover:scale-100"
                />
            </div>
            {/* Text container - expands on hover */}
            <div className="
            py-3 px-4 flex-1 flex flex-col 
            transition-all duration-500 
            ease-in-out overflow-hidden">
                <Typography variant="h3" id={`service-title-${index}`}>
                    {service.title}
                </Typography>
                {/* Description - shows ~35 chars by default, full text on hover */}
                <Typography variant="body-small" className="py-2 font-medium text-text-description">
                    <span className="group-hover:hidden line-clamp-2">
                        {service.description.slice(0, 35)}...
                    </span>
                    <span className="hidden group-hover:inline">
                        {service.description}
                    </span>
                </Typography>
            </div>
        </div>
    );
}
