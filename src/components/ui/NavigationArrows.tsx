"use client";

import { useState } from "react";

interface NavigationArrowsProps {
    onPrevious?: () => void;
    onNext?: () => void;
    className?: string;
    isAtStart?: boolean;
    isAtEnd?: boolean;
}

export default function NavigationArrows({
    onPrevious,
    onNext,
    className = "",
    isAtStart = false,
    isAtEnd = false
}: NavigationArrowsProps) {
    const [activeButton, setActiveButton] = useState<'previous' | 'next' | null>(null);

    const handlePrevious = () => {
        setActiveButton('previous');
        onPrevious?.();
    };

    const handleNext = () => {
        setActiveButton('next');
        onNext?.();
    };

    // Arrow is BLACK by default, only GRAY when at boundary (first/last card)
    const previousArrowColor = isAtStart ? '#9CA3AF' : 'black';
    const nextArrowColor = isAtEnd ? '#9CA3AF' : 'black';

    return (
        <div className={`inline-flex items-center border border-black rounded-2xl lg:rounded-full  overflow-hidden w-[150px] lg:w-[259px] h-[50px] lg:h-[99px] transition-transform duration-200 ${activeButton === 'previous' ? 'translate-x-0.5' : activeButton === 'next' ? '-translate-x-0.5' : ''} ${className}`}>
            {/* Previous Button (Points Left) */}
            <button
                onClick={handlePrevious}
                className="flex-1 h-full flex items-center justify-center transition-colors"
                aria-label="Previous"
            >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.57 0.591351L0.570027 10.5913C0.387946 10.7816 0.245216 11.0058 0.150027 11.2513C-0.050009 11.7383 -0.050009 12.2844 0.150027 12.7713C0.245216 13.0169 0.387946 13.2411 0.570027 13.4313L10.57 23.4313C10.7565 23.6178 10.9779 23.7657 11.2215 23.8667C11.4652 23.9676 11.7263 24.0195 11.99 24.0195C12.5226 24.0195 13.0334 23.808 13.41 23.4313C13.7866 23.0547 13.9982 22.544 13.9982 22.0113C13.9982 21.4787 13.7866 20.968 13.41 20.5913L6.81003 14.0113H21.99C22.5205 14.0113 23.0292 13.8006 23.4042 13.4256C23.7793 13.0505 23.99 12.5418 23.99 12.0113C23.99 11.4809 23.7793 10.9722 23.4042 10.5971C23.0292 10.2221 22.5205 10.0113 21.99 10.0113H6.81003L13.41 3.43135C13.5975 3.24542 13.7463 3.02422 13.8478 2.7805C13.9493 2.53678 14.0016 2.27537 14.0016 2.01135C14.0016 1.74733 13.9493 1.48591 13.8478 1.2422C13.7463 0.998476 13.5975 0.777277 13.41 0.591351C13.2241 0.403894 13.0029 0.255102 12.7592 0.153564C12.5155 0.0520267 12.2541 -0.000247955 11.99 -0.000247955C11.726 -0.000247955 11.4646 0.0520267 11.2209 0.153564C10.9772 0.255102 10.756 0.403894 10.57 0.591351Z"
                        fill={previousArrowColor}
                    />
                </svg>
            </button>

            {/* Divider */}
            <div className="w-px h-full bg-black" />

            {/* Next Button (Points Right) */}
            <button
                onClick={handleNext}
                className="flex-1 h-full flex items-center justify-center transition-colors"
                aria-label="Next"
            >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.42 23.4282L23.42 13.4282C23.602 13.238 23.7448 13.0137 23.84 12.7682C24.04 12.2813 24.04 11.7351 23.84 11.2482C23.7448 11.0027 23.602 10.7784 23.42 10.5882L13.42 0.588183C13.2335 0.401706 13.0121 0.253785 12.7685 0.152864C12.5248 0.0519441 12.2637 0.000411987 12 0.000411987C11.4674 0.000411987 10.9566 0.211988 10.58 0.588595C10.2034 0.965203 9.99178 1.47599 9.99178 2.0086C9.99178 2.5412 10.2034 3.05199 10.58 3.4286L17.18 10.0086H1.99997C1.46953 10.0086 0.960823 10.2193 0.585751 10.5944C0.210678 10.9694 -3.43323e-05 11.4782 -3.43323e-05 12.0086C-3.43323e-05 12.539 0.210678 13.0478 0.585751 13.4228C0.960823 13.7979 1.46953 14.0086 1.99997 14.0086H17.18L10.58 20.5886C10.3925 20.7745 10.2437 20.9957 10.1422 21.2394C10.0406 21.4831 9.98837 21.7446 9.98837 22.0086C9.98837 22.2726 10.0406 22.534 10.1422 22.7777C10.2437 23.0215 10.3925 23.2427 10.58 23.4286C10.7659 23.6161 10.9871 23.7648 11.2308 23.8664C11.4745 23.9679 11.7359 24.0202 12 24.0202C12.264 24.0202 12.5254 23.9679 12.7691 23.8664C13.0128 23.7648 13.234 23.6161 13.42 23.4286Z"
                        fill={nextArrowColor}
                    />
                </svg>
            </button>

        </div>
    );
}
