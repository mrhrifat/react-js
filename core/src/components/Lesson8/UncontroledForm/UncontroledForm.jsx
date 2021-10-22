import React, { Component } from "react";

class UncontroledForm extends Component {
    handleSubmit = event => {
        event.preventDefault()

        // console.log(event)
        // console.dir(event)
        // console.log(event.target)

        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value
        console.log(data)
        event.target.reset()
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        className="form-control my-1"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="form-control my-1"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="form-control my-1"
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary my-1"
                    />
                </form>
            </div>
        )
    }
}
export default UncontroledForm