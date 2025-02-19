export const Footer = () => {
    return (
        <div id="youtube">
            <div className="h-full py-15 px-5 lg:px-40 lg:py-35 min-h-[70%] items-center lg:" style={{
                backgroundImage: "url(./luxury.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="font-bold text-white text-2xl lg:text-5xl">Відеоогляди</div>
                <div className="font-normal text-white text-xl lg:text-3xl lg:w-170">продукції та екскурсії по виробництву шукайте за
                    посиланнями
                </div>

                <div className="flex items-baseline justify-end lg:justify-center space-x-5 md:space-x-15">
                    <div>
                        <img src="./VectorArr.svg" alt="arr"/>
                        <img src="./Facebook_Icon.svg" alt="Facebook" className="w-27 h-27 cursor-pointer"/>
                    </div>
                    <div>
                        <img src="./InstagramFoo.svg" alt="Instagram" className="w-27 h-27 cursor-pointer"/>
                    </div>
                    <div>
                        <img src="./ViberFoo.svg" alt="Viber" className="w-27 h-27 cursor-pointer"/>
                    </div>
                    <div>
                        <img src="./YouTubePink.svg" alt="youtube" className="w-27 h-27 cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div className="bg-[#1D1D1B] lg:flex lg:justify-center lg:gap-5 w-full py-5 px-3 lg:py-0 lg:px-0">
                <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-15 items-center">
                    <img src="./Frame13.svg" alt="logo" className="w-40 h-30"/>

                    <div className="flex border-t-[#A5A5A4]/30 lg:border-0 gap-5 lg:flex-row-reverse lg:gap-15 border-t-1 w-full">
                        <div className="flex flex-col pt-3 pl-3 items-center">
                            <span className="text-[#A5A5A4] font-bold lg:text-2xl">+38 (050) 375 55 31</span>
                            <span className="text-[#A5A5A4] text-xs lg:text-base">пн-пт 09:00 - 17:00</span>
                        </div>
                        <div className="flex flex-row gap-3 pt-3 items-center">
                            <img src="./locMarker.svg" alt=""/>
                            <span className="text-[#A5A5A4] text-xs lg:text-base">Чернівецька обл., с.Великий Кучурів, <br/> вул.Головна 31-О</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;