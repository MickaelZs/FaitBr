import './index.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import ReactAudioPlayer from 'react-audio-player'


export default function Index() {

    
    return (
      <div className="App">

        
  <AudioPlayer
    autoPlay
    src="./music/henriqueejulianooficial-completa-ai-part-marilia-mendonca-09f511dd.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />


        <ReactAudioPlayer
        src='./music/henriqueejulianooficial-completa-ai-part-marilia-mendonca-09f511dd.mp3'
        autoPlay
        controls
         />


       
      </div>
    );
    
  }