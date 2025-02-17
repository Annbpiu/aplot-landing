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
        <div className="relative w-full h-screen overflow-hidden">
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
                className="absolute top-0 left-0 w-full h-full"
                style={{ pointerEvents: "none" }}
            />

            {/* Контролери */}
            <div className="absolute bottom-45 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 w-full max-w-md">
                {playing ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white" onClick={togglePlay}>
                        <path d="M19 19H5V5h14v14z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white" onClick={togglePlay}>
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}

                {muted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white" onClick={toggleMute}>
                        <path d="M12 3v18l-6-6h-3v-6h3l6-6z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="white" onClick={toggleMute}>
                        <path d="M16.5 12l-6 6v-12l6 6z" />
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
    );
};

export default Player;
