import './index.scss'

import Cabeçario from '../../components/cabeçalho'

import { API_URL } from '../../api/config'
import { useEffect, useState } from 'react'
import { buscarUsuarioPorId, listarUsuario } from '../../api/usuarioAPI'
import { useParams } from 'react-router-dom'
import Storage from 'local-storage'

export default function Index() {

    const [usuario, setUsuario] = useState([])
    const [imagem, setImagem] = useState('')
    const { idParam } = useParams()

    async function carregarUsuario() {
        const id = Storage('usuario-logado').id
        const resp = await buscarUsuarioPorId(id);
        setUsuario(resp);
    }

    useEffect(() => {

        carregarUsuario();
    }, [])

    function mostrarImagem(imagem) {

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


    return (
        <main className='pagina-informacao-usu'>
            <Cabeçario />

            <section className='faixa2'>

                <div className='faixa1'>

                    <div className='faixa1-div'>

                        <div className='usuario' onClick={escolherImagem}>

                            {!imagem &&

                                <img src='/images/img.png' />
                            }

                            {imagem &&

                                <img className='imagem' src={mostrarImagem(imagem)} />

                            }

                            <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>

                        </div>
                       

                    </div>

                    <div>
                        <div className='sla-cara'>
                            
                            <h1>{usuario.nome}</h1>
                        </div>

                       
                    </div>
                </div>

                <hr />


                <div className='faixa3'>


                    <div className='faixa3-div1'>
                        <h1>Nome:</h1>
                        <h3>{usuario.nome}</h3>
                    </div>


                    <div className='faixa3-div1'>
                        <h1>Nascimento:</h1>
                        <h3>{usuario.nasc}</h3>
                    </div>

                    <div className='faixa3-div2'>

                        <div>
                            <h1>Email:</h1>
                            <h3> {usuario.email}</h3>
                        </div>





                        
                    </div>

                    <div className='faixa3-div2'>
                        <div>
                            <h1>Senha:</h1>
                            <h3>{usuario.senha}</h3>
                        </div>

                      

                    </div>

                </div>

                <hr />
{/* 
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

                                <img src='/images/image-bottom212.svg' width='170px' />
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

                </div> */}

            </section>

        </main>
    )
}