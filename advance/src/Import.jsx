import React, { Component } from "react";
import Axios from "./Axios/Axios";
import FragComp from "./Fragment/FragComp";
import LifeCycle from "./LifeCycle/LifeCycle";
import Index from "./RegPureComp/Index";
import Smart from "./SmartComponent/Smart";

class Import extends Component {
    render() {
        return (
            <div className='container'>
                {/* <h3 className='text-center'>Advance ReactJS</h3> */}

                {/*
                <Smart /> 
                <Index /> 
                <FragComp /> 
                
            */}
                <LifeCycle />



            </div>
        )
    }
}
export default Import