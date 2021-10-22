import React, { Component } from "react"
import PropTypes from 'prop-types'

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

export default AgreeCheck