import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(null);
  const [contributed_by, setContributed_by] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);

    // Reiniciar el formulario con todos los campos vacíos
    setName("");
    setTagline("");
    setDescription("");
    setFirst_brewed("");
    setBrewers_tips("");
    setAttenuation_level(null);
    setContributed_by("");
    navigate("/beers");
  };

  return (
    <div>
      <form className="beer-form" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          type="text"
          name="tagline"
        />
        <label htmlFor="description">Description</label>
        <textarea
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
        />
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          value={first_brewed}
          onChange={(e) => setFirst_brewed(e.target.value)}
          type="text"
          name="first_brewed"
        />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          value={brewers_tips}
          onChange={(e) => setBrewers_tips(e.target.value)}
          type="text"
          name="brewers_tips"
        />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          value={attenuation_level}
          onChange={(e) => setAttenuation_level(e.target.value)}
          type="text"
          name="attenuation_level"
        />
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          value={contributed_by}
          onChange={(e) => setContributed_by(e.target.value)}
          type="text"
          name="contributed_by"
        />
        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
