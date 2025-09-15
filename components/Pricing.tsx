import React from 'react';
import { CTAButton } from './CTAButton';

export const Pricing: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
                <p className="text-xl md:text-3xl font-black text-text-primary">
                    ☑️ Специальная цена сейчас: <span className="text-accent-3">4490 ₽</span> <br className="sm:hidden" /> <span className="text-text-secondary/70 line-through font-normal text-lg md:text-2xl">вместо 5490 ₽</span>.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-center">
                {/* Prepayment Option */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary uppercase">Участвовать по предоплате и забрать бонусы</h3>
                        <p className="text-4xl md:text-5xl font-black text-text-primary my-4">1000<span className="text-2xl md:text-3xl"> рублей</span></p>
                        <p className="text-text-secondary mb-6 text-base">Забронируй место и все бонусы, а остаток внеси до начала марафона.</p>
                    </div>
                    <CTAButton 
                        text="Внести предоплату" 
                        href="#purchase-1"
                        variant="secondary"
                        className="mt-6 !bg-white !text-accent-3 !border-2 !border-accent-3 hover:!bg-accent-3 hover:!text-white"
                    />
                </div>
                {/* Full Payment Option */}
                <div className="relative bg-white text-text-primary border-4 border-accent-3 rounded-2xl p-6 md:p-8 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 shadow-2xl shadow-accent-3/30">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-3 text-white font-bold uppercase px-4 py-1 rounded-full text-sm">
                        Максимум выгоды
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary uppercase">Оплатить полностью и забрать бонусы</h3>
                        <p className="text-4xl md:text-5xl font-black text-accent-3 my-4">4490<span className="text-2xl md:text-3xl"> рублей</span></p>
                        <p className="text-text-secondary mb-6 text-base">Получи моментальный доступ ко всем бонусам и чату участниц!</p>
                    </div>
                    <CTAButton 
                        text="Оплатить полностью"
                        href="#purchase-1"
                        variant="primary"
                        className="mt-6 !bg-accent-3 !focus:ring-accent-3/50"
                    />
                </div>
            </div>
            <p className="mt-8 text-center text-text-secondary/80 text-base md:text-lg">👉 Жми «Участвовать» и начни свой путь к себе!</p>
        </div>
    );
};