import React from "react";
import Header from "./Profile5/Header";
import Books from "./Profile5/Books";
import Students from "./Profile5/Students";

class Profile6 extends React.Component {
    abuHanifa = {
        name: "Abu Hanifa (RA)",
        title: "Alem, Salfe Salehin, Imam",
        no: 6,
        bhead: "Books",
        b1: "Al-Fiqh al-Akbar",
        b2: "Al-Fiqh al-Absat",
        b3: "Kitaab ul - Aathaar",
        shead: "Students",
        s1: "Abu Nuāim Fadl Ibn Dukain",
        s2: "Malik bin Mighwal",
        s3: "Abdullah ibn Mubarak",
        s4: "Dawood Taa’ee"
    }
    render() {
        return (
            <div className="w-50 border m-auto my-3 p-2" >
                <Header name={this.abuHanifa.name} title={this.abuHanifa.title} no={this.abuHanifa.no} />
                <Books bhead={this.abuHanifa.bhead} b1={this.abuHanifa.b1} b2={this.abuHanifa.b2} b3={this.abuHanifa.b3} />
                <Students shead={this.abuHanifa.shead} s1={this.abuHanifa.s1} s2={this.abuHanifa.s2} s3={this.abuHanifa.s3} s4={this.abuHanifa.s4} />
            </div>
        )
    }
}
export default Profile6