import React, { useState } from 'react';
//Adding styles
import './styles/app.scss';

//Adding components
import Navbar from './components/Navbar';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
//Import data
import data from './data';

function App() {
  //*State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className='App'>
      <Navbar
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
