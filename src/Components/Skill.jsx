import './Skill.css';
import htmlIcon  from '../Images/html-icon.png';
import cssIcon from '../Images/css-icon.png';
import bootstrapIcon from '../Images/bootstrap-icon.png'
import javaIcon from '../Images/java-icon.png';
import javascriptIcon from '../Images/javascript-icon.png';
import reactIcon from '../Images/react-icon.png';
import springBootIcon from '../Images/spring-boot-icon.png';
import eclipseIcon from '../Images/eclipse-icon.png';
import vsCodeIcon from '../Images/vscode-icon.png';
import githubIcon from '../Images/github-icon.png';
import sqlIcon from '../Images/sql-icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    return (
        <>
        <h1 id='skill_head'>SKILLS :</h1>
            <div className="skills">
                
                <div className="container" data-aos="zoom-out">
                    <div>
                        <h3>STYLING & MARKUP</h3>
                    </div>
                    <div>
                        <img src={htmlIcon} alt="HTML" title="HTML" />
                        <img src={cssIcon} alt="CSS" title="CSS" />
                        <img src={bootstrapIcon} alt="" title='BOOTSTRAP' />
                    </div>
                </div>
                <div className="container" data-aos="zoom-out">
                    <div>
                        <h3>PROGRAMMING</h3>
                    </div>
                    <div>
                        <img src={javaIcon} alt="Java" title="Java" />
                        <img src={javascriptIcon} alt="JavaScript" title="JavaScript" />
                        <img src={reactIcon} alt="React.js" title="React.js" />
                        <img src={springBootIcon} alt="Spring Boot" title="Spring Boot" />
                    </div>
                </div>
                <div className="container" data-aos="zoom-out">
                    <div>
                        <h3>DATABASE</h3>
                    </div>
                    <div>
                        <img src={sqlIcon} alt="SQL" title="SQL" />
                    </div>
                </div>
                <div className="container" data-aos="zoom-out">
                    <div>
                        <h3>DEVELOPMENT TOOL</h3>
                    </div>
                    <div>
                        <img src={eclipseIcon} alt="Eclipse IDE" title="Eclipse IDE" />
                        <img src={vsCodeIcon} alt="VS Code" title="VS Code" />
                        <img src={githubIcon} alt="GitHub" title="GitHub" />
                    </div>
                </div>
            </div>
        </>
    );
}
AOS.init();
export default Skill;