import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const details = [
    { label: "Получатель", value: "Макаренко Наталья Анатольевна" },
    { label: "Номер счета", value: "40817810200033592807" },
    { label: "Назначение платежа", value: "Перевод средств по договору № 5376892385 Макаренко Наталья Анатольевна НДС не облагается" },
    { label: "БИК", value: "044525974" },
    { label: "Банк-получатель", value: "АО \"ТБанк\"" },
    { label: "Корр. счет", value: "30101810145250000974" },
    { label: "ИНН", value: "7710140679" },
    { label: "КПП", value: "771301001" },
];

export const PaymentDetails: React.FC = () => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <section id="payment" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="text-4xl font-black text-text-primary text-center mb-12">Реквизиты для оплаты</h2>
                    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                        <div className="space-y-4">
                            {details.map((item, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-3">
                                    <span className="text-text-secondary/80 sm:w-1/3">{item.label}</span>
                                    <div className="flex items-center sm:w-2/3">
                                        <span className="font-mono text-text-primary flex-grow">{item.value}</span>
                                        <button 
                                            onClick={() => copyToClipboard(item.value)} 
                                            className="ml-4 p-2 text-gray-400 hover:text-primary transition-colors"
                                            title="Скопировать"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};