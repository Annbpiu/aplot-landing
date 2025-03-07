import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const Textur = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    const images = ['door1.png', 'door2.png', 'door3.png', 'door4.png', 'door5.png', 'door6.png'];
    const imagesBig = {
        'door1.png': 'door1-big.png',
        'door2.png': 'door2-big.png',
        'door3.png': 'door3-big.png',
        'door4.png': 'door4-big.png',
        'door5.png': 'door5-big.png',
        'door6.png': 'door6-big.png',
    };

    const openLightbox = (src) => {
        setLightboxImage(imagesBig[src] || src);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setLightboxImage('');
    };

    // Виключаємо прокрутку при відкритті lightbox і відновлюємо її після закриття
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Очищаємо стиль при демонтажі компонента
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isLightboxOpen]);

    return (
        <div className="min-h-[100dvh] pt-10" style={{ backgroundImage: 'url(./Decor_2.png)', backgroundSize: 'cover' }}>
            <div className="bg-white/20 backdrop-blur-none text-center h-[80px] md:w-[80%] z-10 flex items-center justify-center relative top-1/5 left-1/2 transform -translate-x-1/2 md:-translate-y-1/5">
                <h2 className="text-white break-words text-2xl md:text-4xl font-bold">Різноманіття текстур</h2>
            </div>

            <div className="grid grid-cols-2 m-auto md:w-250 gap-6 md:mt-10 md:mb-15 mt-12 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-10">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden group"
                        onClick={() => openLightbox(src)} // Передаємо ім'я маленької картинки
                    >
                        <img
                            src={`./${src}`}
                            alt={src}
                            className="transition-all duration-300 ease-in-out w-full max-w-[300px] max-h-[300px] object-contain h-full group-hover:shadow-[0px_4px_15px_4px_rgba(229,0,70,0.7)] group-hover:border-4 group-hover:border-[#E50046] mx-auto cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
                  <span
                      className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
                      onClick={closeLightbox}
                  >
                    <X size={35} />
                  </span>
                    <div className="relative">
                        <img
                            src={lightboxImage}
                            alt="Lightbox"
                            className="max-w-[65%] max-h-[65%] m-auto 2xl:max-h-full 2xl:max-w-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Textur;
