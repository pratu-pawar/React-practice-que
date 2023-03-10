import React, { useState } from "react";


const Quethree = (props) =>{
    const [name, SetName] = useState("");
    const handleChange = (e) =>{ 
        SetName(e.target.value);
    };

    const handelSubmit =(e)=>{ 
        e.preventDefault();
        props.onSubmit(name)
    };

    return ( 
        <div> 
            <form onSubmit={handelSubmit}> 
                <input type="text" value={name} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Quethree;