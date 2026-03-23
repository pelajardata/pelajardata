import Footer from '../footer';
import Navbar from '../navbar';


const collaborationTypes = [
  {
    title: 'For Brands',
    description: 'Partner with us for sponsored events, paid content, and unique brand activations that connect you with our engaged audience.',
    examples: ['Sponsored Event', 'Paid Content', 'Brand Activation'],
    illustration: '/illustrations/Product presentation-rafiki.svg'
  },
  {
    title: 'For Communities',
    description: 'Let\'s join forces for webinars, offline gatherings, and knowledge-sharing sessions to empower and grow our communities together.',
    examples: ['Webinar Collaboration', 'Offline Gathering', 'Community Workshop'],
    illustration: '/illustrations/Team spirit-pana.svg'
  },
  {
    title: 'For Companies',
    description: 'Tap into our vibrant community to find top talent, co-host career events, or launch initiatives that bridge companies and passionate individuals.',
    examples: ['Talent Sourcing', 'Career Fair', 'Company-Community Initiative'],
    illustration: '/illustrations/At the office-amico.svg'
  }
];

function CollaboratePage() {
  return <>
    <Navbar/>
    
    <main id="collaborate-page">
        
      <section>
        <h1>Discover The Collaboration Opportunities</h1>
        <div className="collaborate-cards">
          {collaborationTypes.map((type) => (
            <div key={type.title} className="collaborate-card">
              <img 
                src={type.illustration} 
                alt={type.title} 
              />
              <h2>{type.title}</h2>
              <p>{type.description}</p>
              {/* <ul>
                {type.examples.map((ex) => <li key={ex}>{ex}</li>)}
              </ul> */}
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