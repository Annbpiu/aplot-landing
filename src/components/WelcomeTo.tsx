export const WelcomeTo = () => {
    return (
        <div className="flex flex-col h-full lg:px-40 min-h-full lg:pb-10 p-5">
            <h1 className="text-white !text-2xl lg:!text-5xl font-bold">Запрошуємо до співпраці</h1>
            <span
                className="bg-[#E50046] py-2 mt-5 w-65 lg:w-100 text-center lg:text-2xl text-white">Ми пропонуємо партнерам:</span>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                {/* Ліва частина з текстом */}
                <div className="lg:w-1/2">
                    <ul className="list-none mt-5 space-y-2 text-lg">
                        <li className="flex items-center lg:text-2xl text-base font-light text-white">
                            <img src="./Polygon.svg" alt="li_element" className="w-4 h-4 mr-2"/>
                            Широкий вибір надійних дверей і комплектуючих до них
                        </li>
                        <li className="flex items-center lg:text-2xl text-base font-light text-white">
                            <img src="./Polygon.svg" alt="li_element" className="w-4 h-4 mr-2"/>
                            Консультації та будь-яку інформаційну підтримку з питань нашої продукції
                        </li>
                        <li className="flex items-center lg:text-2xl text-base font-light text-white">
                            <img src="./Polygon.svg" alt="li_element" className="w-4 h-4 mr-2"/>
                            Індивідуальний підхід до кожного партнера
                        </li>
                        <li className="flex items-center lg:text-2xl text-base font-light text-white">
                            <img src="./Polygon.svg" alt="li_element" className="w-4 h-4 mr-2"/>
                            Лояльні ціни на продукцію і зручну систему знижок
                        </li>
                        <li className="flex items-center lg:text-2xl text-base font-light text-white">
                            <img src="./Polygon.svg" alt="li_element" className="w-4 h-4 mr-2"/>
                            Юридичну допомогу та бухгалтерські послуги
                        </li>
                        <li className="flex items-center lg:text-2xl text-base font-light text-white">
                            <img src="./Polygon.svg" alt="li_element" className="w-4 h-4 mr-2"/>
                            Установку дверей на обʼєкті та їх сервісне обслуговування виробником
                        </li>
                        <li className="flex items-center lg:text-2xl text-base font-light text-white">
                            <img src="./Polygon.svg" alt="li_element" className="w-4 h-4 mr-2"/>
                            Вигідні умови покупки виставкових зразків для ваших салонів
                        </li>
                    </ul>
                </div>

                {/* Права частина з фото та фоном */}
                <div
                    className="lg:w-1/2 h-auto flex justify-end items-center relative"
                    style={{
                        backgroundImage: "url(./Decor_2.png)",
                        backgroundSize: "contain",
                        backgroundPosition: "right 100px top -80px",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <img src="./Photoroom.png" alt="Protoroom" className="w-[60%] lg:w-[60%] object-contain"/>
                </div>
            </div>
        </div>
    );
};

export default WelcomeTo;