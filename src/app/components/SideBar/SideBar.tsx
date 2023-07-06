import React from "react";
import { BiLibrary, BiHome, BiSearch, BiLogoSpotify } from 'react-icons/bi';

export default function SideBar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6 ">
            <div className="flex items-center ml-2">
                <BiLogoSpotify size={35} />
                <p className="text-lg font-semibold text-zinc-200 ml-1 ">Spotify Clone</p>
            </div>
            <nav className="space-y-5 mt-6  ">
                <a href="" className="
                            flex itens-center
                            items-center 
                            gap-3 
                            text-sm 
                            font-semibold
                            text-zinc-200 "
                >
                    <BiHome size={26} className="ml-2" />
                    Início
                </a>
                <a href="" className="
                            flex 
                            items-center 
                            gap-3 
                            text-sm 
                            font-semibold
                            text-zinc-200 "
                >
                    <BiSearch size={26} className="ml-2" />
                    Busca
                </a>
                <a href="" className="
                            flex 
                            items-center 
                            gap-3 
                            text-sm 
                            font-semibold 
                            text-zinc-200 "
                >
                    <BiLibrary size={26} className="ml-2" />
                    Sua biblioteca
                </a>
                {/* futuramente separar isso em um componente que recebe os dados da API do Spotify */}

                <nav className="mt-6 pt-6 border-t border-zinc-600 flex flex-col gap-2">
                    <a href="" className="
                        text-sm 
                        text-zinc-400 
                        hover:text-zinc-100"
                    >Playlist</a>
                    <a href="" className="
                        text-sm 
                        text-zinc-400 
                        hover:text-zinc-100"
                    >Playlist</a>
                    <a href="" className="
                        text-sm 
                        text-zinc-400 
                        hover:text-zinc-100"
                    >Playlist</a>
                    <a href="" className="
                        text-sm 
                        text-zinc-400 
                        hover:text-zinc-100"
                    >Playlist</a>
                    <a href="" className="
                        text-sm 
                        text-zinc-400 
                        hover:text-zinc-100"
                    >Playlist</a>
                    <a href="" className="
                        text-sm 
                        text-zinc-400 
                        hover:text-zinc-100"
                    >Playlist</a>
                    <a href="" className="
                        text-sm 
                        text-zinc-400 
                        hover:text-zinc-100"
                    >Playlist</a>
                </nav>
            </nav>


        </aside >
    );
};
