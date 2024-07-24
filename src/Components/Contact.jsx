import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact">
                <h1 id='contact_id'>CONTACT US :</h1>
                <center data-aos="zoom-in">
                    <p>Please fill this form in a decent manner.</p>
                    <form className="contact-form" >
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Id</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">SUBMIT</button>
                        </div>
                    </form>
                </center>
            </div>
        </>
    );
}
export default Contact;