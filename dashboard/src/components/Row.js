import React from "react";
import Products from "./Products";
import Price from "./Price";
import Users from "./Users";
function Row() {
    return (
        <div className="row">
            <Products/>
            <Price/>
            <Users/>
        </div>
    )
}


export default Row;