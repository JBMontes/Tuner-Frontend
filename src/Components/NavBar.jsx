import { Link } from "react-router-dom"
import "../Style/navBar.css"

export default function NavBar() {

    return (
        <div className="navBar">
        
            <Link to="/songs" className='h1Link'><h1>Tuner 🎶</h1></Link>

           <br />

            <Link to="/songs/new" ><button className='headerButton'>New Song</button></Link>
            
        </div>
    )

};

