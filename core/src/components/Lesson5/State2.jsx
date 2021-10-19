import React from "react";

class State2 extends React.Component {

    state = {
        count: 0
    }

    render() {
        return (
            <div className="row border">
                <div className="col py-2 align-self-center">
                    <h6>State 2 Count : {this.state.count}</h6>
                </div>
                <div className="col py-2">
                    <button className="btn btn-danger" onClick={() => {
                        console.log(this.state.count)
                        this.setState({ count: this.state.count + 1 })
                    }}>Add</button>
                </div>
            </div>
        )
    }
}
export default State2