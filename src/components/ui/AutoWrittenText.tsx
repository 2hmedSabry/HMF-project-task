'use client';

import { useState, useEffect } from "react";

interface AutoWrittenTextProps {
    text: string;
    speed?: number;
    className?: string;
    showCursor?: boolean;
}

export default function AutoWrittenText({
    text,
    speed = 150,
    className = "",
    showCursor = true
}: AutoWrittenTextProps) {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed]);

    return (
        <span className={className}>
            {displayText}
            {showCursor && <span className="animate-pulse">|</span>}
        </span>
    );
}
