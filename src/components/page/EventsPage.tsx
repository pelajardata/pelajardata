import { useNavigate } from 'react-router-dom';
const logo = '/Logo.svg'

function EventsPage() {
    const navigate = useNavigate();
    return <>
        <header className="navbar" id="navbar-events">
            <div className="nav-center">
                <img id="logo" src={logo} alt="logo" />
                <h1 onClick={() => navigate('/')}>PELAJAR DATA</h1>
            </div>
        </header>
        <main id="events-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Radiant Revelries & Data Adventures</h1>
                    <p>Dive into a world where data meets celebration! Join our vibrant community events where every session sparkles with insights and opportunities.</p>
                    <a onClick={() => {
                        document.getElementById("upcoming-events")?.scrollIntoView({ behavior: "smooth" });
                    }} className="hero-cta">Explore Events</a>
                </div>
                <img src="/illustrations/events-hero.svg" alt="Events illustration" className="hero-image" />
            </section>

            <section className="learn-section">
                <img src="/illustrations/expert-learning.svg" alt="Learn from experts" className="section-image" />
                <div className="section-content">
                    <h2>Learn from Industry Pioneers</h2>
                    <p>Gain invaluable insights from seasoned practitioners who've mastered the art of data science. Our events feature thought leaders who share real-world experiences and cutting-edge techniques.</p>
                </div>
            </section>

            <section className="network-section">
                <div className="section-content">
                    <h2>Connect with Fellow Enthusiasts</h2>
                    <p>Build meaningful connections in our welcoming community. Whether you're a beginner or an expert, you'll find your tribe among passionate data professionals and learners.</p>
                </div>
                <img src="/illustrations/networking.svg" alt="Networking" className="section-image" />
            </section>

            <section className="experience-section">
                <img src="/illustrations/hands-on.svg" alt="Hands-on experience" className="section-image" />
                <div className="section-content">
                    <h2>Get Your Hands Dirty with Data</h2>
                    <p>Theory meets practice in our interactive workshops. Work on real projects, solve actual problems, and build your portfolio while learning from the best in the field.</p>
                </div>
            </section>

            <section className="tracks-section">
                <div className="section-content">
                    <h2>Choose Your Learning Path</h2>
                    <p>Embark on your data journey with our specialized tracks designed to help you achieve your career goals.</p>
                    <div className="tracks-grid">
                        <div className="track-card">
                            <h3>Data Analytics</h3>
                            <p>Master data visualization, statistical analysis, and business intelligence tools.</p>
                        </div>
                        <div className="track-card">
                            <h3>Data Science</h3>
                            <p>Dive deep into machine learning, statistical modeling, and predictive analytics.</p>
                        </div>
                        <div className="track-card">
                            <h3>Data Engineering</h3>
                            <p>Build robust data pipelines, design databases, and manage data infrastructure.</p>
                        </div>
                        <div className="track-card">
                            <h3>AI & Machine Learning</h3>
                            <p>Explore neural networks, deep learning, and artificial intelligence applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-types-section">
                <div className="section-content">
                    <h2>Diverse Learning Experiences</h2>
                    <p>Choose from a variety of event formats that suit your learning style and schedule.</p>
                    <div className="tracks-grid">
                        <div className="track-card">
                            <h3>Offline Events</h3>
                            <p>In-person workshops and meetups for hands-on learning and networking.</p>
                        </div>
                        <div className="track-card">
                            <h3>Online Events</h3>
                            <p>Virtual sessions accessible from anywhere, featuring expert talks and Q&As.</p>
                        </div>
                        <div className="track-card">
                            <h3>Workshops</h3>
                            <p>Intensive practical sessions focused on specific tools and techniques.</p>
                        </div>
                        <div className="track-card">
                            <h3>Competitions</h3>
                            <p>Challenge yourself with real-world problems and showcase your skills.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="upcoming-events" className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Make Waves?</h2>
                    <p>Don't miss out on our upcoming events! Join us for an unforgettable journey of learning, connecting, and growing together.</p>
                    <a
                        href="https://lu.ma/pelajardata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        View Upcoming Events
                    </a>
                </div>
                <img src="/illustrations/calendar.svg" alt="Calendar" className="cta-image" />
            </section>
        </main>
    </>
}

export default EventsPage;