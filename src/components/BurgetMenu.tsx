import { useState, useEffect } from "react";
import { Spin as Hamburger } from 'hamburger-react'
import { Menu, X } from "lucide-react";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const handleLinkClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => setIsOpen(false), 300);
    };

    const menuItems = [
        { id: "about", label: "Про компанію" },
        { id: "metaldoor", label: "Вхідні металеві двері" },
        { id: "technologic", label: "Технології виробництва" },
        { id: "diploma", label: "Сертифікати" },
        { id: "kvartira", label: "Двері в квартиру" },
        { id: "price", label: "Ціни" },
        { id: "DoorComplectation", label: "Комплектації дверей" },
        { id: "cooperation", label: "Співпраця" },
        { id: "youtube", label: "Відеоогляди та соцмережі" },
    ];

    return (
        <div className="relative">
            {/* Кнопка меню (мобільна) */}
            <div className="p-2 !text-white ease-in-out focus:outline-none md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </div>

            {/* Велике меню (ідентичне мобільному) */}
            <div className="relative">
                {/* Кнопка меню */}
                <div
                    className="p-2 !text-white ease-in hidden md:block focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Hamburger size={30} toggled={isOpen} toggle={setIsOpen} />
                </div>

                <div
                    className={`fixed top-0 right-0 h-full hidden md:block min-h-150 w-100 mt-20 bg-stone-800/90 backdrop-blur-sm bg-opacity-80 z-50 flex flex-col items-end pr-5 justify-center space-y-6 ease-in-out transition-transform duration-300 lg:flex md:hidden ${
                        isOpen ? "translate-x-0" : "translate-x-[250%]"
                    }`}
                    style={{transition: "ease-in-out 0.8s"}}
                >
                    {menuItems.map(({id, label}) => (
                        <a
                            key={id}
                            onClick={() => handleLinkClick(id)}
                            className="!text-white relative cursor-pointer hover:bg-[#E50046]/80 pt-1 w-[90%] text-xl hover:text-gray-300 uppercase border-b-[#A5A5A4]/30 pb-1 border-b border-0"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Мобільне меню */}
            <div
                className={`fixed inset-0 h-screen md:hidden bg-stone-800/90 backdrop-blur-sm z-50 flex flex-col items-end pr-5 justify-center space-y-6 ease-in transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="absolute bg-[#E50046] font-bold top-2 right-7 text-white"
                     onClick={() => setIsOpen(false)}>
                    <X size={30}/>
                </div>
                {menuItems.map(({id, label}) => (
                    <a key={id} onClick={() => handleLinkClick(id)}
                       className="!text-white text-xl hover:text-gray-300 uppercase border-b-[#A5A5A4]/30 pb-1 border-b-1 border-0 w-[90%]">
                        {label}
                    </a>
                ))}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col items-end">
                        <span className="text-white font-bold text-sm lg:text-2xl">+38 (050) 375 55 31</span>
                        <span className="text-white text-xs lg:text-base">пн-пт 09:00 - 17:00</span>
                    </div>
                    <div className="flex gap-5 justify-center items-center">
                        <img src="./InstagramS.svg" alt="ins" />
                        <img src="./FacebookSmall.svg" alt="fc" />
                        <img src="./ViberSmall.svg" alt="viber" />
                        <img src="./youtubeS.svg" alt="youtube" />
                    </div>
                </div>
            </div>
        </div>
    );
}
