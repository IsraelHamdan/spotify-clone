import React from "react";
import { BiLibrary, BiHome, BiSearch } from 'react-icons/bi';

export default function SideBar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav>
                <a href="" className="flex items-start sideBar-icons">
                    Início
                    <BiHome size={26} className="ml-2" />
                </a>
                <a href="" className="flex items-start sideBar-icons">
                    Busca
                    <BiSearch size={26} className="ml-2" />
                </a>
                <a href="" className="flex items-start sideBar-icons">
                    Sua biblioteca
                    <BiLibrary size={26} className="ml-2" />
                </a>
            </nav>
        </aside>
    );
};
