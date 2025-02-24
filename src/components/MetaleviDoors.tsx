export const MetaleviDoors = () => {
    return (
        <div id="metaldoor" className="flex flex-col min-h-screen h-full relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 blur-sm md:hidden"
                 style={{backgroundImage: 'url(./greendoor.png)', backgroundSize: 'cover'}}>
            </div>

            <div
                className="absolute top-0 left-0 right-0 bottom-0 hidden md:block"
                style={{
                    backgroundImage: 'url(./greendoor.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>

            <div className="bg-black/60 flex m-4 relative lg:ml-15 xl:ml-10 2xl:ml-70 md:pl-10 md:h-150 md:ml-10 xl:mt-40 md:w-180">
                {/* Лінія зліва */}
                <div className="absolute left-0 top-0 bottom-0 w-2 md:w-5  bg-[#E50046]"></div>

                <div className="h-full p-10 relative z-10 text-white">
                    <div className="font-bold md:text-2xl break-words">Металеві двері від Aplot виконані з оцинкованого
                        металу та пофарбовані
                        італійською порошковою фарбою
                    </div>
                    <div className="mt-4 md:mt-10 font-light md:text-xl break-words">Вони вирізняються високою стійкістю
                        до корозії та механічних
                        пошкоджень. Завдяки оцинкованому шару двері надійно захищені від іржі за будь-яких умов, а
                        порошкове покриття забезпечує міцність та надійно захищає від подряпин і вигорання. Двері
                        зберігають відмінний естетичний вигляд, оскільки фарба не тріскається та не відшаровується.
                    </div>
                    <div className="mt-4 md:mt-10 font-light md:text-xl break-words">Порошкове фарбування забезпечує
                        гладке покриття та не містить
                        шкідливих хімічних речовин. Крім того, догляд за такими дверима дуже простий — їх легко чистити,
                        і вони надовго зберігають привабливий вигляд
                    </div>
                </div>
            </div>

            <div className="absolute z-10 relative h-[23%] md:hidden">
                <img src="./greendoor.png" alt="photo" className=""/>
            </div>
        </div>
    );
};

export default MetaleviDoors;
