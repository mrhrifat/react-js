import React from "react";

class State3 extends React.Component {
    state = {
        km: 0,
        ml: 0
    }
    render() {
        return (
            <div className="row border">
                <div className="col py-2 align-self-center">
                    <div className="row">
                        <div className="col">
                            <h6>State 3 </h6>
                            <h6>Km : {this.state.km}</h6>
                        </div>
                        <div className="col">

                            <h6>Ml : {this.state.ml}</h6>
                        </div>
                    </div>
                </div>
                <div className="col py-2">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-success" onClick={() => {
                                this.setState(prevKM => {
                                    return {
                                        km: prevKM.km + 1
                                    }
                                }, () => {
                                    console.log(this.state.km)
                                })
                            }}>Add KM</button>
                        </div>

                        <div className="col">
                            <button className="btn btn-success" onClick={() => {
                                this.setState(prevML => {
                                    return {
                                        ml: prevML.ml + 1
                                    }
                                }, () => {
                                    console.log(this.state.ml)
                                })
                            }}>Add ML</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default State3