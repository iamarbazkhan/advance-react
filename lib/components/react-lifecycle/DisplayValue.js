import React, { Component } from 'react'

export default class DisplayValue extends Component {
    componentWillUnmount(){
        alert("Component is going to unmount!!")
    }
  render() {
    return (
      <div>DisplayValue Div Showing</div>
    )
  }
}
