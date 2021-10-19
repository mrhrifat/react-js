import React from "react"

const Header = (props) => (
    <header className="header text-center">
        <h3>{props.name}</h3>
        <p>{props.designation}
            <span className="badge bg-success text-light align-top mx-1">
                {props.number}
            </span>
        </p>
    </header>
)
export default Header