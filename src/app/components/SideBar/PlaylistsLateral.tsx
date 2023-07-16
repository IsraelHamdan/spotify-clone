import React from 'react';
import { PiPlaylistBold } from 'react-icons/pi';

const PlaylistsLaterais: React.FC = () => {
  return (
    <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
      <a href="" className="
                      text-sm 
                      text-zinc-400 
                      hover:text-zinc-400   
                      flex itens-center
                      items-center 
                      gap-3 
                      group
                      font-semibold ">

        <PiPlaylistBold className='ml-2' />
        Louvores (classicos)

      </a>
      <a href="" className="
                      text-sm 
                      text-zinc-400 
                      hover:text-zinc-400   
                      flex itens-center
                      items-center 
                      gap-3 
                      font-semibold ">
        <PiPlaylistBold className='ml-2' />
        Louvores (nova geração)

      </a>
      <a href="" className="
                      text-sm 
                      text-zinc-400 
                      hover:text-zinc-400   
                      flex itens-center
                      items-center 
                      gap-3 
                      font-semibold ">
        <PiPlaylistBold className='ml-2' />
        ❤️✝️❤️

      </a>
      <a href="" className="
                      text-sm 
                      text-zinc-400 
                      hover:text-zinc-400   
                      flex itens-center
                      items-center 
                      gap-3 
                      font-semibold ">
        <PiPlaylistBold className='ml-2' />
        Drive 🚚

      </a>
    </nav>
  );
};

export default PlaylistsLaterais;