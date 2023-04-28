import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";

export default function Navbar() {
   
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand fs-1" href="#">Kitabk</a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-4 justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categories</a>
              </li>
             
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Browse
                </a>
                <ul className="dropdown-menu fs-5">
                  <li><a className="dropdown-item" href="#authors">Authors</a></li>
                  <li><a className="dropdown-item" href="#quotes">Quotes</a></li>
                  <li><a className="dropdown-item" href="#pricing">Pricing</a></li>
                  <li><a className="dropdown-item" href="#contact">Contact</a></li>
                </ul>
              </li>
            </ul>
            <Link to='./login' className="btn my-2 mx-0 fs-4 px-3 join-us" >Join Us</Link>
          </div>
        </div>
      </nav>
  );
}
