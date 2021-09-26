import React from 'react';

const Header = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold ms-3" href="/project-builders">Project Builders</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-3">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link active" aria-current="page" href="/catagory">Catagory</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav- ms-3">
          <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
        </ul>
      
      {/* <form className="d-flex"> */}
        <input className="form-control me-2 ms-5" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      {/* </form> */}
    </div>
  </div>
</nav>
<div className="text-center text-white border border-1 mt-3 ms-3">
    <h3>Make an projects team</h3>
    <p>Make your project creative and right way</p>
    <h3>Total Budget : 1 Million  </h3>
</div>
        </div>
    );
};

export default Header;