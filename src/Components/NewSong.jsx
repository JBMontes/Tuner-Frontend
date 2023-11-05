import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Style/new.css'
const API = import.meta.env.VITE_API_URL;

function NewSong() {
    const navigate = useNavigate();
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        yearRelease: "",
        isFavorite: false,
    });

    // Add a color. Redirect to the index view.
    const addSong = () => {
        const SongData = { name: song.name, artist: song.artist, album: song.album, year_release: song.yearRelease, is_favorite: song.isFavorite }
        fetch(`${API}/songs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(SongData),
        })
            .then(() => {
                navigate(`/songs`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, isFavorite: !song.isFavorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong();

    };

    return (
        <div className="new">
            <form onSubmit={handleSubmit} className="newForm">
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

                <label htmlFor="time">Time:</label>
                <input
                    id="yearRelease"
                    value={song.yearRelease}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Date Released"
                    required
                />

                <label htmlFor="isFavorite">Favorite:</label>
                <input
                    id="isFavorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={song.isFavorite ? "⭐️" : ""}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            <Link to={`/songs`}>
                <button>↩︎</button>
            </Link>
            </form>
        </div>
            
    );
}

export default NewSong;
