import { useState } from 'react';
import Menu from '../../components/menu'
import './index.scss'

import { ToastContainer, toast } from 'react-toastify';
import { cadastroArtista, enviarImagemArtista } from '../../api/cadastroArtistaAPI'


export default function Index(){

    const [nome, setNome] = useState ('');
    const [genero, setGenero] = useState ('');
    const [sobre, setSobre] = useState ('');
    const [imagem, setImagem] = useState ('');




    async function salvarClick(){
        try{      
            if (!imagem)
            throw new Error('escolha a imagem do artista');
            const Novoartista = await cadastroArtista (nome,genero,sobre);
            const r = await enviarImagemArtista(Novoartista.id, imagem);
            toast.dark('Acho q foi');
        }
        catch (err){
            if(err.response)
            toast.error(err.response.data.erro)
            else
            toast.error(err.message);
        }
        }


        function escolherImagem() {
            document.getElementById('imagemCapa').click();
        }

        function mostrarImagem() {
            return URL.createObjectURL(imagem);
        }
    




    return(
        <main className='pagina-cadastro-artista'>
            <ToastContainer/>
            <Menu />
            <section className='faixa-cadastro'>
                <div className='margin-cadastro'>
                    <div className='div1-cadastro'>
                        <p className='p'>
                            Adicionar capa
                        </p>
                        <div className='border-image' onClick={escolherImagem}>

                            {!imagem &&

                            <img src='./images/image-bottom212.svg' width='170px'/>
                            }

                            {imagem &&  

                            <img className='imagem' src={mostrarImagem()} />

                            }

                            <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>
                        </div>
                    </div>
                    <div className='div2-cadastro'>
                        <div className='div-input'>
                        <input type="text"  placeholder="Artista" value={nome} onChange={e => setNome(e.target.value)} required></input>
                        </div>
                        <div className='div-input'>
                        <input type="text" placeholder="Gênero" value={genero} onChange={e => setGenero(e.target.value)} required></input>
                        </div>
                        <div className='div-input'>
                        <input type="text" placeholder="Sobre o artista" value={sobre} onChange={e => setSobre(e.target.value)} required></input>
                        </div>
                        
                                <button className='botao' onClick={salvarClick} >Cadastrar</button>
                    </div>
                </div>

            </section>
        </main>
    );
}