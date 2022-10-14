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

                        <div className='faixa1'>

                            <div className='faixa1-div'>

                                <div className='usuario' onClick={escolherImagem}>

                                {!imagem &&

                                <img src='/images/img.png'/>
                                }

                                {imagem &&  

                                <img className='imagem' src={mostrarImagem(imagem)} />

                                }

                                <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>
                                
                                </div>
                                <h2>Alterar foto de perfil</h2>

                            </div>

                            <div>
                                <div className='sla-cara'>
                                    <img src='/images/lapis.svg' />
                                    <h1>Neymar 123</h1>
                                </div>

                                <h2>alterar nome de usuário</h2>
                            </div>
                        </div>

                        <hr/>


                        <div className='faixa3'>

                            <div className='faixa3-div1'>
                                <h1>Nome:</h1>
                                <h3>Neymar junior santos ferreira sla</h3>
                            </div>

                            <div  className='faixa3-div1'>
                                <h1>Nascimento:</h1>
                                <h3> 22/10/2005</h3>
                            </div>

                            <div className='faixa3-div2'>
                                <div>
                                    <h1>Email:</h1>
                                    <h3> Neymar@gmail.com</h3>
                                </div>

                                <div className='faixa3-div2-sla'>
                                    <img className='lapis' src='/images/lapis.svg' />
                                    <h1>Alterar email</h1>
                                </div>
                            </div>

                            <div className='faixa3-div2'>
                                <div>
                                    <h1>Senha:</h1>
                                    <h3>neymar123</h3>
                                </div>

                                <div className='faixa3-div2-sla'>
                                    <img className='lapis' src='/images/lapis.svg' />
                                    <h1>Alterar senha</h1>
                                </div>

                            </div>
                        </div>
                        
                        <hr/>

                        <div className='faixa3'>
                            <div className='faixa3-div1'>
                                <h1>Informações extras</h1>
                                <h3>descrição:</h3>
                                <input type='text' placeholder='escreva algo' />
                            </div>

                            <div>
                            <h5>Adicionar uma foto de perfil:</h5>

                                <div className='border-image' onClick={escolherImagem}>

                                {!imagem &&

                                <img src='/images/image-bottom212.svg' width='170px'/>
                                }

                                {imagem &&  

                                <img className='imagem' src={mostrarImagem(imagem)} />

                                }

                                <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>
                                </div>
                            </div>

                            <div className='faixa3-div1'>
                                <h3>Nome de usuárioP:</h3>
                                <input type='text' placeholder='escreva algo' />
                            </div>

                        </div>

                </section>
           
        </main>
    )
}