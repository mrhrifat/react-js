import React from "react";
import './profile2.style.css'

//Import Split Component
import Header from "./Header";
import Knowledge from "./Knowledge";
import Footer from './Footer';


class Profile2 extends React.Component {
    render() {
        return (
            <div className="main p-5 border w-50 m-auto">
                <Header />
                <Knowledge />
                <Footer />

                {/* 
                
                4.8 Split profile component
                    01) For don't rewrite code split component
                    02) For update data split component
                    03) For share code split component
                    04) Reusability
                    05) Where we don't need to work with data, we will create it's function components just for
                    representation


                */}
            </div>
        )
    }
}
export default Profile2