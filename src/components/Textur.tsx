export const Textur = () => {
    return (
        <div className="h-screen" style={{backgroundImage: 'url(./Decor_2.png)', backgroundSize: 'cover'}}>
            <div
                className="bg-white/20 backdrop-blur-none text-center h-[80px] md:w-[80%] z-10 flex items-center justify-center relative top-1/5 left-1/2 transform -translate-x-1/2 md:-translate-y-1/1">
                <h2 className="text-white break-words text-2xl md:text-4xl font-bold">Різноманіття текстур</h2>
            </div>

            <div className="grid grid-cols-2 m-auto md:w-250 gap-6 mt-60 md:mt-50 mt-12 md:grid-cols-3 p-4 md:p-10">
                {['door1.png', 'door2.png', 'door3.png', 'door4.png', 'door5.png', 'door6.png'].map((src, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden group"
                    >
                        <img
                            src={`./${src}`}
                            alt={src}
                            className="transition-all duration-300 ease-in-out w-full max-w-[300px] max-h-[300px] object-contain h-full group-hover:shadow-[0px_4px_15px_4px_rgba(229,0,70,0.7)] group-hover:border-4 group-hover:border-[#E50046] mx-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Textur;
