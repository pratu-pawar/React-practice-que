import React from "react";

const Quetwo =() =>{ 
    const [counter, SetCounter] = React.useState(0);

    return ( 
        <div> 
            <h2>Counter : {counter} </h2>
            <button onClick={() => SetCounter(counter +1)}>Increment</button>
            < button onClick={() => SetCounter(counter -1)}>Decrement</button>
        </div>
    )
};

export default Quetwo;