import React from "react";
import logo from "../assets/logo.webp";

function Header() {
    return (
        <header className="flex justify-between h-20 py-3 lg:px-80 sm:px-20 px-4 relative z-10 shadow-[0px_1px_3px_1px_rgb(0,0,0,0.3)]">
            <img
                src={logo}
                alt="hl-logo"
            />
            <div className="flex justify-end">
                <div className=" text-right text-xs self-center">
                    <p className=" text-gray-500 italic ">Handicrafted by</p>
                    <p>Jim HLS</p>
                </div>
                <img
                    src={logo}
                    alt=""
                    className="ml-1"
                />
            </div>
        </header>
    );
}

export default Header;
