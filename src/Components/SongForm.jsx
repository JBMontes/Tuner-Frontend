import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import '../Style/edit.css'

const API = import.meta.env.VITE_API_URL;

function SongForm({tunes, toggleForm, handleSubmit}) {
  let { id } = useParams();


  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    year_release: "",
    is_favorite: false,
    artist_id:id
});


  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
};

useEffect(()=> {
if(tunes){
  setSong(tunes)
}
}, [id, tunes]);

const onSubmit = (event)=>{
  event.preventDefault();
  handleSubmit(song);

  if(tunes){
    toggleForm();
  }
  setSong({
    name: "",
    artist: "",
    album: "",
    year_release: "",
    is_favorite: false,
    artist_id: id,
  })
}
  
  return (
    <div className="songEdit">
        <form onSubmit={onSubmit}>
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
        {/* <Link to={`/artists`}>
            <button>↩︎</button>
        </Link> */}
        </form>
        
    </div>
);
}

export default SongForm;