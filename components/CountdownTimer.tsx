import React, { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
    const difference = +new Date("2025-09-29T00:00:00") - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

const labels: { [key: string]: string } = {
    days: 'Дней',
    hours: 'Часов',
    minutes: 'Минут',
    seconds: 'Секунд',
};

export const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return null;
        }

        return (
            <div key={interval} className="bg-white rounded-lg shadow-inner p-2 md:p-4 flex-1 text-center">
                <span className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-primary tracking-tighter tabular-nums">
                    {String(timeLeft[interval]).padStart(2, '0')}
                </span>
                <span className="block text-xs sm:text-sm md:text-base uppercase text-text-secondary mt-1">
                    {labels[interval]}
                </span>
            </div>
        );
    });

    return (
        <div className="bg-background/80 rounded-xl shadow-lg p-4 md:p-8 mb-8 w-full max-w-4xl mx-auto">
            <p className="text-center text-lg md:text-3xl font-bold text-secondary mb-4">
                До старта марафона осталось:
            </p>
            <div className="flex justify-center items-stretch gap-1 md:gap-4">
                {timerComponents.length ? timerComponents : <span className="text-xl md:text-2xl font-bold text-primary">Марафон начался!</span>}
            </div>
        </div>
    );
};