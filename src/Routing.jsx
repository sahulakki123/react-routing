import React from "react";

import { Routes, Route, Link,  } from "react-router-dom";
import pic from "./assets/react.svg"
import Rhome from "./Rhome"
import Rabout from "./Rabout"
import Rserves from "./Rserves"


const App=()=>{

    return(
        <>
        <h1>Routing</h1>
        <header>
            <img src={pic} alt="" />
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">about</Link></li>
                                <li><Link to="/serves">serves</Link></li>
                                <li><Link to="/dksnj">dksnj</Link></li>
                            </ul>
        </header>
            <Routes>
                <Route path="/" element={<Rhome/>}/>
                <Route path="/about" element={<Rabout/>}/>
                <Route path="/serves" element={<Rserves/>}/>
            </Routes>

        </>
    )
}

export default App