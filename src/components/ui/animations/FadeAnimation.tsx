import React from 'react';

interface FadeAnimationProps {
    children: React.ReactNode;
    className?: string;
}

export const FadeAnimation: React.FC<FadeAnimationProps> = ({ children, className = "" }) => {
    return (
        <div className={`fade-animation-wrapper ${className}`}>
            {children}
        </div>
    );
};

export default FadeAnimation;
