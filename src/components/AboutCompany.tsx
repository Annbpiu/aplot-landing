export const AboutCompany = () => {
    return (
        <div className="bg-white flex flex-col lg:flex-row items-center lg:items-stretch justify-between space-x-4 mg:pt-10 relative">
            <div className="lg:w-1/2 z-10 relative px-5 lg:m-auto">
                <h2 className="text-2xl text-[#1D1D1B] pt-6 font-bold mb-6 lg:text-5xl text-center lg:text-start">
                    Компанія <span className="bg-[#E50046] px-2 lg:text-5xl text-white">Aplot</span> - це
                </h2>
                <ul className="list-none space-y-2 text-lg">
                    <li className="flex items-center">
                        <img src="/Polygon.svg" alt="li_element" className="w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        21 рік на ринку України та Європи
                    </li>
                    <li className="flex items-center">
                        <img src="/Polygon.svg" alt="li_element" className="w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        Площа виробництва 5 500 м²
                    </li>
                    <li className="flex items-center">
                        <img src="/Polygon.svg" alt="li_element" className="w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        Виробляємо 400+ дверей на добу
                    </li>
                    <li className="flex items-center">
                        <img src="/Polygon.svg" alt="li_element" className="w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        Найсучасніше обладнання в Україні
                    </li>
                    <li className="flex items-center">
                        <img src="/Polygon.svg" alt="li_element" className="w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        Європейські матеріали
                    </li>
                    <li className="flex items-start pt-2">
                        <img src="/Polygon.svg" alt="li_element" className="w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        Двері Aplot продаються в 21 країні світу, в тому числі в США та Європі
                    </li>
                </ul>
            </div>

            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 last:pr-0">
                <div className="absolute top-[-10px] left-0 w-full h-1/5 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none lg:hidden"></div>
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none hidden lg:block"></div>

                <img src="/6L5A7768.png" alt="doors"
                     className="w-full max-w-lg max-w-none p-auto h-full object-cover"
                />
            </div>
        </div>
    );
};
export default AboutCompany;