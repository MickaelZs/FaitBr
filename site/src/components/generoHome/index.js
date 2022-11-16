import { API_URL } from '../../api/config';
import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import { listaGeneros } from '../../api/generoAPI';
import { useNavigate } from 'react-router-dom';

export default function GeneroHome() {

  const [genero,setGenero] = useState([])
  const navigate = useNavigate()

  async function carregarGenero (){
    const resp = await listaGeneros()
    setGenero(resp)
  }

  function acessarGenero(){
    navigate(`/CadastroUsuario`)
  }

  useEffect(() => {
    carregarGenero()

  },[])


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

    return (
      <div className="page-generos">
        <h1>Generos</h1>

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
      
        {genero.map(item  =>
        <div className='card-G' onClick={ acessarGenero }>
          <img src="/images/teto.jpg" alt="" />
          <h1>{item.nome}</h1>

        </div>
)}
      
       </Carousel>
      </div>
    );
  }