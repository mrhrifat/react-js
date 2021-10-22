import React, { Component } from "react";
import PropTypes from 'prop-types'

const SkillCheckBox = props => (
    <div className="form-check">
        <label
            htmlFor={props.name}
            className="form-check-label">
            <input
                className="form-check-input"
                type={props.type}
                name={props.name}
                value={props.value}
                checked={props.checked.includes(props.value)}
                onChange={props.onChange}
            />
            {props.value}
        </label>
    </div>
)
SkillCheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}
SkillCheckBox.defaultProps = {
    type: 'checkbox'
}

export default SkillCheckBox