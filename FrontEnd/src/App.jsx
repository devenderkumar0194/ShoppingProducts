import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/pages/Home';
import About from './app/pages/About';
import Contact from './app/pages/Contact';
import MyHeader from './app/pages/layout/MyHeader';
import MyFooter from './app/pages/layout/MyFooter';
import Login from './app/pages/user/Login';
import Register from './app/pages/user/Register';

function App() {

  return (
    <>
      <Router>
          <MyHeader/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>} />
          </Routes>

          <MyFooter/>

      </Router>
      {/* <Home/> */}
    </>
  )
}

export default App
