import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

const testimonials = [
    { id: 1, image: 'images/IMG_8821.JPG', quote: "Это лучшее, что случалось со мной! Я не только похудела, но и обрела уверенность в себе. Спасибо, Наталья!", name: "Екатерина" },
    { id: 2, image: 'images/IMG_8822.JPG', quote: "Никогда не думала, что в 45 лет смогу так выглядеть. Марафон изменил мою жизнь, я полна энергии!", name: "Марина" },
    { id: 3, image: 'images/IMG_8826.JPG', quote: "Программа просто супер! Тренировки и питание - все понятно и доступно. А поддержка в чате - бесценна.", name: "Ольга" },
];

const galleryImages = [
    'images/IMG_8819.JPG',
    'images/IMG_8841.JPG',
    'images/IMG_8840.JPG',
    'images/IMG_8838.JPG',
    'images/IMG_8839.JPG',
];

const ImageModal: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="relative max-w-3xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt="Результат участницы" className="rounded-lg object-contain max-h-[90vh]" />
            <button
                onClick={onClose}
                className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg"
                aria-label="Close image view"
            >
                &times;
            </button>
        </div>
    </div>
);


export const Testimonials: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-12 md:mb-16 uppercase">Отзывы и результаты</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map(t => (
                            <div key={t.id} className="bg-background rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                                <img src={t.image} alt={`Результат ${t.name}`} className="aspect-square object-cover w-full" />
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-text-secondary italic mb-4 flex-grow">"{t.quote}"</p>
                                    <p className="text-right text-primary font-bold">- {t.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black text-text-primary text-center mt-16 md:mt-20 mb-12 uppercase">Отзывы учасниц</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
                        {galleryImages.map((imgSrc, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                onClick={() => setSelectedImage(imgSrc)}
                            >
                                <img src={imgSrc} alt={`Результат ${index + 1}`} className="aspect-square object-cover w-full" />
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
            {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
        </section>
    );
};