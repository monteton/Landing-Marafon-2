import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const benefits = [
    { title: "Прощай, лишние кг!", description: "Ты легко и с удовольствием избавишься от 3-7 кг, почувствуешь лёгкость и свободу движений." },
    { title: "Подтянутое, упругое тело.", description: "Мы будем работать над тем, чтобы ты могла с гордостью носить любую одежду и нравиться себе в отражении." },
    { title: "Питание - это просто!", description: "Забудь о скучных диетах. Ты научишься интуитивно понимать своё тело и составлять вкусное, сбалансированное меню." },
    { title: "Больше энергии, меньше усталости.", description: "Ты забудешь о вечной разбитости. Верни себе жизненную силу и уверенность." },
    { title: "Поддержка и сообщество.", description: "Ты не будешь одна. В нашем закрытом чате ты найдёшь единомышленниц и мою личную поддержку." },
    { title: "Знания на всю жизнь!", description: "Ты получишь систему, которая останется с тобой навсегда, чтобы вес больше не возвращался." },
];

export const WhatYouGet: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-12 md:mb-16 uppercase">Что тебя ждёт?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-background p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-2">
                                <div className="text-primary mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">{benefit.title}</h3>
                                <p className="text-base text-text-secondary leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};