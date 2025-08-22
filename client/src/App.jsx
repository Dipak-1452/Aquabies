import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { Home } from "./Pages/Home"
import { Shop } from "./Pages/Shop"
import { LogIn } from "./Pages/Login"
import { Register} from "./Pages/Register"
// import { LogOut } from "./Pages/LogOut"
import { Navbar } from "./Components/Navbar"
// import { Search } from "./Pages/Search"
import { Upload } from "./Pages/Upload"
import { Message } from "./Pages/Message"
import Layout from "./Pages/Layout"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/message" element={<Message />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App