import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import PlaylistsRecomendadas from "../playlists/playlistsRecomendadas";

const Body = () => {
    return (
        <main
            className="flex-1 p-6 gap-2 text-xs font-semibold
        ">
            ESTE SITE É UM CLONE DO SPOTIFY, CRIADO COM INTUITO DE ESTUDAR REACT, TAILWIND.CSS, TOTALMENTE FEITO SEM FINS LUCRATIVOS
            <div className="flex items-center gap-4 border-t border-zinc-800 mt-2 ">
                <AiOutlineArrowLeft size={28} className="
                    rounded-full bg-black/40 mt-1 p-1" />
                <AiOutlineArrowRight size={28} className="
                    rounded-full bg-black/40 mt-1 p-1" />
            </div>
            <h1 className="font-semibold text-3xl">Bom Dia 🌞</h1>
            <PlaylistsRecomendadas />
        </main>

    );
};

export default Body;