import '../styles/Education.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Education = () => {
    useEffect(() => {
            AOS.init({ duration: 1000, offset: 100 });
        }, []);
    return (
        <section id='education' className=" education-section py-5">
            <div className="container" >
                <h1 className="text-center mb-5 display-5 text-white fw-bold " data-aos="fade-up">EDUCATION</h1>
                <div className="row g-4 justify-content-center ">

                    <div className="col-lg-9 col-md-6 "data-aos="zoom-in">
                        <div className="card education-card border-secondary">
                            <div className="card-body ">
                                <h5 className="card-title text-warning fw-bold">B.Tech in Information Technology</h5>
                                <h6 className="card-subtitle mb-3 text-white">2019-2023 || 7.5 CGPA</h6>
                                <p className="card-text">
                                    I completed my Bachelor's degree in Information Technology from Ponjesly College of Engineering, Nagercoil.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-6" data-aos="zoom-in">
                        <div className="card education-card border-secondary">
                            <div className="card-body">
                                <h5 className="card-title text-warning fw-bold">HSC</h5>
                                <h6 className="card-subtitle mb-3 text-white">2018-2019 || 64%</h6>
                                <p className="card-text">
                                    I completed my high school education at Bapuji Memorial Higher Secondary School, Manavalakurichi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-6" data-aos="zoom-in">
                        <div className="card education-card border-secondary">
                            <div className="card-body">
                                <h5 className="card-title text-warning fw-bold">SSLC</h5>
                                <h6 className="card-subtitle mb-3 text-white">2016-2017 || 94%</h6>
                                <p className="card-text">
                                    I completed my sslc studies at Bapuji Memorial Higher Secondary School, Manavalakurichi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;