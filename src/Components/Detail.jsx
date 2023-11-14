import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../Style/detail.css'
import Songs from "./Songs";
const API = import.meta.env.VITE_API_URL;

function Detail() {

    const [artists, setArtists] = useState([]);

    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        fetch(`${API}/artists/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => setArtists(responseJSON))
            .catch((error) => console.log(error));
    }, [id, API]);

    const handleDelete = () => {
        fetch(`${API}/artists/${id}`, { method: "DELETE" })
            .then(() => {
                navigate(`/artists`);
            })
            .catch((error) => console.error(error));
    };
    return (
        <div className="detail">

            <div className="detailCard">

                <h2>Name: {artists.name}</h2>
                <br />
                <h2>Category: {artists.category}</h2>
                <br />
                <h2>Home Town: {artists.hometown}</h2>
            </div>
            <div className="detailButton">

                <Link to={`/artists/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                <Link to={`/artists`}>
                    <button>↩︎</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>

            </div>
            <Songs />
        </div>
    )
}

export default Detail