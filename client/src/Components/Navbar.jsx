import './Navbar.css'
import { NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate();

    const handleProfileIconClick = (e) => {
        const navBar = e.currentTarget.closest('.navBar');
        const profilePopUp = navBar.querySelector(".profilePopUp");
        profilePopUp.classList.toggle("active");

        const notificationPopUp = navBar.querySelector(".notificationPopUp");
        notificationPopUp.classList.remove("active");

        const searchPopUp = navBar.querySelector(".searchPopUp");
        searchPopUp.classList.remove("active");

        const overlay = document.querySelector('.navOverlay');
        overlay.classList.toggle('active');

        document.addEventListener('click', function handleOutsideClick(event) {
            if (!navBar.contains(event.target)) {
                profilePopUp.classList.remove('active');
                overlay.classList.remove('active');
                document.removeEventListener('click', handleOutsideClick);
            }
        });
    }
    const handleBellIconClick = (e) => {
        const navBar = e.currentTarget.closest('.navBar');
        const notificationPopUp = navBar.querySelector(".notificationPopUp");
        notificationPopUp.classList.toggle("active");

        const profilePopUp = navBar.querySelector(".profilePopUp");
        profilePopUp.classList.remove("active");

        const searchPopUp = navBar.querySelector(".searchPopUp");
        searchPopUp.classList.remove("active");

        const overlay = document.querySelector('.navOverlay');
        overlay.classList.toggle('active');

        document.addEventListener('click', function handleOutsideClick(event) {
            if (!navBar.contains(event.target)) {
                notificationPopUp.classList.remove('active');
                overlay.classList.remove('active');
                document.removeEventListener('click', handleOutsideClick);
            }
        });

    }

    const handleSearchIconClick = (e) => {
        const navBar = e.currentTarget.closest('.navBar');
        const searchPopUp = navBar.querySelector(".searchPopUp");
        searchPopUp.classList.toggle("active");

        const overlay = document.querySelector('.navOverlay');
        overlay.classList.toggle('active');

        const profilePopUp = navBar.querySelector(".profilePopUp");
        profilePopUp.classList.remove("active");

        const notificationPopUp = navBar.querySelector(".notificationPopUp");
        notificationPopUp.classList.remove("active");

        document.addEventListener('click', function handleOutsideClick(event) {
            if (!navBar.contains(event.target)) {
                searchPopUp.classList.remove('active');
                overlay.classList.remove('active');
                document.removeEventListener('click', handleOutsideClick);
            }
        });
    }


    // popProfileCon.addEventListener("mouseenter",()=>{
    //     profilePopUpPopUp.style.display="block";
    // })
    // popProfileCon.addEventListener("mouseleave",()=>{
    //     profilePopUpPopUp.style.display="none";
    // })
    const handleMouseEnter = (e) => {
        const navicon2 = e.currentTarget.closest(".navicon2");
        const profilePopUpPopUp = navicon2.querySelector(".profilePopUpPopUp");
        profilePopUpPopUp.style.display = "block";
    }
    const handleMouseLeave = (e) => {
        const navicon2 = e.currentTarget.closest(".navicon2");
        const profilePopUpPopUp = navicon2.querySelector(".profilePopUpPopUp");
        profilePopUpPopUp.style.display = "none";
    }
    const handlePopUpMouseEnter = (e) => {
        e.currentTarget.style.display = "block";
    }
    const handlePopUpMouseLeave = (e) => {
        e.currentTarget.style.display = "none";
    }

    const handleLogOutClick = async () => {
        try {
            const response =await fetch("http://localhost:5000/api/v1/user/logout", { 
                method:"GET",
                credentials: 'include',
             });

             // Parse response body
             const data = await response.json()
            console.log(data);
            if (data.success) {
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="navOverlay"></div>
            <nav className='navBar'>
                <ul>
                    <div className='navicon1'>
                        <li><NavLink className='nav-link' to='/'><span className="iconamoon--home Icons"></span>
                            <p>home</p>
                        </NavLink></li>
                        <li><NavLink className='nav-link' to='/shop'><span className="la--cart-arrow-down Icons"></span>
                            <p>shop</p>
                        </NavLink></li>
                        <li><NavLink className='nav-link' to='/message'><span className="tabler--message Icons"></span>
                            <p>message</p>
                        </NavLink></li>
                        <li>
                            <div className='nav-link searchIcon' onClick={handleSearchIconClick}>
                                <span className="lets-icons--search-alt-light  Icons" ></span>
                                <p>search</p>
                            </div>
                        </li>

                        <div className='searchPopUp'>
                            <p className='searchHeading'>Search</p>
                            <div className='searchInputCon'>
                                <input className='searchInput' type="text" placeholder='Search' />
                            </div>
                        </div>

                        <li><NavLink className='nav-link' to='/upload'><span className="gridicons--create Icons"></span>
                            <p>create</p>
                        </NavLink></li>
                    </div>

                    <div className='navicon2'>
                        <li className='notification'>
                            <div className='nav-link bellIcon' onClick={handleBellIconClick}>
                                <span className="cuida--notification-bell-outline Icons"></span>
                                <p>notification</p>
                            </div>
                        </li>


                        <div className='notificationPopUp'>
                            <p className='Noti'>Notification</p>
                        </div>

                        <li className='profile'>
                            <div className='nav-link profileIcon' onClick={handleProfileIconClick}>
                                <span className="gg--profile Icons"></span>
                                <p>profile</p>
                            </div>
                        </li>


                        <div className='profilePopUp'>
                            <p style={{ paddingLeft: '20px', paddingTop: "10px", fontSize: "1.1rem" }}>Accounts</p>
                            <div className='popProfileCon' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <p className='popProfile'>D</p>
                                <div style={{ marginLeft: "10px" }}>
                                    <p style={{ fontSize: "1.3rem" }}>Dipak R</p>
                                    <p style={{ fontSize: "0.9rem" }}>1452dipakr@gmail.com</p>
                                </div>
                                <span className="ic--round-greater-than Icons"></span>
                            </div>
                            <div className='popRest'>
                                <div style={{ display: "flex", alignItems: "center" }}><span className="uil--setting Icons"></span>Settings</div>
                                <div style={{ display: "flex", alignItems: "center" }}><span className="material-symbols--help Icons"></span>Help and resources</div>
                                <div style={{ display: "flex", alignItems: "center" }}><span className="cart-arrow Icons"></span>Purchase history</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }} className='logout' onClick={handleLogOutClick}><span className="heroicons-outline--logout Icons"></span>Log out</div>

                        </div>

                        <div className='profilePopUpPopUp' onMouseEnter={handlePopUpMouseEnter} onMouseLeave={handlePopUpMouseLeave}>
                            <p style={{ paddingLeft: '20px', paddingTop: "10px" }}>Switch accounts</p>

                            <div className='popProfileConCon'>
                                <p className='popPopProfile'>D</p>
                                <div style={{ marginLeft: "10px" }}>
                                    <p style={{ fontSize: "1.1rem" }}>Dipak R</p>
                                    <p style={{ fontSize: "0.9rem" }}>1452dipakr@gmail.com</p>
                                </div>
                                <span className="typcn--tick"></span>
                            </div>
                            <div className='popProfileCon'>
                                <p className='popPopProfile'>A</p>
                                <div style={{ marginLeft: "10px" }}>
                                    <p style={{ fontSize: "1.1rem" }}>Aslin shiju</p>
                                    <p style={{ fontSize: "0.9rem" }}>aslinshiju@gmail.com</p>
                                </div>
                                {/* <span className="typcn--tick"></span> */}
                            </div>
                            <div className='profilePopPop'><span className="material-symbols--add"></span>Add another account</div>
                            <div className='profilePopPop'><span className="mdi--account-cog"></span>Manage accounts</div>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
} 