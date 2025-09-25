import React, { useState } from "react";



const Form=()=>{


    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [number,setnum]=useState("")
    const [pass,setpass]=useState("")
    
    // let change=(e)=>{
    //     // console.log(e);
    //     // console.log(e.target);
    //     setmyname(e.target.value);
    // }*

    let handlesubmit=(e)=>{
        e.preventDefault() // to prevent form reloading

        
        alert("Form Submitted")
    }

    return(
        <>

        <h1>Form</h1>
        <h1>{name}</h1>
        

        <form onSubmit={handlesubmit}>
        enter name <input type="text"  value={name}onChange={(e)=>{setname(e.target.value)}} /><br /> <br />
        enter email <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /><br /> <br />
        enter number <input type="text" value={number} onChange={(e)=>{setnum(e.target.value)}} /><br /> <br />
        enter pass <input type="text" value={pass} onChange={(e)=>{setpass(e.target.value)}} /><br /> <br />

        <button type="submit"> Sign up</button>
        </form>

        </>
    )
}

export default Form 