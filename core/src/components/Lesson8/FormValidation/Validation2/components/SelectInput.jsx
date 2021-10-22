import React, { Component } from "react"
import PropTypes from 'prop-types'

const SelectInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <select
            className="form-control"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        >
            <option>Select One</option>
            <option value="Afganistan">Afganistan</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Saudi Arab">Saudi Arab</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
        </select>
    </div>
)
SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SelectInput