import React from "react";

const Books = props => {
    return (
        <div className="books">
            <h6>{props.bhead}</h6>
            <ul className="list-unstyled">
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.b1}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.b2}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.b3}</li>
            </ul>
        </div>
    )
}

export default Books