import './Navbar.css'
import { NavLink } from "react-router-dom"

export const Navbar=()=>{
    return(
        <>
         <nav>
            <ul>
                <li><NavLink className='nav-link' to='/'><i className="fa-solid fa-house"></i></NavLink></li>
                <li><NavLink className='nav-link' to='/shop'><i className="fa-solid fa-shop"></i></NavLink></li>
                <li><NavLink className='nav-link' to='/upload'><i className="fa-solid fa-plus"></i></NavLink></li>
                <li><NavLink className='nav-link' to='/search'><i className="fa-solid fa-magnifying-glass"></i></NavLink></li>
                <li><NavLink className='nav-link' to='/login'>login   <i className="fa-solid fa-right-to-bracket"></i></NavLink></li>
                <li><NavLink className='nav-link' to='/signup'>signup <i className="fa-solid fa-arrow-up-from-bracket"></i></NavLink></li>
                <li><NavLink className='nav-link' to='/logout'>logout <i className="fa-solid fa-right-from-bracket"></i></NavLink></li>
            </ul>
         </nav>
        </>
    )
} 