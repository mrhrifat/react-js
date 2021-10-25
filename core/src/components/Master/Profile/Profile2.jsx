import React from "react";

const Header = () => {
    return (
        <div className="header text-center">
            <h6>Abu Hanifa (RA)</h6>
            <p>
                Alem, Salfe Salehin, Imam
                <span className="badge align-top bg-danger mx-1">2</span>
            </p>
        </div>
    )
}
const Books = () => {
    return (
        <div className="books">
            <h6>Books</h6>
            <ul className="list-unstyled">
                <li className="d-inline-block m-1 text-light p-2 bg-success">Al-Fiqh al-Akbar</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">Al-Fiqh al-Absat</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">Kitaab ul-Aathaar</li>
            </ul>
        </div>
    )
}
const Students = () => {
    return (
        <div className="students">
            <h6>Students</h6>
            <ul className="list-unstyled">
                <li className="d-inline-block m-1 text-light p-2 bg-success">Abdullah ibn Mubarak</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">Abu Nuāim Fadl Ibn Dukain</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">Malik bin Mighwal</li>
                <li className="d-inline-block m-1 text-light p-2 bg-success">Dawood Taa’ee</li>
            </ul>
        </div>
    )
}

class Profile2 extends React.Component {
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

export default Profile2