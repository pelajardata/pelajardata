import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
const logo = '/Logo.svg'

function footer(){
    return <footer>
    <div className="footer-branding">
      <img id="logo" src={logo} alt="logo" /> 
      <h1>PELAJAR DATA</h1>
    </div>
    <div id="contacts">
      <a href="https://x.com/pelajardata" aria-label="Twitter">
        <XIcon />
      </a>
      <a href="mailto:pelajardataid@gmail.com" aria-label="Email">
        <EmailIcon />
      </a>
      <a href="https://www.instagram.com/pelajardata/" aria-label="Instagram">
        <InstagramIcon />
      </a>
    </div>
      </footer>
    }
    export default footer;