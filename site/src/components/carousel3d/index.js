import React from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";


export default function Carousell(){


    
       let cards = [
        {
          key: uuidv4(),
          content: <img src="/images/anitta..jpg" alt="1" />
        },
        {
          key: uuidv4(),
          content: <img src="https://picsum.photos/800/802/?random" alt="2" />
        },
        {
          key: uuidv4(),
          content: <img src="https://picsum.photos/600/803/?random" alt="3" />
        },
        {
          key: uuidv4(),
          content: <img src="https://picsum.photos/800/500/?random" alt="4" />
        },
        {
          key: uuidv4(),
          content: <img src="https://picsum.photos/800/804/?random" alt="5" />
        },
        {
          key: uuidv4(),
          content: <img src="https://picsum.photos/500/800/?random" alt="6" />
        },
        {
          key: uuidv4(),
          content: <img src="https://picsum.photos/800/600/?random" alt="7" />
        },
        {
          key: uuidv4(),
          content: <img src="https://picsum.photos/805/800/?random" alt="8" />
        }
        ]

    return(
        <main>
                <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>

            


        </main>
    )
}