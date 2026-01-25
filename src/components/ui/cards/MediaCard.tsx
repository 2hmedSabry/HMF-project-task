import Image from "next/image";
import { AnimatedArrowLink } from "@/components/ui/animations";
import { ArrowIcon } from "@/components/ui/icons";
import { NavigationArrows, Typography } from "@/components/ui";

interface MediaCardProps {
    card: {
        title: string;
        description: string;
        tag: string;
        image: string;
    };
    isAnimating: boolean;
    className?: string;
    onNext?: () => void;
    onPrevious?: () => void;
}

export default function MediaCard({ card, isAnimating, className = "", onNext, onPrevious }: MediaCardProps) {
    return (
        <div className={`lg:shrink-0 flex flex-col-reverse lg:flex-row items-center bg-white rounded-[32px] w-full overflow-hidden ${className}`}>

            <div className={`w-[44%] flex flex-col px-3 md:pt-8 gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'} h-full justify-between pb-8 pl-8`}>
                <div>
                    <div className="flex flex-col gap-2">
                        <Typography variant="h3" className="line-clamp-2 ">{card.title}</Typography>
                        <Typography variant="body" className="pb-2 line-clamp-3">{card.description}</Typography>
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-14 mt-6">
                        <AnimatedArrowLink href="/news" className="mb-1 lg:mb-3" icon={<ArrowIcon />} />
                        <Typography variant="tag" as="span" className="px-4 py-1 rounded-full border-[0.8px] w-[146px] h-[55px] flex items-center justify-center">
                            {card.tag}
                        </Typography>
                    </div>
                </div>
            </div>

            <div className={`w-[56%] h-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                    src={card.image}
                    alt={card.title}
                    width={640}
                    height={551}
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="h-[442px] w-full object-cover"
                />
            </div>                        
        </div>        
    );
}
