import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import './button.css'

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
     <main className='contai'>


            <div className='bordershadow'>
                <div className="padding">
                <img src={imagen} className="imagem"></img>
                </div>
                <div className="bordershadow2">

                </div>
            </div>




            </main>
      <div className="btnn">
      <button className="btn">Next</button>
      <button className="btn">Code</button>
      </div>
    </animated.div>
  );
}

export default Card;