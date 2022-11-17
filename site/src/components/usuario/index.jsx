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
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
    return(
    <div className='mae'>
       
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

                <div className='card-2'>
                <img src="/images/meca.png" alt="" /> 
                <div className='text'>
                    <h2>Meca cereja</h2>
                </div>
                </div>

                <div className='card-3'>
                <img src="/images/novinha.png" alt="" />
                <div className='text'>
                    <h2>Novinha do onlyfan</h2>
                </div>
                </div>

                <div className='card-4'>
                <img src="/images/durou.png" alt="" />
                <div className='text'>
                    <h2>Ate que durou</h2>
                </div>
                </div>

                <div className='card-5'>
                <img src="/images/felina.jpg" alt="" />
                <div className='text'>
                    <h2>Felina</h2>
                </div>
                </div>

                </Carousel>
        </main>
        </div>
    )
}