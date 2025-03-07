import ScrollAnimation from "react-animate-on-scroll";

export const Logistic = () => {
    return (
        <div className="flex flex-col justify-center sm:h-full bg-white lg:p-25 min-h-[100svh] p-5">
            <h2 className="text-2xl md:text-5xl text-white mb-5 font-bold uppercase p-3 text-center bg-[#E50046]">
                Налагоджена логістика
            </h2>

            <span className='pb-3 lg:hidden'>
                Ми маємо налагоджену систему логістики, яка роками працює як в Україні, так і закордоном. <br/>
            </span>
            <span className='lg:hidden'>
                Завдяки ефективній роботі нашої команди та партнерів, ми гарантуємо безперебійне та своєчасне постачання продукції незалежно від відстані та обсягу замовлення.
            </span>

            <div className="flex w-full mt-5">
                <div className='flex w-[50%] lg:flex-col lg:w-full'>
                    <img
                        src="./Rectangle115.png"
                        alt="Rectangle114"
                        className="object-cover lg:object-contain lg:mb-5 md:w-[650px] md:h-[250px] mr-1 lg:mr-0"
                    />
                    <img
                        src="./Rectangle103.png"
                        alt="Rectangle103"
                        className="object-cover lg:object-contain md:w-[650px] md:h-[250px]"
                    />
                </div>

                <div className="hidden lg:block w-full">
                    <span className='block mb-10 text-xl'>
                        Ми маємо налагоджену систему логістики, яка роками працює як в Україні, так і закордоном. <br/>
                    </span>

                    <span className='block mb-10 text-xl'>
                        Завдяки ефективній роботі нашої команди та партнерів, ми гарантуємо безперебійне та своєчасне постачання продукції незалежно від відстані та обсягу замовлення.
                    </span>

                    <span className='block mb-10 text-xl'>
                        Обравши нас, ви отримаєте не лише якісні металеві двері, а й впевненість у тому, що ваші замовлення завжди прибудуть вчасно та в ідеальному стані
                    </span>

                    <span className='block mb-10 text-xl'>
                        Наші клієнти в Україні, Європі та інших регіонах цінують нашу надійність і високий рівень обслуговування.
                    </span>
                </div>
            </div>


            <span className='py-5 lg:hidden'>
                Обравши нас, ви отримаєте не лише якісні металеві двері, а й впевненість у тому, що ваші замовлення завжди прибудуть вчасно та в ідеальному стані
            </span>

            <span className='lg:hidden'>
                Наші клієнти в Україні, Європі та інших регіонах цінують нашу надійність і високий рівень обслуговування.
            </span>
            <div className="border-0">
                <ScrollAnimation
                    animateIn="slide-in-right"
                    animateOnce={true}
                    delay={200}
                    duration={1}
                >
                    <div className="flex relative justify-end mt-10 z-0">
                        <img
                            src="./delivery-vehicles.png"
                            alt="delivery"
                            className="w-70 md:w-85 z-0"
                        />
                    </div>
                </ScrollAnimation>
                <div className="relative bottom-[20px] left-0 w-full border-b-4 border-[#E50046] z-10"></div>
            </div>
        </div>
    );
};

export default Logistic;