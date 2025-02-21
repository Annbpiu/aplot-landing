import React, { useState } from "react";

const doorOptions = [
    { name: "Silver", img: "./IMG_1521.png" },
    { name: "Tender", img: "./IMG_1531.png" },
    { name: "Gold", img: "./IMG_1528.png" },
    { name: "Elit", img: "./IMG_1531.png" },
    { name: "Techno", img: "./IMG_1521.png" },
];

export const ComplectationDoors = () => {
    const [selectedDoor, setSelectedDoor] = useState("Gold");

    return (
        <div id="DoorComplectation"
             className="h-full flex flex-col justify-between min-h-screen w-full bg-white p-8 lg:px-30">
            {/* Заголовок */}
            <h2 className="text-2xl md:text-5xl text-white mb-5 font-bold uppercase p-3 text-center bg-[#E50046]">
                Комплектації дверей
            </h2>

            {/* Основний контейнер */}
            <div
                className="flex lg:flex-col flex-row h-[65%] lg:flex-row justify-between sm:justify-evenly lg:justify-between items-center lg:mt-6">
                {/* Вибір комплектації */}
                <div
                    className="lg:w-1/5 text-left text-base xl:text-5xl sm:text-2xl lg:mb-10 lg:ml-10 font-semibold space-y-2">
                    {doorOptions.map((door) => (
                        <div
                            key={door.name}
                            className={`cursor-pointer flex items-center gap-2 ${selectedDoor === door.name ? "text-black font-bold" : "text-gray-500"} lg:mb-10`}
                            onClick={() => setSelectedDoor(door.name)}
                        >
                            {selectedDoor === door.name && (
                                <img src="./Polygon.svg" alt="polygon" className="w-5 h-5 xl:w-10 xl:h-10"/>
                            )}
                            {door.name}
                        </div>
                    ))}
                </div>

                {/* Зображення дверей */}
                {doorOptions
                    .filter((door) => window.innerWidth > 640 || selectedDoor === door.name) // Показує лише вибрану дверку на маленькому екрані
                    .map((door) => (
                        <div
                            key={door.name}
                            className="lg:w-4/5 w-1/5 flex justify-end md:justify-center h-120 items-center cursor-pointer"
                            onClick={() => setSelectedDoor(door.name)}
                        >
                            <img
                                src={door.img}
                                alt={door.name}
                                className={`xl:w-80 xl:h-80 lg:w-50 absolute lg:relative lg:h-50 md:w-50 md:h-80 h-75 w-50 object-contain transition-all xl:duration-300 mx-1 ${
                                    selectedDoor === door.name ? "scale-125 sm:opacity-100" : "scale-90 opacity-0 lg:opacity-100"
                                }`}
                            />
                        </div>
                    ))}
            </div>

            {/* Таблиця характеристик */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:py-10 lg:mt-6">
                <table className="min-w-full text-sm text-left text-gray-500 table-fixed">
                    <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th className="px-6 py-3 text-white text-base md:text-xl bg-[#E50046] w-1/4">Характеристики:</th>
                        <th className="px-6 py-3 text-white text-base md:text-xl bg-[#E50046] w-1/4 whitespace-nowrap">{selectedDoor} Safe</th>
                        <th className="px-6 py-3 text-white text-xl bg-[#E50046] hidden md:table-cell w-1/4 whitespace-nowrap">{selectedDoor} C.P.R.</th>
                        <th className="px-6 py-3 text-white text-xl bg-[#E50046] hidden md:table-cell w-1/4 whitespace-nowrap">{selectedDoor} Ideal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 text-xl font-medium text-gray-900 bg-gray-50 w-1/4">Монтажна глибина
                            рами
                        </th>
                        <td className="px-6 py-4 text-xl w-1/4">120 мм</td>
                        <td className="px-6 py-4 text-xl hidden md:table-cell w-1/4">120 мм</td>
                        <td className="px-6 py-4 text-xl hidden md:table-cell w-1/4">120 мм</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 text-xl w-1/4">Товщина металу
                            рами
                        </th>
                        <td className="px-6 py-4 text-xl w-1/4">1,5 мм</td>
                        <td className="px-6 py-4 text-xl hidden md:table-cell w-1/4">1,5 мм</td>
                        <td className="px-6 py-4 text-xl hidden md:table-cell w-1/4">1,5 мм</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 text-xl w-1/4">Товщина полотна
                        </th>
                        <td className="px-6 py-4 text-xl w-1/4">90 мм</td>
                        <td className="px-6 py-4 text-xl hidden md:table-cell w-1/4">90 мм</td>
                        <td className="px-6 py-4 text-xl hidden md:table-cell w-1/4">90 мм</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ComplectationDoors;
