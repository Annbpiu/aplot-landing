import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState, useEffect} from "react";

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
    const [loaded, setLoaded] = useState(false);
    const images = [
        "./J00A0662.webp", "./J00A0694.webp", "./J00A0708.webp", "./J00A0715.webp",
        "./J00A0717.webp", "./J00A0719.webp", "./J00A0734.webp", "./J00A0745.webp",
        "./J00A0761.webp", "./J00A0773.webp", "./J00A0780.webp"
    ];


    useEffect(() => {
        const loadImages = async () => {
            await Promise.all(
                images.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = resolve;
                        img.onerror = resolve; // Якщо картинка не завантажиться, просто ігноруємо
                    });
                })
            );
            setLoaded(true);
        };

        loadImages();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
                        {!loaded ? (
                            <div className="flex flex-row w-full justify-center gap-10">
                                <div role="status"
                                     className="flex items-center justify-center h-56 w-160 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path
                                            d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                        <path
                                            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (
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
                        )}
                </div>
            </div>
        </div>
    );
}
