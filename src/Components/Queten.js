
import React from "react ";


const Queten = ()=>{ 
    const [bg, Setbgcolor] =  React.useState(1);
    return ( 
    
        <div className="App"> 
        <div className="box" 
        onClick={()=> Setbgcolor(1)}> 
        styale={{backgroundColor: bg === 1 ? "black" : "red"}}

        </div>
        <div className="box" 
        onClick={() =>Setbgcolor(2)}>
        styale={{backgroundColor: bg ===2 ? "black" : "red"}}
        </div>
                 
        </div>
    ) 

}

export default Queten;