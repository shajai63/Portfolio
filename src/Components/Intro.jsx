import myPhoto from '../Images/photo.jpg'
import './Intro.css';
const Intro = () => {

    return (
        <>
            <div id='home' className="intro">
                <div className="content">
                    <h1>Hello, I'm Shajai</h1>
                    <h2>Frontend Developer...</h2>
                    <p>
                        Skilled in Core Java, HTML, CSS, JavaScript, ReactJS, J2EE, Hibernate, and Spring Boot with a passion for developing robust web applications. Eager to apply my knowledge in an entry- level position and contribute to a dynamic team.</p>
                    <a href="/ShajaiProfileSD.pdf" download>
                        <button>Download CV</button>
                    </a>
                    <a href="mailto:sjshajai56@gmail.com?subject=Job%20Opportunity&body=Hello%20Shajai,%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20a%20project.%20Please%20let%20me%20know%20your%20availability.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer">
                        <button>Hire Me</button>
                    </a>
                </div>
                <div className="image">
                    <img src={myPhoto} alt="" height={400} />
                </div>
            </div>
        </>
    );
}

export default Intro;