import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ActionCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/diplom1.png',
        '/diplom2.png',
        '/diplom3.png',
        '/diplom4.png'
    ];

    const imageWidth = 50; // Ширина кожного зображення
    const imageHeight = 500; // Висота кожного зображення (для наглядності)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // змінюємо слайд кожні 3 секунди

        return () => clearInterval(interval); // очищаємо інтервал при демонтажі компонента
    }, []);

    return (
        <div className="md:w-1/2 w-full px-2 flex flex-col justify-center items-center">
            {/* Слайдер */}
            <div
                className="flex justify-center mt-30 m-auto md:mb-40 relative"
                style={{
                    width: `${images.length * (imageWidth + (window.innerWidth >= 768 ? 70 : 20))}px`, // Змінюємо spacing залежно від розміру екрану
                }}
            >
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Diplom ${index + 1}`}
                        className={`w-48 md:w-62 h-auto absolute transition-transform duration-500 cursor-pointer`}
                        style={{
                            left: `${index * (imageWidth + (window.innerWidth >= 768 ? 70 : 20))}px`, // Змінюємо spacing тут
                            transform: `translateY(${-index * 40}px)`, // Піднімаємо зображення вгору
                            zIndex: index === currentIndex ? 10 : 0, // робимо поточне зображення найбільшим
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ActionCarousel;
