import Footer from '../footer';
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
    <div className="blob-background">
      <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M1086.49 448.123C1140.19 505.034 1188.48 567.581 1214.61 637.256C1240.74 706.932 1244.7 783.736 1209.37 846.712C1174.04 909.688 1099.42 958.835 1024.8 975.763C950.186 992.691 875.57 977.4 788.48 986.69C701.391 995.98 601.827 1029.85 510.174 1019.82C418.52 1009.79 334.777 955.854 265.697 889.346C196.617 822.838 142.2 743.758 113.625 655.921C85.0504 568.084 82.3179 471.49 113.122 387.01C143.926 302.53 208.267 230.164 286.144 175.944C364.021 121.724 455.434 85.6504 546.847 71.8726C638.26 58.0948 729.673 66.6128 821.086 91.9348C912.499 117.257 1004.41 159.383 1059.87 219.654C1115.33 279.925 1134.34 358.341 1115.06 419.886C1095.79 481.431 1038.23 526.105 1038.23 526.105L1086.49 448.123Z" fill="var(--blob-background-color)" fillOpacity="0.3"/>
        <path d="M1214.61 637.256C1240.74 706.932 1244.7 783.736 1209.37 846.712C1174.04 909.688 1099.42 958.835 1024.8 975.763C950.186 992.691 875.57 977.4 788.48 986.69C701.391 995.98 601.827 1029.85 510.174 1019.82C418.52 1009.79 334.777 955.854 265.697 889.346C196.617 822.838 142.2 743.758 113.625 655.921C85.0504 568.084 82.3179 471.49 113.122 387.01C143.926 302.53 208.267 230.164 286.144 175.944C364.021 121.724 455.434 85.6504 546.847 71.8726C638.26 58.0948 729.673 66.6128 821.086 91.9348C912.499 117.257 1004.41 159.383 1059.87 219.654C1115.33 279.925 1134.34 358.341 1115.06 419.886C1095.79 481.431 1038.23 526.105 1038.23 526.105" stroke="var(--blob-background-color)" strokeOpacity="0.5" strokeWidth="2"/>
      </svg>
    </div>
    <nav id="navbar">
      <div className="nav-left">
        <img id="logo" src={logo} alt="logo" /> 
        <h1 onClick={() => navigate('/')}>PELAJAR DATA</h1>
      </div>
    </nav>
    
    <main id="collaborate-page">
        
      <section className="content-card">
        <h1>Collaboration Opportunities</h1>
        <p>Discover how we can work together to create meaningful impact. Choose the path that fits you best:</p>
        <div className="collaborate-cards">
          {collaborationTypes.map((type) => (
            <div key={type.title} className="collaborate-card feature-card">
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