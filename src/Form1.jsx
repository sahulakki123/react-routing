import React, { useState } from "react";



const Form=()=>{

    const [formData, setformData]=useState({

        name:"",
        email:"",
        num:"",
        pass:""
    })

    let handlesubmit=(e)=>{
        e.preventDefault()
    }
    let changeinp=(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value

        }
    )
    }

    return(
            <>

            <h1>Form</h1>
        <h1>{formData.name}</h1>
        <form onSubmit={handlesubmit}>
        enter name <input type="text"  name='name' value={formData.name} onChange={changeinp} /><br /> <br />
        enter email <input type="text"  name='email'value={formData.email} onChange={changeinp} /><br /> <br />
        enter number <input type="text" name='num' value={formData.number} onChange={changeinp} /><br /> <br />
        enter pass <input type="text" name='pass' value={formData.pass} onChange={changeinp} /><br /> <br />

        <button type="submit"> Sign up</button>
        </form>
            
            </>
    )
}

export default Form