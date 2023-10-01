import react, { useState } from "react";

// import suzanaIconChat from "../assets/suzanaIconChat.png";

export default function Chat() {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const chat = async (e, message) => {
        e.preventDefault();

        if (!message) return;
        setIsTyping(true);
        scrollTo(0, 1e10);

        let msgs = chats;
        msgs.push({ role: "user", content: message });
        setChats(msgs);

        setMessage("");

        fetch("https://green-hackathon-server-raux6y41i-daniel-yukis-projects.vercel.app/:8000/", {
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
                scrollTo(0, 1e10);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <main className="w-full justify-between flex flex-col sm:w-[100%] md:w-[85%] lg:w-[70%] mx-auto my-4 py-4 px-2 h-[80vh] bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center bg-gray-900 text-white py-2 rounded-t-lg">
                Suzana AI - Hackathon Green
            </h1>

            <div className="overflow-y-scroll h-[80%]">
                <section className="mt-4 space-y-4 px-2 sm:px-4">
                    {chats && chats.length
                        ? chats.map((chat, index) => (
                              <div
                                  key={index}
                                  className={`${
                                      chat.role === "user"
                                          ? "flex justify-end items-center"
                                          : "flex justify-start items-center"
                                  }`}
                              >
                                  {chat.role !== "user" && (
                                      <img
                                          // src={suzanaIconChat}
                                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F436-4363443_view-user-icon-png-font-awesome-user-circle.png&f=1&nofb=1&ipt=5554a8abdb5e04f04ca38fb6bab9ca9b0e36674c13a5dcf08adc440d05f18676&ipo=images"
                                          alt="Suzana Icon"
                                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full mr-2 self-baseline"
                                      />
                                  )}
                                  <div className="relative bg-white p-2 sm:p-4 rounded-lg shadow-md">
                                      <div className="relative">
                                          <span className="block text-xs sm:text-sm md:text-base mb-2 text-gray-600">
                                              <b>{chat.role.toUpperCase()}</b>:
                                          </span>
                                          <span className="block text-sm sm:text-base md:text-lg">
                                              {chat.content}
                                          </span>
                                      </div>
                                      {chat.role !== "user" && (
                                          <div className="absolute w-0 h-0 border-t-8 border-l-8 border-white top-0 left-0"></div>
                                      )}
                                  </div>
                              </div>
                          ))
                        : ""}
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
