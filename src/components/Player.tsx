import { useRef, useState } from "react";
import ReactPlayer from "react-player";

const Player = () => {
    const playerRef = useRef<ReactPlayer>(null);
    const [playing, setPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    // Перемикання Play/Pause
    const togglePlay = () => setPlaying(!playing);

    // Оновлення прогресу
    const handleProgress = (state: { playedSeconds: number }) => {
        setProgress(state.playedSeconds);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Відео */}
            <ReactPlayer
                ref={playerRef}
                url="https://www.youtube.com/watch?v=OsdXs_dO9-8&t=1660s"
                playing={playing}
                loop
                muted
                width="100%"
                height="100%"
                onProgress={handleProgress}
                onDuration={setDuration}
                className="absolute top-0 left-0 w-full h-full"
            />

            {/* Контролери */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-6 w-full max-w-md">
                {/* Кнопка Play/Pause */}
                {playing ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white" onClick={togglePlay}>
                        <path d="M19 19H5V5h14v14z" />
                    </svg>  // Кнопка Pause
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white" onClick={togglePlay}>
                        <path d="M8 5v14l11-7z" />
                    </svg>  // Кнопка Play
                )}

                {/* Прогрес-бар */}
                <div className="relative w-full h-2 bg-gray-300">
                    <div
                        className="absolute top-0 left-0 h-full bg-[#E50046]"
                        style={{width: `${(progress / duration) * 100}%`}}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Player;
