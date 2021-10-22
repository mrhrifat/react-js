import React, { Component } from "react";

class ControledForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }
    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.setState({ name: '', email: '', password: '' })
    }
    render() {
        const { name, email, password } = this.state

        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        className="form-control my-1"
                        value={name}
                        onChange={this.handleInput}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="form-control my-1"
                        value={email}
                        onChange={this.handleInput}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="form-control my-1"
                        value={password}
                        onChange={this.handleInput}
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
export default ControledForm