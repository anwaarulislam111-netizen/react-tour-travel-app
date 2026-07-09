import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";

function Navbar() {
  return (
    <header className="header">

      <div className="logo">
        <MdOutlineTravelExplore className="logoIcon" />
        <h2>Tour Travel</h2>
      </div>

      <ul className="navBar">

        <li>
          <a href="#home" className="navBtn">Home</a>
        </li>

        <li>
          <a href="#packages" className="navBtn">Packages</a>
        </li>

        <li>
          <a href="#destinations" className="navBtn">Destinations</a>
        </li>

        <li>
          <a href="#blog" className="navBtn">Blog</a>
        </li>

        <li>
          <a href="#contact" className="navBtn">Contact</a>
        </li>

      </ul>

      <button className="btn">Book Now</button>

    </header>
  );
}

export default Navbar;