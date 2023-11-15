import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import '../Style/edit.css'

const API = import.meta.env.VITE_API_URL;

function EditArtist() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [artists, setArtists] = useState({
    name: "",
   category: "",
    hometown: "",
  
});

// Grabs Previous Value

  useEffect(() => {
    fetch(`${API}/artists/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => setArtists(responseJSON))
    .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  const updateArtist = () => {
    const ArtistData = { name: artists.name, category: artists.category, hometown: artists.hometown }
    fetch(`${API}/artists/${id}`, {
      method: "PUT",
      body: JSON.stringify(ArtistData),
      headers: {
        "Content-Type":"application/json",
      },
    })
      .then(() => {
        navigate(`/artists/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setArtists({ ...artists, [event.target.id]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    updateArtist();
  };

  
  return (
    <div className="edit">
        <form onSubmit={handleSubmit} className='editForm'>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                value={artists.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Artist"
                required
            />

            <label htmlFor="category">Category:</label>
            <input
                id="category"
                value={artists.category}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Category"
                required
            />

            <label htmlFor="hometown">HomeTown:</label>
            <input
                id="hometown"
                value={artists.hometown}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Home Town"
                required
            />

            <br />
            <br />
            <button type="submit">Submit</button>
        <Link to={`/artists/${id}`}>
            <button>↩︎</button>
        </Link>
        </form>
        
    </div>
);
}

export default EditArtist;
