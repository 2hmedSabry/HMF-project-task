"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

interface HeroVideoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HeroVideoModal({ isOpen, onClose }: HeroVideoModalProps) {
    // Handle ESC key to close video
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Auto-close video after 15 seconds
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isOpen) {
            timer = setTimeout(() => {
                onClose();
            }, 15500); // 15 seconds + small buffer
        }
        return () => clearTimeout(timer);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black transition-opacity duration-500 animate-in fade-in"
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-110 p-4 text-white/50 hover:text-white transition-colors"
                aria-label="Close"
            >
                <X size={48} strokeWidth={1} />
            </button>

            {/* Full Screen Video - No Controls, Autoplay, Muted for Autoplay compliance */}
            <div className="w-full h-full">
                <iframe
                    className="w-full h-full pointer-events-none scale-110" // scale to hide potential thin edges
                    src="https://www.youtube.com/embed/Mh5LY4Mz15o?autoplay=1&controls=0&mute=1&loop=1&playlist=Mh5LY4Mz15o&modestbranding=1&showinfo=0&rel=0"
                    title="Building Architecture Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
