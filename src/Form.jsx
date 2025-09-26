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
        
        if (name==""){
            alert("empty name")

        }
        else {
            alert("Form Submitted")

        }
    }

    return(
        <>

        <h1>Form</h1>
        <h1>{name}</h1>
        

        <form onSubmit={handlesubmit}>
            <p>{err}</p>
        enter name <input type="text"  value={name}onChange={(e)=>{setname(e.target.value)}} /><br /> <br />
        <h1>{email}</h1>
        enter email <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /><br /> <br />
        <h1>{number}</h1>
        enter number <input type="text" value={number} onChange={(e)=>{setnum(e.target.value)}} /><br /> <br />
        <h1>{pass}</h1>
        enter pass <input type="text" value={pass} onChange={(e)=>{setpass(e.target.value)}} /><br /> <br />

        <button type="submit"> Sign up</button>
        </form>

        </>
    )
}

export default Form 