export const Combination = () => {
    return (
        <div className="h-screen relative mt-5">
            <div className=" absolute top-0 left-0 right-0 bottom-0 blur-sm md:hidden"
                 style={{backgroundImage: 'url(/Group46.png)', backgroundSize: 'cover'}}>
            </div>

            <div
                className="absolute top-0 left-0 right-0 bottom-0 hidden md:block"
                style={{
                    backgroundImage: 'url(/Group46.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>

            <div className="bg-black/60 m-4 md:right-40 mt-50 absolute md:pl-10 md:h-110 md:ml-20 md:mt-60 md:w-180">
                {/* Лінія зліва */}
                <div className="absolute left-0 top-0 bottom-0 w-2 md:w-5  bg-[#E50046]"></div>

                <div className="h-full p-10 relative z-10 text-white">
                    <div className="font-bold md:text-5xl md:w-100 md:mb-15 break-words">Комбінування текстур</div>
                    <div className="mt-4 md:mt-10 font-light md:text-2xl break-words">Вони вирізняються високою стійкістю
                        Спеціальна вставка дозволяє поєднувати текстури дерева та каменю, льону чи глянсової панелі, створюючи візуальний лаконічний тандем на ваших дверях.
                    </div>
                </div>
            </div>

            <div className="absolute z-10 bottom-0 md:hidden">
                <img src="/Group46.png" alt="photo" className=""/>
            </div>
        </div>
    );
};

export default Combination;