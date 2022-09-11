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



    </div>
  );
}

