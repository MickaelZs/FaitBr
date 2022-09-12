import './index.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import ReactAudioPlayer from 'react-audio-player'


export default function Index() {

    
    return (
      <div className="App">


  <AudioPlayer
    autoPlay
    src="http://example.com/audio.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />


        <ReactAudioPlayer
        src='my_audio_file.ogg'
        autoPlay
        controls
         />
       
      </div>
    );
    
  }