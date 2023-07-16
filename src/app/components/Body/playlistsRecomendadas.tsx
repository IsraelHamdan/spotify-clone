"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

const playlistsRecomendadas = () => {

  return (
    <div className='grid grid-cols-3 gap-4 mt-5 playlists-carrosel'>
      <a href='#' className="
                          group 
                          bg-white/10 
                          rounded flex items-center 
                          gap-4 
                          overflow-hidden
                          hover:bg-white/20 transition-colors"
      >
        <Image src="/image/ComunidadeDaVila.jpeg" width={80} height={80} alt="Capa da playlist" />
        <strong>Comunidade da Vila </strong>
        <button className="
                          w-10 h-10
                          flex items-center justify-center 
                          p-0 ml-auto
                          mr-8 
                          pl-0.5
                          invisible 
                          group-hover:visible bg-green-400 text-black  rounded-full overflow-hidden
                          " >
          <FaPlay />
        </button>
      </a>
      <a href='#' className="
                          group 
                        bg-white/10 
                          rounded flex items-center 
                          gap-4 
                          overflow-hidden
                        hover:bg-white/20 transition-colors"
      >
        <Image src="/image/Morada.jpeg" width={80} height={80} alt="Capa da playlist" />
        <strong>Morada </strong>
        <button className='
                          w-10 h-10
                          flex items-center justify-center 
                          p-0 ml-auto
                          mr-8 
                          pl-0.5
                          invisible 
                          group-hover:visible bg-green-400 text-black  rounded-full overflow-hidden'
        >
          <FaPlay />
        </button>
      </a>
      <a href='#' className="
                          group 
                          bg-white/10 
                          rounded flex items-center 
                          gap-4 
                          overflow-hidden
                          hover:bg-white/20 transition-colors"
      >
        <Image src="/image/Palavrantiga.jpeg" width={80} height={80} alt="Capa da playlist" />
        <strong>Palavrantiga </strong>
        <button className='
                          w-10 h-10
                          flex items-center justify-center 
                          p-0 ml-auto
                          mr-8 
                          pl-0.5
                          invisible 
                          group-hover:visible bg-green-400 text-black  rounded-full overflow-hidden'
        >
          <FaPlay />
        </button>
      </a>
      <a href='#' className="
                          group 
                          bg-white/10 
                          rounded flex items-center 
                          gap-4 
                          overflow-hidden
                          hover:bg-white/20 transition-colors"
      >
        <Image src="/image/PauloNazareth.jpeg" width={80} height={80} alt="Capa da playlist" />
        <strong>Paulo Nazareth </strong>
        <button className='
                          w-10 h-10
                          flex items-center justify-center 
                          p-0 ml-auto
                          mr-8 
                          pl-0.5
                          invisible 
                          group-hover:visible bg-green-400 text-black  rounded-full overflow-hidden'
        >
          <FaPlay />
        </button>
      </a>
      <a href='#' className="
                          group 
                          bg-white/10 
                          rounded flex items-center 
                          gap-4 
                          overflow-hidden
                          hover:bg-white/20 transition-colors"
      >
        <Image src="/image/ProjetoSola.jpg" width={80} height={80} alt="Capa da playlist" />
        <strong>Projeto Sola  </strong>
        <button className='
                          w-10 h-10
                          flex items-center justify-center 
                          p-0 ml-auto
                          mr-8 
                          pl-0.5
                          invisible 
                          group-hover:visible bg-green-400 text-black  rounded-full overflow-hidden'
        >
          <FaPlay />
        </button>
      </a>
      <a href='#' className="
                          group 
                          bg-white/10 
                          rounded flex items-center 
                          gap-4 
                          overflow-hidden
                          hover:bg-white/20 transition-colors"
      >
        <Image src="/image/Purples.jpeg" width={80} height={80} alt="Capa da playlist" />
        <strong>Purples </strong>
        <button className='
                          w-10 h-10
                          flex items-center justify-center 
                          p-0 ml-auto
                          mr-8 
                          pl-0.5
                          invisible 
                          group-hover:visible bg-green-400 text-black  rounded-full overflow-hidden'
        >
          <FaPlay />
        </button>
      </a>
    </div>

  );
};

export default playlistsRecomendadas;