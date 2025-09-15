import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { CTAButton } from './CTAButton';

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-primary mr-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const MenuIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-primary mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7,2V13.54C6.41,13.19 5.73,13 5,13A3,3 0 0,0 2,16A3,3 0 0,0 5,19C6.38,19 7.5,18.15 7.85,17H8V2H7M15.5,12C14.12,12 13,13.12 13,14.5C13,15.88 14.12,17 15.5,17C16.88,17 18,15.88 18,14.5C18,13.12 16.88,12 15.5,12M15.5,14H18V15H15.5A.5.5 0 0,1 15,14.5A.5.5 0 0,1 15.5,14M19,2H17V10H19V2Z" />
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-primary mr-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
    </svg>
);

const PersonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-primary mr-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
    </svg>
);

const bonuses = [
    { text: "3 дополнительные тренировки для старта, чтобы получить максимальный результат", Icon: StarIcon },
    { text: "Эксклюзивное меню.", Icon: MenuIcon },
    { text: "Знакомство с участницами и доступ в чат с поддержкой сразу после оплаты.", Icon: ChatIcon },
    { text: "Больше общения со мной лично.", Icon: PersonIcon }
];


export const Bonuses: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection>
                    <div className="bg-[#008000] rounded-2xl p-6 md:p-12 text-center shadow-2xl shadow-[#008000]/30">
                        <h2 className="text-3xl md:text-5xl text-white font-black mb-4 uppercase">
                           Специальные бонусы
                        </h2>
                        <p className="text-base md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">Для тех, кто успеет оплатить до повышения цены и готов начать уже сегодня!</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto text-left mb-12">
                            {bonuses.map((bonus, index) => (
                                <div key={index} className="bg-white/80 p-4 md:p-5 rounded-lg flex items-center shadow-sm border border-gray-200/50">
                                    <bonus.Icon />
                                    <span className="font-semibold text-text-primary text-base md:text-lg">{bonus.text}</span>
                                </div>
                            ))}
                        </div>
                        <CTAButton 
                            text="Забрать бонусы и место!" 
                            href="#purchase-1" 
                            size="large"
                            className="!bg-primary !text-white focus:!ring-primary/50 shadow-lg"
                         />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};