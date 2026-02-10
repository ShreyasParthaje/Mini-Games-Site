export default function Header() {
    return (
        <header className="site-header" role="banner">
            <div className="container">
                <div className="site-header__logo">
                    <span className="site-header__logo-icon" aria-hidden="true">
                        AI
                    </span>
                    <span>AI/ML Club</span>
                </div>

                <nav className="site-header__nav" aria-label="Main navigation">
                    <a href="#events" className="site-header__nav-link">
                        Events
                    </a>
                    <a href="#about" className="site-header__nav-link">
                        About
                    </a>
                    <a href="#contact" className="site-header__nav-link">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}
