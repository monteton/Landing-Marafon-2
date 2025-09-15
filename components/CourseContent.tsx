import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const contents = [
    "Удобные видеоуроки по питанию и тренировкам",
    "Готовые тренировки для дома и зала",
    "Видео по питанию: калории, рацион, частые ошибки",
    "Мотивационные уроки, чтобы не сорваться",
    "Видео по уходу за кожей и растяжке",
    "МФР - тренировки на снятие мышечного напряжения",
    "Полезные материалы: файлы и чек-листы",
    "Чат поддержки и вдохновения"
];

const CheckIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const CourseContent: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection>
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-3xl md:text-5xl text-text-primary font-black mb-8">✨ Что внутри курса:</h2>
                            <div className="space-y-4">
                                {contents.map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckIcon />
                                        <p className="text-base md:text-lg text-text-secondary">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
                           <div className="bg-light/40 p-6 md:p-8 rounded-2xl border-2 border-primary/20 shadow-xl">
                                <img src="images/IMG_1776.JPG" alt="Материалы курса" className="rounded-lg mb-6 w-full object-cover" />
                                <p className="text-base md:text-lg text-text-secondary mb-4">
                                    Длительность марафона - <span className="font-bold text-text-primary text-lg md:text-xl">45 дней.</span>
                                </p>
                                <p className="text-base md:text-lg text-accent-2 font-bold">
                                    Количество мест ограничено, так как это марафон с моей личной обратной связью.
                                </p>
                           </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};