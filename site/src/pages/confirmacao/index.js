import './index.scss'

export default function Index() {
    return (
      <div className="pagina-confirmaçao">

        <div className='img'>
        <img src="images/logo.png" ></img>
        </div>

        <div className='txt'>
            <h1>Insira E-mail De <br/> Confirmação </h1>
        </div>

        <div class="label-float">
        <input type="text" placeholder=" "/>
        <label>Email</label>
          </div>

          <br/>

         <button>Enviar</button> 
       
      </div>
    );
  }
  