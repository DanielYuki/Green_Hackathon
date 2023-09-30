import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const activeStyles = {
        color: "#215786",
    };

    return (
        <header className="w-[100%] text-fl text-black bg-whitesmoke border-b-2">
            <nav className="flex flex-row-reverse">
                {/* <NavLink
                    className="pl-[2vw] py-[1vh] hover:bg-[white] hover:text-primary-color transition duration-1000 ease-in-out"
                    to="/Home"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Home
                </NavLink>
                <NavLink
                    className="pl-[2vw] py-[1vh] hover:bg-[white] hover:text-primary-color transition duration-600 ease-in-out"
                    to="/Chat"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Chat
                </NavLink> */}
                <img
                    className="w-auto h-10 mr-[1.5vw] object-cover my-[3vh]"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogopng.com.br%2Flogos%2Fifood-43.png&f=1&nofb=1&ipt=cab7f3c30c44708c4d346a3711514704cd5df8f0367276a100f406d5de7f493d&ipo=images"
                    alt="..."
                />
            </nav>
        </header>
    );
}
