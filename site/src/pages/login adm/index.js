import './index.scss'

export default function Index() {
    return (
      <div className="pagina-loginADM">
        LoginAdm
        
        <div class="label-float">
        <input type="text" placeholder=" "/>
        <label>Telefone</label>
          </div>
          <br/>
          <div class="label-float">
            <input type="text" placeholder=" " required/>
            <label>Nome de Usuário</label>
          </div>

      </div>
    );
  }