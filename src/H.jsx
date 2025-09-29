import React, { useState } from "react";


const HideShow=()=>{

    
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Text
      </button>

      {show && (
        <p style={{ marginTop: "10px" }}>
          React class .
        </p>
      )}
    </div>
  );
}

export default HideShow