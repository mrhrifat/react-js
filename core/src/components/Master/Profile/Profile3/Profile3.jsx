import React from "react";


import Header from "./Header";
import Books from "./Books";
import Students from "./Students";

class Profile3 extends React.Component {
    render() {
        return (
            <div className="w-50 border m-auto my-3 p-2">
                <Header />
                <Books />
                <Students />
            </div>
        )
    }
}

export default Profile3