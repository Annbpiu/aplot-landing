import ScrollAnimation from "react-animate-on-scroll";

export const World = () => {
    return (
        <ScrollAnimation
            animateIn="slide-in-left"
            animateOnce={true}
            delay={200}
            duration={1}
        >
            <div
                className="flex flex-col sm:h-full pt-25 min-h-screen p-8 sm:p-20"
                style={{
                    backgroundImage: "url(./map.svg)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1 className="text-white !text-4xl max-w-100">
                    Ми працюємо <br />
                    <span className="bg-[#E50046] block px-2 lg:text-5xl text-white">з Європою та <br /> Америкою</span>
                </h1>
            </div>
        </ScrollAnimation>
    );
};

export default World;
