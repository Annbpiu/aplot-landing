import {useEffect, useState} from 'react';

export const Main = () => {
    const photos = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6', 'photo7', 'photo8'];

    // Стан для відкриття лайтбоксу та поточного зображення
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const goToNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % photos.length);
    };

    const goToPrevImage = () => {
        setCurrentImage((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const setImage = (index) => {
        setCurrentImage(index);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Очищаємо стиль при демонтажі компонента
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div className="relative flex justify-center pb-4 pt-6 md:pt-16">
            {/* SVG Decorations */}
            <div id="svg" className="absolute inset-0 z-0 flex items-start justify-between">
                <div className="relative flex items-center">
                    <img src="./Isolation_Mode_small.svg" alt="vector" className="md:mb-[155px]" />
                    <img src="./Isolation_Mode_medium.svg" alt="vector" />
                </div>
                <img src="./Isolation_Mode.svg" alt="vector" />
            </div>

            {/* Галерея */}
            <div id="door" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 justify-center relative z-10 cursor-pointer">
                {photos.map((photo, index) => (
                    <div key={index} className="group" onClick={() => openLightbox(index)}>
                        <img
                            src={`./${photo}.jpg`}
                            alt="Door"
                            className="transition-all duration-300 max-h-120 md:h-full max-w-60 object-cover ease-in-out transform group-hover:shadow-lg group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Лайтбокс */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20">
                    <div className="relative w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
                        {/* Закрити лайтбокс */}
                        <div
                            onClick={closeLightbox}
                            className="absolute top-[-80px] md:top-4 right-2 md:right-4 p-3 bg-transparent text-[#E50046] rounded-full cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>

                        {/* Навігація */}
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={goToPrevImage}
                                className="p-3 bg-transparent text-[#E50046] !border-0 !bg-transparent  cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10 lg:w-22 lg:h-22"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            {/* Зображення */}
                            <div className="relative w-full h-auto overflow-hidden">
                                <img
                                    src={`./${photos[currentImage]}.jpg`}
                                    alt={`Door ${currentImage}`}
                                    className="w-full h-auto max-h-[80vh] object-contain transition-all duration-500 ease-in-out"
                                    style={{ transition: 'transform 0.5s ease-in-out' }}
                                />
                            </div>

                            {/* Навігація */}
                            <button
                                onClick={goToNextImage}
                                className="p-3 bg-transparent text-[#E50046] !border-0 !bg-transparent cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10 lg:w-22 lg:h-22"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Мініатюри */}
                        <div className="flex justify-center mt-15 md:mt-4 space-x-3 overflow-x-auto">
                            {photos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={`./${photo}.jpg`}
                                    alt={`Thumbnail ${index}`}
                                    className={`max-w-23 max-h-23 object-cover cursor-pointer rounded-md transition-all duration-300 ${
                                        index === currentImage ? 'border-4 border-[#E50046]' : ''
                                    }`}
                                    onClick={() => setImage(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};



{/*<div*/
}
{/*    className="bg-white/20 backdrop-blur-none text-center h-[80px] md:w-[80%] z-11 flex items-center justify-center relative top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/1">*/
}
{/*    <span className="text-white break-words text-2xl md:text-4xl font-bold uppercase pr-8 md:mr-15">Вхідні двері</span>*/
}
{/*    <span className="text-white break-words text-2xl md:text-4xl font-bold uppercase">Технічні двері</span>*/}
{/*</div>*/}