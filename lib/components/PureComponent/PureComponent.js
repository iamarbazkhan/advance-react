import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default class PureComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      data: 10,
    };
  }
//   navigate=useNavigate()
  render() {
    console.log(this.state.data)
    return (
      <>
        <div>Data value is {this.state.data}</div>

        <button onClick={()=>{this.setState({data:10})}}>Increase</button>
        <button >See Memo</button>
      </>
    );
  }
}
