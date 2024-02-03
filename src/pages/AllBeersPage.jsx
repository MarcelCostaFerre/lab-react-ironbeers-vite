import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((res) => {
      setBeers(res.data);
    });
  });

  return (
    <>
      <input type="text" onChange={(e)=>{
            setSearchInput(e.target.value)
      }}/>🔍
      {beers.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {beers.map((beer) => {
            return (
              <li key={beer._id}>
                <div className="beer-img">
                  <Link to={`/beers/${beer._id}`}>
                    <img src={beer.image_url} alt={beer.name} />
                  </Link>
                </div>
                <div className="beer-text">
                  <Link to={`/beers/${beer._id}`}>
                    <h2>{beer.name}</h2>
                  </Link>
                  <h4>{beer.tagline}</h4>
                  <p>
                    <b>Created by: </b>
                    {beer.name}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default AllBeersPage;
