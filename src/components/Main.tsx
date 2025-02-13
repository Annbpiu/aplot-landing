export const Main = () => {
    return (
        <div className="relative pt-55">
            <div id="svg" className="flex justify-between absolute inset-0 z-0">
                <div className="flex relative items-center">
                    <div className="flex mb-155">
                        <img src="/Isolation_Mode_small.svg" alt="vector"/>
                    </div>
                    <div className="flex">
                        <img src="/Isolation_Mode_medium.svg" alt="vector"/>
                    </div>
                </div>

                <div className="flex relative">
                    <img src="/Isolation_Mode.svg" alt="vector"/>
                </div>
            </div>

            <div id="door" className="flex justify-center relative z-10">
                <div className="md:mr-6">
                    <img src="/IMG_1523.png" alt="Door"/>
                </div>

                <div>
                    <img src="/НФ-00001424_1.png" alt="Door"/>
                </div>
            </div>

            <div className="bg-white/20 backdrop-blur-none h-[80px] w-[80%] z-11 flex items-center justify-center relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/1">
                <span className="text-white text-4xl font-bold uppercase mr-15">Вхідні двері</span>
                <span className="text-white text-4xl font-bold uppercase">Технічні двері</span>
            </div>
        </div>
    );
};

export default Main;
