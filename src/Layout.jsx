import React from "react";
import { Link, Outlet } from "react-router-dom";
import pic from "./assets/react.svg"


const App=()=>{
return(

        <>
        <header>
            <img src={pic} alt="" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/serves">serves</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>

            </nav>
        </header>
        <Outlet/>

        <h1>
            Footer
        </h1>

        </>

    )
}

export default App