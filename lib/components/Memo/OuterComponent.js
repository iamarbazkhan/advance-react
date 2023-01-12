import React, { useState } from "react";
import InnerComponent from "./InnerComponent";
export default function OuterComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  return <div>

    <p>Count Value is {count}</p>

    <InnerComponent data={data}/>
    <div>
        <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
        <button onClick={()=>{setData(data+1)}}>Increase Data</button>
    </div>
    
  </div>;
}
