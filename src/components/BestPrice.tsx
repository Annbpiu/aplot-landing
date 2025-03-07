export const BestPrice = () => {
    return (
        <div
            id="price"
            className="flex flex-col min-h-[100svh] mt-14 lg:flex-row-reverse items-center lg:items-stretch justify-between space-x-4 lg:space-x-0 mg:pt-10 relative"
            style={{
                backgroundImage: 'url(./Aplot.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'auto',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Додаємо градієнт */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent w-full to-[#1D1D1B] opacity-50"></div>

            <div className="lg:w-1/1 z-10 relative p-8 flex flex-col justify-center lg:pl-10">
                <h2 className="text-2xl m-auto mt-15 lg:mt-0 md:m-0 lg:text-2xl xl:text-5xl text-white w-[95%] md:w-150 font-bold uppercase p-3 text-center bg-[#E50046]">
                    Найвигідніші ціни
                </h2>
                <ul className="list-none space-y-2 mt-20 lg:mt-5 p-5 lg:p-0 lg:pt-10 text-lg">
                    <li className="flex text-white items-center lg:text-xl xl:text-4xl lg:mt-10">
                        <img src="./Polygon.svg" alt="li_element" className="lg:w-10 lg:h-10 w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        Ми виробники, а не посередники, тому гарантуємо найкращу ціну без зайвих націнок та переплат.
                    </li>
                    <li className="flex text-white items-center lg:text-xl xl:text-4xl lg:mt-10">
                        <img src="./Polygon.svg" alt="li_element" className="lg:w-10 lg:h-10 w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        Вартість дверей залежить від технічних характеристик.
                    </li>
                    <li className="flex text-white items-center lg:text-xl xl:text-4xl lg:mt-10">
                        <img src="./Polygon.svg" alt="li_element" className="lg:w-10 lg:h-10 w-4 h-4 mr-2 lg:text-4xl text-[#1D1D1B]" />
                        Ви завжди можете замовити двері, які підходять вам за фінансовими можливостями, будь то бюджетна модель або елітний виріб преміум-класу.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BestPrice;


