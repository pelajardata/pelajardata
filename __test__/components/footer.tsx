import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
const logo = '/Logo.svg'

function footer(){
    return <footer>
    <div>
      <img id="logo" src={logo} alt="logo" /> <h1>PELAJAR DATA</h1>
    </div>
    <div id="contacts">
      <a href="https://x.com/pelajardata">
    <XIcon />
      </a>
      <a href="mailto:pelajardataid@gmail.com">
    <EmailIcon />
      </a>

      <a href="https://www.instagram.com/pelajardata/">
    <InstagramIcon />
      </a>
    </div>
      </footer>
    }
    export default footer;