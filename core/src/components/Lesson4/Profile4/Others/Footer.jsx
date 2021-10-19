import React from "react"

const Footer = (props) => (
    <footer className="students">
        <h6>Students</h6>
        <ul className="list-unstyled">
            <li>
                <a href="#">{props.sOne}</a>
            </li>
            <li>
                <a href="#">{props.sTwo}</a>
            </li>
            <li>
                <a href="#">{props.sThree}</a>
            </li>
        </ul>
    </footer>
)
export default Footer