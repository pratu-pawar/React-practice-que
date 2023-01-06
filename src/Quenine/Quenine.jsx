import React, { useState } from "react";
import '../App.css'

const Quenine = () =>{ 

    const [inputarr, Setinputarr] = useState([])

    const [inputdata, Setinputdata] = useState( { 
        name:"",
        rollno:""
    });

    function changehandel(e){ 
      Setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
     
    let {name, rollno} = inputdata
     function changeinputarr(){ 
        Setinputarr([...inputarr,{name, rollno}])
        
        console.log(inputdata, "input data what we Enter");
        Setinputdata({name:"", rollno:""})
     }

     function changeinputarr2(){ 
        console.log( "Object store in array", inputarr);

     }


    return( 
        <div className="pratu"> 
        <input 
        type="text"
        autoComplete="off" 
        name="name"  
        value={inputdata.name} 
        onChange={changehandel}
        placeholder="Enter Name"> 
        </input><br></br>

        <input 
         type="text" 
         autoComplete="off"
         name="rollno" 
         value={inputdata.rollno}
         onChange={changehandel}
         placeholder="Roll No"> 
        </input><br></br>

        <button onClick={changeinputarr}>Add it</button><br></br>
        <button onClck={changeinputarr2}>chake array in console</button><br></br>

        <table border={1} width='30%' cellPadding={10}> 
        <tbody>
            <tr> 
                <th>Name</th>
                <th>Roll No</th>
            </tr>
            { 
             inputarr.map( 
                (info,ind)=>{ 
                    return(
                        <tr key={ind}> 
                            <td>{info.name}</td>
                            <td>{info.rollno}</td>
                        </tr>
                    )
                }  
             )
            }
            </tbody>
        </table>

        
        </div>
    )
};

export default Quenine;