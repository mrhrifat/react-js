import React from "react";

import Profile from "./Profile/Profile";
import Profile2 from "./Profile/Profile2";
import Profile3 from "./Profile/Profile3/Profile3"
import Profile4 from "./Profile/Profile4/Profile4";
import Profile5 from "./Profile/Profile5/Profile5";
import Profile6 from "./Profile/Profile6";
import ParentProps from "./ParentProps";

import Count from "./State/Count";
import Count2 from "./State/Count2";
import Timer from "./State/Timer/Timer";

class Master extends React.Component {

    titleObject = {
        text: "Bismillah"
    }

    render() {
        return (
            <div>
                {/* <h5 title={this.titleObject.text}>Bismillahir Rahmanir Rahim</h5>
                <MyFunctionalComponent />
                <Profile />
                <Profile2 />
                <Profile3 />
                <Profile4 />
                <Profile5 />
                <Profile6 />
                <ParentProps />
                <Count />
                <Count2 />
                <Timer /> */}
            </div>
        )
    }
}

const MyFunctionalComponent = () => {
    return <h6>Functional Components</h6>
}

export default Master