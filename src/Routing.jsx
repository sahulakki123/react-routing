import React from "react";
import { Routes, Route, Link,  } from "react-router-dom";
import Rhome from "./Rhome"
import Rabout from "./Rabout"
import Rserves from "./Rserves"
import RContact from "./RContact"
import Layout from "./Layout"


const App=()=>{

    return(
        <>
        <h1>Routing</h1>
            <Routes>
                
                <Route path="/" element={<Layout/>}>
                <Route index element={<Rhome/>}/>
                <Route path="/" element={<Rhome/>}/>
                <Route path="/about" element={<Rabout/>}/>
                <Route path="/serves" element={<Rserves/>}/>
                <Route path="/contact" element={<RContact/>}/>
                <Route path="*" element={<h1>Error</h1>}/>
            </Route>
            </Routes>

        </>
    )
}

export default App