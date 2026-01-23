import React from "react";
import Image from "next/image";
import { ServiceCard as ServiceCardType } from "@/types/content";

interface ServiceCardProps {
    service: ServiceCardType;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <div
            className="group flex flex-col shadow-[0px_0px_2px_0px_#00000040] w-full max-w-[394px] h-[380px] hover:h-[410px] hover:-mt-[15px] hover:mb-[19px] mb-4 rounded-[16px] bg-white overflow-hidden cursor-pointer transition-all duration-500 ease-in-out focus-within:ring-2 focus-within:ring-black outline-none"
            tabIndex={0}
            role="article"
            aria-labelledby={`service-title-${index}`}
        >
            {/* Image container - shrinks on hover */}
            <div className="relative w-full h-[260px] group-hover:h-[180px] transition-all duration-500 ease-in-out overflow-hidden rounded-sm">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 394px"
                    className="rounded-sm object-cover scale-110 transition-transform duration-500 ease-in-out group-hover:scale-100"
                />
            </div>
            {/* Text container - expands on hover */}
            <div className="py-3 px-4 flex-1 flex flex-col transition-all duration-500 ease-in-out overflow-hidden">
                <h3 id={`service-title-${index}`} className="font-bold text-[20px]">
                    {service.title}
                </h3>
                {/* Description - shows ~35 chars by default, full text on hover */}
                <p className="py-2 font-medium text-text-description transition-all duration-500">
                    <span className="group-hover:hidden line-clamp-2">
                        {service.description.slice(0, 35)}...
                    </span>
                    <span className="hidden group-hover:inline">
                        {service.description}
                    </span>
                </p>
            </div>
        </div>
    );
}
