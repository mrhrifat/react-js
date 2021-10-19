import React from "react"

const Knowledge = (props) => (
    <div className="knowledge">
        <h6>Knowledge</h6>
        <ul className="list-unstyled">
            <li>
                <a href="#">{props.one}</a>
            </li>
            <li>
                <a href="#">{props.two}</a>
            </li>
            <li>
                <a href="#">{props.three}</a>
            </li>
            <li>
                <a href="#">{props.four}</a>
            </li>
            <li>
                <a href="#">{props.five}</a>
            </li>
        </ul>
    </div>
)
export default Knowledge