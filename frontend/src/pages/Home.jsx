import react from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <main className="flex w-[100vw] justify-evenly items-center h-full p-24">
            <div className="w-1/2">
                <h2 className="font-bold text-2xl">
                    Conheça a{" "}
                    <span className="font-bold text-3xl text-cyan-500">🌸Suzana</span>{" "}
                </h2>
                <h3 className="text-lg mt-4 mb-8 text-gray-800">
                    Aqui você vai conhecer{" "}
                    <span className="font-bold">
                        tudo que precisa saber
                    </span>{" "}
                    sobre sustentabilidade, a fim de acelerar a penetração de
                    embalagens ecofriendly e{" "}
                    <span className="font-bold">
                        alimentar o futuro do mundo.
                    </span>{" "}
                </h3>
                <NavLink
                    to="/Chat"
                    className="px-6 py-4 text-center bg-red-600 font-bold hover:bg-red-700 transition duration-400 ease-in-out text-white rounded"
                >
                    Clique para saber mais como impulsionar seu negócio
                </NavLink>
                <p className="mt-10 text-gray-500">
                    A Suzana ainda está em fase de teste, e disponível para
                    versões exclusivas, não tendo integrações com outras
                    linguagens de inteligência artificial.
                </p>
                <p className="mt-2 text-gray-500">
                    Uma parceria iFood e Suzano, powered by ChatGPT
                </p>
            </div>

            <div className="w-[40%]">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rootinc.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fpink-blob-1024x864.png&f=1&nofb=1&ipt=faf5aef7911236cb66e02769c213e76e62288c434f79d0c06a25d00b6b74a04f&ipo=images"
                    alt=""
                />
            </div>
        </main>
    );
}
