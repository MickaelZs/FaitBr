import './index.scss'

export default function Index() {
    return (
      <div className="pagina-loginUsuario">

<div className="faixa1">

<div className="imagem">
<img src="images/loginUsuario.png"  ></img>
</div>


<div className="faixa-input">

<div class="label-float">
<input type="text" placeholder=" "/>
<label>Email</label>
</div>
<br/>
<div class="label-float">
  <input type="text" placeholder=" " required/>
  <label>senha</label>
</div>

<br/>

<a href="home">Esqueceu sua senha cornooo?</a>

<br/>

<button type="button" > Entrar </button>


</div>



</div>

      </div>
    );
  }