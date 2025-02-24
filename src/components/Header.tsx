import NavMenu from "./NavMenu";
import Player from "./Player";

export const Header = () => {
    return (
        <div className="relative h-lvh md:min-h-screen w-full">
            <div className="relative w-full h-lvh">
                <div className="absolute inset-0">
                    <Player/>
                </div>

                <div className="absolute top-0 left-0 w-full z-50">
                    <NavMenu/>
                </div>
            </div>
        </div>
    );
};
