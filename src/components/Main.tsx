export const Main = () => {
    return (
        <div className="relative flex justify-center pb-15 pt-25 md:pt-55">
            <div id="svg" className="flex items-start justify-between absolute inset-0 z-0">
                <div className="flex relative items-center">
                    <div className="flex md:mb-155">
                        <img src="./Isolation_Mode_small.svg" alt="vector"/>
                    </div>
                    <div className="flex">
                        <img src="./Isolation_Mode_medium.svg" alt="vector"/>
                    </div>
                </div>

                <div className="flex relative">
                    <img src="./Isolation_Mode.svg" alt="vector"/>
                </div>
            </div>

            <div id="door" className="grid grid-cols-3 gap-15 justify-center relative z-10">
                {[...Array(9)].map((_, index) => (
                    <div key={index} className="group">
                        <img
                            src={`./IMG_1523.png`} // Замініть на реальні імена файлів
                            alt="Door"
                            className="transition-all duration-300 ease-in-out transform group-hover:shadow-[0px_4px_15px_4px_rgba(229,0,70,0.7)] group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;


{/*<div*/}
{/*    className="bg-white/20 backdrop-blur-none text-center h-[80px] md:w-[80%] z-11 flex items-center justify-center relative top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/1">*/}
{/*    <span className="text-white break-words text-2xl md:text-4xl font-bold uppercase pr-8 md:mr-15">Вхідні двері</span>*/}
{/*    <span className="text-white break-words text-2xl md:text-4xl font-bold uppercase">Технічні двері</span>*/}
{/*</div>*/}