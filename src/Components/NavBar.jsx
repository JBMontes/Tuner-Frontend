import { Link } from "react-router-dom"

export default function NavBar(){

return (
    <div className="navBar">
    
    <h1>Tuner 🎶</h1>

   <Link to="/songs/new"><button>New Song</button></Link>

    </div>
)

};

