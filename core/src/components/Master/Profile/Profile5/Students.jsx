import React from "react";

const Students = props => {
    return (
        <div className="students">
            <h6>{props.shead}</h6>
            <ul className="list-unstyled">
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.s1}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.s2}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.s3}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.s4}</li>
            </ul>
        </div>
    )
}

export default Students