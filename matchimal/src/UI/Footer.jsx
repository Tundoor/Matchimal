function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copywrite">
                    <p>&copy;Thandolwethu Mbokazi</p>
                    <p>Created in 2025</p>
                </div>
                <div className="contacts">
                    <h1>Contact Me</h1>
                    <div className="social-links">
                        <a href="mailto:thandwem045@gmail.com" className="btn contact-details"><i className="fas fa-at"></i></a>
                        <a href="tel:082 564 9135" className="btn contact-details"><i className="fas fa-mobile-alt"></i> </a>
                        <a id="profile-link" href="" target="_blank" className="btn contact-details"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer