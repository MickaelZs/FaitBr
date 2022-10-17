import './index.scss'
import AudioPlayer from 'react-modular-audio-player' ;

import 'react-h5-audio-player/src/styles.scss'
import ReactAudioPlayer from 'react-audio-player'


export default function Index() {

 const rearrangedPlayer = [
  {
    className: "beatles",
    style: { cursor: "pointer" },
    innerComponents: [
      {
        type: "play"
      }
    ]
  }
];

    
    return (
      <div className="App">

<AudioPlayer
  audioFiles={[
    {
      src: "music/henriqueejulianooficial-completa-ai-part-marilia-mendonca-09f511dd.mp3",
      title: "Hey Jude",
      artist: "The Beatles"
    }
  ]}
  rearrange={rearrangedPlayer}
  playerWidth="10rem"
  iconSize="10rem"
  playIcon="/beatlesPic.png"
  playHoverIcon="/beatlesPic.png"
  pauseIcon="/beatlesPic.png"
  pauseHoverIcon="beatlesPic.png"
/>

        
   


       
      </div>
    );
    
  }