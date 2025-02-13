import NavMenu from "./NavMenu";
import Player from "./Player";

export const Header = () => {
    return (
        <span className="relative w-full">
            <div className="relative w-full h-screen">
                <div className="absolute inset-0">
                    <Player/>
                </div>

                <div className="absolute top-0 left-0 w-full z-50">
                    <NavMenu/>
                </div>
            </div>
        </span>
    );
};
