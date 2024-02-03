import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function HomePage() {
    return(
        <div className="flex-column-center">
            <div className="home-div">
            <Link to='/beers'><img src={beersImg} alt="beers"/></Link>
                <h2><Link to='/beers'>All Beers</Link></h2>
                <p>A list with all our beers.</p>
            </div>
            <div className="home-div">
            <Link to='/random-beer'><img src={randomBeerImg} alt="random-beer"/></Link>
                <h2><Link to='/random-beer'>Random Beers.</Link></h2>
                <p>Pick a random beer</p>
            </div>
            <div className="home-div">
            <Link to='/new-beer'><img src={newBeerImg} alt="beers"/></Link>
                <h2><Link to='/new-beer'>New Beers.</Link></h2>
                <p>Create a new beer</p>
            </div>
        </div>
    )
}

export default HomePage;
