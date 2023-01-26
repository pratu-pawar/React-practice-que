import React, { useState } from "react";
import Myphoto from "../Assaate/img1.jpg";
import Mypic from "../Assaate/img2.webp";

const Quesix = () => {
  const [photoOne, setPhotoOne] = useState(false);

  return (
    <div>
      {photoOne ? (
        <img src={Myphoto} alt="#" style={{height:200, width:200}}></img>
      ) : (
        <img src={Mypic} alt="#" style={{height:200, width:200}}></img>
      )}
      <button onClick={() => setPhotoOne(!photoOne)}>Change photo</button>
    </div>
  );
};

export default Quesix;
