import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="md:w-1/3 w-full flex justify-center">
                            <img 
                                src="images/A58A540A-62D1-48FC-A571-707F437AADDA.JPG" 
                                alt="Наталья Макаренко" 
                                className="rounded-xl shadow-2xl shadow-primary/20 object-cover w-full max-w-sm h-auto"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-xl md:text-2xl text-text-secondary mb-6">
                                Меня зовут Наталья Макаренко. Мне 53, и я живу в теле, которое люблю.
                            </p>
                            <p className="text-base md:text-lg text-text-secondary/80 mb-6 leading-relaxed">
                                Вот уже несколько лет я помогаю женщинам стать лучшей версией себя, и я уверена, что у тебя всё получится! Марафон «Лучшая версия себя» - это <span className="font-bold text-text-primary">45 дней</span>, которые полностью изменят твоё отношение к себе, своему телу и своей жизни.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};