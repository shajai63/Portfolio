import myPhoto from '../assets/photo.png';
import '../styles/Intro.css';

const Intro = () => {
    const handleDownloadCV = () => {
        // Replace 'resume.pdf' with the actual path to your resume file in the public folder
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'ShajaiSJ_Resume.pdf';
        link.click();
    };

    return (
        <section id="home" className="d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    {/* Left section */}
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="display-4 fw-bold text-white">Hello, I'm Shajai</h1>
                        <h2 style={{ color: '#ffc107' }} className="fs-2 text-typing mb-4 text-slider text-slider-items">
                            Java Fullstack Developer...
                        </h2>
                        <p className="fs-6 text-white mb-4">
                            Currently working as a Java Fullstack Developer at <span className="text-animate">EnterKey Solutions</span>, specializing in Java, Spring Boot, ReactJS, and MySQL.
                        </p>
                        <div>
                            <button
                                className="btn btn-warning text-dark me-3"
                                onClick={handleDownloadCV}
                            >
                                Download CV
                            </button>
                            <a
                                id="btn"
                                className="btn btn-outline-warning"
                                href="mailto:sjshajai56@gmail.com"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>

                    {/* Right section with image */}
                    <div className="col-md-6 text-center text-md-end mt-5 mt-md-0">
                        <img
                            src={myPhoto}
                            alt="Shajai"
                            className="zoom-img rounded-circle shadow-lg"
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </div>
            
        </section>
        
    );
};

export default Intro;
