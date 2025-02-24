import BurgerMenu from "./BurgetMenu.tsx";

export const NavMenu = () => {
    return (
        <div className="flex justify-center w-full">
            <nav
                className="xl:w-[80%] w-full max-w-[1200px] h-[50px] md:h-[78px] bg-black/60 backdrop-blur-sm shadow-lg p-6 flex justify-between items-center">
                {/* Логотипи */}
                <div className="flex items-center md:gap-4">
                    <img src="./door_logo.svg" alt="Logo" className="w-10 h-10"/>
                    <img src="./nav_logo.svg" alt="logo" className="w-20 h-20 lg:w-35 lg:h-35"/>
                </div>

                {/* Адреса (показувати лише на великих екранах) */}
                <div className="hidden md:flex text-center text-white">
                    <img src="./location-marker.svg" alt="marker"/>
                    <span className="block text-sm lg:text-xs">Чернівецька обл., с.Великий Кучурів,<br/>вул. Головна 31-О</span>
                </div>

                {/* Соціальні мережі (приховуємо на малих екранах) */}
                <div className="hidden md:flex gap-2 mt-2">
                    <a href="https://www.facebook.com/share/1LGDbqj6Gs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                        <img src="./facebook.svg" alt="Facebook" className="w-10 h-10"/>
                    </a>
                    <a href="https://www.instagram.com/aplot.ua?igsh=MXQxdTlzZmJ1YTB5ZA==" target="_blank" rel="noopener noreferrer">
                        <img src="./instagram.svg" alt="Instagram" className="w-10 h-10"/>
                    </a>
                    <a href="https://invite.viber.com/?g2=AQBt8iWlT4sae0mOuR5cCpn%2Fp5mgTz0RrYe73ci8oa5Q9oUK4iPHcxfsKQdyrKTc" target="_blank" rel="noopener noreferrer">
                        <img src="./viber.svg" alt="Viber" className="w-10 h-10"/>
                    </a>
                    <a href="https://youtube.com/@tmaplot?si=vkx8v4U1JZhiXwl3" target="_blank" rel="noopener noreferrer">
                        <img src="./youtube.svg" alt="YouTube" className="w-10 h-10"/>
                    </a>
                </div>


                {/* Контакти */}
                <div className="flex flex-col items-end text-white">
                    <span className="text-sm font-medium">+38 (050) 375 55 31</span>
                    <span className="text-xs text-gray-300">пн-пт 09:00 - 17:00</span>
                </div>

                <BurgerMenu/>
            </nav>
        </div>
    );
};

export default NavMenu;
