import { useState, useRef, useEffect } from 'react';

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   console.log('renderOut');

//   useEffect(() => {
//     console.log('inner', ref);

//     if (isPlaying) {
//       console.log('play', ref);
//       ref.current.play();
//     } else {
//       console.log('pause', ref);
//       ref.current.pause();
//     }
//   }, []);

//   return (
//     <>
//       {' '}
//       {console.log('rednderJSX')}
//       <video ref={ref} src={src} loop playsInline />
//     </>
//   );
// }

// export default function Test() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     console.log(isPlaying, 'isPlaying');
//   }, [isPlaying]);

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>

//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('play');
      ref.current.muted = true;
      ref.current.play();
    } else {
      console.log('pause');
      ref.current.muted = true;
      ref.current.pause();
      console.log(ref);
    }
  }, []);
  return <video ref={ref} src={src} loop playsInline />;
}

export default function Test() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [text, setText] = useState('');

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>

      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
