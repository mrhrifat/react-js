import React, { Component } from "react";
import PropTypes from 'prop-types'
import './styles/split5.style.css'
import Form from "./form/Form";


class SplitForm5 extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: '',
        skills: [],
        country: '',
        message: '',
        agree: false
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            name: '',
            email: '',
            phone: '',
            password: '',
            gender: '',
            skills: [],
            country: '',
            message: '',
            agree: false
        })
    }


    handleInputs = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAgree = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    handleSkills = event => {
        if (event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        } else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({ skills })
        }
    }


    render() {

        return (
            <div className="split-form w-75">
                <h4>Sign Up</h4>
                <Form
                    values={this.state}
                    handleAgree={this.handleAgree}
                    handleInputs={this.handleInputs}
                    handleSkills={this.handleSkills}
                    handleSubmit={this.handleSubmit}

                />
            </div>
        )
    }
}

export default SplitForm5