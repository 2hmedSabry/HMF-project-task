import Image from "next/image";
import { AnimatedArrowLink } from "@/components/ui/animations";
import { ArrowIcon } from "@/components/icons";
import { Typography } from "@/components/ui";

interface MediaCardProps {
    card: {
        title: string;
        description: string;
        tag: string;
        image: string;
    };
    isAnimating: boolean;
}

export default function MediaCard({ card, isAnimating }: MediaCardProps) {
    return (
            <div className="shrink-0 flex flex-col-reverse lg:flex-row items-center bg-white rounded-[32px] w-full lg:w-[1028px] md:w-[1280px] lg:h-[442px] xl:h-[551px] overflow-hidden flex-1 lg:flex-0">
            <div className={`w-full lg:w-[50%] flex flex-col p-6 md:p-8 gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col gap-2">
                    <Typography variant="h3" className="line-clamp-2">{card.title}</Typography>
                    <Typography variant="body" className="pb-2 line-clamp-3">{card.description}</Typography>
                </div>
                <div className="flex flex-col gap-6 lg:gap-14">
                    <AnimatedArrowLink href="/news" className="mb-1 lg:mb-3" icon={<ArrowIcon />} />
                    <Typography variant="tag" as="span" className="px-4 py-1 rounded-full border-[0.8px] w-[146px] h-[55px] flex items-center justify-center">
                        {card.tag}
                    </Typography>
                </div>
            </div>
            <div className={`w-full lg:w-[50%] h-[200px] sm:h-[300px] lg:h-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                    src={card.image}
                    alt={card.title}
                    width={640}
                    height={551}
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="w-full h-full object-cover lg:rounded-l-[32px]"
                />
            </div>
        </div>
    );
}
