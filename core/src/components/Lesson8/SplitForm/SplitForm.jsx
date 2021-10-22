import React, { Component } from "react";
// import classes from './styles/split.module.css'
import './styles/split.style.css'

class SplitForm extends Component {

    state = {
        firstname: '',
        lastname: '',
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
            firstname: '',
            lastname: '',
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
        const { firstname, lastname, email, phone, password, skills, country, message, agree } = this.state

        return (
            <div className="split-form w-75">
                <h4>Sign Up</h4>
                <form className="form border p-3">

                    {/* Name */}
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className=" form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="Enter firstname"
                                    className="form-control"
                                    onChange={this.handleInputs}
                                    value={firstname}

                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className=" form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter lastname"
                                    className="form-control"
                                    onChange={this.handleInputs}
                                    value={lastname}

                                />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            className="form-control"
                            onChange={this.handleInputs}
                            value={email}
                        />
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter phone"
                            className="form-control"
                            onChange={this.handleInputs}
                            value={phone}
                        />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="form-control"
                            onChange={this.handleInputs}
                            value={password}
                        />
                    </div>

                    {/* Gender & Skills */}
                    <div className="row">

                        {/* Gender */}
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="form-check-label" htmlFor="gender">Gender</label>


                                <div className="form-check">
                                    <label
                                        htmlFor="gender"
                                        className="form-check-label"
                                    >
                                        <input
                                            type="radio"
                                            name="gender"
                                            className="form-check-input"
                                            onChange={this.handleInputs}
                                            value="Male"
                                        />
                                        Male
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label
                                        htmlFor="gender"
                                        className="form-check-label"
                                    >
                                        <input
                                            type="radio"
                                            name="gender"
                                            className="form-check-input"
                                            onChange={this.handleInputs}
                                            value="Female"
                                        />
                                        Female
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label
                                        htmlFor="gender"
                                        className="form-check-label"
                                    >
                                        <input
                                            type="radio"
                                            name="gender"
                                            className="form-check-input"
                                            onChange={this.handleInputs}
                                            value="Others"
                                        />
                                        Others
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="col-12 col-sm-6">
                            <div className=" form-group">
                                <label htmlFor="skills" className="form-check-label">Skills</label>

                                <div className="form-check">
                                    <label
                                        htmlFor="skills"
                                        className="form-check-label">
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="JavaScript"
                                            className="form-check-input"
                                            checked={skills.includes("JavaScript")}
                                            onChange={this.handleSkills}
                                        />
                                        JavaScript
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label
                                        htmlFor="skills"
                                        className="form-check-label">
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="PHP"
                                            className="form-check-input"
                                            checked={skills.includes("PHP")}
                                            onChange={this.handleSkills}
                                        />
                                        PHP
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label
                                        htmlFor="skills"
                                        className="form-check-label">
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="Python"
                                            className="form-check-input"
                                            checked={skills.includes("Python")}
                                            onChange={this.handleSkills}
                                        />
                                        Python
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Country */}
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            name="country"
                            className="form-control"
                            value={country}
                            onChange={this.handleInputs}
                        >
                            <option>Select One</option>
                            <option value="Afganistan">Afganistan</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Saudi Arab">Saudi Arab</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            className="form-control"
                            rows="5"
                            value={message}
                            onChange={this.handleInputs}
                        >
                        </textarea>
                    </div>


                    {/* Agree */}
                    <div className="form-check">
                        <label htmlFor="agree" className="form-check-label">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="agree"
                                checked={agree}
                                onChange={this.handleAgree}
                            />
                            I agree with terms and conditions
                        </label>
                    </div>


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

export default SplitForm