import './index.scss'

export default function Home (){
    return(
        <main className="faixa-homee">
             <div className='texto-cabecalho'>
            <div className='uee'>
              <li><a href="#sec1">Artistas mais escutados</a></li>
              <li><a href="#sec2">Gêneros</a></li>
              <li><a href="#sec3">Artistas populares</a></li>
              </div>
              
              
          
              <div class="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label class="menu__btn" for="menu__toggle">
                <span></span>
              </label>

              <ul class="menu__box">
                <li><a class="menu__item" href="/LoginUsuario">Login</a></li>
                <li><a class="menu__item" href="/CadastroUsuario">Cadastro</a></li>
                <li><a class="menu__item" href="/LoginAdm">Area ADM</a></li>
                
              </ul>
              </div>

          </div>
            <div className='container'>
                <h1>Without music, <br/> life would be a <br/> mistake</h1>
                <div className='oi'>
               
      <div className='card' >
        
       <div>
         <img src='/images/teto.jpg' alt="" />
       </div>
       
       <div className='baixo'>
         <div className='circulo'>
           <img src='/images/teto.jpg' alt="" />
         </div> 
         <div className="text">
         <h1>musica <br/> artista </h1>
         </div>
       </div>    
      </div>
      </div>
            </div>

        </main>
    )
}