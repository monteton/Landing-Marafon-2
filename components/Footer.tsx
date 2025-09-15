import React from 'react';

interface FooterProps {
    onShowPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowPolicy }) => {
    return (
        <footer className="bg-secondary py-12 text-light/90">
            <div className="container mx-auto px-6 text-center text-sm">
                 <div className="mb-6 max-w-2xl mx-auto space-y-1">
                    <p className="font-bold text-base">Реквизиты Оператора</p>
                    <p>Самозанятая Макаренко Наталья Анатольевна</p>
                    <p>ИНН: 772672813036</p>
                    <p>КНД: 1122035</p>
                    <p>Справка о постановке на учет физического лица в качестве налогоплательщика налога на профессиональный доход №53913960 от 31.03.2024 г.</p>
                    <p>Юридический адрес: г. Москва, ул. Херсонская д. 26, корпус 2, кв. 120</p>
                    <p>e-mail: manbrikserg@mail.ru</p>
                    <p>Режим работы: с понедельника по пятницу с 10:00 до 17:00 (время московское).</p>
                </div>
                <div className="mt-6">
                    <button onClick={onShowPolicy} className="underline hover:text-white transition-colors">
                        Политика в отношении обработки персональных данных
                    </button>
                </div>
                <p className="mt-8 text-xs text-light/60">
                    &copy; {new Date().getFullYear()} Наталья Макаренко. Все права защищены.
                </p>
            </div>
        </footer>
    );
};
