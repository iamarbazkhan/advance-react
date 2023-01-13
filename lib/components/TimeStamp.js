import React from "react";

export default class TimeStamp extends React.PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    const currentTime = this.props.timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const nextTime = nextProps.timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentTime !== nextTime;
  }
  componentWillUpdate() {
    console.log("TimeStamp component updated!!");
  }
  render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    );
  }
}
