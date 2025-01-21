import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 100 });
    }, []);

    const projectData = [
        {
            title: "Hospital Management",
            description: "A complete hospital management system featuring admin login, patient CRUD operations, and responsive UI.",
            technologies: "Spring Boot, React.js, MySQL",
            link: "https://github.com/shajai63/Hospital-Management-System",
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing skills, projects, and tools with a clean, responsive design.",
            technologies: "React.js, Bootstrap",
            link: "https://github.com/shajai63/Portfolio",
        },
        {
            title: "Student Registration",
            description: "A CRUD-based student registration application for managing student details efficiently.",
            technologies: "Spring Boot, React.js, MySQL, Bootstrap",
            link: "https://github.com/shajai63/Student-Registration",
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h1 className="text-center mb-5 display-5 text-white fw-bold" data-aos="fade-up">PROJECTS</h1>
                <div className="row g-4 justify-content-center">
                    {projectData.map((project, index) => (
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" key={index}>
                            <div className="card project-card border-secondary">
                                <div className="card-body">
                                    <h5 className="card-title text-warning fw-bold">{project.title}</h5>
                                    <p className="card-text text-light">{project.description}</p>
                                    <p className="card-text text-info"><strong>Technologies:</strong> {project.technologies}</p>
                                    <a href={project.link} className="btn btn-outline-warning" target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .projects-section {
                    padding: 50px 0;
                }
                .project-card {
                    background: rgba(0, 0, 0, 0.8);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .project-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
                }
                .card-title {
                    font-size: 1.7rem;
                }
                .btn-outline-warning {
                    transition: background-color 0.3s, color 0.3s;
                }
                .btn-outline-warning:hover {
                    background-color: #ffc107;
                    color: #000;
                }
            `}</style>
        </section>
    );
};

export default Projects;
