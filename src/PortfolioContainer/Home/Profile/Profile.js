import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/heger-valesin/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/HegerValesin'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.instagram.com/hegervalesin/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://youtube.com.br'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='https://twitter.com/HegerVFP'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, Eu sou <span className="hihglighted-text">Heger Valesin</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Developer",
                                        1500,
                                        "Front-End Developer",
                                        1500,
                                        "Back-End Developer",
                                        1500,
                                        "HTML, CSS, JavaScript",
                                        1500,
                                        "React.js, Node.js",
                                        1500,
                                        "Java Full Stack Developer",
                                        1500,
                                        "MySQL, PostgreSQL, MongoDB",
                                        1500,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Desenvolvo aplicações Front-End e Back-End para você e sua empresa.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className="btn primary-btn">
                            {""}
                            Contrate-Me{" "}
                        </button>
                        <a href="curriculohegervalesin.pdf" download="Heger Valesin - Currículo.pdf">
                            <button className="btn highlighted-btn">Meu Currículo</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}