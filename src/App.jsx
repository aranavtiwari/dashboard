import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Dash from "./Dash";
import Stock from './Stock';
import Nav from "./Nav";


const App = () => {
    return (
        <>
    
        <div className="main">
            <div>
                <Nav/>
            </div>
                <div className="content">
                <Routes>
                    <Route exact path='/dashboard/' element={<Dash/>} />
                    <Route exact path='/stock' element={<Stock/>} />
                </Routes>
                </div>
            
        </div>
        
        </>
    )
}


export default App;