import React,{useEffect, useState} from "react";

const Quefirst = ()=>{
    const [seconds, setSeconds] = useState(10);
    

    useEffect(()=>{ 
         setInterval(() =>{ 
            if(seconds > 0){ 
                setSeconds(seconds-1)
            }
        
    },1000)

    },[seconds]);


    const restart=()=>{ 
        setSeconds(10);
    
    }
    
    return( 
        
            <div> 
                <div> 
                    <h1>Timer:{seconds}</h1>
                    <button onclick={restart}>Restart</button>
                    
                </div>
            </div>
    
    )

};

export default Quefirst;