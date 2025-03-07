export const Safety = () => {
    return (
        <div className="flex flex-col min-h-[100dvh] p-5 lg:px-40 h-full">
            <div
                className="p-3 flex flex-col items-end right-0 w-full lg:px-10 h-[30%] border-t-[#E50046] border-0 lg:border-t-20 border-t-10"
                style={{
                    backgroundImage: "url(./Maskgroup.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h2 className="text-white text-right font-bold text-base lg:text-6xl lg:pt-20 mb-3">Ми не економимо <br/> на безпеці:</h2>
                <div className="text-white right-0 w-50 text-right lg:text-2xl lg:w-[40%] lg:pb-50 text-sm font-normal mb-7">
                    Ми використовуємо тільки якісні комплектуючі,
                    уникаючи дешевих і ненадійних матеріалів: всі двері відповідають передовим стандартам
                    якості та зберігають високий стандарт надійності
                </div>
            </div>

            <div className="flex flex-col lg:flex-row md:gap-15 mt-10 px-6">
                <div
                    className="flex flex-col min-h-full bg-white/20 backdrop-blur-none mb-7 items-left justify-center p-7 w-full xl:h-[220px] relative">
                    <img
                        src="./check.svg"
                        alt="check"
                        className="absolute top-[-25px] right-[-25px] w-15 h-15"
                    />
                    <h2 className="text-white text-left font-bold mb-2">Лист не гнеться і не «ходить»</h2>
                    <div className="text-white text-left">
                        завдяки тому, що ми використовуємо цільногнутий, оцинкований метал, пофарбований порошковою
                        фарбою
                    </div>
                </div>
                <div
                    className="flex flex-col min-h-full bg-white/20 backdrop-blur-none items-left justify-center mb-7 p-7 w-full xl:h-[220px] relative">
                    <img
                        src="./check.svg"
                        alt="check"
                        className="absolute top-[-25px] right-[-25px] w-15 h-15"
                    />
                    <h2 className="text-white font-bold mb-2">Найнадійніші замки</h2>
                    <div className="text-white text-left">
                        використовуємо замки провідних світових виробників «MultiLock» та «Securemme»
                    </div>
                </div>
                <div
                    className="flex flex-col min-h-full bg-white/20 backdrop-blur-none items-left justify-center p-7 w-full xl:h-[220px] relative">
                    <img
                        src="./check.svg"
                        alt="check"
                        className="absolute top-[-25px] right-[-25px] w-15 h-15"
                    />
                    <h2 className="text-white font-bold text-left mb-2">Протизламні італійські петлі</h2>
                    <div className="text-white text-left">
                        мають спеціальні штифти, що входять у гнізда рами та не дозволяють зняти двері навіть після зрізання
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;