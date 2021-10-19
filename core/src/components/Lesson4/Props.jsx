import React from "react";


class Children extends React.Component {
    render() {
        this.props.myFunction(this)
        return <h5>Children Component</h5>

    }
}


class Props extends React.Component {
    /*

    01) In JavaScript function is are the first class component
    02) We can pass a function to another components with props
    03) We can provide (function,object,value) from parent to child but not child to parent

    */

    mention(f) {
        console.log(f)
    }
    render() {
        this.mention(this)
        return (
            <div>
                {/* {this.mention()} */}
                <h5>I am Props</h5>
                <Children myFunction={this.mention} />
            </div>
        )
    }
}
export default Props