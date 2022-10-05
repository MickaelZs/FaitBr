import './index.scss'

import Cabeçario from '../../components/cabeçalho'

export default function Infusario(){
    return(
        <main className='pagina-informacao-usu'>
            <Cabeçario/>
            <section className='faixa2'>
                <div className='nm-usuario'>
                    <div className='div1'>
                    <img src="./images/ftneymar.svg" alt="" />
                    <h1>
                        Neymar
                    </h1>
                    </div>
                    <div class=''>
                    <p>Alterar nome</p>
                    <img src="./images/lapis.svg" alt="" />
                    </div>
                </div>
                <hr></hr>

                <div>
                   <h1> Nascimento</h1>
                   <p>19/06/2006</p>
                </div>
                <div>
                    <div>
                        <h1>
                            Email
                        </h1>
                        <p>neymar@gmail.com</p>
                    </div>
                    <div>
                        <p>Alterar email</p>
                        <img src=""  />
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Senha</h1>
                        <p>*</p>
                    </div>
                    <div>
                        <h1>Alterar senha</h1>
                        <img src="" alt="" />
                    </div>
                </div>

            </section>
        </main>
    )
}