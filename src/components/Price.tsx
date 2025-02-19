export const Price = () => {
    return (
        <div id="kvartira" className="min-h-screen h-full relative mt-5">
            <div className="absolute top-0 left-0 right-0 bottom-0 blur-sm md:hidden"
                 style={{backgroundImage: 'url(./Panel-51.png)', backgroundSize: 'cover'}}>
            </div>

            <div
                className="absolute top-0 left-0 right-0 bottom-0 hidden md:block"
                style={{
                    backgroundImage: 'url(./Panel-51.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>

            <div className="bg-black/60 m-4 relative p-2 md:pl-10 md:h-150 md:ml-20 md:mt-40 md:w-180">
                <div className="h-full p-2 md:p-10 relative z-10 text-white">
                    <h1 className="font-bold md:text-3xl break-words">
                        Двері в квартиру від виробника
                    </h1>
                    <div className="mt-4 md:mt-10 font-light md:text-xl break-words">
                        Основний напрямок нашої роботи - металеві вхідні двері в квартиру.
                        Завдяки новітньому обладнанню ми можемо запропонувати вам розширену лінійку продукції і безліч
                        варіацій дверних конструкцій.
                    </div>
                    <div className="mt-4 md:mt-10 font-light md:text-xl break-words">
                        Ознайомитись з усіма можливими комплектаціями вхідних дверей можна за посиланням:
                    </div>

                    <a
                        href="https://aplot.ua/price1111.pdf"
                        className="bg-[#E50046] text-white py-4 px-8 mt-15 text-sm md:text-2xl w-full md:w-[80%] font-bold hover:bg-[#d4003f] transition duration-300 inline-flex items-center justify-center space-x-4">
                        <img src="./Vector_price.svg" alt="price" className="w-8 h-8 md:w-10 md:h-10"/>
                        <span className="text-white uppercase font-bold text-lg md:text-3xl">прайс aplot 2025</span>
                    </a>

                </div>
            </div>

            <div className="relative z-10 bottom-0 h-[20%] md:hidden">
                <img src="./Panel-51.png" alt="photo" className=""/>
            </div>
        </div>
    );
};

export default Price;
