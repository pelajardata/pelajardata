import './App.css'
import './styles/events.css'
import Navbar from './components/navbar.tsx';
import Intro from './components/intro.tsx';
import Mission from './components/mission.tsx';
import Activities from './components/activities.tsx';
import Footer from './components/footer.tsx';
import CollaborateCTA from './components/CollaborateCTA.tsx';

function App() {
  return (
    <>

      <Navbar />
      <Intro />
      <Mission />
      <Activities />
      <CollaborateCTA />
      <Footer />
    </>
  )
}

export default App
