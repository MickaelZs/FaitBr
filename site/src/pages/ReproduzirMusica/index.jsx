import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarMusicaPorId } from '../../api/musicaAPI';
import { useEffect } from 'react';
import { API_URL } from '../../api/config';

export default function Reproduzir(){
    const [musica,setMusica] = useState([])
    const navigate = useNavigate()
    const {idParam} = useParams()

    async function carregarMusica(){
        const x =  await buscarMusicaPorId(idParam)
        setMusica(x)
    }

    useEffect(() => {
        carregarMusica()

    },[])

    function acessarMusica(id){
        navigate(`/detalhe/artista/${id}`)
    }
    return(
        <main className='pagina-reproduzir'>
            <section className='faixa1'>

            </section>
            <section className='div-reproducao'>
                {musica.map(item => 
                <div>
                <img src={`${API_URL}/${item.imagem}`} width="500px"/>
            </div>
                    
                    )}
                
            <div>
            <CardAudio id="1." image="/images/Coraçãoqbrd.svg" nome="Coração Quebrado" autor="Klouvz, Swang Pam..."/>
            <CardAudio id="2." image="/images/Coraçãoqbrd.svg" nome="Coração Quebrado" autor="Klouvz, Swang Pam..."/>
            <CardAudio id="3." image="/images/Coraçãoqbrd.svg" nome="Coração Quebrado" autor="Klouvz, Swang Pam..."/>
            </div>
            </section>

        


        </main>
    );
}