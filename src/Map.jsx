import React from "react";


const Map=()=>{

    // let Fruits=["Apple", "mango", "banana", "Grapes"]
    let Students=[
        {id:1,age:21,name:"LAkki"},
        {id:2,age:22,name:"syam"},
        {id:3,age:23,name:"ram"},
        {id:4,age:24,name:"mukesh"}
    ]

    return(
        <>
        <h1>Mapping items</h1>

            <ul>
                {/* {Fruits.map((e, index )=>(
                    <li key={index}>{e}</li>
                ))} */}

                
                {Students.map((e)=>(
                    <li key={e.id}>id {e.id} age {e.age} name {e.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Map