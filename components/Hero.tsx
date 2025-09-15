import React from 'react';
import { CTAButton } from './CTAButton';
import { CountdownTimer } from './CountdownTimer';

export const Hero: React.FC = () => {
    return (
        <header className="relative min-h-screen flex items-center justify-center text-center text-text-primary px-4 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('images/background.jpg')" }}></div>
            <div className="absolute inset-0 bg-background bg-opacity-80 z-10"></div>
            
            <div className="relative z-20 flex flex-col items-center animate-fade-in-up">
                <CountdownTimer />
                <h2 className="text-xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight drop-shadow-lg text-secondary mb-4">
                    Старт 29 сентября 2025
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight drop-shadow-lg">
                    <span className="block text-primary">Лучшая Версия</span>
                    <span className="block">Себя</span>
                </h1>
                <p className="mt-6 text-lg md:text-2xl max-w-2xl font-light text-text-secondary drop-shadow-md">
                    Хватит откладывать жизнь на потом!
                </p>
                <div className="mt-8">
                    <CTAButton text="Начать трансформацию" href="#purchase-1" size="large" />
                </div>
                <p className="mt-8 text-base md:text-lg text-text-primary font-bold border-2 border-primary px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg bg-background/70">
                    Уже более <span className="text-accent-2 text-xl md:text-2xl">1500</span> участниц получили результат
                </p>
            </div>
        </header>
    );
};