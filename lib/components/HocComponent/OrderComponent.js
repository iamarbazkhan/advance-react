import React from "react";
import HocComponent from "./HocComponent";

const OrderCompoent =(props)=>{
    return (
    <>
    <h1>This is order component !!!</h1>
    <h3>{props.hocValue}</h3>
    </>
    )
}


export default HocComponent(OrderCompoent);
