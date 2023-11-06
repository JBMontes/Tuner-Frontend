import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import '../Style/edit.css'

const API = import.meta.env.VITE_API_URL;

function EditSong() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    year_release: "",
    is_favorite: false,
});


// Grabs Previous Value

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => setSong(responseJSON))
    .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  const updateSong = () => {
    const SongData = { name: song.name, artist: song.artist, album: song.album, year_release: song.year_release, is_favorite: song.is_favorite }
    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(SongData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
};

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  
  return (
    <div className="edit">
        <form onSubmit={handleSubmit} className='editForm'>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                value={song.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Song"
                required
            />

            <label htmlFor="artist">Artist:</label>
            <input
                id="artist"
                value={song.artist}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Artist"
                required
            />

            <label htmlFor="album">Album:</label>
            <input
                id="album"
                value={song.album}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Album"
                required
            />

            <label htmlFor="year_release">Release Year:</label>
            <input
                id="year_release"
                value={song.year_release}
                type="text"
                onChange={handleTextChange}
                placeholder="Date Released"
                required
            />

            <label htmlFor="is_favorite">Favorite:</label>
            <input
                id="is_favorite"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={song.is_favorite}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
        <Link to={`/songs/${id}`}>
            <button>↩︎</button>
        </Link>
        </form>
        
    </div>
);
}

export default EditSong;
