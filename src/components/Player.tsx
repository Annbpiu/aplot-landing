import ReactPlayer from "react-player";
import { useRef, useState } from "react";

const Player = () => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => setPlaying(!playing);
    const toggleMute = () => setMuted(!muted);

    // Оновлення прогресу
    const handleProgress = (state) => {
        setProgress(state.playedSeconds);
    };

    // Обробник кліку по прогрес-бару
    const handleSeek = (e) => {
        if (!playerRef.current) return;
        const bar = e.currentTarget;
        const clickX = e.nativeEvent.offsetX;
        const newTime = (clickX / bar.clientWidth) * duration;

        playerRef.current.seekTo(newTime);
        setProgress(newTime);
    };

    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Блок з фоном і текстом */}
                <div className="bg-black/60 m-4 absolute p-2 mt-30 md:pl-10 md:h-125 md:ml-20 md:mt-40 md:w-180 z-20">
                    <div className="p-2 md:p-10 relative z-30 text-white">
                        <h1 className="font-bold !text-xl md:!text-5xl break-words">
                            Металеві двері від виробника №1 в Україні
                        </h1>
                        <div className="mt-4 md:mt-10 font-light md:text-xl break-words">
                            Дизайн для будь-яких інтер’єрів та екстер’єрів. Інноваційне обладнання. Європейська якість
                        </div>

                        <a
                            href="https://aplot.ua/price1111.pdf"
                            className="bg-[#E50046] text-white py-4 px-8 mt-2 md:mt-15 text-sm md:text-2xl w-full md:w-[80%] font-bold hover:bg-[#d4003f] transition duration-300 inline-flex items-center justify-center space-x-4">
                            <span className="text-white uppercase font-bold text-lg md:text-3xl">Асортимент</span>
                        </a>
                    </div>
                </div>

                {/* Відео */}
                <div className="absolute top-0 left-0 w-full h-full z-10 md:pointer-events-auto" onClick={togglePlay}>
                    <ReactPlayer
                        ref={playerRef}
                        url="https://www.youtube.com/watch?v=OsdXs_dO9-8&t=1660s"
                        playing={playing}
                        loop
                        muted={muted}
                        width="100%"
                        height="100%"
                        onProgress={handleProgress}
                        onDuration={setDuration}
                        controls={false}
                    />
                </div>


                {/* Контролери */}
                <div className="absolute bottom-35 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 w-full max-w-md z-20 cursor-pointer">
                    {playing ? (
                        // Кнопка паузи
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white" onClick={togglePlay}>
                            <path d="M6 5h4v14H6zM14 5h4v14h-4z"/>
                        </svg>
                    ) : (
                        // Кнопка відтворення
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white" onClick={togglePlay}>
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    )}

                    {muted ? (
                        <img src="./sound-off.svg" alt="sound-off" onClick={toggleMute} className="w-[38px] h-[38px] filter invert cursor-pointer"/>
                    ) : (
                        <img src="./sound-loud.svg" alt="sound-loud" onClick={toggleMute} className="w-[38px] h-[38px] filter invert cursor-pointer"/>
                    )}

                    {/* Прогрес-бар */}
                    <div className="relative w-50 lg:w-full h-1 bg-gray-300 cursor-pointer" onClick={handleSeek}>
                        <div
                            className="absolute top-0 left-0 h-full bg-[#E50046] transition-all"
                            style={{ width: `${(progress / duration) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
