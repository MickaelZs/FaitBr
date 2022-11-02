export default function Index(){
    return(
        <div>
            <div>
	  <button onclick="document.getElementById('player').play()">Play</button>
	  <button onclick="document.getElementById('player').pause()">Pause</button>
	  <button onclick="document.getElementById('player').volume+=0.1">Aumentar volume</button>
	  <button onclick="document.getElementById('player').volume-=0.1">Diminuir volume</button>
	</div>

	<audio id="player" autoplay="autoplay" controls="controls">
	  <source src="henriqueejulianooficial-completa-ai-part-marilia-mendonca-09f511dd.mp3"  />
	  seu navegador não suporta HTML5
	</audio>
        </div>
    )
}