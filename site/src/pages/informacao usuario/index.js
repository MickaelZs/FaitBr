import './index.scss'

import Cabeçario from '../../components/cabeçalho'

import { API_URL } from '../../api/config'
import { useEffect, useState } from 'react'
import { buscarUsuarioPorId, listarUsuario } from '../../api/usuarioAPI'
import { useParams } from 'react-router-dom'

export default function Index(){

    const [usuario, setUsuario] = useState ([])
    const [imagem, setImagem] = useState ('')
    const {idParam} = useParams()

    async function carregarUsuario(){
        const resp = await buscarUsuarioPorId(idParam);
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
                    
                    <div>
                        
                    
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
                       
                        <div>
                        <h1>
                            Email
                        </h1>
                        <p>{usuario.email}</p>
                        </div>
                      
                       
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

                  

                        
               
                  
                </div>
            </section>
           
        </main>
    )
}