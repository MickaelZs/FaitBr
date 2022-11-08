import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarMusicaPorId } from '../../api/musicaAPI';
import { useEffect } from 'react';
import { API_URL } from '../../api/config';

export default function Reproduzir() {
    const [musica, setMusica] = useState([])
    const navigate = useNavigate()
    const { idParam } = useParams()

    async function carregarMusica() {
        const x = await buscarMusicaPorId(idParam)
        setMusica(x)
    }

    useEffect(() => {
        carregarMusica()

    }, [])

    function acessarMusica(id) {
        navigate(`/detalhe/artista/${id}`)
    }
    return (
        <main className='pagina-reproduzir'>
            <section className='faixa-principal'>

                <div className='faixa1'>
                    <img src="./images/anitta..jpg" alt="" />
                    <h2>Musica do mickael de novo</h2>
                    <h3>Mickael</h3>
                </div>

                <div>
                    <label>1</label>
                    <div className='cardmusica'>
                            
                        <img src="./images/anitta..jpg" className="image-music" />

                        <div className='div-ator'>
                            <p className='nome'>musica do Mickael</p>
                            <p className='autor'>Mickael</p>
                        </div>

                    </div>

                    <div className='cardmusica'>

                        <img src="./images/ftneymar.svg" className="image-music" />

                        <div className='div-ator'>
                            <p className='nome'>musica do Mickael</p>
                            <p className='autor'>Mickael</p>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
}