
import './index.scss'
// import  "react-responsive-carousel/lib/styles/carousel.min.css" ; 
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
    
}
