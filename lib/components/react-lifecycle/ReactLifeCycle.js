import React, { Component } from "react";
import InnerComponent from "./InnerComponent";
export default class ReactLifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      dataValue: 0,
    };
  }
  render() {
    return (
      <>
        <div>Component LC</div>
        <InnerComponent value={this.state.dataValue} />

        <button
          onClick={() => {
            this.setState({
              dataValue: this.state.dataValue + 1,
            });
          }}
        >Increase value </button>
        <button
          onClick={() => {
            this.setState({
              dataValue: this.state.dataValue - 1,
            });
          }}
        >
          Decrease value
        </button>
      </>
    );
  }
}
