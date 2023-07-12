// import React, { useState, useEffect } from 'react';

// interface Playlist {
//     id: number;
//     name: string;
// }

// export default function PlaylistComponent() {
//     const [playlists, setPlaylists] = useState<Playlist[]>([]); // Estado inicial é um array vazio
//     const [playlistName, setPlaylistName] = useState(''); // Estado para controlar o valor do input

//     useEffect(() => {
//         // Este useEffect será executado toda vez que a função handleAddPlaylist for atualizada
//         console.log(playlists);
//     }, [playlists, handleAddPlaylist]);

//     const handleAddPlaylist = () => {
//         const newPlaylist: Playlist = () => {
//             id: playlists.length + 1,
//                 nome: playlistName;
//         };
//     };
//     setPlaylists(prevPlaylists => [...prevPlaylists, newPlaylist])
//     setPlaylistName('')

//     return (
//         <div>
//             <input type="text" value={playlistName} onChange={handleNameChange} />
//             <button onClick={handleAddPlaylist}>Adicionar Playlist</button>
//         </div>
//     );
// }

