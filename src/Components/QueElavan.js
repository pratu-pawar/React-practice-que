import React, { useRef } from "react"

const QueElavan = () =>{ 
    
    let BgcolourRef = useRef("black")

   function ChangebgColor(){ 
    BgcolourRef.current.bgcolor="red"
   }
    return ( 
        <div> 
            <div ref={BgcolourRef} ></div>
            <button onClick={ChangebgColor}>Click Me</button>
        </div>
    )
}

export default QueElavan;