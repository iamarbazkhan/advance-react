import React, { Component } from 'react'

export default class TimeStamp extends Component {
  render() {
    return (
        <div>
            {this.props.timestamp.toString()}
        </div>
    )
  }
}
