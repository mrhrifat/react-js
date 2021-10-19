import React from "react";

class MyClassChild extends React.Component {
    render() {
        return this.props.children
    }
}

const MyFunctionalChild = props => (
    <div>
        <h5>I am in My Functional Child</h5>
        {props.children}
    </div>
)

class ChildrenProps extends React.Component {
    render() {
        return (
            <div>
                <h5>I am Children Props</h5>
                <MyClassChild>
                    <p>Bismillahir Rahmanir Rahim.. I am Child of My Child Component</p>
                </MyClassChild>
                <MyFunctionalChild>
                    <p>I am Child of My Functional Child</p>
                </MyFunctionalChild>
            </div>
        )
    }
}
export default ChildrenProps