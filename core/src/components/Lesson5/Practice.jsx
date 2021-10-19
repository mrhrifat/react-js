import React from "react";

class Practice extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.count = 0
    // }

    // count = 0

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            values: 0
        }
    }

    render() {
        // console.log(this.count) //This will be in always initial value
        return (
            <div>
                <div className="row border">
                    <div className="col py-2 align-self-center">
                        <h6>Count : {this.count}</h6>
                    </div>
                    <div className="col py-2">
                        {/* {console.log(this.count)} */}
                        {/* <button className="btn btn-success" onClick={() => this.count++}>Add</button> */}
                        <button className="btn btn-success" onClick={() => {
                            this.count++
                            // console.log(this.count)
                        }}>Add</button>
                    </div>
                </div >

                <div className="py-2"></div>

                <div className="row border">
                    <div className="col py-2 align-self-center">
                        Count : {this.state.count}
                    </div>
                    <div className="col py-2" >
                        <button className="btn btn-primary" onClick={() => {
                            console.log(this.state.count)
                            // this.state.count++
                            this.setState({ count: this.state.count + 1 })
                        }}>Add</button>
                    </div>
                </div>

                <div className="py-2"></div>

                <div className="row border">
                    <div className="col py-2 align-self-center">
                        Count : {this.state.values}
                    </div>
                    <div className="col py-2" >
                        <button className="btn btn-warning" onClick={() => {
                            console.log(this.state.values)

                            //Mutable Way
                            // this.state.values = this.state.values + 1

                            //Immutable Way
                            this.setState({ values: this.state.values + 1 })
                        }}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Practice