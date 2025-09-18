import { useNavigate } from 'react-router-dom';

const CollaborateCTA = () => {
  const navigate = useNavigate();
  return (
    <section id="collaborate-cta" style={{background: 'var(--blue-primer)', color: '#fff', padding: '48px 0', textAlign: 'center'}}>
      <h2 style={{fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px'}}>Let&apos;s Collaborate!</h2>
      <p style={{fontSize: '1.2rem', marginBottom: '32px', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}>
        Ready to make an impact together? Whether you&apos;re a brand, community, or company, we&apos;re excited to explore collaboration opportunities that drive value and growth for everyone involved.
      </p>
      <button
        onClick={() => navigate('/collaborate')}
      >
        Explore Collaboration
      </button>
    </section>
  );
};

export default CollaborateCTA;