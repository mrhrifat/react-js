import React, { Component } from "react";

class Increment extends Component {
    incrementTimer = props => {
        this.setState({ count: props.count + 1 })
    }
}
export default Increment