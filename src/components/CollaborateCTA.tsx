import { useNavigate } from 'react-router-dom';

const CollaborateCTA = () => {
  const navigate = useNavigate();
  return (
    <section id="collaborate-cta">
      <div className="blob-background">
        <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C150,150 350,50 500,200 C650,350 850,250 1000,400 L1000,600 L0,600 Z" fill="var(--blue-primer)" opacity="0.9"/>
          <path d="M0,400 C150,250 350,350 500,200 C650,50 850,150 1000,0 L1000,600 L0,600 Z" fill="var(--darker-blue)" opacity="0.3"/>
        </svg>
      </div>
      <div className="content-card" style={{background: 'transparent', color: '#fff', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px', color: '#fff'}}>Let&apos;s Collaborate!</h2>
        <p style={{fontSize: '1.2rem', marginBottom: '32px', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}>
          Ready to make an impact together? Whether you&apos;re a brand, community, or company, we&apos;re excited to explore collaboration opportunities that drive value and growth for everyone involved.
        </p>
        <button
          onClick={() => navigate('/collaborate')}
          className="feature-card"
          style={{display: 'inline-block', padding: '12px 24px', background: '#fff', color: 'var(--blue-primer)', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', maxWidth: '250px'}}
        >
          Explore Collaboration
        </button>
      </div>
    </section>
  );
};

export default CollaborateCTA;