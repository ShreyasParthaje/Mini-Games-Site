import enigmaLogo from '../assets/enigmaLogoBG.png';

export default function HeroSection() {
    return (
        <section className="hero">
            <img
                src={enigmaLogo}
                alt="Enigma — AI/ML Club"
                className="hero__logo-corner"
            />
            <div className="container">
                <h1 className="hero__title">Event Descriptions</h1>
                <p className="hero__subtitle">
                    Decode the future. Join Enigma for a series of cryptic challenges,
                    high-stakes competitions, and deep-dive workshops into the world of
                    Artificial Intelligence.
                </p>
            </div>
        </section>
    );
}
