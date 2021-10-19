import React from "react";

//Import 
import './profile4.style.css'
import Header from './Others/Header'
import Knowledge from './Others/Knowledge'
import Footer from './Others/Footer'

import SpecialProfile from "./SpecialProfile/SpecialProfile";

import MyProps from "./MyProps";

class Profile4 extends React.Component {
    // Not Define (this)
    a = {
        name: 'Imam Ibn Taymiyyah (R)',
        designation: 'Imam, Salfe Salehin,Shaiykhul Islam',
        number: '6',
        one: 'Quran',
        two: 'Hadith',
        three: 'Fiqah',
        four: 'Sirah',
        five: 'Ulmul Hadith',
        // six: 'Sirah',
        sOne: 'Ibn Kasir (R)',
        sTwo: 'Ibnul Jawji (R)',
        sThree: 'Ibn Kayyim (R)',
        // sFour: 'Ibn Abdullah',
    };

    render() {
        // Define (headerObject)
        let ibnTaymiyyah = {
            name: 'Ibn Taymiyyah (R)',
            designation: 'Shaikhul Islam, Imam, Salfe Salehin',
            number: '4',
            one: 'Quran',
            two: 'Hadith',
            three: 'Fiqah',
            four: 'Tafsir',
            five: 'Sirah',
            sOne: 'Ibnul Jawji (R)',
            sTwo: 'Ibnul Kayyim (R)',
            sThree: 'Ibnul kasir (R)',
        }
        return (
            <div>
                <div className="main4 p-5 border w-50 m-auto">

                    {/*

                        Profile 4
                        01) This is a dynamic profile. 
                        02) I will pass data from here and it will chagne them.
                        03) We can send data in 2 ways
                            01) Single Attribute
                            02) Object Attribute
                                01) For attibute we don'e need to define it as varibale if we use this
                                02) For attibute we need to define is as variable if we don't use this
                        My Props
                        01) Here 4 and Four will send to MyProps and Show them


                    */}

                    <Header name={ibnTaymiyyah.name} designation={ibnTaymiyyah.designation} number={ibnTaymiyyah.number} />
                    <Knowledge one={ibnTaymiyyah.one} two={ibnTaymiyyah.two} three={ibnTaymiyyah.three} four={ibnTaymiyyah.four} five={ibnTaymiyyah.five} />
                    <Footer sOne={ibnTaymiyyah.sOne} sTwo={ibnTaymiyyah.sTwo} sThree={ibnTaymiyyah.sThree} />


                    {/* {console.log('Profile4 - ', this.props)}
                    <MyProps />
                    <MyProps number='4' />
                    <MyProps number='Four' />

                    <SpecialProfile /> */}

                </div>
                <br />
                <SpecialProfile />
                <br />

                <div className='main4 p-5 border w-50 m-auto'>
                    <Header name={this.a.name} designation={this.a.designation} number={this.a.number} />
                    <Knowledge one={this.a.one} two={this.a.two} three={this.a.three} four={this.a.four} five={this.a.five} />
                    <Footer sOne={this.a.sOne} sTwo={this.a.sTwo} sThree={this.a.sThree} />
                </div>
            </div>
        )
    }
}
export default Profile4