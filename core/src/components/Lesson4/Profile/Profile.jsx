import React from "react";
import './profile.style.css'

class Profile extends React.Component {
    render() {
        return (
            <div className="main p-5 border w-50 m-auto">
                <header className="header text-center">
                    <h3>Ibn Taymiyyah (R)</h3>
                    <p>
                        Shaikhul Islam, Imam, Salfe Salehin
                        <span className="badge bg-success text-light align-top mx-1">1</span>
                    </p>
                </header>
                <div className="knowledge">
                    <h6>Knowledge</h6>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Quran</a>
                        </li>
                        <li>
                            <a href="#">Hadith</a>
                        </li>
                        <li>
                            <a href="#">Fiqah</a>
                        </li>
                        <li>
                            <a href="#">Tafsir</a>
                        </li>
                        <li>
                            <a href="#">Sirah</a>
                        </li>
                    </ul>
                </div>
                <footer className="students">
                    <h6>Students</h6>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">
                                Ibnul Jawji (R)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Ibn Kayyim (R)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Ibn Kasir (R)
                            </a>
                        </li>
                    </ul>
                </footer>
            </div >
        )
    }
}
export default Profile