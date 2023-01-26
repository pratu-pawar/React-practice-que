import React from "react";

const Queten = () => {
  const [bg, Setbgcolor] = React.useState(1);
  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: "1px solid black",
            backgroundColor: bg == 1 ? "blue" : "red",
            color: "white",
          }}
        >
          This is box
        </div>
      </div>
      <button onClick={() => (bg == 1 ? Setbgcolor(2) : Setbgcolor(1))}>
        Change color
      </button>
    </>
  );
};

export default Queten;
