const Footer = () => {
    return ( 
        <>
        <section id="footer">
            <div className="container border-top pt-3">
                <div className="row text-center">
                    <div className="col-md-12">
                        Follow Me on Social Media :
                        <a className="mx-2" href="https://www.linkedin.com/in/shajaisj63/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a className="mx-2" href="https://github.com/shajai63" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a className="mx-2" href="https://www.instagram.com/__.shajai.__/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                    </div>
                    <div className="col-md-12">
                        <p>Copyright &copy; 2023 Shajai. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Footer;