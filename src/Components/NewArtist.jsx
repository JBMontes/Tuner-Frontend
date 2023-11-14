import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Style/new.css'
const API = import.meta.env.VITE_API_URL;

function NewArtist() {
    const navigate = useNavigate();
    const [artists, setArtists] = useState({
        name: "",
        category: "",
        hometown: "",
    
    });

    // Add a color. Redirect to the index view.
    const addArtist = () => {
        const ArtistData = { name: artists.name, category: artists.category, hometown: artists.hometown }
        fetch(`${API}/artists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ArtistData),
        })
            .then(() => {
                navigate(`/artists`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleTextChange = (event) => {
        setArtists({ ...artists, [event.target.id]: event.target.value });
    };

    // const handleCheckboxChange = () => {
    //     setArtists({ ...artists, isFavorite: !song.isFavorite });
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        addArtist();

    };

    return (
        <div className="new">
            <form onSubmit={handleSubmit} className="newForm">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={artists.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Artist"
                    required
                />

                <label htmlFor="category">Artist:</label>
                <input
                    id="category"
                    value={artists.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Category"
                    required
                />

                <label htmlFor="hometown">Home Town:</label>
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
            <Link to={`/artists`}>
                <button>↩︎</button>
            </Link>
            </form>
        </div>
            
    );
}

export default NewArtist;
