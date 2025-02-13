export const NewStyle = () => {
    return (
        <div className="relative h-screen">
            <div className="flex justify-around absolute z-0 w-full">
                <div className="relative">
                    <img src="/Isolation_doors.svg" alt="style"/>
                </div>
                <div className="relative">
                    <img src="/Isolation_doors2.svg" alt="style"/>
                </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-full px-2">
                <h2 className="text-2xl text-white font-bold uppercase p-3 text-center bg-[#E50046]">сучасний стиль</h2>
                <div>
                    <span className="text-white font-light text-center uppercase pt-2 block">Наші останні розробки в напрямку сучасного стилю дозволяють втілювати будь-які ідеї та бажання в футуристичному та класичних стилях.</span>
                    <span className="text-white font-light text-center uppercase block">Металеві вставки «молдинги» та «ф’юзинги», комбінування двох текстур на одній панелі та багато всього іншого</span>
                </div>

                <div className="flex justify-center mt-6">
                    <img src="/IMG_1521.png" alt=""/>
                    <img src="/IMG_1531.png" alt=""/>
                    <img src="/IMG_1528.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default NewStyle;
