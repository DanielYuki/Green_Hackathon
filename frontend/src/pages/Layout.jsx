import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function Layout() {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col overflow-hidden">
            <Header />
            {/* <main className="relative w-[100%] overflow-y-scroll"> */}
                <Outlet />
            {/* </main> */}
        </div>
    );
}
