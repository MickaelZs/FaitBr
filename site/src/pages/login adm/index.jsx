import './index.scss'

export default function Index() {
    return (
      <div className="pagina-loginADM">
        <section className='faixa-1'>
          <button type='button' className='botao2'> Voltar </button>
        </section>
        
        <section className='faixa2'>
        <div class="label-float">
        <input type="text" placeholder=" "/>
        <label>Email</label>
          </div>
          <br/>
          <div class="label-float">
            <input type="text" placeholder=" " required/>
            <label>Senha</label>
          </div>
          <button type='button' className='botao'> Entrar </button>
          </section>
      </div>
    );
  }