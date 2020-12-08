import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songs,
}) => {
  //*Ref - grab some html tag like audio
  //variable that stores songs audio
  const audioRef = useRef(null);

  //*Event Handlers
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  //onTimeUpdate store target.currentTime and target.duration and update setSongInfo
  const timeUpdateHandler = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  // Formating time to get minutes and seconds
  const getTime = time => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  //when draging input bar update the audio current time(so we can resume audio from specific minute)
  //also update songs current time to that specific value
  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //this is for songs that are selected from library list
  //when song info is loaded (onLoadedData) check if the button is play (which means isPlaying)
  //or it is pause so it will not run (!isPlaying)
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const skipTrackHandler = direction => {
    //find an index of a current song
    let currentIndex = songs.findIndex(item => item.id === currentSong.id);

    if (direction === 'skip-forward') {
      if (currentIndex < songs.length - 1) {
        currentIndex = currentIndex + 1;
      } else {
        currentIndex = 0;
      }
    }

    if (direction === 'skip-back') {
      if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
      } else {
        currentIndex = songs.length - 1;
      }
    }
    setCurrentSong(songs[currentIndex]);

    //looping through songs to update style in library section when we click to play previous or next song
    songs.map(item => {
      return songs[currentIndex].id === item.id
        ? (item.active = true)
        : (item.active = false);
    });
  };

  //*State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className='player-container'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type='range'
        />
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className='skip-back'
          size='2x'
          icon={faAngleLeft}
        />

        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />

        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
        <audio
          onLoadedData={autoPlayHandler}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </div>
  );
};

export default Player;
