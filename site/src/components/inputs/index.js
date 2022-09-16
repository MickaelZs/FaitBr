import './index.scss'

export default function Cardinput(){
    return(
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
    );
}