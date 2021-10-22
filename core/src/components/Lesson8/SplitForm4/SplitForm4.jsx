import React, { Component } from "react";
import PropTypes from 'prop-types'
import './styles/split4.style.css'

import AgreeCheck from "./components/AgreeCheck";
import RadioInput from "./components/RadioInput";
import TextInput from "./components/TextInput";
import AreaInput from "./components/AreaInput";
import SelectInput from "./components/SelectInput";
import SkillCheckBox from "./components/SkillCheckBox";


class SplitForm4 extends Component {

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
        const { name, email, phone, password, skills, country, message, agree } = this.state

        return (
            <div className="split-form w-75">
                <h4>Sign Up</h4>
                <form className="form border p-3">

                    {/* Name */}
                    <TextInput
                        name='name'
                        label='Name'
                        placeholder='Enter name'
                        value={name}
                        onChange={this.handleInputs}
                    />


                    {/* Email */}
                    <TextInput
                        name='email'
                        label='Email'
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={this.handleInputs}
                    />


                    {/* Phone */}
                    <TextInput
                        name='phone'
                        label='Phone'
                        type='tel'
                        placeholder='Enter phone'
                        value={phone}
                        onChange={this.handleInputs}
                    />


                    {/* Password */}
                    <TextInput
                        name='password'
                        label="Password"
                        type='password'
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handleInputs}
                    />


                    {/* Gender & Skills */}
                    <div className="row">

                        {/* Gender */}
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="form-check-label" htmlFor="gender">Gender</label>

                                <RadioInput
                                    value='Male'
                                    onChange={this.handleInputs}
                                />

                                <RadioInput
                                    value='Female'
                                    onChange={this.handleInputs}
                                />

                                <RadioInput
                                    value='Others'
                                    onChange={this.handleInputs}
                                />
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="col-12 col-sm-6">
                            <div className=" form-group">
                                <label htmlFor="skills" className="form-check-label">Skills</label>

                                <SkillCheckBox
                                    name='skills'
                                    value='JavaScript'
                                    checked={skills}
                                    onChange={this.handleSkills}
                                />
                                <SkillCheckBox
                                    name='skills'
                                    value='Python'
                                    checked={skills}
                                    onChange={this.handleSkills}
                                />
                                <SkillCheckBox
                                    name='skills'
                                    value='Scala'
                                    checked={skills}
                                    onChange={this.handleSkills}
                                />
                            </div>
                        </div>
                    </div>


                    {/* Country */}
                    <SelectInput
                        name='country'
                        label='Country'
                        value={country}
                        onChange={this.handleInputs}
                    />


                    {/* Message */}
                    <AreaInput
                        name='message'
                        label='Message'
                        value={message}
                        onChange={this.handleInputs}
                    />


                    {/* Agree */}
                    <AgreeCheck
                        checked={agree}
                        onChange={this.handleAgree}
                    />


                    {/* Submit */}
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-success w-100"
                        onClick={this.handleSubmit}
                    />

                </form>
            </div>
        )
    }
}

export default SplitForm4