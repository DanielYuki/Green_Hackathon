import react from "react";
import { NavLink } from "react-router-dom";

import FlowerImg from "../assets/flower.png";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-full p-8 space-y-8 md:flex-row md:justify-evenly">
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="font-bold text-2xl md:text-3xl mb-4 inline-flex items-center">
                    Conheça a
                    <img className="w-10 ml-2" src={FlowerImg} alt="flowerImg" />
                    <span className="text-4xl text-cyan-500">Suzana</span>
                </h2>
                <h3 className="text-base md:text-lg text-gray-800 mb-8">
                    Aqui você vai conhecer{" "}
                    <span className="font-bold">tudo que precisa saber</span>{" "}
                    sobre sustentabilidade, a fim de acelerar a penetração de
                    embalagens ecofriendly e{" "}
                    <span className="font-bold">
                        alimentar o futuro do mundo.
                    </span>
                </h3>
                <NavLink
                    to="/Chat"
                    className="px-6 py-4 bg-red-600 text-center font-bold hover:bg-red-700 transition duration-400 ease-in-out text-white rounded block w-full md:w-auto"
                >
                    <span className="hidden md:inline text-2xl">
                        Impulsione seu Negócio
                    </span>
                    <span className="md:hidden text-xl">
                        Impulsione seu Negócio
                    </span>
                </NavLink>
                <p className="mt-8 text-gray-500">
                    A Suzana ainda está em fase de teste, e disponível para
                    versões exclusivas, não tendo integrações com outras
                    linguagens de inteligência artificial.
                </p>
                <p className="mt-2 text-gray-500">
                    Uma parceria iFood e Suzano, powered by OpenAI
                </p>
            </div>

            <div className="hidden md:block w-[40%]">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rootinc.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fpink-blob-1024x864.png&f=1&nofb=1&ipt=faf5aef7911236cb66e02769c213e76e62288c434f79d0c06a25d00b6b74a04f&ipo=images"
                    alt=""
                />
            </div>
        </main>
    );
}
