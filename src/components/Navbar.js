import React from 'react';
import CompanyLogo from './Assets/logo.png';
import './Navbar.css'


const HomePage = () => {
    return ( <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    {/* <div className='row'> */}
      
   <div className='col-6'>
    
        
  <a class="navbar-brand"  href="#">
    <img src={CompanyLogo} height="70" width={170} class="d-inline-block align-top" alt="Company Logo"/>
    
  </a>
  </div>
  <div className='col-6'>
    
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
      <a href="#" class="nav-link ">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Service</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      <li class="nav-item">
          <button class="btn btn-primary navBtn">Book a free consulation</button>
      </li>
    </ul>
  </div>
  {/* </div>  */}
  </div>
</nav>

    </> );
}
 
export default HomePage;