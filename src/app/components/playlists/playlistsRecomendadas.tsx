import React from 'react';
import Image from 'next/image';

const playlistsRecomendadas: React.FC = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-5'>
      <div className="bg-white/10 rounded">
        <Image src="/image/ComunidadeDaVila.jpeg" width={50} height={50} alt="Capa da playlist" />
      </div>
      <div>
        <Image src="/image/morada.jpeg" width={50} height={50} alt="Capa da playlist" />
      </div>
      <div>
        <Image src="/image/Palavrantiga.jpeg" width={50} height={50} alt="Capa da playlist" />
      </div>
      <Image src="/image/PauloNazareth.jpeg" width={50} height={50} alt="Capa da playlist" />
      <div>
        <Image src="/image/Purples.jpeg" width={50} height={50} alt="Capa da playlist" />
      </div>
      <div>
        <Image src="/image/ProjetoSola.jpeg" width={50} height={50} alt="Capa da playlist" />
      </div>
    </div>

  );
};

export default playlistsRecomendadas;