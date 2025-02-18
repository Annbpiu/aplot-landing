export const YouTubePlayer = () => {
    return (
        <div className="bg-white h-full min-h-screen">
                <iframe
                    className="absolute m-auto p-5 lg:p-30 w-full h-full"
                    src="https://www.youtube.com/embed/ASMBikcNP34"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
        </div>
    );
};

export default YouTubePlayer;