import React from "react";

class Count extends React.Component {
    state = {
        count: 0
    }
    handleClick = event => {
        this.setState({
            count: this.state.count + 1

        })
        console.log(this.state.count)

        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.values)
    }
    render() {
        return (
            <div className="row border my-1">
                <div className="col py-2 align-self-center">
                    <p>Count {this.state.count}</p>
                </div>
                <div className="col py-2">
                    <button className="btn btn-success" onClick={this.handleClick}>Add</button>
                </div>
            </div>
        )
    }
}
export default Count