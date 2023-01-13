import React from "react";
import DisplayValue from "./DisplayValue";
export default class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: 0,
      showComponent: true,
    };
    console.log("contructor call");
  }
  componentWillReceiveProps() {
    console.log("will receive props call!!");
  }
  componentWillMount() {
    console.log("will mount ");
  }
  shouldComponentUpdate() {
    console.log("should update calll!!");
    return true;
  }
  componentWillUpdate() {
    console.log("will update call");
  }
  componentDidMount() {
    console.log("did mount calll !!");
  }
  componentDidUpdate() {
    console.log("component did update call!!");
  }
  
  render() {
 
    console.log("render cal @@@@");
    return (
      <>

        <div>InnerComponent</div>
        
        {this.state.showComponent&&<DisplayValue />}

        <p>Value coming from props {this.props.value}</p>

        {/* This button is responsible for unmount the component  */}
        <button
          onClick={() => {
            this.setState({ showComponent: false });
          }}
        >
          Delete component
        </button>
      </>
    );
  }
}
