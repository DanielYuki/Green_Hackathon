import react, { useState } from "react";

import Message from "../components/Message";
import ErrorMessage from "../components/ErrorMsg";

// import suzanaIconChat from "../assets/suzanaIconChat.png";

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
                    "Ocorreu um erro inesperado, por favor tente novamente mais tarde."
                );
                // setChats(msgs);
                setIsTyping(false);
            });
    };

    return (
        <main className="w-full justify-between flex flex-col sm:w-[100%] md:w-[85%] lg:w-[70%] mx-auto my-4 py-4 px-2 h-[80vh] bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center bg-gray-900 text-white py-2 rounded-t-lg">
                Suzana AI - Hackathon Green
            </h1>

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
                        <div className="flex justify-center items-center h-full">
                            <span className="text-gray-600 text-xl">
                                Inicie uma conversa
                            </span>
                        </div>
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
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow h-10 sm:h-12 border border-gray-300 rounded-l-lg p-2"
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
