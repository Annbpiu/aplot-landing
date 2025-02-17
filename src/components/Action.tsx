import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ActionCarousel from "./ActionCarousel.tsx";

const diplomas = [
    "./diplom1.png",
    "./diplom2.png",
    "./diplom3.png",
    "./diplom4.png"
];

export const Action = () => {
    const [currentDiploma, setCurrentDiploma] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDiploma(prev => (prev + 1) % diplomas.length);
        }, 600000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen relative" style={{
            backgroundImage: 'url(./Decor_4.png), url(./Decor_1.png)',
            backgroundPosition: 'bottom right, top left',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="bg-black/50 m-4 mt-10 absolute md:h-50 md:ml-20 md:mt-60 md:w-180">
                <div className="h-full p-10 relative z-10 text-white">
                    <div className="font-light text-center md:text-xl  break-words">
                        Вся продукція заводу <span className="font-bold">«Aplot» сертифікована</span> і ми як виробник
                        забезпечуємо гарантію якості нашої продукції.
                        Замовивши <span className="font-bold">продукцію «Аplot»</span>, ви отримаєте двері, які повністю
                        відповідатимуть вашим уявленням про безпеку і надійність.
                    </div>
                </div>
            </div>

            <ActionCarousel/>

            <div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-100 flex flex-col items-center justify-center lg:hidden">
                <motion.img
                    key={currentDiploma}
                    src={diplomas[currentDiploma]}
                    alt="Diploma"
                    className="w-full h-auto object-cover shadow-lg rounded-lg"
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.9}}
                    transition={{duration: 1}}
                />
                <div className="flex gap-2 mt-4">
                    {diplomas.map((diploma, index) => (
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full ${currentDiploma === index ? 'bg-[#E50046]' : 'bg-gray-300'}`}
                            onClick={() => setCurrentDiploma(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Action;
