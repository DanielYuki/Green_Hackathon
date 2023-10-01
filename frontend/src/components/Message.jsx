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
            {/* {!isUser && (
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F436-4363443_view-user-icon-png-font-awesome-user-circle.png&f=1&nofb=1&ipt=5554a8abdb5e04f04ca38fb6bab9ca9b0e36674c13a5dcf08adc440d05f18676&ipo=images"
                    alt="User Icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full mr-2 self-baseline"
                />
            )} */}
            <div className={`${isUser ? "bg-white" : "bg-secondary-color"} relative p-2 sm:p-4 rounded-lg shadow-md`}>
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
