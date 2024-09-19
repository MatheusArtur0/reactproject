import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/logo1.png'

function NavBar() {
  return(
    <nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Terrestrial Globe"/>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar
