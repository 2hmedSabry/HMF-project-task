import Image from "next/image";

interface HeroThumbnailProps {
    src: string;
    isActive: boolean;
    onClick: () => void;
}

export default function HeroThumbnail({ src, isActive, onClick }: HeroThumbnailProps) {
    return (
        <div
            className={`rounded-xl shadow-[0_0_10.4px_#ffffff80] cursor-pointer transition-transform hover:scale-105 ${isActive ? "ring-2 ring-white/50" : ""}`}
            onClick={onClick}
        >
            <Image
                src={src}
                alt="Hero Banner"
                width={200}
                height={156}
                style={{ height: 'auto' }}
                className="rounded-xl"
            />
        </div>
    );
}
