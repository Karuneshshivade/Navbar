import Home from "./Component/home";
import Navbar from "./Component/navbar"
import About from './Component/about'
import Contact from './Component/contact'
import Login from "./Component/login";
import Address from "./Component/address"
import Information from "./Component/information"
import Nopage from "./Component/nopage"
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="address" element={<Address></Address>}></Route>
        <Route path="information" element={<Information></Information>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<Nopage></Nopage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
