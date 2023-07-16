import React from "react";
import { BiLibrary, BiHome, BiSearch, BiLogoSpotify } from 'react-icons/bi';
import Playlists from "./PlaylistsLateral";

const SideBar = () => {
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
                        text-zinc-200 
                      "
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
        <Playlists />
      </nav>
    </aside >
  );
};

export default SideBar;