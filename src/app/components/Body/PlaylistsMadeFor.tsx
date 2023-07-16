import React from 'react';
import Image from 'next/image';


const PlaylistsMadeFor = () => {
  // const user_name = receber nome do usuário aqui 
  return (
    <div>
      <h2 className='font-semi-bold text-2xl mt-10'>Made for user_name</h2>
      <div className='grid grid-cols-5 gap-4 mt-4'>
        <a href="#" className='bg-white/5 p-3 rounded-lg flex flex-col gap-s hover:bg-white/10'>
          {/* Fazer o nome da playlist ser recebido aqui e exibido */}
          <Image
            width={120}
            height={120}
            alt="playlist feita pra você: playlist_name"
            className='w-full'
            src="/image/PauloNazareth.jpeg"
          />
          <strong className="font-semibold">
            Daily Mix 1
          </strong>
          <span className='text-sm text-zinc-400  '>
            Paulo Nazareth, Morada, Projeto Sola, Casa Aberta e muito mais ...
          </span>
        </a>
        <a href="#" className='bg-white/5 p-3 rounded-lg flex flex-col gap-s hover:bg-white/10'>
          {/* Fazer o nome da playlist ser recebido aqui e exibido */}
          <Image
            width={120}
            height={120}
            alt="playlist feita pra você: playlist_name"
            className='w-full'
            src="/image/DailyMix2.png"
          />
          <strong className="font-semibold">
            Daily Mix 2
          </strong>
          <span className='text-sm text-zinc-400'>
            Paulo Nazareth, Morada, Projeto Sola, Comuniade da Vila, Crombie ...
          </span>
        </a>
        <a href="#" className='bg-white/5 p-3 rounded-lg flex flex-col gap-s hover:bg-white/10'>
          {/* Fazer o nome da playlist ser recebido aqui e exibido */}
          <Image
            width={120}
            height={120}
            alt="playlist feita pra você: playlist_name"
            className='w-full'
            src="/image/PauloNazareth.jpeg"
          />
          <strong className="font-semibold">
            Daily Mix 3
          </strong>
          <span className='text-sm text-zinc-400 flex flex-col gap-2 '>
            Paulo Nazareth, Morada, Projeto Sola, Casa Aberta e muito mais ...
          </span>
        </a>
        <a href="#" className='bg-white/5 p-3 rounded-lg flex flex-col gap-s hover:bg-white/10'>
          {/* Fazer o nome da playlist ser recebido aqui e exibido */}
          <Image
            width={120}
            height={120}
            alt="playlist feita pra você: playlist_name"
            className='w-full'
            src="/image/PauloNazareth.jpeg"
          />
          <strong className="font-semibold">
            Daily Mix 4
          </strong>
          <span className='text-sm text-zinc-400 flex flex-col gap-2 '>
            Paulo Nazareth, Morada, Projeto Sola, Casa Aberta e muito mais ...
          </span>
        </a>
        <a href="#" className='bg-white/5 p-3 rounded-lg flex flex-col gap-s hover:bg-white/10'>
          {/* Fazer o nome da playlist ser recebido aqui e exibido */}
          <Image
            width={120}
            height={120}
            alt="playlist feita pra você: playlist_name"
            className='w-full'
            src="/image/PauloNazareth.jpeg"
          />
          <strong className="font-semiould">
            Daily Mix 5
          </strong>
          <span className='text-sm text-zinc-400 flex flex-col gap-2 '>
            Paulo Nazareth, Morada, Projeto Sola, Casa Aberta e muito mais ...
          </span>
        </a>
      </div>
    </div>
  );
};

export default PlaylistsMadeFor;
