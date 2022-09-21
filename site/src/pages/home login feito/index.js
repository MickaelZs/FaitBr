import './index.scss'
import {
  Link
} from "react-router-dom";
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
              
            </div>

            

            

            
              <li><a href="#sec1">Artistas mais escutados</a></li>
              <li><a href="#sec2">Gêneros</a></li>
              <li><a href="#sec3">Artistas populares</a></li>
              
              <img  className='icon-pesquisa' src='./images/icon-pesquisa.png'/>
              <img className='icon-livraria' src='./images/icon-library.png'/>
              
              <img  className='logo' src='./images/logooo.png' href='' width='100' />
            

              
              <div class="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label class="menu__btn" for="menu__toggle">
                <span></span>
              </label>

              <ul class="menu__box">
                <li><a class="menu__item" href="/LoginUsuario">Login</a></li>
                <li><a class="menu__item" href="/CadastroUsuario">Cadastro</a></li>
                <li><a class="menu__item" href="/LoginAdm">Area ADM</a></li>
                
              </ul>
  </div>
          </div>
        </header>
      </div>

      <div>
      <section id="sec2"><h1>Gêneros</h1></section>
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
        <CardGenero avatar="images/trap..png" nome="Trap"/>
        <CardGenero avatar="images/brega.png" nome="Brega Funk"/>
        <CardGenero avatar="images/funk.png" nome="Funk"/>
        <CardGenero avatar="images/sertanejo..png" nome="Sertanejo"/>
        <CardGenero avatar="images/rock.png" nome="Rock" />
        <CardGenero avatar="images/pagode.png" nome="Pagode"/>
        <CardGenero avatar="images/pop.png" nome="Pop" />
        <CardGenero avatar="images/forro.png" nome="Forró"/>

      </Carousel>

      <div>
      <section id="sec3"><h1>Artistas populares</h1></section>
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
        <CardArtistas avatar="images/teto.jpg" nome="teto" />
        <CardArtistas avatar="images/menos.jpg" nome="Menos e mais"/>
        <CardArtistas avatar="images/hariel.webp" nome="Mc hariel" />
        <CardArtistas avatar="images/gusttavolima.webp" nome="Gustavo lima"/>
        <CardArtistas avatar="images/"  nome="teto"/>
        <CardArtistas avatar="images/anderson.jpeg" nome="Anderson" />
        <CardArtistas avatar="images/anitta..jpg" nome="Anitta"/>
        <CardArtistas avatar="images/rai.webp" nome="Saia rodada"/>
        

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

      <a href='login usuario'></a>
      

    </div>
  );
}

