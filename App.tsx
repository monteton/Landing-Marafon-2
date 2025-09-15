import React, { useState } from 'react';

import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { About } from './components/About';
import { WhatYouGet } from './components/WhatYouGet';
import { CourseContent } from './components/CourseContent';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';

const App: React.FC = () => {
    const [isPolicyVisible, setIsPolicyVisible] = useState(false);
    
    return (
        <div className="bg-background text-text-primary overflow-x-hidden">
            <Hero />
            <Problem />
            <About />
            <WhatYouGet />
            <CourseContent />
            <Bonuses />
            <section id="purchase-1" className="py-12 md:py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-text-primary mb-8 uppercase">Сделай выбор в пользу себя!</h2>
                    <Pricing />
                </div>
            </section>
            <Testimonials />
            <FAQ />
            <section id="purchase-2" className="py-12 md:py-20 bg-light/30">
                 <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-text-primary mb-2">Не жди «идеального понедельника»</h2>
                    <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto">Твоя лучшая версия уже здесь — нужно просто сделать первый шаг.</p>
                    <Pricing />
                </div>
            </section>
            <Footer onShowPolicy={() => setIsPolicyVisible(true)} />
            {isPolicyVisible && <PolicyModal onClose={() => setIsPolicyVisible(false)} />}
        </div>
    );
};

export default App;