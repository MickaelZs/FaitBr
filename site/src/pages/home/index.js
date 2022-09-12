import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardGenero from '../../components/genero';
import CardArtistas from '../../components/artistas';



export default function Index() {

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

    <div className='pagina-home'>

      <div className='faixa1'>
        <header>
          <div className='texto-cabecalho'>
            <div>
              <img  className='logo' src='./images/logo.png' href='' />
            </div>

              <p>Artistas</p>
              <p>Gêneros</p>
              <p>Mais Escutados</p>
              <img  className='icon-pesquisa' src='./images/icon-pesquisa.png'/>
              <img className='icon-livraria' src='./images/icon-library.png'/>
              <img className='icon-perfil' src='./images/icon-perfil.png'/>
          </div>
        </header>
      </div>

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
        <CardGenero avatar="images/trap..png" />
        <CardGenero avatar="images/brega.png"/>
        <CardGenero avatar="images/funk.png"/>
        <CardGenero avatar="images/sertanejo..png"/>
        <CardGenero avatar="images/rock.png" />
        <CardGenero avatar="images/pagode.png" />
        <CardGenero avatar="images/pop.png" />
        <CardGenero avatar="images/forro.png" />

      </Carousel>

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
        <CardArtistas avatar="images/teto.jpg" />
        <CardArtistas avatar="images/menos.jpg" />
        <CardArtistas avatar="images/hariel.webp" />
        <CardArtistas avatar="images/gusttavolima.webp" />
        <CardArtistas avatar="images/" />
        <CardArtistas avatar="images/anderson.jpeg" />
        <CardArtistas avatar="images/anitta..jpg" />
        <CardArtistas avatar="images/rai.webp" />
        

      </Carousel>

      <div className='rodape'>

        <div>
          <img className='logo' src='./images/logo.png'/>
        </div>

        <div className='texto-rodape' >
          <h3>Redes Sociais:</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

        <div>
        <h3>Desenvolvedores:</h3>
          <p>João Paulo</p>
          <p>Mickael V.</p>
          <p>Lucas Tatsuo</p>
          <p>Cauã G.</p>
          <p>Cauã R.</p>
        </div>

        <div>
          <h3>Apoiadores:</h3>
          <img src='./images/logo-frei.png'/>
        </div>

      </div>
      

    </div>
  );
}

