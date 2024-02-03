import { Link } from "react-router-dom";
import homeImg from "../assets/home-icon.png"

function Navbar() {
    return(
        <nav>
            <Link to='/'><img src={homeImg} /></Link>
        </nav>
    )
}

export default Navbar;
