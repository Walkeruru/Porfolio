import React from "react";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark navbarColor sticky-top" id='nav'>
        <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav w-100 justify-content-around px-lg-0 px-2">
            <li className="nav-item"><a className="nav-link active" href="#inicio">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#porfolio">Porfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#sobremi">Sobre Mi</a></li>
            <li className="nav-item"><a className="nav-link" href="#educacion">Educación</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
    </nav>
)

export default Navbar;