import react, { useState } from "react";

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

        fetch("http://localhost:8000/", {
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
        <main className="w-[50%] mx-auto m-4 h-[80%] bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl text-center bg-gray-900 text-white py-2 rounded-t-lg">
                Suzana AI - Hackathon Green
            </h1>

            <div className="overflow-y-scroll h-[80%]">
                <section className="mt-4 space-y-4 px-4">
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
                                            // src={userIcon}
                                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F436-4363443_view-user-icon-png-font-awesome-user-circle.png&f=1&nofb=1&ipt=5554a8abdb5e04f04ca38fb6bab9ca9b0e36674c13a5dcf08adc440d05f18676&ipo=images"
                                          alt="User Icon"
                                          className="w-10 h-10 rounded-full mr-2"
                                      />
                                  )}
                                  <div className="bg-white p-4 rounded-lg shadow-md">
                                      <span className="block text-sm mb-2 text-gray-600">
                                          <b>{chat.role.toUpperCase()}</b>:
                                      </span>
                                      <span className="block text-lg">
                                          {chat.content}
                                      </span>
                                  </div>
                              </div>
                          ))
                        : ""}
                </section>

                <div className={`mt-4 ${isTyping ? "" : "hidden"}`}>
                    <div className="flex justify-start">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <span className="block text-sm mb-2 text-gray-600">
                                <i>Typing</i>:
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
                    placeholder="Type a message here and hit Enter..."
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow h-12 border border-gray-300 rounded-l-lg p-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white h-12 w-20 rounded-r-lg flex items-center justify-center"
                >
                    Send
                </button>
            </form>
        </main>
    );
}
