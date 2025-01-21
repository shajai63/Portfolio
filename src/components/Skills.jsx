import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '../styles/Skills.css';
const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 100 });
    }, []);

    return (
        <>
            <section id="skills" className="skills-section">
                <div className="container">
                    <h1 className="text-center mb-5 display-5 text-white fw-bold" data-aos="fade-up">SKILLS</h1>
                    <div className="row g-4 justify-content-center">
                        {[
                            'Java',
                            'Spring Boot',
                            'ReactJS',
                            'MySQL',
                            'JavaScript',
                            'Bootstrap',
                            'HTML, CSS'
                        ].map((skill, index) => (
                            <div className="col-lg-3 col-md-4" data-aos="zoom-in" key={index}>
                                <div className="card skills-card border-secondary">
                                    <div className="card-body">
                                        <h5 className="card-title text-warning fw-bold text-center">{skill}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mb-5">
                    <h1 className="text-center mb-5 mt-5 display-5 text-white fw-bold" data-aos="fade-up">TOOLS</h1>
                    <div className="row g-4 justify-content-center">
                        {[
                            'Eclipse IDE',
                            'STS',
                            'IntelliJ IDEA',
                            'Postman',
                            'GitHub',
                            'MySQL Workbench'
                        
                        ].map((tool, index) => (
                            <div className="col-lg-3 col-md-4" data-aos="zoom-in" key={index}>
                                <div className="card skills-card border-secondary">
                                    <div className="card-body">
                                        <h5 className="card-title text-warning fw-bold text-center">{tool}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .skills-section {
                    
                    padding: 50px 0;
                }
                .skills-card {
                    background: rgba(255, 255, 255, 0.1);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .skills-card:hover {
                    transform: scale(1.1);
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
                }
                .card-title {
                    font-size: 1.5rem;
                }
            `}</style>
        </>
    );
};

export default Skills;
