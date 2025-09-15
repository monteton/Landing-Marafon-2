import React from 'react';

interface CTAButtonProps {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'accent';
    size?: 'normal' | 'large';
    className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text, href, variant = 'primary', size = 'normal', className='' }) => {
    const baseClasses = "inline-block text-center font-bold uppercase tracking-wider rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 drop-shadow-md";

    const sizeClasses = {
        normal: 'px-16 py-4 text-base',
        large: 'px-10 py-4 text-lg md:px-20 md:py-5 md:text-xl'
    };

    const variantStyles = {
        primary: 'bg-primary text-white focus:ring-primary/50',
        secondary: 'bg-secondary text-white focus:ring-secondary/50',
        accent: 'bg-accent-1 text-primary focus:ring-accent-1/50'
    };
    
    return (
        <a href={href} className={`${baseClasses} ${sizeClasses[size]} ${variantStyles[variant]} ${className}`}>
            {text}
        </a>
    );
};