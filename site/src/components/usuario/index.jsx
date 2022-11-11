import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Faixa (){
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
    return(
       
        <main className='home-faixaaa'>

            
<Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          
          autoPlay={true}
          arrows={false}
          containerClass="contêinerdecarrossel"
          itemClasse="carrossel-item"
          
        >
    
                 <div className='card-1'>
                <img src="/images/hl.jpg" alt="" />
                <div className='text'>
                    <h2>Hino dos mlk</h2>
                </div>
                </div>

                <div className='card-1'>
                <img src="/images/hl.jpg" alt="" />
                <div className='text'>
                    <h2>Hino dos mlk</h2>
                </div>
                </div>

                <div className='card-1'>
                <img src="/images/hl.jpg" alt="" />
                <div className='text'>
                    <h2>Hino dos mlk</h2>
                </div>
                </div>

                </Carousel>
        </main>
    )
}