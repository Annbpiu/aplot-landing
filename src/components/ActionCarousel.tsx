import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ActionCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const images = [
        './diplom1.png',
        './diplom2.png',
        './diplom3.png',
        './diplom4.png'
    ];

    const imageWidth = 100;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute bottom-80 right-40 p-4 md:w-1/2 w-full flex flex-col mr-5 justify-center items-center hidden lg:block">
            <div
                className="flex justify-center mt-30 m-auto md:mb-40 relative"
                style={{
                    width: `${images.length * (imageWidth + (window.innerWidth >= 768 ? 70 : 20))}px`,
                }}
            >
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Diplom ${index + 1}`}
                        className="w-64 md:w-60 xl:w-80 h-auto absolute cursor-pointer"
                        style={{
                            left: `${index * (imageWidth + (window.innerWidth >= 768 ? 70 : 20))}px`,
                            zIndex: hoveredIndex === index ? 20 : index === currentIndex ? 10 : 0,
                        }}
                        animate={{
                            scale: hoveredIndex === index ? 1.2 : 1,
                            translateY: hoveredIndex === index ? -20 : -index * 40,
                            opacity: index === currentIndex ? 1 : 0.96,
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ActionCarousel;
