import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={'slick-arrow'}
            style={{
                ...style,
                position: "absolute",
                top: "50%",
                right: "20px",
                transform: "translateY(-50%)",
                width: "0",
                height: "0",
                borderTop: "50px solid transparent",  // Верхня частина прозора
                borderBottom: "50px solid transparent",  // Нижня частина прозора
                borderLeft: "50px solid #E50046",  // Ліва частина червона, створює стрілку вправо
                cursor: "pointer",
                zIndex: 10,
                opacity: "70%"
            }}
            onClick={onClick}
        >
        </div>
    );
}

// Кастомна кнопка для "Prev"
function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={'slick-arrow'}
            style={{
                ...style,
                position: "absolute",
                top: "50%",
                left: "20px",
                transform: "translateY(-50%)",
                width: "0",
                height: "0",
                borderTop: "50px solid transparent",  // Верхня частина прозора
                borderBottom: "50px solid transparent",  // Нижня частина прозора
                borderRight: "50px solid #E50046",  // Права частина червона, створює стрілку вліво
                cursor: "pointer",
                zIndex: 10,
                opacity: "70%"
            }}
            onClick={onClick}
        >
        </div>
    );
}

export default function App() {
    const images = [
        "./J00A0662.webp", "./J00A0694.webp", "./J00A0708.webp", "./J00A0715.webp",
        "./J00A0717.webp", "./J00A0719.webp", "./J00A0734.webp", "./J00A0745.webp",
        "./J00A0761.webp", "./J00A0773.webp", "./J00A0780.webp"
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,

        responsive: [
            {
                breakpoint: 1024, // Для планшетів
                settings: {
                    slidesToShow: 3, // Відображати 3 слайди
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Для мобільних телефонів
                settings: {
                    slidesToShow: 2, // Відображати 2 слайди
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Для дуже малих екранів
                settings: {
                    slidesToShow: 1, // Відображати 1 слайд
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mt-20">
            <div className="bg-white/20 backdrop-blur-none text-center h-[80px] md:w-[80%] z-10 flex items-center justify-center relative top-1/5 left-1/2 transform -translate-x-1/2 md:-translate-y-1/1">
                <h2 className="text-white break-words text-2xl md:text-4xl font-bold uppercase">акценти</h2>
            </div>

            <div className="w-full m-auto">
                <div className="slider-container relative">
                    <Slider {...settings} className="m-auto mt-5 md:mt-0 w-[80%] relative z-10">
                        {images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    loading="lazy"
                                    className="p-0 lg:px-3 max-w-[290px] max-h-[290px] object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
