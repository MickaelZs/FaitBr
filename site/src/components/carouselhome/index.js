import "./index.scss";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

<<<<<<< HEAD
import './index.scss'

// import  "react-responsive-carousel/lib/styles/carousel.min.css" ; 

//import  "react-responsive-carousel/lib/styles/carousel.min.css" ; 

//import  {  Carousel  }  from  'react-responsive-carousel' ;


export default function Carouselhome(props){

    return(
            
        <main className='contai'>
            
          
      
        <div className='bordershadow'>
            <div className="padding">
            <img src={props.imagem} className="imagem"></img>
            </div>
            <div className="bordershadow2">

            </div>
        </div>
        <div className='bordershadow'>
            <div className="padding">
            <img src={props.imagem} className="imagem"></img>
            </div>
            <div className="bordershadow2">

            </div>
        </div>
        <div className='bordershadow'>
            <div className="padding">
            <img src={props.imagem} className="imagem"></img>
            </div>
            <div className="bordershadow2">

            </div>
        </div>
        
        
       
        </main>
       
    )
    
=======
function CardCarrouselHome() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="./images/testimagem.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="./images/testimagem.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="./images/testimagem.png" />
      )
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={true}
      />
    </div>
  );
>>>>>>> 40d6156a216b370304963210d5169e1458c77883
}

export default CardCarrouselHome;
