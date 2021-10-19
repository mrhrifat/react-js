import React from "react";

class State1 extends React.Component {
    count = 0
    render() {
        return (
            <div className="row border">
                <div className="col py-2 align-self-center">
                    <h6>State 1 Count : {this.count}</h6>
                </div>
                <div className="col py-2">
                    <button className="btn btn-success" onClick={() => {
                        this.count++
                        console.log(this.count)
                    }}>Add</button>
                </div>
            </div>
        )
    }
}
export default State1