import React from "react";


const Map=()=>{

    //Aray itame
    // let Fruits=["Apple", "mango", "banana", "Grapes"]

    // Aray object
    
    let Students=[
        {id:1,age:21,name:"Lakki"},
        {id:2,age:22,name:"Syam"},
        {id:3,age:23,name:"Ram"},
        {id:4,age:24,name:"Mukesh"}
    ]

    return(
        <>
        <h1>Mapping items</h1>

            <ul>
                {/* {Fruits.map((e, index )=>(
                    <li key={index}> {e} </li>
                ))} */}

                
                {Students.map((e)=>(
                    <li key={e.id}> {e.id} Name {e.name} is {e.age} year old</li>
                ))}
            </ul>
        </>
    )
}


export default Map
