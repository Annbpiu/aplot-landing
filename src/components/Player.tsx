import ReactPlayer from "react-player";
import { useRef, useState } from "react";

const Player = () => {
    const playerRef = useRef(null); // Видалено тип ReactPlayer
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => setPlaying(!playing);
    const toggleMute = () => setMuted(!muted);

    const handleProgress = (state: { playedSeconds: number }) => {
        setProgress(state.playedSeconds);
    };

    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Блок з фоном і текстом */}
                <div className="bg-black/60 m-4 absolute p-2 md:pl-10 md:h-125 md:ml-20 md:mt-40 md:w-180 z-20">
                    <div className="p-2 md:p-10 relative z-30 text-white">
                        <h1 className="font-bold md:text-3xl break-words">
                            Металеві двері від виробника №1 в Україні
                        </h1>
                        <div className="mt-4 md:mt-10 font-light md:text-xl break-words">
                            Дизайн для будь-яких інтер’єрів та екстер’єрів. Інноваційне обладнання. Європейська якість
                        </div>

                        <a
                            href="#"
                            className="bg-[#E50046] text-white py-4 px-8 mt-15 text-sm md:text-2xl w-full md:w-[80%] font-bold hover:bg-[#d4003f] transition duration-300 inline-flex items-center justify-center space-x-4">
                            <span className="text-white uppercase font-bold text-lg md:text-3xl">Асортимент</span>
                        </a>
                    </div>
                </div>
                {/* Відео */}
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
                    className="absolute top-0 left-0 w-full h-full z-10"
                    style={{pointerEvents: "none"}}
                />

                {/* Контролери */}
                <div className="absolute bottom-45 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 w-full max-w-md z-20">
                    {playing ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white"
                             onClick={togglePlay}>
                            <path d="M19 19H5V5h14v14z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white"
                             onClick={togglePlay}>
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    )}

                    {muted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white"
                             onClick={toggleMute}>
                            <path d="M12 3v18l-6-6h-3v-6h3l6-6z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white"
                             onClick={toggleMute}>
                            <path d="M16.5 12l-6 6v-12l6 6z"/>
                        </svg>
                    )}

                    <div className="relative w-full h-2 bg-gray-300">
                        <div
                            className="absolute top-0 left-0 h-full bg-[#E50046]"
                            style={{width: `${(progress / duration) * 100}%`}}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
