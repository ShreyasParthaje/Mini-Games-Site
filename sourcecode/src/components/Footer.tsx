export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer" role="contentinfo">
            <div className="container">
                <p className="site-footer__text">
                    &copy; {currentYear} AI/ML Club. All rights reserved.
                </p>
                <div className="site-footer__links">
                    <a href="#events" className="site-footer__link">
                        Events
                    </a>
                    <a href="#about" className="site-footer__link">
                        About Us
                    </a>
                    <a href="#contact" className="site-footer__link">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
