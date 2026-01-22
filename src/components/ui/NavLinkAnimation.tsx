import React from 'react';

interface NavLinkAnimationProps {
    children: React.ReactNode;
    className?: string;
}

export const NavLinkAnimation: React.FC<NavLinkAnimationProps> = ({ children, className = "" }) => {
    return (
        <div className={`nav-link-wrapper ${className}`}>
            {children}
        </div>
    );
};

export default NavLinkAnimation;
