import './index.scss'

export default function Index() {
    return (
      <div className="pagina-cadastroUsuario">

        <div className="faixa1">

          <div className="imagem">
          <img src="images/imagem-loginUsuario.png"  ></img>
          </div>
          

          <div className="faixa-input">
          <div class="label-float">
        <input type="text" placeholder=" "/>
        <label>Nome</label>
          </div>
          <br/>
          <div class="label-float">
            <input type="date" placeholder=" " required/>
            <label>Nome de Usuário</label>
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

          <button type="button" > Entrar </button>
          

          </div>

          

        </div>

      </div>
    );
  }