import { useState } from 'react';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Навігація */}
            <nav className="md:w-[80%] w-full max-w-[1200px] h-[50px] md:h-[78px] bg-black/60 backdrop-blur-sm shadow-lg p-6 flex justify-between items-center">
                {/* Логотипи */}
                <div className="flex items-center md:gap-4">
                    <img src="./door_logo.svg" alt="Logo" className="w-10 h-10"/>
                    <img src="./nav_logo.svg" alt="logo" className="w-20 h-20"/>
                </div>

                {/* Бургер меню (відображається на малих екранах) */}
                <button onClick={toggleMenu} className="md:hidden text-white">
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
            </nav>

            {/* Бічне меню */}
            <div
                className={`fixed top-0 right-0 w-3/4 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
            >
                <div className="flex flex-col p-6 space-y-4">
                    <a href="#" className="text-lg">Про компанію</a>
                    <a href="#" className="text-lg">Вхідні металеві двері</a>
                    <a href="#" className="text-lg">Різноманіття текстур</a>
                    <a href="#" className="text-lg">Технологія виробництва</a>
                    <a href="#" className="text-lg">Сертифікати</a>
                    <a href="#" className="text-lg">Двері в квартиру</a>
                    <a href="#" className="text-lg">Ціни</a>
                    <a href="#" className="text-lg">Комплектації дверей</a>
                    <a href="#" className="text-lg">Співпраця</a>
                    <a href="#" className="text-lg">Відеоогляди</a>
                    <a href="#" className="text-lg">Мережі</a>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
