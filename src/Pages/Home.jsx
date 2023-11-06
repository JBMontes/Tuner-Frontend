import '../Style/home.css'
import { Link } from 'react-router-dom'
export default function Home(){
    return(<div className='home'>
    
       <h1 className='welcome'>Welcome To Tuner 🎶</h1> 
    
        <div className='homeButton'>
            <Link to='/songs'> <button className='hButton'>View Playlist</button></Link>
        </div>
    </div>)
}