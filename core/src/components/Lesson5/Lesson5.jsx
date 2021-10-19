import React from "react";


import State1 from "./State1";
import State2 from "./State2";
import State3 from "./State3";
import Counter from "./Counter/Counter";
import Practice from "./Practice";

import CounterApp from "./CounterApp/CounterApp";


class Lesson5 extends React.Component {


    render() {

        return (
            <div>

                {/* <CounterApp /> */}

                {/* <div className="py-3"></div>

                <Counter />

                <div className="py-3"></div>

                <Practice />

                <div className="py-2"></div>

                <State1 />

                <div className="py-2"></div>

                <State2 />

                <div className="py-2"></div>

                <State3 />

                <div className="py-2"></div> */}

            </div>
        )
    }

    /*

    01) Why Need State
        01) State is a own data of a component

        02) Property variable can be declared in 2 ways
            01) Constructor (16 Earlier Version)
            02) Withour Constructor (16+ Version)

        03) An event can be create anywhere in Component
            01) On tag
            02) Out of Render

    02) Introducing State
        01) In the change of state data, the representation data or layer will ne automatically changed
        
        02) State is a JavaScript Object

        03) We can set anything into state (Array, Object)

        04) Any data we think that will change near future, then we have to keep it in state

        05) State section must have to kept clean, cause of handling 

    03) How State Works
        01) State work in a component like a store
        
        02) Store work like with 2 main functionality
            01) Subscriber (Where data can be subscribed)
            02) Notifier/Data Changer/ Reducer 
                01) When any state will be change than
                02) This will notify 1st subsciber
                03) Subscriber will check where are they, who are used that change state object 
                04) It will chage them with new object
                05) And the representation layer will be changed also
        
            03) Subscriber is view/representation layer
        
        03) Notifer can be kept anywhere in class. Inside or Outside JSX

        04) State can have a lot of properties
            01) Array
            02) Object
            03) Single
            04) Array in Array

        05) For change state we need some function or event listener
        
        06) setState() is the sysytem/method to change state


    04) Update State
        01) Although state is like a general object like JavaScript object, but the properties of state can't be change or update as JavaScript object

        02) State object properties have to be change in Immutable way no Mutatable

        03) In class based component setState() have to call as this.setState()

        04) setState() will provide only that's state object change which object we will pass into setState(parameter) Parameter

        05) If we have 4 properties in state and we change 2 properties state. Than although we change the state of that 2 properties thousand of time. They will change but the other rest 2 properties will stay as same as earlier.

        06) We can pass a fucntion in setState() method

        07) setState() is a asynchrounous function

        08) We will take previous state object as argument in function, and it will return a new update state

        09) As setState() is asynchronous function, so that if we have any work/process that we have to change immedietly after state change, that work/process we can pass into second parameter as callback function




    */
}
export default Lesson5