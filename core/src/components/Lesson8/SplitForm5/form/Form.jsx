import React, { Component } from "react";
import PropTypes from 'prop-types'

import AgreeCheck from "../components/AgreeCheck";
import RadioInput from "../components/RadioInput";
import TextInput from "../components/TextInput";
import AreaInput from "../components/AreaInput";
import SelectInput from "../components/SelectInput";
import SkillCheckBox from "../components/SkillCheckBox";

const Form = props => (
    <form className="form border p-3">

        {/* Name */}
        <TextInput
            name='name'
            label='Name'
            placeholder='Enter name'
            value={props.values.name}
            onChange={props.handleInputs}
        />


        {/* Email */}
        <TextInput
            name='email'
            label='Email'
            type='email'
            placeholder='Enter email'
            value={props.values.email}
            onChange={props.handleInputs}
        />


        {/* Phone */}
        <TextInput
            name='phone'
            label='Phone'
            type='tel'
            placeholder='Enter phone'
            value={props.values.phone}
            onChange={props.handleInputs}
        />


        {/* Password */}
        <TextInput
            name='password'
            label="Password"
            type='password'
            placeholder="Enter password"
            value={props.values.password}
            onChange={props.handleInputs}
        />


        {/* Gender & Skills */}
        <div className="row">

            {/* Gender */}
            <div className="col-12 col-sm-6">
                <div className="form-group">
                    <label className="form-check-label" htmlFor="gender">Gender</label>

                    <RadioInput
                        value='Male'
                        onChange={props.handleInputs}
                    />

                    <RadioInput
                        value='Female'
                        onChange={props.handleInputs}
                    />

                    <RadioInput
                        value='Others'
                        onChange={props.handleInputs}
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
                        checked={props.values.skills}
                        onChange={props.handleSkills}
                    />
                    <SkillCheckBox
                        name='skills'
                        value='Python'
                        checked={props.values.skills}
                        onChange={props.handleSkills}
                    />
                    <SkillCheckBox
                        name='skills'
                        value='Scala'
                        checked={props.values.skills}
                        onChange={props.handleSkills}
                    />
                </div>
            </div>
        </div>


        {/* Country */}
        <SelectInput
            name='country'
            label='Country'
            value={props.values.country}
            onChange={props.handleInputs}
        />


        {/* Message */}
        <AreaInput
            name='message'
            label='Message'
            value={props.values.message}
            onChange={props.handleInputs}
        />


        {/* Agree */}
        <AgreeCheck
            checked={props.values.agree}
            onChange={props.handleAgree}
        />


        {/* Submit */}
        <input
            type="submit"
            value="Submit"
            className="btn btn-success w-100"
            onClick={props.handleSubmit}
        />

    </form>
)

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleAgree: PropTypes.func.isRequired,
    handleInputs: PropTypes.func.isRequired,
    handleSkills: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form