import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        // console.log(res);
        setBeer(res.data)
      });
  }, []);

  return (
    <>
      {!beer ? (
        <h2>Loading...</h2>
      ) : (
        <div className="flex-column-center">
          <div className="flex">
            <img src={beer.image_url} alt={beer.name} className="beer-img"/>
          </div>
          <div className="flex">
            <h2>{beer.name}</h2>
            <p>{beer.attenuation_level}</p>
          </div>
          <div className="flex">
            <h4>{beer.tagline}</h4>
            <p><b>{beer.first_brewed}</b></p>
          </div>
          <div>
            <p>{beer.description}</p>
          </div>
          <div>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BeerDetailsPage;
