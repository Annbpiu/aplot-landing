import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const NewStyle = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = ["./IMG_1528.png", "./IMG_1521.png", "./IMG_1531.png"];
    const imageWidth = 200;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[80vh] md:h-screen mt-15 md:flex md:flex-row w-full bg-cover bg-no-repeat md:bg-none overflow-hidden" style={{ backgroundImage: 'url(./Isolation_doors.svg)' }}>
            {/* Контейнер для тексту та слайдеру */}
                <div className="text-center md:mt-20 md:ml-40 md:text-left">
                    <h2 className="text-2xl m-auto md:m-0 md:text-5xl text-white w-[95%] md:w-130 font-bold uppercase p-3 text-center bg-[#E50046]">
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
                            alt="door"
                            className={`w-48 md:w-62 h-auto absolute transition-transform duration-500 cursor-pointer ${
                                index === activeIndex ? "z-10 scale-110" : "z-0 scale-90 opacity-80"
                            }`}
                            style={{
                                left: `${index * (imageWidth + (window.innerWidth >= 768 ? 70 : 10) - 95)}px`, // Змінюємо spacing тут теж
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
