import './Project.css';
import portfolioImage from '../Images/portfolio-image.jpg'; // Replace with your project images
import ecommerceImage from '../Images/ecommerce-image.avif';
import todoImage from '../Images/todo-image.avif';
import registrationImage from '../Images/registration-image.jpg';
const Project = () => {
    return (
        <>
            <h1 id='proj_id'>PROJECTS :</h1>
            <div className="projects-container">
                <div className="project-box"  data-aos="zoom-in">
                    <img src={portfolioImage} alt="Portfolio Project" />
                    <div className="project-title">PORTFOLIO</div>
                </div>
                <div className="project-box"  data-aos="zoom-in">
                    <img src={ecommerceImage} alt="E-Commerce Project" />
                    <div className="project-title">E-COMMERCE</div>
                </div>
                <div className="project-box"  data-aos="zoom-in">
                    <img src={todoImage} alt="TODO List Project" />
                    <div className="project-title">TODO - LIST</div>
                </div>
                <div className="project-box"  data-aos="zoom-in">
                    <img src={registrationImage} alt="Student Registration System Project" />
                    <div className="project-title">STUDENT REGISTRATION SYSTEM</div>
                </div>
            </div>
        </>
    );
}

export default Project;