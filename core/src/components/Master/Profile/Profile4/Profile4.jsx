import React from "react";

const Header = (props) => {
    return (
        <div className="header text-center">
            <h6>{props.name}</h6>
            <p>
                {props.title}
                <span className="badge align-top bg-danger mx-1">{props.no}</span>
            </p>
        </div>
    )
}

const Books = props => {
    return (
        <div className="books">
            <h6>{props.bhead}</h6>
            <ul className="list-unstyled">
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.b1}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.b2}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.b3}</li>
            </ul>
        </div>
    )
}

const Students = props => {
    return (
        <div className="students">
            <h6>{props.shead}</h6>
            <ul className="list-unstyled">
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.s1}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.s2}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.s3}</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">{props.s4}</li>
            </ul>
        </div>
    )
}


class Profile4 extends React.Component {

    abuHanifa = {
        name: "Abu Hanifa (RA)",
        title: "Alem, Salfe Salehin, Imam",
        no: 4,
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
            <div className="w-50 border m-auto my-3 p-2">
                <Header name={this.abuHanifa.name} title={this.abuHanifa.title} no={this.abuHanifa.no} />
                <Books bhead={this.abuHanifa.bhead} b1={this.abuHanifa.b1} b2={this.abuHanifa.b2} b3={this.abuHanifa.b3} />
                <Students shead={this.abuHanifa.shead} s1={this.abuHanifa.s1} s2={this.abuHanifa.s2} s3={this.abuHanifa.s3} s4={this.abuHanifa.s4} />
            </div>
        )
    }
}

export default Profile4