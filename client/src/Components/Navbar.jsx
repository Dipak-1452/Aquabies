import './Navbar.css'
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink className='nav-link' to='/'><span class="iconamoon--home"></span>
                    <p>home</p>
                    </NavLink></li>
                    <li><NavLink className='nav-link' to='/shop'><span class="la--cart-arrow-down"></span>
                    <p>shop</p>
                    </NavLink></li>
                    <li><NavLink className='nav-link' to='/message'><span class="tabler--message"></span>
                    <p>message</p>
                    </NavLink></li>
                    <li><NavLink className='nav-link' to='/search'><span class="lets-icons--search-alt-light"></span>
                    <p>search</p>
                    </NavLink></li>
                    <li><NavLink className='nav-link' to='/create'><span class="gridicons--create"></span>
                    <p>create</p>
                    </NavLink></li>
                    <li className='notification'><NavLink className='nav-link' to='/notification'><span class="cuida--notification-bell-outline"></span>
                    <p>notification</p>
                    </NavLink></li>
                    <li className='profile'><NavLink className='nav-link' to='/profile'><span class="gg--profile"></span>
                    <p>profile</p>
                    </NavLink></li>
                </ul>
            </nav>
        </>
    )
} 