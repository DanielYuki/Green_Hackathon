import react, { useState } from "react";

import Message from "../components/Message";
import ErrorMessage from "../components/ErrorMsg";

import suzanaIconChat from "../assets/suzanaIconChat.png";

export default function Chat() {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const chat = async (e, message) => {
        e.preventDefault();

        if (!message) return;

        setIsTyping(true);
        setErrorMessage(null);

        let msgs = chats;
        msgs.push({ role: "user", content: message });
        setChats(msgs);

        setMessage("");

        fetch("https://green-hackathon-server.vercel.app/", {
        // fetch("http://localhost:8000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chats,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                msgs.push(data.output);
                setChats(msgs);
                setIsTyping(false);
            })
            .catch((error) => {
                console.log(error);
                // msgs.push(
                //     "Sou uma ferramenta em constante desenvolvimento, estou atualmente em uma fase de adaptação contínua. Lamentamos sinceramente qualquer inconveniente que isso possa causar."
                // );
                setErrorMessage(
                    // "Ocorreu um erro inesperado, por favor tente novamente mais tarde."
                    "Devido ao alto fluxo de usuários, estamos com problemas em nossos servidores. Por favor, tente novamente mais tarde."
                );
                // setChats(msgs);
                setIsTyping(false);
            });
    };

    return (
        <main className="w-full justify-between flex flex-col sm:w-[100%] md:w-[85%] lg:w-[70%] mx-auto my-4 py-4 px-2 h-[80vh] bg-gray-100 rounded-lg shadow-lg">
            <div className="bg-primary-color pl-4 text-white py-4 rounded-t-lg flex items-center justify-start text-start">
                <img
                    // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F436-4363443_view-user-icon-png-font-awesome-user-circle.png&f=1&nofb=1&ipt=5554a8abdb5e04f04ca38fb6bab9ca9b0e36674c13a5dcf08adc440d05f18676&ipo=images"
                    src={suzanaIconChat}
                    alt="Suzana Icon"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-4"
                />
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        Suzana
                    </h1>
                    <h2 className="text-xl sm:text-2xl">
                        Sua assistente virtual
                    </h2>
                </div>
            </div>

            <div className="overflow-y-scroll h-[80%]">
                <section className="mt-4 space-y-4 px-2 sm:px-4">
                    {chats && chats.length ? (
                        chats.map((chat, index) => (
                            <Message
                                key={index}
                                role={chat.role}
                                content={chat.content}
                            />
                        ))
                    ) : (
                        <>
                            {/* <div className="flex justify-center items-center h-full">
                                <span className="text-gray-600 text-xl">
                                    Inicie uma conversa
                                </span>
                            </div> */}

                            <div
                                // key={index}
                                className={`flex justify-start items-center mb-4`}
                            >
                                <div className="relative bg-secondary-color p-2 sm:p-4 rounded-lg shadow-md">
                                    <div className="relative">
                                        <span className="block text-xs sm:text-sm md:text-base mb-2 text-gray-600">
                                            <b>{"SUZANA"}:</b>
                                        </span>
                                        <span className="block text-sm sm:text-base md:text-lg">
                                            {
                                                "Olá, eu sou a Suzana, sua assistente virtual. Como posso te ajudar?"
                                            }
                                        </span>
                                    </div>

                                    <div className="absolute w-0 h-0 border-t-8 border-l-8 border-secondary-color top-0 left-0"></div>
                                </div>
                            </div>
                        </>
                    )}
                    {errorMessage && <ErrorMessage message={errorMessage} />}
                </section>

                <div className={`mt-2 sm:mt-4 ${isTyping ? "" : "hidden"}`}>
                    <div className="flex justify-start">
                        <div className="bg-white p-2 sm:p-4 rounded-lg shadow-md">
                            <span className="block text-xs sm:text-sm md:text-base text-gray-600">
                                <i>Digitando</i>:
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <form
                className="mt-4 flex items-center"
                onSubmit={(e) => chat(e, message)}
            >
                <input
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Digite aqui sua dúvida"
                    autoComplete="off"
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow text-white bg-primary-color h-10 sm:h-12 rounded-l-lg py-2 px-4 focus:outline-none focus:ring"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white h-10 sm:h-12 w-16 sm:w-20 rounded-r-lg flex items-center justify-center"
                >
                    Enviar
                </button>
            </form>
        </main>
    );
}
