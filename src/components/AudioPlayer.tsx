import { useEffect, useState, type ChangeEvent } from 'react';
import { HiPlay, HiStop } from 'react-icons/hi2';
import {
  RxSpeakerLoud,
  RxSpeakerModerate,
  RxSpeakerOff,
  RxSpeakerQuiet,
} from 'react-icons/rx';
import { useAudio } from 'react-use';

const trackNames = [
  'Original',
  'Fantasy',
  'Adventure',
  'Disco',
  'Funk',
  '80s Vibe',
  'Reggae',
  'Trance',
  'Beatbox',
  '8-Bit',
  'Futuristic',
  'Indie Pop',
  'Christmas',
  'Halloween',
];

const AudioPlayer = () => {
  const [audio, state, controls, ref] = useAudio({
    src: '/audio/funk.mp3',
    autoPlay: true,
  });

  const [volumeLevel, setVolumeLevel] = useState(3);

  const handleSpeakerClick = () => {
    switch ((volumeLevel + 1) % 4) {
      case 0:
        controls.volume(0);
        break;
      case 1:
        controls.volume(0.1);
        break;
      case 2:
        controls.volume(0.5);
        break;
      case 3:
        controls.volume(1);
    }
    setVolumeLevel((prev) => (prev + 1) % 4);
  };

  const handleTrackSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    let trackName = e.target.value;
    trackName = trackName.toLowerCase().replace(' ', '-');
    if (ref.current) {
      ref.current.src = `/audio/${trackName}.mp3`;
    }
  };

  const speakerIcon = () => {
    const size = 20;
    switch (volumeLevel) {
      case 0:
        return <RxSpeakerOff size={size} />;
      case 1:
        return <RxSpeakerQuiet size={size} />;
      case 2:
        return <RxSpeakerModerate size={size} />;
      case 3:
        return <RxSpeakerLoud size={size} />;
    }
  };

  const handlePlayButton = () => {
    if (state.playing) {
      controls.pause();
      controls.seek(0);
    } else {
      void controls.play();
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.src = `//funk.mp3`;
    }
  }, []);

  return (
    <div className="flex items-center gap-3 px-4 py-2 glass-card rounded-2xl border-white/5 shadow-2xl">
      {audio}

      <button
        onClick={handlePlayButton}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-rose-600/10 border border-rose-600/30 text-rose-500 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0.2)]"
      >
        {state.playing ? <HiStop size={18} /> : <HiPlay size={18} />}
      </button>

      <div className="relative group">
        <select
          onChange={handleTrackSelect}
          defaultValue="Funk"
          className="appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-slate-300 focus:outline-none focus:border-rose-500/50 hover:bg-white/10 transition-all duration-300 min-w-[120px] cursor-pointer"
        >
          {trackNames.map((track, i) => (
            <option value={track} key={i} className="bg-[#0c0c0e] text-white">
              {track}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-rose-500 transition-colors">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

      <button
        onClick={handleSpeakerClick}
        className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-rose-500 hover:bg-white/5 transition-all duration-300"
      >
        {speakerIcon()}
      </button>
    </div>
  );
};

export default AudioPlayer;
