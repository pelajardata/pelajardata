import Footer from './footer';
import { useNavigate } from 'react-router-dom';
const logo = '/Logo.svg'

const collaborationTypes = [
  {
    title: 'For Brands',
    description: 'Partner with us for sponsored events, paid content, and unique brand activations that connect you with our engaged audience.',
    examples: ['Sponsored Event', 'Paid Content', 'Brand Activation'],
    illustration: '/illustrations/brand-collab.svg'
  },
  {
    title: 'For Communities',
    description: 'Let\'s join forces for webinars, offline gatherings, and knowledge-sharing sessions to empower and grow our communities together.',
    examples: ['Webinar Collaboration', 'Offline Gathering', 'Community Workshop'],
    illustration: '/illustrations/community-collab.svg'
  },
  {
    title: 'For Companies',
    description: 'Tap into our vibrant community to find top talent, co-host career events, or launch initiatives that bridge companies and passionate individuals.',
    examples: ['Talent Sourcing', 'Career Fair', 'Company-Community Initiative'],
    illustration: '/illustrations/company-collab.svg'
  }
];

function CollaboratePage() {
    const navigate = useNavigate();
  return <>
    <nav id="navbar">
      <div className="nav-left">
        <img id="logo" src={logo} alt="logo" /> 
        <h1 onClick={() => navigate('/')}>PELAJAR DATA</h1>
      </div>
    </nav>
    
    <main id="collaborate-page">
        
      <section>
        <h1>Collaboration Opportunities</h1>
        <p>Discover how we can work together to create meaningful impact. Choose the path that fits you best:</p>
        <div className="collaborate-cards">
          {collaborationTypes.map((type) => (
            <div key={type.title} className="collaborate-card">
              <img 
                src={type.illustration} 
                alt={type.title} 
              />
              <h2>{type.title}</h2>
              <p>{type.description}</p>
              <ul>
                {type.examples.map((ex) => <li key={ex}>{ex}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <a href="mailto:pelajardataid@gmail.com" className="contact-button">Contact Us</a>
      </section>
    </main>
    <Footer />
  </>
};

export default CollaboratePage;