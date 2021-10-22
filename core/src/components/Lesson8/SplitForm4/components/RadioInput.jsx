import React, { Component } from "react";
import PropTypes from 'prop-types'

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
    onChange: PropTypes.func.isRequired
}

RadioInput.defaultProps = {
    type: 'radio',
    name: 'gender'
}

export default RadioInput