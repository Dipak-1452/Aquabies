import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import { Home } from "./Pages/Home"
import { Shop } from "./Pages/Shop"
import { LogIn } from "./Pages/Login"
import { SignUp } from "./Pages/Signup"
import { LogOut } from "./Pages/LogOut"
import { Navbar } from "./Components/Navbar"
import { Search } from "./Pages/Search"
import { Upload } from "./Pages/Upload"

const App=()=>{
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/logout" element={<LogOut/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default  App