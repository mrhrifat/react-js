import React, { Component } from "react";

class Lesson7 extends Component {

    handleClick = event => {
        console.log(event)
        console.log(event.target)
    }

    handleChange = event => {
        // console.log(event)
        // console.log(event.target)
        console.log(event.target.value)
    }


    state = {
        name: '',
        mail: ''
    }

    handleChange2 = event => {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        this.setState({ name: event.target.value })
        // console.log(event.target.value)
    }

    handleChange3 = event => {
        this.setState({ mail: event.target.value })
    }

    handleFocus = event => {
        console.log("Focused Activate")
    }

    handleBlur = event => {
        if (!this.state.mail) {
            alert("Enter mail!")
        }
        console.log("Blur Activate")
    }

    render() {
        return (
            <div>
                <h6>Lesson 7</h6>


                <button className="btn btn-success" onClick={this.handleClick}>Add</button>

                <input type="text" name="name" id="" className="form-control my-2" onChange={this.handleChange} />


                <div>

                    <input
                        type="text"
                        name="name" id=""
                        className="form-control my-2 w-50 d-inline-block"
                        value={this.state.name}
                        onChange={this.handleChange2}
                        placeholder="Enter text"
                    />

                    <p className='d-inline-block'>{this.state.name && <span>Welcome! {this.state.name}</span>}</p>
                </div>


                <div>

                    <input
                        type="email"
                        name="mail" id=""
                        className="form-control my-2 w-50 d-inline-block"
                        placeholder="Enter email"
                        value={this.state.mail}
                        onChange={this.handleChange3}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />

                    <p className='d-inline-block'>{<span> Mail ID : {this.state.mail}</span>}</p>
                </div>

            </div>
        )
    }
    /*

    Events

    01) Event is an object which only triggers when something special happens and returns an object to the listener, which contians information related to the event.

    02) Event (Button click, Input Element, Form Submission, Mouse Enter, Mouse Leave)

    03) Event is the only way to interact with users and get users feedback

    04) Every event has
        01) Name
        02) Listener Function

    05) In any event handling if the state value will be used than, onChange event must have to be there.

    06) Event handling function doesn't need to call on where it has been used.

    */
}
export default Lesson7