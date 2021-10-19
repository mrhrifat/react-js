import React from "react";

import Example from "./Example";
import Profile from "./Profile/Profile";
import Profile2 from "./Profile2/Profile2";
import Profile3 from './Profile3/Profile3'
import Profile4 from "./Profile4/Profile4";

import Props from "./Props";
import ChildrenProps from "./ChildrenProps"

class Lesson4 extends React.Component {
    render() {
        return (
            <div>
                <h6>Lesson 4</h6>
                <Example />
                <Profile />
                <div className="py-3"></div>
                <Profile2 />
                <div className="py-3"></div>
                <Profile3 />
                <div className="py-3"></div>
                <Profile4 />
                <div className="py-3"></div>
                <Props />
                <div className="py-3"></div>
                <ChildrenProps />

                {/* 
                
                4.1  Components & Props

                4.2 What is component
                    01) Component has 2 layer
                        01) Data or Logic Layer (Optional)
                            01) State (Own Data)
                            02) Variables & Properties
                            03) Function or Method (Any function into Class called Method)
                            04) Life Cycle Method (Hidden Class Constructor)

                        02) Representation Layer (Required)
                            05) JSX (HTML JavaScripts)
                    
                    02) In change of state the representation layer (render()) will be automatically change
                    03) JSX - HTML code in JavaScripts

                4.3 There are 2 different way to create react component
                    01) Class based component / State component / Smart component
                        01) Only class based component can work with state
                    02) Functional component / Stateless component / Unsmart component
                
                4.4 How to create functional components
                    01) Any function that returns JSX is a functional components
                    02) We will use functional components just for generate UI.
                    03) We dont't need to work with Logic & Data.
                    04) Functional components can create in 2 ways
                        01) General function
                        02) Arrow function
                
                4.5 What is JSX
                    01) Class based components & Functional components both return JSX
                    02) JSX - JavaScripts Extension
                    03) Although it;s look like HTML but it's not a JavaScripts Code
                    04) Components work as object
                        const element ={
                            type:'div',
                            props:{
                                className:'Test',
                                title:'Test Me'
                            },
                            children:['p','h2'] || null | 'Test'
                        }

                4.6 How to use JSX
                    01) Class based or Functional components can return only one root JSX
                    02) React.Fragment | <> </> use when we can't use div as root element
                    03) React.Fragment can't work with className
                    04) Custom component name must be on capital letters
                    05) {} use when can want to execute JS code
                    06) Mutliple attribute can set by create or make object
                    07) {} we can use only to execute any single statement not multiple
                    08) JSX can be stored in Variables

                
                
                */}
            </div>
        )
    }
}
export default Lesson4