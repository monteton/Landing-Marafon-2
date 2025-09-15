import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const problems = [
    "Никак не можешь похудеть и вернуть энергию.",
    "Всё делаешь «правильно» - но вес стоит.",
    "Голодовки и диеты только портят настроение.",
    "Стресс перед каждым отпуском.",
    "Мысли о том, что \"после 30 уже поздно\".",
];

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const Problem: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-12">
                        Всё ещё ждёшь, что <span className="text-primary">«завтра»</span> ты наконец начнёшь новую жизнь?
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
                        <div className="md:w-1/2 w-full space-y-4">
                            {problems.map((problem, index) => (
                                <div key={index} className="bg-background/80 p-4 md:p-5 rounded-lg flex items-center shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-light/50">
                                    <CheckIcon />
                                    <p className="text-base md:text-lg text-text-secondary">{problem}</p>
                                </div>
                            ))}
                        </div>
                        <div className="md:w-1/2 w-full">
                            <img 
                                src="images/F2564CF8-FAC5-41AD-AC63-3BB21346CB61.JPG" 
                                alt="Женщина устала от диет"
                                className="rounded-xl shadow-2xl object-cover w-full aspect-square"
                            />
                        </div>
                    </div>
                     <h3 className="text-center mt-12 md:mt-16 text-2xl md:text-4xl font-bold text-text-primary">
                        <span className="text-primary">Знакомо?</span> Я знаю, что можно по другому.
                    </h3>
                </AnimatedSection>
            </div>
        </section>
    );
};