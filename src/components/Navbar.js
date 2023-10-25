import { pageLinks, socialLinks } from '../data'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Awaara Tours" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
            {pageLinks.map((link)=>{
                return(
                    <li key={link.id}>
                        <a href={link.href} className="nav-link"> {link.text} </a>
                    </li>
                )
            })}
        </ul>

        <ul className="nav-icons">
            {socialLinks.map((social)=>{
                const{id, href, className} =social;
                return(
                    <li key={id}>
                        <a href={href} target='_blank' rel="noreferrer" className='nav-icon'><i className={className}></i></a>
                    </li>
                )
            })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar