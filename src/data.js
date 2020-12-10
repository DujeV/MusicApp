import { v4 as uuidv4 } from 'uuid';

import Post_Malone_Cover from './Images/Post_Malone_Cover.png';
import Hollywoods_Bleeding from './audio/Hollywoods_Bleeding.mp3';
import Saint_Tropez from './audio/Saint_Tropez.mp3';
import Enemies from './audio/Enemies.mp3';
import Allergic from './audio/Allergic.mp3';
import A_Thousand_Bad_Times from './audio/A_Thousand_Bad_Times.mp3';
import Circles from './audio/Circles.mp3';
import Die_For_Me from './audio/Die_For_Me.mp3';
import On_The_Road from './audio/On_The_Road.mp3';
import Take_What_You_Want from './audio/Take_What_You_Want.mp3';
import I_am_Gonna_Be from './audio/I_am_Gonna_Be.mp3';
import Staring_At_The_Sun from './audio/Staring_At_The_Sun.mp3';
import Sunflower from './audio/Sunflower.mp3';
import Internet from './audio/Internet.mp3';
import Goodbyes from './audio/Goodbyes.mp3';
import Myself from './audio/Myself.mp3';
import I_Know from './audio/I_Know.mp3';
import Wow from './audio/Wow.mp3';

function generateSongs() {
  return [
    {
      name: ' Hollywoods Bleeding',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Hollywoods_Bleeding,
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      //is it song currently playing
      active: true,
    },
    {
      name: 'Saint Tropez',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Saint_Tropez,
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Enemies',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Enemies,
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Allergic',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Allergic,
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'A Thousand Bad Times',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: A_Thousand_Bad_Times,
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Circles',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Circles,
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Die For Me',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Die_For_Me,
      color: ['#BA4A46', '#FDF0DD'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'On The Road',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: On_The_Road,
      color: ['#BA4A46', '#FDF0DD'],
      id: uuidv4(),
      active: false,
    },
    {
      name: ' Hollywoods Bleeding',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Hollywoods_Bleeding,
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      //is it song currently playing
      active: false,
    },
    {
      name: 'Take What You Want',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Take_What_You_Want,
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'I am Gonna Be',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: I_am_Gonna_Be,
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Staring At The Sun',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Staring_At_The_Sun,
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Sunflower',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Sunflower,
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Internet',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Internet,
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Goodbyes',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Goodbyes,
      color: ['#BA4A46', '#FDF0DD'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Myself',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Myself,
      color: ['#BA4A46', '#FDF0DD'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'I Know',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: I_Know,
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      //is it song currently playing
      active: false,
    },
    {
      name: 'Wow',
      cover: Post_Malone_Cover,
      artist: 'Post Malone',
      audio: Wow,
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default generateSongs;
