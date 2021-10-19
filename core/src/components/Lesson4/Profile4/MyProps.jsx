import React from "react";

const MyProps = props => {
    console.log('MyProps - ', props)
    return (
        <div>
            <h6>I am My Props</h6>
            <h6>I am in Profile {props.number}</h6>
            <br />
        </div>
    )
}
export default MyProps