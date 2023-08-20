import './App.css';
import Navbar from "./components/Navbar"
import  About from './pages/About';
import Menu from "./pages/Menu"
import  Contact  from './pages/Contact';
import  Home from './pages/Home';
import {BrowserRouter as Router , Routes, Route, Link} from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}
export default App;





