import React from "react";

//Import 
import Header from '../Profile2/Header'
import Knowledge from '../Profile2/Knowledge'
import Footer from '../Profile2/Footer'

class Profile3 extends React.Component {
    render() {
        return (
            <div className="main p-5 border w-50 m-auto">
                {/*
                
                I will import all section from Profile2
                    01) Header
                    02) Knowledge
                    03) Footer
                
                */}

                <Header />
                <Knowledge />
                <Footer />
            </div>
        )
    }
}
export default Profile3