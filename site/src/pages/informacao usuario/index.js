import './index.scss'

import Cabeçario from '../../components/cabeçalho'

import { API_URL } from '../../api/config'
import { useEffect, useState } from 'react'
import { listarUsuario } from '../../api/usuarioAPI'

export default function Index(){

    const [usuario, setUsuario] = useState ([])
    const [imagem, setImagem] = useState ('')

    async function carregarUsuario(){
        const resp = await listarUsuario();
        setUsuario(resp);
    }

    useEffect(() => {
       
        carregarUsuario();
    }, [])

    function mostrarImagem(imagem){
        
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else { 
                return `${API_URL}/${imagem}`
        }
    }

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }


    return(
        <main className='pagina-informacao-usu'>
            <Cabeçario/>
            <section className='faixa2'>
                <div>

                   
                       

                    
               
                <div className='nm-usuario'>

                    <div className='div1'>
                    

                    <div className='usuario' onClick={escolherImagem}>

                        {!imagem &&

                        <img src='/images/img.png'/>
                        }

                        {imagem &&  

                        <img className='imagem' src={mostrarImagem(imagem)} />

                        }

                        <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>
                        </div>
                
                    </div>
                    
                    <div class=''>
                    <p>Alterar nome</p>
                    <img src="./images/lapis.svg" alt="" />
                    </div>
                </div>
                
                <div>
                    
                    
                 <div>
                   <h1> Nascimento</h1>
                   <p>19-05-2005</p>
                </div>
             
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
                
                
                    <div>
                        <h1>Senha</h1>
                        <p>*</p>
                    </div>
                    
                    </div>
                  

                        
                
                  
                </div>
            </section>
           
        </main>
    )
}