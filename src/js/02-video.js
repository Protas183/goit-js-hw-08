import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};


const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  const currentTime = parseFloat(savedTime);
  if (!isNaN(currentTime)) {
    player.setCurrentTime(currentTime);
  }
}
