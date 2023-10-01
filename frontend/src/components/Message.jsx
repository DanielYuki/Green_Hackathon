import React from "react";

export default function Message({ role, content, index }) {
    const isUser = role === "user";

    return (
        <div
            key={index}
            className={`${
                isUser ? "flex justify-end" : "flex justify-start"
            } items-center mb-4`}
        >
            <div
                className={`${
                    isUser ? "bg-white" : "bg-secondary-color"
                } relative p-2 sm:p-4 rounded-lg shadow-md`}
            >
                <div className="relative">
                    <span className="block text-xs sm:text-sm md:text-base mb-2 text-gray-600">
                        <b>{isUser ? "USUÁRIO" : "SUZANA"}:</b>
                    </span>
                    <span className="block text-sm sm:text-base md:text-lg">
                        {content}
                    </span>
                </div>
                {isUser ? (
                    <div className="absolute w-0 h-0 border-t-8 border-r-8 border-white top-0 right-0"></div>
                ) : (
                    <div className="absolute w-0 h-0 border-t-8 border-l-8 border-secondary-color top-0 left-0"></div>
                )}
            </div>
        </div>
    );
}
