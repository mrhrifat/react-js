import React, { Component } from "react";
import "./lesson6.style.css"
import classes from "./Module/lesson6.module.css"

class Lesson6 extends Component {
    inlinePara = {
        color: "#2c3e50",
        fontSize: "20px"
    }
    inlineSpan = {
        color: "#e74c3c",
        textTransform: "uppercase"
    }
    render() {
        return (
            <div>
                <h6>Lesson 6</h6>

                <p style={{ color: "#16a085" }}>This is
                    <span style={{ textTransform: "uppercase" }}> inline css </span>
                    in attribute
                </p>

                <p style={this.inlinePara}>This is
                    <span style={this.inlineSpan}> inline css </span>
                    in attribute with obj
                </p>

                <p className="csspara">This is
                    <span className="cssspan"> css class </span>
                </p>

                <p className={classes.modulepara}>This is
                    <span className={classes.modulespan}> css module </span>
                </p>
                <p>This is
                    <span> jss </span>
                </p>
            </div>
        )
    }
    /* 

    Lesson 6

    01) There are 4 main method to style react app
        01) Inline CSS
        02) CSS Class
        03) CSS Module
        04) JSS (Styled Component)

    02) CSS Class is a good solution for do style.

    03) The best solution to do style in react app is CSS Module


    */
}
export default Lesson6