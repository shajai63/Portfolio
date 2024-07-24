import './Education.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Education = () => {
    return (
        <>
            <div className="education">
                <div id='head'>
                    <h1>EDUCATION DETAILS :</h1>
                </div>
                <div className="box" data-aos="fade-right" id='box2'>
                    <div className="left" >
                        <h3>UG DEGREE</h3>
                        <p>2019-2023</p>
                    </div>
                    <div className="right" id='box1'>
                        <h4>INFORMATION TECHNOLOGY</h4>
                        <p>PONJESLY COLLEGE OF ENGINEERING</p>
                        <p>ANNA UNIVERSITY | 7.5 CGPA</p>
                    </div>
                </div>
                <div className="box" data-aos="fade-right">
                    <div className="left">
                        <h3>HSC</h3>
                        <p>2018-2019</p>
                    </div>
                    <div className="right">
                        <h4>BIO-MATHS</h4>
                        <p>BAPUJI MEMORIAL HIGHER SECONDARY SCHOOL</p>
                        <p>STATE BOARD | 63% </p>
                    </div>
                </div>
                <div className="box" data-aos="fade-right">
                    <div className="left">
                        <h3>SSLC</h3>
                        <p>2016-2017</p>
                    </div>
                    <div className="right">
                        <p>BAPUJI MEMORIAL HIGHER SECONDARY SCHOOL</p>
                        <p>STATE BOARD | 94%</p>
                    </div>
                </div>
            </div>
        </>
    );
}
AOS.init();
export default Education;