import React from "react";
import { BiLibrary, BiHome, BiSearch } from 'react-icons/bi';

export default function SideBar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6 ">
            <nav className="space-y-4">
                <a href="" className="flex itens-center gap-2 text-xs font-semibold text-zinc-100 ">
                    Início
                    <BiHome size={26} className="ml-2" />
                </a>
                <a href="" className="flex itens-center gap-2 text-xs font-semibold text-zinc-100 ">
                    Busca
                    <BiSearch size={26} className="ml-2" />
                </a>
                <a href="" className="flex itens-center gap-2 text-xs font-semibold text-zinc-100 ">
                    Sua biblioteca
                    <BiLibrary size={26} className="ml-2" />
                </a>
            </nav>
        </aside>
    );
};
