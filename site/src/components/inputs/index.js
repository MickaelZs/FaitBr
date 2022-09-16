import './index.scss'

export default function Cardinput(props){
    return(
      <main className="input">
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
        </div>
        </main>
    );
}