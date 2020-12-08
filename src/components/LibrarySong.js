import React from 'react';

const LibrarySong = ({ song, setCurrentSong, songs, setSongs }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);

    //Add active state
    //Map through all songs and for each one return that song
    //but update the active field if that song matches current song
    const newSongs = songs.map(targetSong => {
      return {
        ...targetSong,
        active: targetSong.id === song.id,
      };
    });
    setSongs(newSongs);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}    `}
    >
      <img src={song.cover} alt={song.name} />
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
