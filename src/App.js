import { NavLink, Routes, Route } from "react-router-dom";

import About from "./routes/About";
import about from './data/about.json'
import Careers from "./routes/Careers";
import experiences from "./data/experiences.json";
import Home from "./routes/Home";
import home from "./data/home.json";
import Navbar from './components/Navbar';

function App({ lang = 'fr' }) {
  return (
    <>
      <Navbar>
        <NavLink to="/">{home.key[lang]}</NavLink>
        <NavLink to="/about">{about.key[lang]}</NavLink>
        <NavLink to="/careers">{experiences.key[lang]}</NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home home={home} />} />
        <Route path="/about" element={<About about={about} />} />
        <Route path="/careers" element={<Careers experiences={experiences} />} />
      </Routes>
    </>
  );
}
export default App;