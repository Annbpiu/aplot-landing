import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const NewStyle = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = ['./IMG_1528.png', './IMG_1521.png', './IMG_1531.png'];
    const imageWidth = 200;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="min-h-[100svh] flex flex-col items-center w-full bg-cover bg-no-repeat md:bg-none"
            style={{ backgroundImage: 'url(./Isolation_doors.svg)' }}
        >
            {/* Текстовий блок */}
            <div className="text-center mt-5 xl:pl-40 lg:px-5 md:text-left self-start">
                <h2 className="text-2xl md:text-5xl text-white w-[95%] md:w-130 font-bold uppercase p-3 text-center bg-[#E50046]">
                    сучасний стиль
                </h2>
                <div>
          <span className="text-white text-sm md:text-xl font-light pt-2 block">
            Наші останні розробки в напрямку сучасного стилю дозволяють втілювати будь-які ідеї та бажання в футуристичному та класичних стилях.
          </span>
                    <span className="text-white text-sm md:text-xl font-light md:mt-7 mt-3 block">
            Металеві вставки «молдинги» та «ф’юзинги», комбінування двох текстур на одній панелі та багато всього іншого
          </span>
                </div>
            </div>

            {/* Контейнер слайдера */}
            <div className="md:w-1/2 w-full h-full px-2 flex justify-center lg:self-center lg:pb-15 xl:self-end overflow-hidden">
                <div
                    className="relative flex h-[400px] pt-20 lg:pt-40"
                    style={{
                        width: `${images.length * (imageWidth + (window.innerWidth >= 768 ? 70 : 20))}px`,
                    }}
                >
                    {images.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt="door"
                            className={`w-48 md:w-62 xl:w-55 2xl:w-80 h-full object-cover absolute transition-transform duration-500 cursor-pointer ${
                                index === activeIndex ? 'z-10 scale-110' : 'z-0 scale-90 opacity-80'
                            }`}
                            style={{
                                left: `${index * (imageWidth + (window.innerWidth >= 768 ? 70 : 10) - 95)}px`,
                                top: 0, // Фіксує положення зверху, щоб уникнути зміни висоти
                            }}
                            onMouseEnter={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewStyle;
