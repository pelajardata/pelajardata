import { useNavigate } from 'react-router-dom';
const logo = '/Logo.svg'

function EventsPage() {
    const navigate = useNavigate();
    return <>
        <div className="blob-background">
            <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M1086.49 448.123C1140.19 505.034 1188.48 567.581 1214.61 637.256C1240.74 706.932 1244.7 783.736 1209.37 846.712C1174.04 909.688 1099.42 958.835 1024.8 975.763C950.186 992.691 875.57 977.4 788.48 986.69C701.391 995.98 601.827 1029.85 510.174 1019.82C418.52 1009.79 334.777 955.854 265.697 889.346C196.617 822.838 142.2 743.758 113.625 655.921C85.0504 568.084 82.3179 471.49 113.122 387.01C143.926 302.53 208.267 230.164 286.144 175.944C364.021 121.724 455.434 85.6504 546.847 71.8726C638.26 58.0948 729.673 66.6128 821.086 91.9348C912.499 117.257 1004.41 159.383 1059.87 219.654C1115.33 279.925 1134.34 358.341 1115.06 419.886C1095.79 481.431 1038.23 526.105 1038.23 526.105L1086.49 448.123Z" fill="var(--blob-background-color)" fillOpacity="0.3"/>
                <path d="M1214.61 637.256C1240.74 706.932 1244.7 783.736 1209.37 846.712C1174.04 909.688 1099.42 958.835 1024.8 975.763C950.186 992.691 875.57 977.4 788.48 986.69C701.391 995.98 601.827 1029.85 510.174 1019.82C418.52 1009.79 334.777 955.854 265.697 889.346C196.617 822.838 142.2 743.758 113.625 655.921C85.0504 568.084 82.3179 471.49 113.122 387.01C143.926 302.53 208.267 230.164 286.144 175.944C364.021 121.724 455.434 85.6504 546.847 71.8726C638.26 58.0948 729.673 66.6128 821.086 91.9348C912.499 117.257 1004.41 159.383 1059.87 219.654C1115.33 279.925 1134.34 358.341 1115.06 419.886C1095.79 481.431 1038.23 526.105 1038.23 526.105" stroke="var(--blob-background-color)" strokeOpacity="0.5" strokeWidth="2"/>
            </svg>
        </div>
        <header className="navbar" id="navbar-events">
            <div className="nav-center">
                <img id="logo" src={logo} alt="logo" />
                <h1 onClick={() => navigate('/')}>PELAJAR DATA</h1>
            </div>
        </header>
        <main id="events-page">
            <section className="hero-section content-card">
                <div className="hero-content">
                    <h1>Radiant Revelries & Data Adventures</h1>
                    <p>Dive into a world where data meets celebration! Join our vibrant community events where every session sparkles with insights and opportunities.</p>
                    <a onClick={() => {
                        document.getElementById("upcoming-events")?.scrollIntoView({ behavior: "smooth" });
                    }} className="hero-cta">Explore Events</a>
                </div>
                <img src="/illustrations/events-hero.svg" alt="Events illustration" className="hero-image" />
            </section>

            <section className="learn-section content-card">
                <img src="/illustrations/expert-learning.svg" alt="Learn from experts" className="section-image" />
                <div className="section-content">
                    <h2>Learn from Industry Pioneers</h2>
                    <p>Gain invaluable insights from seasoned practitioners who've mastered the art of data science. Our events feature thought leaders who share real-world experiences and cutting-edge techniques.</p>
                </div>
            </section>

            <section className="network-section content-card">
                <div className="section-content">
                    <h2>Connect with Fellow Enthusiasts</h2>
                    <p>Build meaningful connections in our welcoming community. Whether you're a beginner or an expert, you'll find your tribe among passionate data professionals and learners.</p>
                </div>
                <img src="/illustrations/networking.svg" alt="Networking" className="section-image" />
            </section>

            <section className="experience-section content-card">
                <img src="/illustrations/hands-on.svg" alt="Hands-on experience" className="section-image" />
                <div className="section-content">
                    <h2>Get Your Hands Dirty with Data</h2>
                    <p>Theory meets practice in our interactive workshops. Work on real projects, solve actual problems, and build your portfolio while learning from the best in the field.</p>
                </div>
            </section>

            <section className="tracks-section content-card">
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

            <section className="event-types-section content-card">
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

            <section id="upcoming-events" className="cta-section content-card">
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