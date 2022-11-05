import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick";
import { listaMusicaArtista } from '../../api/musicaAPI';
import { useEffect, useState } from 'react';
import { API_URL } from '../../api/config';



export default function CardMusica (){

  const [musica,setMusica ] = useState([])

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

  async function carregarMusica(){
    const resp = await listaMusicaArtista()
    setMusica(resp)
    console.log(resp)
  }

  useEffect(() => {
    carregarMusica();
  },[])
    
  return(
    <div className='lider'>
       <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          centerMode
        >
          


      {musica.map( (item) => 
      
      
     <div className='card' >
      <div>
        <img src={`${API_URL}/${item.imagem}`} alt="" />
      </div>
      
      <div className='baixo'>
        <div className='circulo'>
          <img src={`${API_URL}/${item.capaArtista}`} alt="" />
        </div> 
        <div className="text">
        <h1>{item.musica} <br/> {item.artista} </h1>
        </div>
      </div>    
     </div>
     
     
      )}
      </Carousel>
    
    
    
     

    </div>
  )
}