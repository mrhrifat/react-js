import React from "react";

const Header = (props) => {
    return (
        <div className="header text-center">
            <h6>{props.name}</h6>
            <p>
                {props.title}
                <span className="badge align-top bg-danger mx-1">{props.no}</span>
            </p>
        </div>
    )
}

export default Header