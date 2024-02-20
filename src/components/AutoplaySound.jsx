import React, { useEffect, useRef } from 'react';
import sound from '../assets/sound.mp3'

const AutoplaySound = () => {
  const audioRef = useRef();
  const btn = useRef();

  const playAudio = () => {
    audioRef.current.play().then(() => {
      // Handle successful playback (optional)
    }).catch((error) => {
      // Handle potential errors (optional)
    });
  };

  useEffect(() => {
    playAudio(); // Automatically play audio when component mounts
  }, []);

  return (
    <div>
      {/* <button ref={btn} onClick={playAudio}>Play Audio</button> */}
      <audio ref={audioRef}>
        <source
          id="activeAyah"
          src={sound}
          type="audio/mp3"
        />
      </audio>
    </div>
  );
};

export default AutoplaySound;
