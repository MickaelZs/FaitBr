import { useState } from "react"

export default function Heart (){

    const [curtir,setCurtir]= useState(false)

    
    return(
        <div>
            <div onClick={() => setCurtir(!curtir)}>
                <img src="/images/heart.png" alt="" />
           

            {curtir &&

            
                <img src="/images/heart on.png" alt="" />}
 
            </div>
          
            
        </div>
    )
}