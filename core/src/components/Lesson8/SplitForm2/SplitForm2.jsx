import React, { Component } from "react";
import PropTypes from 'prop-types'
import './styles/split2.style.css'


const TextInput = props => (
    <div className=" form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className="form-control"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>
)
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
TextInput.defaultProps = {
    type: 'text',
}

const RadioInput = props => (
    <div className="form-check">
        <label
            htmlFor={props.name}
            className="form-check-label"
        >
            <input
                className="form-check-input"
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            {props.value}
        </label>
    </div>
)

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

RadioInput.defaultProps = {
    type: 'radio',
    name: 'gender'
}

const AreaInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <textarea
            name={props.name}
            className="form-control"
            rows="5"
            value={props.value}
            onChange={props.onChange}
        >
        </textarea>
    </div>
)

AreaInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

const AgreeCheck = props => (
    <div className="form-check">
        <label htmlFor={props.name} className="form-check-label">
            <input
                type={props.type}
                className="form-check-input"
                name={props.name}
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.title}
        </label>
    </div>
)
AgreeCheck.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}
AgreeCheck.defaultProps = {
    type: 'checkbox',
    title: 'I agree with terms and conditions',
    name: 'agree'
}

// const SkillCheckBox = props => {
//     <div className="form-check">
//         <label
//             htmlFor={props.name}
//             className="form-check-label">
//             <input
//                 className="form-check-input"
//                 type={props.type}
//                 name={props.name}
//                 value={props.value}
//                 checked={props.checked.includes(value)}
//                 onChange={props.onChange}
//             />
//             {props.value}
//         </label>
//     </div>
// }
// SkillCheckBox.propTypes = {
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     checked: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }
// SkillCheckBox.defaultProps = {
//     type: 'checkbox'
// }



class SplitForm2 extends Component {

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
                    {/* <div className=" form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            className="form-control"
                            onChange={this.handleInputs}
                            value={name}
                        />
                    </div> */}
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

                                {/* <div className="form-check">
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
                                </div> */}

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
                    {/* <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            className="form-control"
                            rows="5"
                            value={message}
                            onChange={this.handleInputs}
                        >
                        </textarea>
                    </div> */}

                    <AreaInput
                        name='message'
                        label='Message'
                        value={message}
                        onChange={this.handleInputs}
                    />


                    {/* Agree */}
                    {/* <div className="form-check">
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
                    </div> */}

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

export default SplitForm2