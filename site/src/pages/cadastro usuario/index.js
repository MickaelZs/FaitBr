import './index.scss'

export default function Index() {
    return (
      <div className="pagina-cadastroUsuario">

        <div className="faixa1">

          <div className="imagem">
          <img src="images/cadastro.png"  ></img>
          </div>
          

          <div className="faixa-input">
          <div class="label-float">
        <input type="text" placeholder=" "/>
        <label>Nome</label>
          </div>
          <br/>
          <div class="label-float">
            <input type="date" placeholder=" " required/>
            <label>Date de nascimento</label>
          </div>

          <br/>

          <div class="label-float">
        <input type="text" placeholder=" "/>
        <label>Email</label>
          </div>
          <br/>
          <div class="label-float">
            <input type="text" placeholder=" " required/>
            <label>Senha</label>
          </div>

          <br/>

          <button type="button" className="botao1"> Entrar </button>
          

          </div>

          

        </div>

      </div>
    );
  }