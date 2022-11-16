import './index.scss'


import { ToastContainer, toast } from 'react-toastify';
import Cabecario from '../../components/cabeçalho'
import { API_URL } from '../../api/config'
import { useEffect, useState } from 'react'
import { buscarUsuarioPorId, listarUsuario, enviarImagemUsuario } from '../../api/usuarioAPI'
import { useNavigate, useParams } from 'react-router-dom'
import Storage from 'local-storage'

export default function Index() {

    const [usuario, setUsuario] = useState([])
    const [imagem, setImagem] = useState('')
    

    const {idParam} = useParams()
   const  navigate = useNavigate ()

    function sairClick(){
        Storage.remove('usuario-logado')
        navigate('/LoginUsuario')
    }

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

    async function salvarImagem(){
        try {
            
            if(typeof(imagem) == 'object'){
                await enviarImagemUsuario(idParam, imagem)
                
            }

            toast.success('trocastes a foto, querido usuario do fitas br')
        
        } catch (err) {
            if(err.response)
            toast.error(err.response.data.erro)
            else
            toast.error(err.message);
        }

    }
    return (
        <section>
             <Cabecario/>
        <main className='pagina-informacao-usu'>
          
            

            <div className='faixa-usuario'>
                <div className='f'>

            <div className='usuarioo' onClick={escolherImagem}>

                {!imagem &&

                    <img className='usuarioo'  src={`${API_URL}/${usuario.imagem}`} />
                }

                {imagem &&

                    <img className='usuarioo' src={mostrarImagem(imagem)} />

                }

                <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>

                
                </div>
                <div>
                    <button className='botaoo' onClick={salvarImagem} >Salvar Imagem</button>
                    <button className='botaoo' onClick={sairClick}>Sair</button>
                </div>

                </div>

                <div className='faixa3'>
                    <div>


                    <div className='faixa3-div1'>
                        <h1>Nome:</h1>
                        <h3>{usuario.nome}</h3>
                    </div>


                    <div className='faixa3-div1'>
                        <h1>Nascimento:</h1>
                        <h3>{usuario.nascimento}</h3>
                    </div>
                    </div>
                    <div>

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
                    

                </div>

                
            

                
            </div>





            {/* <Cabeçario usuario={usuario} />

            <section className='faixa2'>

                <div className='faixa1'>

                    <div className='faixa1-div'>

                        <div className='usuarioo' onClick={escolherImagem}>

                            {!imagem &&

                                <img className='usuarioo'  src={`${API_URL}/${usuario.imagem}`} />
                            }

                            {imagem &&

                                <img className='usuarioo' src={mostrarImagem(imagem)} />

                            }

                            <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>

                        </div>
                        <button className='botaoo' onClick={salvarImagem}>Salvar Imagem</button>
                        <div  >
                        <button className='botaoo' onClick={sairClick}>sair</button>
                    </div>


                    </div>

                    <div>
                       

                       
                    </div>
                </div>

          


                <div className='faixa3'>
                    <div>


                    <div className='faixa3-div1'>
                        <h1>Nome:</h1>
                        <h3>{usuario.nome}</h3>
                    </div>


                    <div className='faixa3-div1'>
                        <h1>Nascimento:</h1>
                        <h3>{usuario.nascimento}</h3>
                    </div>
                    </div>
                    <div>

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
                    

                </div>

                <hr /> */}
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

            {/* </section> */}

        </main>
        </section>
    )
}