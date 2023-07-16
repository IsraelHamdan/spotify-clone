import React from 'react';
import Image from 'next/image';
import { Shuffle, SkipBack, SkipForward, Repeat, Maximize2 } from 'lucide-react';
import { FaPlay } from 'react-icons/fa';
import { PiMicrophoneStage } from 'react-icons/pi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { TiVolumeUp } from 'react-icons/ti';

export default function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700  px-4 py-2 flex items-center justify-between" >
            {/* Música atual  */}
            <div className='flex items-center gap-3'>
                <Image src="/image/cancao-dos-filipenses.jpg" width={58} height={58} alt='Música atual' />
                <div className="flex flex-col gap-1">
                    <strong className='font-normal'>Canção dos Filipenses</strong>
                    <span className='text-xs text-zinc-400'>Comunidade da Vila</span>
                </div>
            </div>
            {/* Botões de controle */}
            <div className="flex flex-col items-center">
                <div className='flex items-center gap-3'>
                    <button className='w-10 h-10 flex items-center justify-center p-0 ml-auto mr-8 pl-0.5' >
                        <Shuffle size={20} className='text-zinc-200' />
                    </button>
                    <button className='w-10 h-10 flex items-center justify-center p-0 ml-auto  mr-8 pl-0.5' >
                        <SkipBack size={20} className='text-zinc-200' />
                    </button>
                    <button className='w-10 h-10 flex items-center justify-center p-0 ml-auto mr-8 pl-0.5 bg-white text-black  rounded-full overflow-hidden'>
                        <FaPlay />
                    </button>
                    <button className='w-10 h-10 flex items-center justify-center p-0 ml-auto mr-8 pl-0.5' >
                        <SkipForward size={20} className='text-zinc-200' />
                    </button>
                    <button className='w-10 h-10 flex items-center justify-center p-0 ml-auto mr-8 pl-0.5'>
                        <Repeat size={20} className='text-zinc-200' />
                    </button>
                </div>
                {/* slider  */}
                <div className="flex items-center gap-3 mt-2">
                    <span className='text-xs text-zinc-400'>01:04</span>
                    <div className='h-1 rounded-full w-96 bg-zinc-600  '>
                        <div className="bg-zinc-200 w-40 h-1 rounded-full hover:bg-green-600"></div>
                    </div>
                    <span className='text-xs text-zinc-400'>04:06</span>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <PiMicrophoneStage size={20} />
                <AiOutlineUnorderedList size={20} />
                <HiOutlineDesktopComputer size={20} />
                {/* futuramente criar um estado para quando o mouse estiver por cima aparecer a bolinha branca e poder controlar o volume dinamicamente  */}
                <div className='flex items-center gap-2'>
                    <TiVolumeUp size={20} />
                    <div className='h-1 rounded-full w-20 bg-zinc-600 ml-2 hover:bg-green-600'></div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer >
    );
}
