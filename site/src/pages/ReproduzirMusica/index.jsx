import './index.scss'
import CardAudio from '../../components/CardAudio'
import { useState } from 'react';

export default function Reproduzir(){
    const [musica,setMusica] = useState()
    return(
        <main className='pagina-reproduzir'>
            <section className='faixa1'>

            </section>
            <section className='div-reproducao'>
                <div>
                    <img src="./images/capadevideo.svg" width="500px"/>
                </div>
            <div>
            <CardAudio id="1." image="./images/Coraçãoqbrd.svg" nome="Coração Quebrado" autor="Klouvz, Swang Pam..."/>
            <CardAudio id="2." image="./images/Coraçãoqbrd.svg" nome="Coração Quebrado" autor="Klouvz, Swang Pam..."/>
            <CardAudio id="3." image="./images/Coraçãoqbrd.svg" nome="Coração Quebrado" autor="Klouvz, Swang Pam..."/>
            </div>
            </section>

        


        </main>
    );
}