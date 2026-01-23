import { StatItem } from "@/types/content";

interface HeroStatsRowProps {
    stats: StatItem[];
}

export default function HeroStatsRow({ stats }: HeroStatsRowProps) {
    return (
        <div className="flex gap-2 lg:gap-17 mt-12 lg:mt-22 justify-center lg:justify-start text-nowrap">
            {stats.map((item) => (
                <div key={item.label} className="text-center sm:text-xl md:text-[24px] font-medium flex flex-col items-center gap-2 md:gap-4 lg:gap-6">
                    <p className="px-2 sm:px-6 md:px-10">{item.label}</p>
                    <p className="px-2 sm:px-6 md:px-10">{item.value}</p>
                </div>
            ))}
        </div>
    );
}
