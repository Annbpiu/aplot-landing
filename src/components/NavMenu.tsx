import BurgerMenu from "./BurgetMenu.tsx";

export const NavMenu = () => {
    return (
        <div className="flex justify-center w-full">
            <nav
                className="md:w-[80%] w-full max-w-[1200px] h-[50px] md:h-[78px] bg-black/60 backdrop-blur-sm shadow-lg p-6 flex justify-between items-center">
                {/* Логотипи */}
                <div className="flex items-center md:gap-4">
                    <img src="./door_logo.svg" alt="Logo" className="w-10 h-10"/>
                    <img src="./nav_logo.svg" alt="logo" className="w-20 h-20"/>
                </div>

                {/* Адреса (показувати лише на великих екранах) */}
                <div className="hidden md:flex text-center text-white">
                    <img src="./location-marker.svg" alt="marker"/>
                    <span className="block text-sm">Чернівецька обл., с.Великий Кучурів,<br/>вул. Головна 31-О</span>
                </div>

                {/* Соціальні мережі (приховуємо на малих екранах) */}
                <div className="hidden md:flex gap-2 mt-2">
                    <img src="./facebook.svg" alt="Facebook" className="w-10 h-10"/>
                    <img src="./instagram.svg" alt="Instagram" className="w-10 h-10"/>
                    <img src="./viber.svg" alt="Viber" className="w-10 h-10"/>
                    <img src="./youtube.svg" alt="YouTube" className="w-10 h-10"/>
                </div>

                {/* Контакти */}
                <div className="flex flex-col items-end text-white">
                    <span className="text-sm font-medium">+38 (050) 375 55 31</span>
                    <span className="text-xs text-gray-300">пн-пт 09:00 - 17:00</span>
                </div>

                <BurgerMenu />
            </nav>
        </div>
    );
};

export default NavMenu;
