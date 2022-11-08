import { useEffect, useState } from 'react'
import { listaArtista } from '../../api/cadastroArtistaAPI'
import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { API_URL } from '../../api/config';



export default function ArtistaSeguido (){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

    const [artista,setArtista] = useState([])

    async function carregarArtista(){

        const resp = await listaArtista()
        setArtista(resp)
    
    }

    useEffect(() => {
        carregarArtista()

    },[])
    return(
        <div className='faixa-Artista'>
            <h1>Artista</h1>
            <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        transitionDuration={500}
        centerMode
      >
            {artista.map(item =>
            <div className='card'>
                <div className='circulo'>
                    <img src={`${API_URL}/${item.artista}`} alt="" />
                </div>
                <div className="text">
                    <h1>{item.nome}</h1>
                </div>
                <div className="botao-seguir">
                    <button>Seguir</button>
                </div>


            </div>
            )}
            </Carousel>

        </div>
    )
}