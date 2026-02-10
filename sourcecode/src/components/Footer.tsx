export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer" role="contentinfo">
            <div className="container">
                <p className="site-footer__text">
                    &copy; {currentYear} AI/ML Club. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
