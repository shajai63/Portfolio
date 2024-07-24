import './Footer.css';
import linkedinLogo from '../Images/linkedin-logo.png'; // Replace with your social media icons
import githubLogo from '../Images/github-iconf.png';
import instaLogo from '../Images/insta-logo.png';
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="social-media">
                    <span>Follow me on:</span>
                    <a href="https://www.linkedin.com/in/shajaisj63/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/shajai63/" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/__.shajai.__/" target="_blank" rel="noopener noreferrer">
                        <img src={instaLogo} alt="Instagram" />
                    </a>
                </div>
                <div className="copyright">
                    <p>© 2024 Shajai SJ. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;