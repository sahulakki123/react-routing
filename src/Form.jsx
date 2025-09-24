import React from "react";



const Form=()=>{

    
    let change=(e)=>{
        // console.log(e);
        // console.log(e.target);
        console.log(e.target.value);



    }

    return(
        <>

        <h1>Form</h1>
        {/* <h1>{e}</h1> */}
        <input type="text" onChange={change} />
        </>
    )
}

export default Form