import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                {/*  Route for the Home page.  */}
                <Route path="*" element={<Error/>}/>
                {/* Default route for handling any unknown or undefined routes (404 Error). */}
            </Routes>
        </Router>
    );
}

export default App;
