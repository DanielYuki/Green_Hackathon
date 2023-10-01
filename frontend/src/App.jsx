import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

import Layout from "./pages/Layout";
import Chat from "./pages/Chat";
import Home from "./pages/Home";

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Chat" element={<Chat />} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
        <Analytics/>
        </>
    );
}

export default App;
