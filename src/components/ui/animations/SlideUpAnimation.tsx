import React from 'react';

interface SlideUpAnimationProps {
    children: React.ReactNode;
    className?: string;
}

export const SlideUpAnimation: React.FC<SlideUpAnimationProps> = ({ children, className = "" }) => {
    return (
        <div className={`slide-down-up-animation-wrapper ${className}`}>
            {children}
        </div>
    );
};

export default SlideUpAnimation;
