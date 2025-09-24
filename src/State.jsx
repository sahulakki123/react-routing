import React, { useState } from "react";


const App=()=>{
    
    // let sayhi=(myname)=>{
    //     alert('Hello world '+ myname)
        
    // }


    const [count, setcount]=useState(0)

    const [myname, setmyname]=useState("sachin sahu")

    let changename=()=>{
        setmyname("Lakki Sahu")
    }







    let inc=()=>{
        
        setcount(count+1)

    }
    let d=()=>{
            setcount(count-1)
        
        if (count<=0){
            return
        }
    }
    

    


    return(
        <>
        {/* <button onClick={sayhi}> Chilik me</button> */}
        {/* <button onClick={()=> alert("Hello world")}>Chilik me</button>
        <button onClick={()=> sayhi("Lakki sahu")}>Chilik me</button> */}
        <h1>{count}</h1>
        <button onClick={inc}> incriment</button>
        <button onClick={d}> d</button>



        <h1>{myname}</h1>
        <button onClick={changename}>change name</button>
        </>
    )
}

export default App 