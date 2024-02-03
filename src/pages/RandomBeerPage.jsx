import axios from "axios";
import { useEffect, useState } from "react";


function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState(null);
    
    useEffect(() => {
      axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((res) => {
        //   console.log(res);
          setRandomBeer(res.data)
        });
    }, []);

    return(
        <div>
                  {!randomBeer ? (
        <h2>Loading...</h2>
      ) : (
        <div className="flex-column-center">
          <div className="flex">
            <img src={randomBeer.image_url} alt={randomBeer.name} className="beer-img"/>
          </div>
          <div className="flex">
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.attenuation_level}</p>
          </div>
          <div className="flex">
            <h4>{randomBeer.tagline}</h4>
            <p><b>{randomBeer.first_brewed}</b></p>
          </div>
          <div>
            <p>{randomBeer.description}</p>
          </div>
          <div>
            <p>{randomBeer.contributed_by}</p>
          </div>
        </div>
      )}
        </div>
    )
}

export default RandomBeersPage;
