import React from "react";

const HocComponent=(Component)=>{
    return class extends React.Component{
        render(){
            return(
                <div style={{display:"flex",flexDirection:"column"}}>
                <div>This is modified with hign order component !!</div>
                <Component hocValue={"High order component created 11 Jan 2023"}/>
                </div>
            )
        }
    }
}


export default HocComponent