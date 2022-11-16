import {Link} from "react-router-dom";
import Classnames from "classnames";
import { HashLink } from 'react-router-hash-link'
import LogoImage from "../../assets/logo.png"
import './Header.css'



/*
 <script
  src="https://code.jquery.com/jquery-3.6.1.js"
  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
  crossorigin="anonymous"></script>

*/   


function Header({ open , setOpen}) {
  return (
    <section className='header-section'>
       <nav>
         <div className='nav-box'>
            <div className="nav-header">
               <div className='logo'>
               <Link to="/"><img src={LogoImage} alt='Logo'></img></Link> 
               </div>
               <div className='burger' open={open} onClick={()=> setOpen(!open)} >
                  <div className={ Classnames('bar',{'bar-hidden': open } )}></div>
                  <div className={ Classnames('bar',{'bar-hidden': open } )}></div>
                  <div className={ Classnames('bar',{'bar-hidden': open } )}></div>
               </div>
               <div className={ Classnames('drop-down-main',{'drop-down-main-hide': open } )} open={open} onClick={()=> setOpen(!open)}>
                  <ul className="navbar-items">
                     <li className='nav-item'><Link className='item-link active' to="/">Home</Link></li>
                     <li className='nav-item'><Link className='item-link item-link-color' to="/team">Team</Link></li>
                     <li className='nav-item'><HashLink className='item-link item-link-color' to="/#projectPoint">Projects</HashLink></li>
                     <li className='nav-item'><Link className='item-link item-link-color' to="/publication">Publications</Link></li>
                     <li className='nav-item'><Link className='item-link item-link-color' to="/kaleidoscope">Kaleidoscope</Link></li>
                     <li className='nav-item'><HashLink className='item-link news item-link-color' to="/#newsletterPoint">Newsletter</HashLink></li>
                     <li className='nav-item'><Link className='item-link item-link-color' to="/Contact">Contact Us</Link></li>
                  </ul>
                  <ul className="navbar-right-items">
                     <li className="choose-language">
                        <select className="language">
                          <option value="english">EN</option>
                          <option value="arabic">AR</option>
                        </select>
                     </li>
                     {/* <li className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></li> */}
                     <li>
                     <div className="search-icon">
                    <div className="icon"></div>
                    <div className="search-form">
                     <form>
                        <input type="text" name="" placeholder="Search" />
                     </form>
                    </div>
                  </div>
                     </li>
                  </ul>
                  
               </div> 
            </div>      
         </div>
       </nav>
    </section>
  )
}

export default Header
