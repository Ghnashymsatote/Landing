import * as React from 'react';
import { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar(){
  const [isLogin,setIslogin]=useState(true);
  let up=(event)=>{
      setData((currData)=>{
          return{...currData,[event.target.name]:event.target.value}
      })
      console.log(event.target.value);
  }
    return(
    
      
      
       
      <nav  class="navbar bg-primary border-bottom border-body  navbar-expand-lg  sticky-top bg-body-tertiary"  >
  <div class="container-fluid" >
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{marginLeft:"400px",display:"flex"}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{display:"flex"}}>
        <li class="nav-item" style={{marginRight:"20px"}}>
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
          
        </li>
        <li class="nav-item" style={{marginRight:"20px"}}>
          <a class="nav-link active" href="#">About Us</a>
        </li>
        <li class="nav-item" style={{marginRight:"20px"}}>
          <a class="nav-link active" >Why Choose Us</a>
        </li>
        <li class="nav-item" style={{marginRight:"20px"}}>
          <a class="nav-link active" >Pricing</a>
        </li>
       
        <li class="nav-item" style={{marginRight:"20px"}}>
          <a class="nav-link active" >Support</a>
        </li>
       
      </ul>
      <button class="btn btn-primary">Job Seeker Login</button>
    </div>
  </div>
</nav>
        );
      
      
    
}