import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

function Layout() {
    return (
        <div>
            <Navbar />
            {/* Child component will render here */}
            <Outlet />
        </div>
    );
}

export default Layout;
