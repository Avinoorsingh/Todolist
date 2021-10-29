import React from 'react'
import { Link } from 'react-router-dom'
import './toggler.css'
export default function Header(props) {
    return (   
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
  <span  style={{ color: 'white' }}>Todo App</span>
    <button className="navbar-toggler bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="toggler-icon top-bar"></span>
      <span className="toggler-icon middle-bar"></span>
      <span className="toggler-icon bottom-bar"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/Todolist"><span  style={{ color: 'white' }}>Welcome</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><span  style={{ color: 'white' }}>Add Todo</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About"><span  style={{ color: 'white' }}>About</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contactus"><span  style={{ color: 'white' }}>Contact</span></Link>
        </li>
      </ul>
    {props.searchBar?   <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:""}
    </div>
  </div>
</nav>
    )
}
