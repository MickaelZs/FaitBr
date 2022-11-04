import {Carousel} from '3d-react-carousal';

export default function Index (){

  let slides = [
    <img  src="/images/casinha.svg" alt="1" />,
    <img  src="/images/casinha.svg" alt="2" />  ,
    <img  src="/images/casinha.svg" alt="3" />  ,
    <img  src="/images/casinha.svg" alt="4" />  ,
    <img src="/images/casinha.svg" alt="5" />   ];
  return(
    <div>
      <Carousel slides={slides} />

    </div>
  )
}