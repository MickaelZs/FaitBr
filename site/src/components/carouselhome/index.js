import './index.scss'

export default function Carouselhome(props){
    var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.scss({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
    return(
        <main className='contai'>
            <div className="carousel">
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
        </div>
        <div class="next">Next</div>
<div class="prev">Prev</div>
        </main>
    )
}