import { Link } from "react-router-dom";
import Logo from "../assets/img/food-shopping.png"

const Head = () => {
    return(
      <div className="flex justify-between items-center bg-violet-200 p-4 shadow-lg">
        <a href="/">
          <img src={Logo} className="w-20 h-auto" alt="Logo"/>
        </a>

        <div className="">
          <ul className="text-md font-bold flex justify-between">
            <li className="mx-5"><Link to={"/"} >Home</Link></li> 
            <li className="mx-5"><Link to={"/about"}>About</Link></li>
            <li className="mx-5"><Link to={"/contact"}>Contact us</Link></li>
            {/* <Link to={}><li>Cart</li>  </Link>           */}
          </ul>
        </div>
      </div>
    )
  }

export default Head;

