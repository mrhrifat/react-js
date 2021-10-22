import React, { Component } from "react"
import PropTypes from 'prop-types'

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
export default AreaInput