import React from "react";
import Main from "./Main";
import Footer from "./Footer";

function Wrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <Main/>
            <Footer/>
        </div>
    )
}


export default Wrapper;