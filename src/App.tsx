import './App.css'
import Navbar from '../__test__/components/navbar.tsx';
import Intro from '../__test__/components/intro.tsx';
import Mission from '../__test__/components/mission.tsx';
import Activities from '../__test__/components/activities.tsx';
import Footer from '../__test__/components/footer.tsx';
import CollaborateCTA from '../__test__/components/collaborateCTA.tsx';

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
