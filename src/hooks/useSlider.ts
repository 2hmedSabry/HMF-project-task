import { useState, useCallback } from 'react';

interface UseSliderProps {
    totalItems: number;
    initialIndex?: number;
    animationDuration?: number;
    loop?: boolean;
}

/**
 * Custom hook for shared slider/tabs logic.
 * Handles indexing, animation states, and boundary wrapping.
 */
export const useSlider = ({
    totalItems,
    initialIndex = 0,
    animationDuration = 300,
    loop = true
}: UseSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToNext = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => {
                if (prev === totalItems - 1) {
                    return loop ? 0 : prev;
                }
                return prev + 1;
            });
            setIsAnimating(false);
        }, animationDuration);
    }, [isAnimating, totalItems, loop, animationDuration]);

    const goToPrevious = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => {
                if (prev === 0) {
                    return loop ? totalItems - 1 : prev;
                }
                return prev - 1;
            });
            setIsAnimating(false);
        }, animationDuration);
    }, [isAnimating, totalItems, loop, animationDuration]);

    const setIndex = useCallback((index: number) => {
        if (isAnimating || index === currentIndex) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, animationDuration);
    }, [isAnimating, currentIndex, animationDuration]);

    return {
        currentIndex,
        isAnimating,
        goToNext,
        goToPrevious,
        setIndex,
        isAtStart: currentIndex === 0,
        isAtEnd: currentIndex === totalItems - 1,
    };
};
