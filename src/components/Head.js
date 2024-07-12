import { Link } from "react-router-dom";
import Logo from "../assets/img/food-shopping.png"

const Head = () => {
    return(
      <div className="container">
        <a href="/">
          <img src={Logo} alt="Logo"/>
        </a>

        <div className="nav-list">
          <ul>
            <li><Link to={"/"}>Home</Link></li> 
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact us</Link></li>
            {/* <Link to={}><li>Cart</li>  </Link>           */}
          </ul>
        </div>
      </div>
    )
  }

export default Head;

